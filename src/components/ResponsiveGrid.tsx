import type { ParentComponent } from "solid-js";

import "./ResponsiveGrid.css";

const ResponsiveGrid: ParentComponent = ({ children }) => {
    return <div class="card-grid">{children}</div>;
};

export default ResponsiveGrid;
