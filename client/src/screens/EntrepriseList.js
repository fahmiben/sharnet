import { useState } from "react";
import { useSelector } from "react-redux";
import EntCard from "./EntCard";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const EntrepriseList = () => {
  const users = useSelector((state) => state.user.sers);
  const entlist = users?.filter((el) => el.userType == "entreprise");
  const [text, settext] = useState("");
  return (
    <div className="entlist">
      <h5 className="rech">
        Recherche des Entreprises
        <input
          type="text"
          onChange={(e) => {
            settext(e.target.value);
          }}
        />
      </h5>
      <h2 className="list1">
        {users ? (
          entlist
            .filter((el) => el.name.toLowerCase().includes(text.toLowerCase()))
            .map((el) => <EntCard ent={el} />)
        ) : (
          <img
            src="https://www150.statcan.gc.ca/pub/71-607-x/2017002/LMI/assets/loading.gif"
            alt="loading"
          />
        )}
      </h2>
    </div>
  );
};

export default EntrepriseList;
