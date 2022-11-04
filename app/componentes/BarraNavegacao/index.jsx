import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function BarraNavegacao() {
  return (
    <div class="row" style={{ width: '100%' }}>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">
            <img
            src="https://raw.githubusercontent.com/ImpulsoGov/DesignSystem/c9d48f08bfff308d3b5af97914c5df3ba9604a30/estatico/Color%3DBlue%2C%20Size%3DTiny.svg"
            width="40"
            className="d-inline-block align-top"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
              <Nav.Link href="/estabelecimentos">Fluxos de desenvolvimento</Nav.Link>
              <Nav.Link href="/etls">ETLs</Nav.Link>
              <NavDropdown title="Desempenho aplicações" id="basic-nav-dropdown">
                <NavDropdown.Item href="/monitor-sisab">Monitor SISAB</NavDropdown.Item>
                <NavDropdown.Item href="/monitor-ip">Monitor IP</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/permissoes">Matriz de Permissões</Nav.Link>
              <Nav.Link href="/transmissoes">Transmissões</Nav.Link>
              <Nav.Link href="/documentacoes">Documentações</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Container>
    </Navbar>
  </div>
  )
}
