import { createBrowserRouter } from "react-router";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import InvestmentsPage from "./pages/InvestmentsPage";
import ContactPage from "./pages/ContactPage";
import ComingSoonPage from "./pages/ComingSoonPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/investments",
    Component: InvestmentsPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
  {
    path: "/coming-soon",
    Component: ComingSoonPage,
  },
]);