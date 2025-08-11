/* @refresh reload */

import { Route, Router } from "@solidjs/router";
import { render } from "solid-js/web";

import App from "./App";

import About from "./pages/About";
import FreshStart from "./pages/FreshStart";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import "./index.css";

const root = document.getElementById("root");

if (root != null) {
    render(
        () => (
            <Router root={App}>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/fresh-start" component={FreshStart} />
                <Route path="*" component={NotFound} />
            </Router>
        ),
        root,
    );
}
