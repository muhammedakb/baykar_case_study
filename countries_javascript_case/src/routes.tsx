import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const NotFound = lazy(() => import("./components/NotFound"));
const Countries = lazy(() => import("./pages/countries"));
const CountryDetail = lazy(() => import("./pages/country-detail"));
const CountriesDataTable = lazy(() => import("./pages/data-table-countries"));

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Navbar />,
    children: [
      { index: true, element: <Countries /> },
      { path: "detail/:country", element: <CountryDetail /> },
      { path: "with-datatable", element: <CountriesDataTable /> },
      { path: "not-found", element: <NotFound /> },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/not-found" />,
  },
];
