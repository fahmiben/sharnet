import { useEffect, useState } from "react";
import {
  Card,
  Button,
  Modal,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../Js/serviceSlice/serviceSlice";

const AddProduct = ({ ping, setping }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const [service, setservice] = useState({
    name: "",
    description: "",
    type: "produit",
    date: "",
    price: "",
    adress: "",
    pictures: "",
    createdBy: "",
  });

  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    setservice({ ...service, createdBy: user?._id });
  }, []);

  const handleSelect = (e) => {
    setservice({ ...service, type: e });
  };

  const handleAdd = (e) => {
    dispatch(addService(service));
    setping(!ping);
  };
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Ajouter Produit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Produit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nom de Produit :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter nom"
                onChange={(e) => {
                  setservice({ ...service, name: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => {
                  setservice({ ...service, description: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>images :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => {
                  setservice({ ...service, pictures: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Prix :</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter prix"
                onChange={(e) => {
                  setservice({ ...service, price: e.target.value });
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fermer
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleAdd();
              handleClose();
               setping = !ping;
            }}
          >
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProduct;
