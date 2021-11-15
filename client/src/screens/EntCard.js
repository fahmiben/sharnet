import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ServicesList from "./ServicesList";

const EntCard = ({ ent }) => {
  return (
    <div>
      <div className="containerr">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgYs2YAfedCOUk7dF4W1ofM2p5vH2bXJfqLg&usqp=CAU"
          alt="LOGO"
        />
        <div className="container__text">
          <h1>{ent.name}</h1>
          <h4>{ent.description}</h4>
          <div className="container__text__timing">
            <p>{ent.email}</p>
          </div>
          <div className="container__text__timing">
            <p>{ent.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntCard;
