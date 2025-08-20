import { Show, type Component } from "solid-js";

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
                selected={
                    appState.store.goal !== undefined ? appState.store.goal : 2
                }
                onSelect={(index) => {
                    const selectedGoal = Goal[Goal[index] as keyof typeof Goal];
                    appState.setGoal(selectedGoal);
                }}
            />
            <br />
            <Show when={"Notification" in window}>
                <SelectionCard
                    title={"Do you want reminders?"}
                    options={["No", "Yes"]}
                    selected={Number(appState.store.remindersEnabled)}
                    onSelect={(index) => {
                        if (index == 0) return appState.enableReminders(false);

                        Notification.requestPermission().then((result) => {
                            if (result == "granted")
                                appState.enableReminders(true);
                        });
                    }}
                />
            </Show>
        </div>
    );
};

export default FreshStart;
