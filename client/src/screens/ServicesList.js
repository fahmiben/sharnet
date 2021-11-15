import React from "react";
import { useSelector } from "react-redux";
import ServCard from "./ServCard";

const ServicesList = ({ ping, setping }) => {
  const services = useSelector((state) => state.service.service);
  const user = useSelector((state) => state.user.user);

  return (
    <div className="cards-list">
      {services ? (
        services
          .filter((el) => el.createdBy === user?._id)
          .map((el) => <ServCard ping={ping} setping={setping} service={el} />)
      ) : (
        <img
          src="https://www150.statcan.gc.ca/pub/71-607-x/2017002/LMI/assets/loading.gif"
          alt="loading"
        />
      )}
    </div>
  );
};

export default ServicesList;
