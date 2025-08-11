import { A, useNavigate } from "@solidjs/router";
import type { Component } from "solid-js";

import "./NavigationBar.css";

const NavigationBar: Component = () => {
    const navigate = useNavigate();

    return (
        <nav class="nav" onclick={() => navigate("/")}>
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
