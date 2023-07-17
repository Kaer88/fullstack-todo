import { useContext, useState } from "react"
import { Button, Container, Nav, NavDropdown } from "react-bootstrap"
import Navbar from "react-bootstrap/Navbar"
import { authContext } from "../contexts/authContext"
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";
export default function NavBar() {

    const { setAuthenticatedUser } = useContext(authContext);
    const [cookies, setCookies, removeCookie] = useCookies(["usertoken"]);
    const navigate = useNavigate()

    const logout = () => {
        removeCookie(["usertoken"]);
        setAuthenticatedUser({})
        navigate("/")
    }

    return (
        <Navbar
            className="navbar"
            style={{
                backgroundColor: "bisque",
                padding: "1em",
                gap: "5em",
                alignContent: "center",

            }} >

            <h4>Ultimate Todo</h4>
            <NavDropdown title="Account">
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
            </NavDropdown>
            <Link to="/main">Overview</Link>
            <Link to="/main/detailed">Detailed</Link>
        </Navbar >
    )

}