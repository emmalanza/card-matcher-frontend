import Logo from "@assets/img/logo.webp"
import LinkButton from "@components/ui/buttons/LinkButton";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Header = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

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
    }, []);

    return (

        <header className={`${isSticky ? "fixed top-0" : 
        "absolute top-0"}
        absolute top-0 z-1 w-full px-10 py-6
        flex items-center justify-between`}>
            <Link to="/">
                <img src={Logo} alt="logo" className="w-20  hover:scale-110 transition transform" />
            </Link>
            <nav>
                <ul className="flex items-center justify-center gap-4">
                    <li><a href="#sets" className="hover:underline">Expansiones</a></li>
                    <li>
                        <LinkButton to="login"
                            className="bg-white border border-primary rounded text-primary text-xs">
                            Inicio de sesión
                        </LinkButton>
                    </li>
                    <li>
                        <LinkButton to="register"
                            className="bg-primary border border-white rounded text-white text-xs">
                            Registro
                        </LinkButton>
                    </li>
                </ul>
            </nav>

        </header>

    )
}
export default Header;