import Home from "./pages/Home";
import Capsules from "./pages/Capsules/Capsules";
import SingleCapsule from "./pages/Capsules/SingleCapsule";
import Cores from "./pages/Cores/Cores";
import SingleCore from "./pages/Cores/SingleCore";
import Dragons from "./pages/Dragons/Dragons";
import SingleDragon from "./pages/Dragons/SingleDragon";
import Ships from "./pages/Ships/Ships";
import SingleShip from "./pages/Ships/SingleShip";
import Rockets from "./pages/Rockets/Rockets";
import SingleRocket from "./pages/Rockets/SingleRocket";
import Roadster from "./pages/Roadster/Roadster";
import Launchpads from "./pages/Launchpads/Launchpads";
import SingleLaunchpad from "./pages/Launchpads/SingleLaunchpad";
import Histories from "./pages/Histories/Histories";
import SingleHistory from "./pages/Histories/SingleHistory";
import Landpads from "./pages/Landpads/Landpads";
import SingleLandpad from "./pages/Landpads/SingleLandpad";
import Launches from "./pages/Launches/Launches";
import SingleLaunch from "./pages/Launches/SingleLaunch";


const routes = [
    { path: "/home", component: <Home /> },
    { path: "capsules", component: <Capsules /> },
    { path: "capsules/:capsule_serial", component: <SingleCapsule/> },
    { path: "dragons", component: <Dragons /> },
    { path: "dragons/:id", component: <SingleDragon /> },
    { path: "cores", component: <Cores /> },
    { path: "cores/:core_serial", component: <SingleCore/> },
    { path: "ships", component: <Ships /> },
    { path: "ships/:ship_id", component: <SingleShip /> },
    { path: "rockets", component: <Rockets /> },
    { path: "rockets/:rocket_id", component: <SingleRocket /> },
    { path: "roadster", component: <Roadster /> },
    { path: "launchpads", component: <Launchpads /> },
    { path: "launchpads/:site_id", component: <SingleLaunchpad /> },
    { path: "launches", component: <Launches /> },
    { path: "launches/:flight_number", component: <SingleLaunch /> },
    { path: "landpads", component: <Landpads /> },
    { path: "landpads/:site_id", component: <SingleLandpad /> },
    { path: "histories", component: <Histories /> },
    { path: "histories/:id", component: <SingleHistory /> },
];

export default routes;
