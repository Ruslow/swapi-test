import { MainPage, PersonPage } from "@pages";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainPage,
  },
  {
    path: "/people/:id",
    Component: PersonPage,
  },
]);

export { router };
