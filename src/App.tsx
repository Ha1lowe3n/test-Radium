import React, { useEffect, useState } from "react";
import "./App.css";

/*
  сделал события скрытия и удаления на window, т.к. в задании не было сказано,
  что нужно события сделать именно при нажатии на текст
*/

export default function App() {
    const [opacityText, setOpacityText] = useState<boolean>(true);
    const [displayText, setDisplayText] = useState<boolean>(true);

    const offOpacityText = () => setOpacityText(false);
    const deleteText = (e: globalThis.KeyboardEvent) => {
        if (e.key === " ") {
            setDisplayText(false);
        }
    };

    useEffect(() => {
        window.addEventListener("click", offOpacityText);
        window.addEventListener("keydown", deleteText);

        return () => {
            window.removeEventListener("click", offOpacityText);
            window.removeEventListener("keydown", deleteText);
        };
    }, []);

    return (
        <main>
            <div
                id="text"
                className={`${!opacityText ? "opacity-0" : ""}${
                    !displayText ? " display-none" : ""
                }`}
            >
                <h2>Trifonov Igor</h2>
                <span>
                    Начинающий web-программист / Junior Frontend Developer
                </span>
            </div>
        </main>
    );
}
