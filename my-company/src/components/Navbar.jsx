import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
        <ul>
        <li><link to="/">Home</link></li>
        <li><link to="/about">About</link></li>
        <li><link to="/services">Services</link></li>
        <li><link to="/contact">Contact</link></li>
        </ul>
        </nav>
    );
};