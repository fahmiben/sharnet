import { useState, useEffect } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addService } from "../Js/serviceSlice/serviceSlice";

const AddStage = ({ services, ping, setping }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [service, setservice] = useState({
    name: "",
    description: "",
    type: "stage",
    date: "",
    price: "",
    adress: "",
    pictures: "",
    createdBy: "",
  });

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
        Ajouter Stage
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ajouter Stage</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label> Stage :</Form.Label>
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
              <Form.Label>Images :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                onChange={(e) => {
                  setservice({ ...service, pictures: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date de début :</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter la date de début"
                onChange={(e) => {
                  setservice({ ...service, datedebut: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date de fin :</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter la date de fin"
                onChange={(e) => {
                  setservice({ ...service, datefin: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Adresse :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter L'adresse"
                onChange={(e) => {
                  setservice({ ...service, adress: e.target.value });
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

export default AddStage;
