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

const NavBar = () => {
  const [navState, setNavState] = useState(false);

  return (
    <MDBNavbar href="/" fixed="top" expand="lg" style={{backgroundColor: "#7994d1"}}>
      China Dog Rescue
      <MDBIcon fas icon="dog" size="2x">
      </MDBIcon>
      <MDBIcon fas icon="bone" size="1x">
      </MDBIcon>
    </MDBNavbar>
  )
}
export default NavBar