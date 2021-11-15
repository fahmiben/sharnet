import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import ServicesList from "./ServicesList";
import {
  Navbar,
  Container,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import EntrepriseList from "./EntrepriseList";
import { Link } from "react-router-dom";
import AddProduct from "./AddProduct";
import AddStage from "./AddStage";

const ProfileCl = ({ ping, setping }) => {
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const history = useHistory();
  const dispatch = useDispatch();
  const userType = localStorage.getItem("userType");
  return (
    <div className="profile">
      <div className="containerr">
        <img
          src="https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg"
          alt="LOGO"
        />
        <div className="container__text">
          <h1>{user?.name}</h1>
          <h4>{user?.description}</h4>
          <div className="container__text__timing">
            <p>{user?.email}</p>
          </div>
          <div className="container__text__timing">
            <p>{user?.phone}</p>
          </div>
        </div>
      </div>

      {userType == "entreprise" ? (
        <div className="buttons">
          <AddProduct />
          <AddStage />
        </div>
      ) : null}
    </div>
  );
};

export default ProfileCl;
