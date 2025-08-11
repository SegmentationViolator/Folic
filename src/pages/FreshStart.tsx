import type { Component } from "solid-js";

import AlertCard from "../components/AlertCard";
import SelectionCard from "../components/SelectionCard";

import { Goal, useAppState } from "../contexts/AppState";

import styles from "./FreshStart.module.css";

const FreshStart: Component = () => {
    const appState = useAppState();

    return (
        <div class={styles.content}>
            <AlertCard
                title="Let's Get Started"
                description="Looks like it's your first time using Folic"
            />
            <h1>Personalise Your Experience</h1>
            <SelectionCard
                title={"What is your goal?"}
                options={[
                    "Maximize Attendance",
                    "Maximize Leisure",
                    "Not Sure",
                ]}
                selected={appState.store.goal}
                onSelect={(index) => {
                    const selectedGoal = Goal[Goal[index] as keyof typeof Goal];
                    appState.setGoal(selectedGoal);
                }}
            />
        </div>
    );
};

export default FreshStart;
