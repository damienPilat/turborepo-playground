import {createRoot} from "react-dom/client";
import "./style.css";
import {Header} from "@repo/ui";
import StationContainer from "./components/Station/StationContainer";

const App = () => (
    <div>
        <Header title="Playground"/>
        <p>Exploring how to work on monorepos using turborepo for the setup. Creating webapps in React/TS, built with
            Vite, and deployed to Vercel</p>

        <StationContainer />
    </div>
);

createRoot(document.getElementById("app")!).render(<App/>);
