import { makePersisted } from "@solid-primitives/storage";
import { createContext, type ParentComponent, useContext } from "solid-js";
import { createStore } from "solid-js/store";

type AppStateContext = {
    store: AppStateStore;
    markAsStarted: () => void;
    setGoal: (goal: Goal) => void;
};

type AppStateStore = {
    isFreshStart: boolean;
    goal?: Goal;
};

export enum Goal {
    MaxAttendance,
    MaxLeisure,
}

export const AppState = createContext<AppStateContext>();

export const AppStateProvider: ParentComponent = (props) => {
    const [store, setValue] = makePersisted(
        createStore<AppStateStore>({
            isFreshStart: true,
            goal: undefined,
        }),
        { name: "appState" },
    );

    const appState: AppStateContext = {
        store,
        markAsStarted() {
            setValue("isFreshStart", false);
        },
        setGoal(goal) {
            setValue("goal", goal);
        },
    };

    return (
        <AppState.Provider value={appState}>{props.children}</AppState.Provider>
    );
};

export function useAppState() {
    const context = useContext(AppState);

    if (!context) {
        throw new Error("useAppState: cannot find an AppState");
    }

    return context;
}
