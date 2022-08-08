import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import { setLogout } from "../redux/features/authSlice";
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
  const {user} = useSelector((state) => ({...state.auth}));
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout())
  }
  return (
  <MDBNavbar href="/" fixed="top" expand="lg" style={{backgroundColor: "#3a4a6f"}}>
    <MDBContainer>
    <MDBNavbarBrand href="/" style={{color: "#c8d2eb"}}>
      <p>Animal Rights Awareness</p>
      <MDBIcon fas icon="dove" size="2x" style={{color: "#c1940c"}}>
      </MDBIcon>
      <MDBIcon fas icon="feather" size="1x" style={{color: "#f3f4f9"}}>
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
        {user?.result?._id && (
          <>
         <MDBNavbarItem>
          <MDBNavbarLink href="/createanimal">
            <p className="nav-link">Post</p>
          </MDBNavbarLink>
        </MDBNavbarItem>
        <MDBNavbarItem>
          <MDBNavbarLink href="/details">
            <p className="nav-link">Animals</p>
          </MDBNavbarLink>
        </MDBNavbarItem>
        </>
        )}
        {user?.result?._id ? (
          <MDBNavbarItem>
          <MDBNavbarLink href="/login">
            <p className="nav-link" onClick={handleLogout}>Logout</p>
          </MDBNavbarLink>
        </MDBNavbarItem>
        ) : (
          <MDBNavbarItem>
          <MDBNavbarLink href="/login">
            <p className="nav-link">Login</p>
          </MDBNavbarLink>
        </MDBNavbarItem>
        )}
      </MDBNavbarNav>
    </MDBCollapse>
    </MDBContainer>
  </MDBNavbar>
  )
}
export default NavBar