import React from "react";
import "./styles.css";
export default function Navbar() {
    return (
        <div>
            <navbar className="navbar">
                <div className="head">
                    <a>M</a>
                </div>
                <div>
                    <a href='#' style={{ color: "white", padding: "5px" }}>Product</a>
                    <a style={{ color: "white" }}></a>
                </div>
                <input
                    className="searchbar"
                    type="text"
                    placeholder="Search"
                    name="search"
                />
                <a href='#' style={{ color: "white", padding: "5px" }}>Home</a>
                <button href='#' className="signUp-btn" type="submit">
                    Sign In
                </button>
            </navbar>
        </div>
    );
}
