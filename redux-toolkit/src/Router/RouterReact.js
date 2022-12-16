import { createBrowserRouter } from "react-router-dom";
import Header from "../components/Header/Header";
import Home from "../components/Home/Home";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import PageNotFound from "../components/PageNotFound/PageNotFound";

const ReactRouter = createBrowserRouter([
    {
        path: "/",
        element: <Header />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/movie/:imdbID",
                element: <MovieDetail/>
            }
        ],
        errorElement: <PageNotFound/>
    },
    
]);

export default ReactRouter;