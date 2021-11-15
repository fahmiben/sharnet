import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateService } from "../Js/serviceSlice/serviceSlice";

const EditStage = ({ id }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();
  const [service, setservice] = useState({
    name: "",
    description: "",
    type: "",
    date: "",
    price: "",
    adress: "",
    pictures: "",
  });

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Modifier Stage
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
                placeholder="Enter date"
                onChange={(e) => {
                  setservice({ ...service, datedebut: e.target.value });
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Date de fin :</Form.Label>
              <Form.Control
                type="date"
                placeholder="Enter date"
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
            onClick={(e) => {
              dispatch(updateService({ id, service }));
              e.preventDefault();
            }}
          >
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditStage;
