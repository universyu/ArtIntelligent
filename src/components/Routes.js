import { lazy } from "react"
import Hero from "../components/Hero.jsx";
import NotFound from "../pages/NotFound.jsx";

const Login = lazy( () => import("../pages/Login.jsx") )
const About = lazy( () => import("../pages/About.jsx") )
const Create = lazy( () => import("../pages/Create.jsx") )

export const appRoutes = [
    {
        path: "/",
        component: Hero,
        requireLogined: false
    },
    {
        path: "/create",
        component: Create,
        requireLogined: true
    },
    {
        path: "/about",
        component: About,
        requireLogined: false
    },
    {
        path: "/login",
        component: Login,
        requireLogined: false
    },
    {
        path:"*",
        component: NotFound,
        requireLogined: false
    }
]
