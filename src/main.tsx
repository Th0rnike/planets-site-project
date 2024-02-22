import React from "react";
import ReactDOM from "react-dom/client";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Planet from "./pages/Planet";
import planetData from "./data/data.json";
import LinkLayout from "./pages/LinkLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<LinkLayout />}>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/:planetName"
        element={<Planet planetData={planetData} />}
      ></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
