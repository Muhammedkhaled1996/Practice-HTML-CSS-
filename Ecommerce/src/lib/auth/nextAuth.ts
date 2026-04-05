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

        if (!res.ok) return null;

        const data = await res.json();

        console.log("LOGIN RESPONSE:", data);

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
  callbacks: {
    jwt: ({ token, user }) => {
      if (user) {
        token.accessToken = (user as any).accessToken;
      }
      return token;
    },
    session: ({ session, token }) => {
      (session as any).accessToken = token.accessToken; // هنا عشان لو عايز ارجع ال token فى ال session
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};
