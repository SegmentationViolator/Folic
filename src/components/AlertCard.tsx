import { CircleAlertIcon } from "lucide-solid";
import type { Component } from "solid-js";

import "./AlertCard.css";

type AlertProps = {
    title: string;
    description: string;
};

const AlertCard: Component<AlertProps> = (props) => {
    return (
        <div class="alert-card">
            <div class="icon-container">
                <CircleAlertIcon />
            </div>
            <div>
                <h2 class="card-title">{props.title}</h2>
                <p class="card-description">{props.description}</p>
            </div>
        </div>
    );
};

export default AlertCard;
