import { Route, Routes } from "react-router-dom";

import { Blog } from "./pages/blog";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Blog />} />
    </Routes>
  )
}