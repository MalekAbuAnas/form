import "./App.css";
import { Hero, Dailyform, Monthlyform } from "./components";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Hero />} />
      <Route path={"/dailysales"} element={<Dailyform />} />
      <Route path={"/monthlysales"} element={<Monthlyform />} />
    </Routes>
  );
};
export default App;
