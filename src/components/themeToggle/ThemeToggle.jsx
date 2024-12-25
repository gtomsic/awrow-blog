"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
    const { toggle, theme } = useContext(ThemeContext);
    console.log(theme);
    return (
        <div
            className={styles.container}
            style={
                theme === "light"
                    ? { background: "#0f172a" }
                    : { background: "white" }
            }
            onClick={toggle}
        >
            <Image src="/moon.png" alt="moon" width={14} height={14} />
            <div
                className={styles.ball}
                style={
                    theme === "dark"
                        ? { left: 1, background: "#0f172a" }
                        : { right: 1, background: "white" }
                }
            ></div>
            <Image src="/sun.png" alt="sun" width={14} height={14} />
        </div>
    );
};
export default ThemeToggle;