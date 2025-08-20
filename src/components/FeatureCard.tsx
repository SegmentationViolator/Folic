import type { LucideIcon } from "lucide-solid";
import type { Component } from "solid-js";

import "./FeatureCard.css";

type FeatureCardProps = {
    title: string;
    description: string;
    icon: LucideIcon;
    link?: string;
};

const FeatureCard: Component<FeatureCardProps> = (props) => {
    if (props.link !== undefined) {
        return (
            <div
                onclick={() => location.assign(props.link!)}
                style={{ cursor: "pointer" }}
                class="feature-card"
            >
                <div class="icon-container">
                    <props.icon />
                </div>
                <h2 class="card-title">{props.title}</h2>
                <p class="card-description">{props.description}</p>
            </div>
        );
    }

    return (
        <div class="feature-card">
            <div class="icon-container">
                <props.icon />
            </div>
            <h2 class="card-title">{props.title}</h2>
            <p class="card-description">{props.description}</p>
        </div>
    );
};

export default FeatureCard;
