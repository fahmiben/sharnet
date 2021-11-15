import React from "react";
import "./card.css";
import { Card, Button } from "react-bootstrap";
const Cardd = () => {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2D34x-WkPxe8IhcTImo8JpAkwlCJi8_USFw&usqp=CAU"
        />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://cdn.futura-sciences.com/buildsv6/images/wide1920/2/2/4/224411825e_50171213_crm.jpg"
        />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://qualiblog.fr/wp-content/uploads/2010/10/Cycle_qualite-600x380.png"
        />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1624555130858-7ea5b8192c49?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=871&q=80"
        />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQrP_kXrjOtDXkCmu8cIcXy_izMP8UfTgBaA&usqp=CAU"
        />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://spinpart.fr/wp-content/uploads/2019/12/article-59.jpg"
        />
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK6IKi2ZXU1CmTZ3NQReUxnVv4X1peihstiw&usqp=CAU"
        />
      </Card>
    </div>
  );
};

export default Cardd;
