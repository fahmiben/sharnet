import "./App.css";
import Login from "./screens/Login";
import { Switch, Route } from "react-router-dom";
import Register from "./screens/Register";
import Home from "./screens/Home";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allUsers, currentUser } from "./Js/userSlice/userSlice";
import ProfileEnt from "./screens/ProfileEnt";
import ProfileCl from "./screens/ProfileCl";
import Header from "./screens/Header";
import Carousels from "./screens/Carousels";
import AddProduct from "./screens/AddProduct";
import AddStage from "./screens/AddStage";
import { allServices } from "./Js/serviceSlice/serviceSlice";
import Footer from "./screens/Footer";
import EntrepriseList from "./screens/EntrepriseList";
import Apropos from "./screens/Apropos";
import ServicesList from "./screens/ServicesList";
import ServEntList from "./screens/ServEntList";
import StageList from "./screens/StageList";
import ProductList from "./screens/ProductList";

function App() {
  const dispatch = useDispatch();
  const isAuth = localStorage.getItem("token");
  const [ping, setping] = useState(false);

  useEffect(() => {
    dispatch(allServices());
    dispatch(allUsers());

    if (isAuth) {
      dispatch(currentUser());
    }
  }, [ping]);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Apropos" component={Apropos} />

        <Route path="/profile">
          <ProfileCl ping={ping} setping={setping} />
        </Route>

        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/Carousels" component={Carousels} />
        <Route path="/EntrepriseList" component={EntrepriseList} />
        <Route path="/ServicesList" component={ServicesList} />
        <Route path="/StageList">
          <StageList ping={ping} setping={setping} />
        </Route>
        <Route path="/ProductsList">
          <ProductList ping={ping} setping={setping} />
        </Route>
        <Route path="/SerEntList/:id">
          <ServEntList ping={ping} setping={setping} />
        </Route>
        <Route path="/AddStage">
          <AddStage ping={ping} setping={setping} />
        </Route>
        <Route path="/AddProduct">
          <AddProduct ping={ping} setping={setping} />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
