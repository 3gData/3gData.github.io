import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

import HomePage from "./pages/index";
import NotFoundPage from "./pages/_404";

const GamesPage = lazy(() => import("./pages/games"));
const SkillsPage = lazy(() => import("./pages/skills"));
const AboutPage = lazy(() => import("./pages/about"));
const ContactPage = lazy(() => import("./pages/contact"));
const VideosPage = lazy(() => import("./pages/videos"));

export const routes: RouteObject[] = [
  { path: "/", element: <HomePage /> },
  { path: "/games", element: <GamesPage /> },
  { path: "/skills", element: <SkillsPage /> },
  { path: "/about", element: <AboutPage /> },
  { path: "/contact", element: <ContactPage /> },
  { path: "/videos", element: <VideosPage /> },
  { path: "*", element: <NotFoundPage /> },
];

export type Path = "/" | "/games" | "/skills" | "/about" | "/contact" | "/videos";
export type Params = Record<string, string | undefined>;
