import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AppWrapper } from "./App.styles";

function App() {
  return (
    <AppWrapper>
      <RouterProvider router={router} />
    </AppWrapper>
  );
}

export default App;
