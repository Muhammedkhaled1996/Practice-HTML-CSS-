import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./../components/Layout/Layout";
import Notfound from "../pages/Notfound/Notfound";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AuthGuard from "./../Guards/AuthGuard";
import AuthPosts from "../Guards/AuthPosts";
import MyPosts from "../pages/Profile/Profile";
import ProfilePage from "../pages/ProfilePage/ProfilePage";
import PostDetails from "../pages/PostDetails/PostDetails";
import Notifications from "../pages/Notifications/Notifications";
import FeedPage from "../pages/FeedPage/FeedPage";
import Setting from "./../pages/Setting/Setting";
import ProfileUsersPage from "../pages/ProfileUsersPage/ProfileUsersPage";

export const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <AuthPosts>
            <FeedPage />
          </AuthPosts>
        ),
      },
      {
        path: "profile",
        element: (
          <AuthPosts>
            <ProfilePage />
          </AuthPosts>
        ),
      },
      {
        path: "profile/:_id",
        element: (
          <AuthPosts>
            <ProfileUsersPage />
          </AuthPosts>
        ),
      },
      {
        path: "my-posts",
        element: (
          <AuthPosts>
            <MyPosts />
          </AuthPosts>
        ),
      },
      {
        path: "notifications",
        element: (
          <AuthPosts>
            <Notifications />
          </AuthPosts>
        ),
      },
      {
        path: "details/:id",
        element: (
          <AuthPosts>
            <PostDetails />
          </AuthPosts>
        ),
      },
      {
        path: "setting",
        element: (
          <AuthPosts>
            <Setting />
          </AuthPosts>
        ),
      },
      { path: "*", element: <Notfound /> },
    ],
  },
  {
    path: "login",
    element: (
      <AuthGuard>
        <Login />
      </AuthGuard>
    ),
  },
  {
    path: "register",
    element: (
      <AuthGuard>
        <Register />
      </AuthGuard>
    ),
  },
]);
