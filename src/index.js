import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Index from "./views/index";
import Home from "./views/home";
import Articles from "./views/articles";
import Live from "./views/live";
import Questions from "./views/questions";
import Earning from "./views/earning";

import Settings from "./views/settings";
import HomeSettings from "./views/settings/home";
import GeneralSettings from "./views/settings/general";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/live" element={<Live />} />
        <Route path="/earning" element={<Earning />} />
        <Route path='/settings' element={<Settings />}>
          <Route path="/settings" element={ <HomeSettings />} />
          <Route path="/settings/general" element={ <GeneralSettings />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);