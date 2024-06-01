import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./container/MainPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </BrowserRouter>
      <div className=""></div>
    </>
  );
}

export default App;
