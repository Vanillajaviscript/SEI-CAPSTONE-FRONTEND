import {useState} from "react";
import { 
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBNavbarBrand
} from "mdb-react-ui-kit";
import '../App.css';;

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
  <MDBNavbar href="/" fixed="top" expand="lg" style={{backgroundColor: "#3a4a6f"}}>
    <MDBContainer>
    <MDBNavbarBrand href="/" style={{color: "#c8d2eb"}}>
      <p>China Dog Rescue</p>
      <MDBIcon fas icon="dog" size="2x" style={{color: "#c1940c"}}>
      </MDBIcon>
      <MDBIcon fas icon="bone" size="1x" style={{color: "#f3f4f9"}}>
      </MDBIcon>
    </MDBNavbarBrand>
    <MDBNavbarToggler
      type="button"
      aria-expanded="false"
      aria-label="Toggle navigation"
      onClick={() => setNavState(!navState)}
      style={{backgroundColor: "#c8d2eb"}}
      >
        <MDBIcon icon="bars" fas/>
    </MDBNavbarToggler>
    <MDBCollapse show={navState} navbar>
      <MDBNavbarNav right fullWidth={false} className="mb-2 mb-lg-0">
        <MDBNavbarItem>
          <MDBNavbarLink href="/">
            <p className="nav-link">Home</p>
          </MDBNavbarLink>
        </MDBNavbarItem>
      </MDBNavbarNav>
    </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  )
}
export default NavBar