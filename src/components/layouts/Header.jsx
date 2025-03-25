import Logo from "@assets/img/logo.webp"
const Header = () => {
    return (
        <>
            <header className="absolute top-0 z-1 w-full p-10">
                <img src={Logo} alt="logo" className=""/>
            </header>
        </>
    )
}   
export default Header;