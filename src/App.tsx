import type { ParentComponent } from "solid-js";

import NavigationBar from "./components/NavigationBar";

import { AppStateProvider } from "./contexts/AppState";

const App: ParentComponent = (props) => {
    return (
        <AppStateProvider>
            <NavigationBar />
            {props.children}
        </AppStateProvider>
    );
};

export default App;
