import "./PlanSection.css"
import {PropsWithChildren} from "react";

export function PlanSection({title, children}: PropsWithChildren<{ title: string; }>) {
    return (
        <section>
            <details>
                <summary>{title}</summary>
                <div className="children">
                    {children}
                </div>
            </details>
        </section>
    )
}
