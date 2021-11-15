import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../Js/userSlice/userSlice";

const Header = () => {
  const isAuth = localStorage.getItem("token");
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Link to="/">
          {" "}
          <img
            src="https://novosolutions.com/wp-content/uploads/2015/01/bp_SNet.jpg"
            alt="logo"
            class="logo"
          />{" "}
        </Link>
        <Container>
          <Navbar.Brand href="/">Accueil</Navbar.Brand>
          <Nav className="me-auto " style={{ margin: "0 auto" }}>
            <Nav.Link href="/Apropos">A propos</Nav.Link>
            <Nav.Link href="/Profile">Profile</Nav.Link>
            <Nav.Link href="/EntrepriseList">Entreprises</Nav.Link>
            <Nav.Link href="/ProductsList">Produits</Nav.Link>
            <Nav.Link href="/StageList">Stages</Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav"></Navbar.Collapse>
          <div className="rl">
            {isAuth ? (
              <Link
                onClick={() => {
                  dispatch(logout());
                  history.push("/");
                  window.location.reload();
                }}
                to="/Login"
              >
                <Button variant="primary"> Se déconnecter </Button>
              </Link>
            ) : (
              <div className="btn-connexion">
                <Link to="/register">
                  {" "}
                  <Button>S'inscrire </Button>
                </Link>

                <Link to="/Login">
                  <Button> Se connecter</Button>{" "}
                </Link>
              </div>
            )}
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
