import "./GoalSection.css"
import {PropsWithChildren} from "react";

export function GoalSection({title, children}: PropsWithChildren<{ title: string; }>) {
    return (
        <section>
            <details>
                <summary>{title}</summary>
                {children}
            </details>
        </section>
    )
}
