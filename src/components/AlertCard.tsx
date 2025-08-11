import { CircleAlertIcon } from "lucide-solid";
import type { Component } from "solid-js";

import "./AlertCard.css";

type AlertProps = {
    title: string;
    description: string;
};

const AlertCard: Component<AlertProps> = ({ title, description }) => {
    return (
        <div class="alert-card">
            <div class="icon-container">
                <CircleAlertIcon />
            </div>
            <div>
                <h2 class="card-title">{title}</h2>
                <p class="card-description">{description}</p>
            </div>
        </div>
    );
};

export default AlertCard;
