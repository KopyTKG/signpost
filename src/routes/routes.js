import React,{Suspense} from "react";
import { NotificationContainer } from "react-notifications";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Fallback from "../components/fallback";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const Layout = React.lazy(() => import("../layouts/main.layout"))
    return(
        <> 
        <BrowserRouter>
            <NotificationContainer />
            <Routes>
                <Route path="/" element={
                    <Suspense fallback={<Fallback />}>
                        <Layout/>
                    </Suspense>
                }>
                </Route>
            </Routes>
        </BrowserRouter>
        </>
    );
}
