import React from "react";
import { createRoot } from "react-dom/client";
import { Marketplace } from "../app/components/Marketplace";
import "../app/globals.css";

globalThis.__SITE_BASE__ = import.meta.env.BASE_URL;

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Marketplace />
  </React.StrictMode>,
);
