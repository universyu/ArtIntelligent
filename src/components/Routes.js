import { lazy } from "react"
import Home from "../pages/Home.jsx";
import NotFound from "../pages/NotFound.jsx";

const Login = lazy( () => import("../pages/Login.jsx") )
const About = lazy( () => import("../pages/About.jsx") )
const Create = lazy( () => import("../pages/Create.jsx") )
const xing = lazy( () => import("../pages/xing.jsx") )

export const appRoutes = [
    {
        path: "/",
        component: Home,
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
    },
    {
        path: "/images/xing",
        component: xing,
        requireLogined: false
    }
]
