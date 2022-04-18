import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

import Index from "./views/index";
import Home from "./views/home";
import Articles from "./views/articles";
import Live from "./views/live";
import Questions from "./views/questions";
import Settings from "./views/settings";

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/live" element={<Live />} />
        <Route path='/settings' element={<Settings />}>

        </Route>
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);