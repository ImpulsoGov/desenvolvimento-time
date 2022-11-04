import Head from 'next/head';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';

export default function Home() {
  return (
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          <img
            src="https://raw.githubusercontent.com/ImpulsoGov/DesignSystem/c9d48f08bfff308d3b5af97914c5df3ba9604a30/estatico/Color%3DBlue%2C%20Size%3DTiny.svg"
            width="40"
            className="d-inline-block align-top"
            />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
          <li class="nav-item">
              <a class="nav-link" href="/fluxo-desenvolvimento">Fluxos de desenvolvimento</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/etls">ETLs</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/aplicacoes-web">Aplicações web</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/permissoes">Matriz de Permissões</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/transmissoes">Transmissões</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/documentacoes">Documentações</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div>
    <iframe style={{width: '100%', height: '100vh', border:'2px solid #ccc'}} src="https://docs.google.com/spreadsheets/d/16F-NH3HrP7EEKn6LlmIxQ0Fa57GF_2-mlBn8xwNl_uY/edit?usp=sharing"></iframe>
    </div>
  </div>
  )
}
