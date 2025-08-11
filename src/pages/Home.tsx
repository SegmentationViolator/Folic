import { useNavigate } from "@solidjs/router";
import type { Component } from "solid-js";

import { useAppState } from "../contexts/AppState";

const Home: Component = () => {
    const appState = useAppState();
    const navigate = useNavigate();

    if (appState.store.isFreshStart) {
        navigate("/fresh-start");
        return <></>;
    }

    return <></>;
};

export default Home;
