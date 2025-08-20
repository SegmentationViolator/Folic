import { A, useMatch, useNavigate } from "@solidjs/router";
import type { Component } from "solid-js";

import "./NavigationBar.css";
import { useAppState } from "../contexts/AppState";

const NavigationBar: Component = () => {
    const appState = useAppState();
    const isHome = useMatch(() => "/");
    const isFreshStart = useMatch(() => "/fresh-start");
    const navigate = useNavigate();

    const shouldRedirectHome = () => !(Boolean(isHome()) || (Boolean(isFreshStart()) && appState.store.isFreshStart));

    return (
        <nav
            class="nav"
            onclick={() => {
                if (shouldRedirectHome()) navigate("/");
            }}
        >
            <h1 class="nav-head playwrite-hu">Folic</h1>
            <div class="nav-items">
                <A class="nav-item" activeClass="active" href="/about">
                    About
                </A>
            </div>
        </nav>
    );
};

export default NavigationBar;
