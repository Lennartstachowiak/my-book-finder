import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./Screens/HomeScreen";
import CreateBookScreen from "./Screens/CreateBookScreen";

function Main() {
  return (
    <div className="px-10">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create-book" element={<CreateBookScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Main;
