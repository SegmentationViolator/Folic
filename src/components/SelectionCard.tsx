import { CircleCheckBigIcon, CircleIcon } from "lucide-solid";
import { type Component, createSignal, Index, Show } from "solid-js";

import "./SelectionCard.css";

type SelectionCardProps = {
    title: string;
    options: string[];
    selected?: number;
    onSelect?: (index: number) => void;
};

const SelectionCard: Component<SelectionCardProps> = ({
    title,
    options,
    selected,
    onSelect,
}) => {
    const [selectedIndex, select] =
        selected !== undefined
            ? createSignal<number | undefined>(selected)
            : createSignal<number>();

    return (
        <div class="selection-card">
            <h2 class="card-title">{title}</h2>
            <ul class="selection-options">
                <Index each={options}>
                    {(option, index) => (
                        <li
                            data-index={index}
                            class="selection-option"
                            onclick={() => {
                                if (selectedIndex() === index) return;
                                select(index);
                                if (onSelect !== undefined) onSelect(index);
                            }}
                            onmousedown={(e) => {
                                if (e.detail > 1) e.preventDefault();
                            }}
                        >
                            <Show
                                when={index === selectedIndex()}
                                fallback={<CircleIcon />}
                            >
                                <CircleCheckBigIcon />
                            </Show>
                            <span>{option()}</span>
                        </li>
                    )}
                </Index>
            </ul>
        </div>
    );
};

export default SelectionCard;
