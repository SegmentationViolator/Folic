import type { LucideIcon } from "lucide-solid";
import type { Component } from "solid-js";

import "./FeatureCard.css";

type FeatureCardProps = {
    title: string;
    description: string;
    icon: LucideIcon;
    link?: string;
};

const FeatureCard: Component<FeatureCardProps> = ({
    title,
    description,
    icon: Icon,
    link,
}) => {
    if (link !== undefined) {
        return (
            <div
                onclick={() => location.assign(link)}
                style={{ cursor: "pointer" }}
                class="feature-card"
            >
                <div class="icon-container">
                    <Icon />
                </div>
                <h2 class="card-title">{title}</h2>
                <p class="card-description">{description}</p>
            </div>
        );
    }

    return (
        <div class="feature-card">
            <div class="icon-container">
                <Icon />
            </div>
            <h2 class="card-title">{title}</h2>
            <p class="card-description">{description}</p>
        </div>
    );
};

export default FeatureCard;
