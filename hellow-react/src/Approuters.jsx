import About from "./pages/About";
import Profile from "./pages/Profile";
import Contact from "./pages/Contact";
import App from "./App"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Nav, Navbar, Container} from "react-bootstrap"
const AppRouters = () =>{
    return(
    <BrowserRouter>
     <Navbar bg="dark" data-bs-theme="dark">
     <Container>
    <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/About">About</Nav.Link>
        <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
    </Nav>
    </Container>
    </Navbar>
    <Routes>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/" element={<App/>}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default AppRouters