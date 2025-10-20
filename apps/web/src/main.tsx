import {createRoot} from "react-dom/client";
import "./style.css";
import {GoalSection, Header} from "@repo/ui";
import StationContainer from "./components/Station/StationContainer";

const App = () => (
    <div>
        <Header title="Santander Bikes" className="title"/>
        <p>See details about your favourite bike stations!</p>

        <StationContainer />

        <GoalSection title="Goal Section">
            <p>Exploring how to work on monorepos using turborepo for the setup. Creating webapps in React/TS, built
                with
                Vite, and deployed to Vercel</p>

            <h4>Objectives</h4>
            <ul>
                <li>Setup monorepo w/ turborepo</li>
                <li>Deploy website via Vercel</li>
                <li>Fetch API to get data</li>
                <ul>
                    <li>Loading state: Skeleton in UI</li>
                    <li>Error handling</li>
                    <li>Polling to re-fetch every 30s</li>
                    <li>Button for manual re-fetch</li>
                </ul>
                <li>Custom Pagination hook</li>
                <li>custom debounce for variables</li>
                <li>Filters</li>
            </ul>

            <h4>Technologies</h4>
            <ul>
                <li>Turborepo</li>
                <li>React + TS</li>
                <li>Vercel</li>
                <li>Vite</li>
                <li>Lucide</li>
            </ul>
        </GoalSection>

    </div>
);

createRoot(document.getElementById("app")!).render(<App/>);
