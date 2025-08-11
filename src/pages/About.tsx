import { ArchiveIcon, BellDotIcon, CodeIcon } from "lucide-solid";
import type { Component } from "solid-js";

import FeatureCard from "../components/FeatureCard";
import ResponsiveGrid from "../components/ResponsiveGrid";

import styles from "./About.module.css";

const About: Component = () => {
    return (
        <>
            <div class={`${styles.header} playwrite-hu`}>
                <p>
                    A tool that helps you track, plan, and maintain your
                    academic attendance, so you can spend your time frolicking
                    around.
                </p>
            </div>
            <svg
                role="presentation"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1440 92"
            >
                <path
                    fill="#0492C2"
                    fill-opacity="1"
                    d="M0,64L1440,0L1440,0L0,0Z"
                ></path>
            </svg>
            <div class={styles.content}>
                <ResponsiveGrid>
                    <FeatureCard
                        title="Local Storage"
                        description="All the data is stored on your device"
                        icon={ArchiveIcon}
                    />
                    <FeatureCard
                        title="Notifications"
                        description="Get reminders to attend lectures"
                        icon={BellDotIcon}
                    />
                    <FeatureCard
                        title="Open Source"
                        description="The source code is available on Github"
                        icon={CodeIcon}
                        link="https://github.com/SegmentationViolator/Folic"
                    />
                </ResponsiveGrid>
            </div>
        </>
    );
};

export default About;
