import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const EditProduct = () => {
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
        Modifier Produit
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
          >
            Enregistrer
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditProduct;
