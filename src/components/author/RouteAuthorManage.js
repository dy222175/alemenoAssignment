
import React from "react";
import { Route } from "react-router-dom";
import ManageAuthorPage from "./ManageAuthorPage"; 

const RouteAuthorManage = () => (
    <div>
        <Route path="/author/:id" component={ManageAuthorPage} />
        <Route exact path="/author" component={ManageAuthorPage} />
    </div>
);

export default RouteAuthorManage;
