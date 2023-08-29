import React from "react";
import { IoFastFoodOutline } from "react-icons/io5"; 
import { Link } from "react-router-dom";
import { FiShoppingCart, FiLogIn } from "react-icons/fi"; 
import { FaUser } from "react-icons/fa";
import { motion } from "framer-motion";
import DropdownMenu from './DropdownMenu';

const Header = ({ isAuthenticated = false }) => {
    return ( 
        <nav>
            <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
                <IoFastFoodOutline />
            </motion.div>
            <div>
                <Link to="/">Accueil</Link>
                <Link to="/menus">Menus</Link>
                <Link to="/about">A propos</Link>
                <Link to="/contact">Nous contacter</Link>
                <Link to="/login">Se Connecter</Link>
                <Link to="/register">S'inscrire</Link>
                <DropdownMenu />
                <Link to="/cart">
                 <FiShoppingCart />
                </Link>
            </div>
        </nav>
    );
};

export default Header;
