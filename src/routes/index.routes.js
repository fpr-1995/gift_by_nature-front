import { Routes, Route } from "react-router-dom";
import Home from "../components/UI/Main/Home";
import Shop from "../components/UI/Main/Shop";
import Detail from "../components/UI/Main/Detail";
import Entry from "../components/UI/Main/Entry/index.entry";
import Signin from "../components/UI/Main/Entry/Signin";
import Signup from "../components/UI/Main/Entry/Signup";
import Dashboard from "../components/UI/Main/Entry/Dashboard";
import Signout from "../components/UI/Main/Entry/Signout";
import HOC from "../Helpers/HOC";

import NotFound from "../components/UI/Main/NotFound";

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<HOC child={Home} />} />
            <Route path="shop" element={<HOC child={Shop} />}>
                <Route path=":id" element={<HOC child={Detail} />} />
            </Route>
			<Route path="entry" element={<Entry />}>
                <Route path="signup" element={<Signup />} />
                <Route path="signin" element={<Signin />} />
                <Route path="dashboard" element={<HOC child={Dashboard} isAuthRequired={true}/>} />
                <Route path="signout" element={<HOC child={Signout} isAuthRequired={true}/>} />
            </Route>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    );
}

export default Router;