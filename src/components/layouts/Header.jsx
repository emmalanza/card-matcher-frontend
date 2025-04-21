import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import LinkButton from "@components/ui/buttons/LinkButton";
import Logo from "@assets/img/logo.webp";

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 20 && currentScrollY > lastScrollY) {
                setIsSticky(true);
            } else if (currentScrollY < lastScrollY) {
                setIsSticky(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`${isSticky ? "fixed top-0" : "absolute top-0"} 
            z-1 w-full px-10 py-6 backdrop-blur-none flex items-center justify-between`}
        >
            <Link to="/">
                <img src={Logo} alt="logo" className="w-28 hover:scale-110 transition transform" />
            </Link>

            <div className="z-10 md:hidden">
                <button
                    onClick={toggleMenu}
                    className="text-primary text-4xl focus:outline-none"
                >
                    {isMenuOpen ? "✕" : "☰"}
                </button>
            </div>

            <nav
                className={`${isMenuOpen ? "block" : "hidden"}  
                    fixed md:contents inset-0 h-screen md:h-auto 
                    bg-white/50 backdrop-blur-lg md:backdrop-blur-none md:bg-transparent`}
            >
                <ul className="flex flex-col md:flex-row 
                md:items-center md:justify-center gap-10 md:gap-4 p-10 md:p-4 text-2xl md:text-sm mt-20 md:mt-0">
                    <li>
                        <a href="#sets" className="hover:underline">
                            Expansiones
                        </a>
                    </li>
                    {!isAuthenticated ? (
                        <>
                            <li>
                                <LinkButton
                                    to="login"
                                    className="bg-white border border-primary rounded text-primary"
                                >
                                    Inicio de sesión
                                </LinkButton>
                            </li>
                            <li>
                                <LinkButton
                                    to="register"
                                    className="bg-primary border border-white rounded text-white"
                                >
                                    Registro
                                </LinkButton>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="profile" >
                                    Perfil
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={logout}
                                    className="p-2 bg-accent border border-white rounded-md text-white"
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
