import React,{Suspense} from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "../components/backup/loading.site";


function Router() {
    const Home = React.lazy(() => import("../pages/home"))
    return(
        <> 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                   <Suspense fallback={<Fallback />}>
                       <Home/>
                   </Suspense>
                }/>
            </Routes>
        </BrowserRouter>
        </>
    );
}

export default Router;