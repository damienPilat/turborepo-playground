import "leaflet/dist/leaflet.css";

import {createRoot} from "react-dom/client";
import "./style.css";
import {Credits, Header, PlanSection} from "@repo/ui";
import StationContainer from "./components/Station/StationContainer";

const creditsData: Credits[] = [
    {
        name: "CityBikes API",
        link: "https://api.citybik.es/v2/",
        text: "For live data on santander cycles stations around London"
    },
    {
        name: "Lucide",
        link: "https://lucide.dev/",
        text: "For components"
    }
]

const App = () => (
    <div>
        <Header title="Santander Bikes" className="title"/>
        <p>See details about your favourite bike stations!</p>

        <StationContainer />

        <PlanSection title="PLAN Section">
            <h4><strong>P</strong>roject Goals</h4>
            <p>Exploring how to work on monorepos using turborepo for the setup. Creating webapps in React/TS, built
                with
                Vite, and deployed to Vercel</p>

            <h4><strong>L</strong>earnings</h4>
            <ul>
                <li>Working in a monorepo: challenges with having different package versions causing dependency issues
                </li>
                <ul>
                    <li>Example: Leaflet required a specific react version, but was throwing error related to there
                        being more than one react version.
                    </li>
                    <li>Fix: delete all node_module and _lock files, reinstall all packages again</li>
                </ul>
            </ul>

            <h4><strong>A</strong>ctions</h4>
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
                <li>Have map showing stations</li>
            </ul>


            <h4><strong>N</strong>otes</h4>
            <h5>Technologies Used</h5>
            <ul>
                <li><a href="https://turborepo.com/" target="_blank">Turborepo</a></li>
                <li><a href="https://react.dev/" target="_blank">React</a> + <a href="https://www.typescriptlang.org/"
                                                                                target="_blank">TypeScript</a></li>
                <li><a href="https://vercel.com/" target="_blank">Vercel</a></li>
                <li><a href="https://vite.dev/guide/" target="_blank">Vite</a></li>
                <li><a href="https://lucide.dev/" target="_blank">Lucide</a></li>
                <li><a href="https://leafletjs.com/index.html" target="_blank">Leaflet</a></li>
            </ul>
        </PlanSection>

        <Credits creditsData={creditsData}/>

    </div>
);

createRoot(document.getElementById("app")!).render(<App/>);
