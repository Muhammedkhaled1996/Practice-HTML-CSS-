import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const NextAuthConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "FreshCart",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "Please enter your email",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Please enter your password",
        },
      },
      authorize: async (credentials) => {
        const res = await fetch(
          "https://ecommerce.routemisr.com/api/v1/auth/signin",
          {
            method: "POST",
            body: JSON.stringify(credentials),
            headers: {
              "Content-Type": "application/json",
            },
          },
        );

        if (!res.ok) {
          console.error("Auth API failed", await res.text());
          return null;
        }

        const data = await res.json();

        if (data.message === "success" && data.user) {
          return {
            id: data.user.email,
            email: data.user.email,
            name: data.user.name,
            accessToken: data.token,
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  // Required for Vercel & custom domains — allows NextAuth to accept requests
  // from any host without needing a hardcoded NEXTAUTH_URL
  // Set NEXTAUTH_URL in Vercel env vars to your production domain for best results
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },
    session: ({ session, token }) => {
      (session as any).accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },



  
  // Allows NextAuth to work on Vercel without explicitly setting NEXTAUTH_URL
  useSecureCookies: process.env.NODE_ENV === "production",
  cookies: {
    sessionToken: {
      name:
        process.env.NODE_ENV === "production"
          ? "__Secure-next-auth.session-token"
          : "next-auth.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: process.env.NODE_ENV === "production",
      },
    },
  },
};

