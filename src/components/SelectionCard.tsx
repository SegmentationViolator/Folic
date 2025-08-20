import { CircleCheckBigIcon, CircleIcon } from "lucide-solid";
import { type Component, Index, Show } from "solid-js";

import "./SelectionCard.css";

type SelectionCardProps = {
    title: string;
    options: string[];
    selected?: number;
    onSelect?: (index: number) => void;
};

const SelectionCard: Component<SelectionCardProps> = (props) => {
    return (
        <div class="selection-card">
            <h2 class="card-title">{props.title}</h2>
            <ul
                class="selection-options"
                onmousedown={(e) => {
                    if (e.detail > 1) e.preventDefault();
                }}
            >
                <Index each={props.options}>
                    {(option, index) => (
                        <li
                            data-index={index}
                            class="selection-option"
                            onclick={() => {
                                if (props.onSelect !== undefined)
                                    props.onSelect(index);
                            }}
                        >
                            <Show
                                when={index === props.selected}
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
