import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./styles.css";
export default function Navbar(props) {
    const navigate = useNavigate();
    const handleLogout = () => {
        props.setLogin(false);
        props.setUser("");
        navigate("/signin");
    }
    return (
        <div>
            <Navbar className="navbar">
                <div className="head">
                    <a>M</a>
                </div>
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search"
                    name="search"
                />
                <div className="product">
                    <Link to={"/products"} style={{ color: "white", padding: "5px" }}>
                        Product
                    </Link>
                </div>
                <Link to={"/"} style={{ color: "white", padding: "10px" }}>
                    Home
                </Link>
                {!props.isLogin ? (
                    <Link to={"/signin"}>
                        <button className="signUp-btn" type="submit">
                            Sign In
                        </button>
                    </Link>
                ) : (
                    <button onClick={handleLogout} className="signUp-btn" type="submit">
                        Sign Out
                    </button>
                )}

            </Navbar>
        </div>
    );
}
