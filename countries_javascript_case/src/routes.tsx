import { lazy } from "react";

import { createBrowserRouter, Navigate } from "react-router-dom";

const NotFound = lazy(() => import("./pages/not-found"));
const Countries = lazy(() => import("./pages/countries"));
const CountryDetail = lazy(() => import("./pages/country-detail"));
const CountriesDataTable = lazy(() => import("./pages/data-table-countries"));

export const router = createBrowserRouter([
  {
    path: "/",
    index: true,
    element: <Navigate to="/countries" />,
  },
  {
    path: "*",
    element: <Navigate to="/not-found" />,
  },
  {
    path: "not-found",
    element: <NotFound />,
  },
  {
    path: "countries",
    element: <Countries />,
    children: [
      { path: ":country", element: <CountryDetail /> },
      { path: "with-datatable", element: <CountriesDataTable /> },
    ],
  },
]);
