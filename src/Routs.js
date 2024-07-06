import { createBrowserRouter } from "react-router-dom"
import Home from "./HELP2/Home"
import Main from "./HELP2/Main"
import Space from "./HELP2/Space";
const r = createBrowserRouter([

    {
        path:"/",
        element:<Home/>
    }, 
    {
        path:"/register",
        element: <Main/>
    },
    {
        path:"/space",
        element: <Space/>
    },

])
export default r;