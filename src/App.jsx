import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/App.css"
import UserRoutes from "./routes/UserRoutes";
import AdminRoutes from "./routes/AdminRoutes";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* User & Admin Routes */}
          <Route path="/*" element={<UserRoutes />} />
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
