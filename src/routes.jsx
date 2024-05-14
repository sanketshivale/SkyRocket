import Home from "./pages/Home";
import Capsules from "./pages/Capsules/Capsules";
import Cores from "./pages/Cores/Cores";
import Dragons from "./pages/Dragons/Dragons";
import Ships from "./pages/Ships/Ships";
import Rockets from "./pages/Rockets/Rockets";
import Roadster from "./pages/Roadster/Roadster";
import Launchpads from "./pages/Launchpads/Launchpads";
import Histories from "./pages/Histories/Histories";
import Landpads from "./pages/Landpads/Landpads";
import Launches from "./pages/Launches/Launches";

const routes = [
    { path: "/home", component: <Home /> },
    { path: "capsules", component: <Capsules /> },
    { path: "capsules/:capsule_serial", component: <Capsules /> },
    { path: "dragons", component: <Dragons /> },
    { path: "dragons/:id", component: <Home /> },
    { path: "cores", component: <Cores /> },
    { path: "cores/:core_serial", component: <Home /> },
    { path: "ships", component: <Ships /> },
    { path: "ships/:ship_id", component: <Home /> },
    { path: "rockets", component: <Rockets /> },
    { path: "rockets/:rocket_id", component: <Home /> },
    { path: "roadster", component: <Roadster /> },
    { path: "launchpads", component: <Launchpads /> },
    { path: "launchpads/:site_id", component: <Home /> },
    { path: "launches", component: <Launches /> },
    { path: "launches/:flight_number", component: <Home /> },
    { path: "landpads", component: <Landpads /> },
    { path: "landpads/:site_id", component: <Home /> },
    { path: "histories", component: <Histories /> },
    { path: "histories/:id", component: <Home /> },
];

export default routes;
