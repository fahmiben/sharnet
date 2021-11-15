import { useSelector } from "react-redux";
import { useParams } from "react-router";
import ServCard from "./ServCard";

const ServEntList = ({ ping, setping }) => {
  const services = useSelector((state) => state.service.service);
  const user = useSelector((state) => state.user.user);

  const params = useParams();
  const entservs = services?.filter((el) => el.createdBy !== params.id);

  return (
    <div className="cards-list">
      {services ? (
        entservs.map((el) => (
          <ServCard ping={ping} setping={setping} service={el} />
        ))
      ) : (
        <img
          src="https://www150.statcan.gc.ca/pub/71-607-x/2017002/LMI/assets/loading.gif"
          alt="loading"
        />
      )}
    </div>
  );
};

export default ServEntList;
