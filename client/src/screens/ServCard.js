import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteService } from "../Js/serviceSlice/serviceSlice";
import EditServ from "./EditServ";

const ServCard = ({ service, ping, setping }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const userType = localStorage.getItem("userType");
  return (
    <div>
      <div className="containerr">
        <img src={service.pictures} alt="Pancake" />
        <div className="container__text">
          <h1>{service.name}</h1>
          <h3>{service.type}</h3>
          <p>{service.description}</p>
          <div className="container__text__timing">
            <div className="container__text__timing_time">
              <h2>Date de début : </h2>
              <p>{service.datedebut}</p>
            </div>
            <div className="container__text__timing_time">
              <h2>Date de fin : </h2>
              <p>{service.datefin}</p>
            </div>

            {userType == "entreprise" ? (
              <div className="modsup">
                <EditServ id={service._id} ping={ping} setping={setping} />

                <Button
                  variant="primary"
                  onClick={() => {
                    dispatch(deleteService(service._id));
                    handleClose();
                    setping(!ping);
                  }}
                >
                  Supprimer
                </Button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServCard;
