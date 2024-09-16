import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "./routes/App.jsx";
import "./index.css";
import Resume from "./Container/Resume/Index";
import Portfolio from "./Container/Portfolio/Index.jsx";
import About from "./Container/About/Index.jsx";
import Contact from "./Container/Contact/Index.jsx";
import Home from "./Container/Home/Home.jsx";
import Skills from "./Container/Skills/Index.jsx";
import Github, { githubInfoLoader } from "./Container/Github/Github.jsx";
import FacebookPageInfo, {
  FacebookPageloader,
} from "./Container/FacebookPageInfo/FacebookPageInfo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="portfolio" element={<Portfolio />} />
      <Route path="resume" element={<Resume />} />
      <Route path="skills" element={<Skills />} />
      <Route path="about" element={<About />} />
      <Route loader={githubInfoLoader} path="github" element={<Github />} />
      <Route
        loader={FacebookPageloader}
        path="github"
        element={<FacebookPageInfo />}
      />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       { path: "", element: <Home /> },
//       { path: "portfolio", element: <Portfolio /> },
//       { path: "resume", element: <Resume /> },
//       { path: "skills", element: <Skills /> },
//       { path: "about", element: <About /> },
//       { path: "github", element: <Github /> },
//       { path: "contact", element: <Contact /> },
//     ],
//   },

//   {},
// ]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
