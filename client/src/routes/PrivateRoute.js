import React from "react";
import { Route , Redirect } from "react-router-dom";
export default function PrivateRoute ({component:Component, ...rest}) {
    const isAuth=localStorage.getItem("token");
    if (isAuth) {
        return <Route component={Component} {...rest} />;
    }
    return <Redirect to='/login' />;
} 