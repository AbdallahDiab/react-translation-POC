import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "../routes";
import AppLayout from "./AppLayout/AppLayout";

function App() {
  return (
    <>
      <Router>
        <AppLayout>
          <AppRoutes />
        </AppLayout>
      </Router>
    </>
  );
}

export default App;
