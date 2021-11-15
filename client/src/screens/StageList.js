import { useState } from "react";
import { useSelector } from "react-redux";
import ServCard from "./ServCard";

const StageList = ({ ping, setping }) => {
  const users = useSelector((state) => state.user.sers);
  const [text, settext] = useState("");
  const services = useSelector((state) => state.service.service);

  return (
    <div className="list">
      {services ? (
        services
          .filter((el) => el.type == "stage")
          .map((el) => <ServCard service={el} ping={ping} setping={setping} />)
      ) : (
        <img
          src="https://www150.statcan.gc.ca/pub/71-607-x/2017002/LMI/assets/loading.gif"
          alt="loading"
        />
      )}
    </div>
  );
};
export default StageList;
