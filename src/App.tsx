import { createBrowserRouter, RouterProvider } from "react-router";
import { MainPage } from "./pages/Main/MainPage";
import { PersonPage } from "./pages/Person/PersonPage";

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

function App() {
  return (
    <div style={{ padding: "16px 30px" }}>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
