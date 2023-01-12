import { Route, Routes, Navigate } from "react-router-dom";
import { HomeView } from "./views/home/HomeView";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/pokedex" element={<Navigate to="/home" />} />
      <Route path="/pokedex/home" element={<HomeView />} />
    </Routes>
  );
}
