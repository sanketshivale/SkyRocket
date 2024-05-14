import Home from "./pages/Home";
import Capsules from "./pages/capsule/Capsules";

const routes = [
    { path: "/home", component: <Home /> },
    { path: "capsules", component: <Capsules /> },
    { path: "capsules/:capsule_serial", component: <Capsules /> },
    { path: "dragons", component: <Home /> },
    { path: "dragons/:id", component: <Home /> },
    { path: "cores", component: <Home /> },
    { path: "cores/:core_serial", component: <Home /> },
    { path: "ships", component: <Home /> },
    { path: "ships/:ship_id", component: <Home /> },
    { path: "rockets", component: <Home /> },
    { path: "rockets/:rocket_id", component: <Home /> },
    { path: "roadster", component: <Home /> },
    { path: "launchpads", component: <Home /> },
    { path: "launchpads/:site_id", component: <Home /> },
    { path: "launches", component: <Home /> },
    { path: "launches/:flight_number", component: <Home /> },
    { path: "landpads", component: <Home /> },
    { path: "landpads/:site_id", component: <Home /> },
    { path: "histories", component: <Home /> },
    { path: "histories/:id", component: <Home /> },
];

export default routes;
