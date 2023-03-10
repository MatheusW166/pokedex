import { Route, Routes, Navigate } from "react-router-dom";
import { HomeView } from "./views/home/HomeView";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<HomeView />} />
    </Routes>
  );
}
