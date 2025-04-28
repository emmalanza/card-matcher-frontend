import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@contexts/AuthContext";
import LinkButton from "@components/ui/buttons/LinkButton";
import { LogOut } from 'lucide-react';
import Logo from "@assets/img/logo.webp";

const Header = () => {
    const { isAuthenticated, logout } = useAuth();
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            // Solo cambiar el estado de sticky si no estamos en la vista móvil
            if (window.innerWidth > 768) {  // Evitar que el scroll afecte en dispositivos móviles
                if (currentScrollY > 20 && currentScrollY > lastScrollY) {
                    setIsSticky(true);
                } else if (currentScrollY < lastScrollY) {
                    setIsSticky(false);
                }
                setLastScrollY(currentScrollY);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false); 
    };

    return (
        <header
            className={`${isSticky ? "fixed top-0 backdrop-blur-md" : "absolute top-0 backdrop-blur-none"} 
            z-10 w-full px-10 py-6 transition-all ease-in-out duration-300
            flex items-center justify-between`}
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
                        <a href="/#sets" className="hover:underline" onClick={closeMenu}>
                            Expansiones
                        </a>
                    </li>
                    {!isAuthenticated ? (
                        <>
                            <li>
                                <LinkButton
                                    to="login"
                                    className="bg-white border border-primary rounded text-primary"
                                    onClick={closeMenu}  
                                >
                                    Inicio de sesión
                                </LinkButton>
                            </li>
                            <li>
                                <LinkButton
                                    to="register"
                                    className="bg-primary border border-white rounded text-white"
                                    onClick={closeMenu}  
                                >
                                    Registro
                                </LinkButton>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="profile" className="hover:underline" onClick={closeMenu}>
                                    Perfil
                                </Link>
                            </li>
                            <li>
                                <Link className="opacity-50 pointer-events-none" onClick={closeMenu}>
                                    Mi Colección
                                </Link>
                            </li>
                            <li>
                                <Link to="profile" className="opacity-50 pointer-events-none" onClick={closeMenu}>
                                    Haz Match!
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() => {
                                        logout();
                                        closeMenu(); 
                                    }}
                                    className="p-2 bg-accent border border-white rounded-md text-white
                                    hover:scale-110 transition transform"
                                >
                                    <LogOut size={18} /> 
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

