import Logo from "@assets/img/logo.webp";
import Eevee from "@assets/img/eevee.webp";
import TCGPLogo from "@assets/img/tcgpocketlogo.webp";
import XLogo from "@assets/img/socials/x.svg";
import YTLogo from "@assets/img/socials/yt.svg";
import LinkedinLogo from "@assets/img/socials/linkedin.svg";
import GithubLogo from "@assets/img/socials/github.svg";
const Footer = () => {
    return (

        <footer className="bg-primary text-white px-10 py-6">

            <div className="flex flex-col md:flex-row justify-between items-center text-md lg:text-lg 
            border-b-2 border-white max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <div className="flex flex-col w-full md:w-1/2">
                    <img src={Logo} alt="Logo" className="w-32 mb-10" />
                    <p>Esto <strong>NO</strong> es un sitio web oficial de Nintendo.</p>
                    <p>Pokémon TCG Pocket es desarrollado por:</p>
                    <p>©2024 Pokémon.</p>
                    <p>©1995–2024 Nintendo / Creatures Inc. / GAME FREAK Inc.</p>
                    <p>©2024 DeNA Co., Ltd.</p>
                    <p>TM, ® Nintendo.</p>
                </div>
                <img src={Eevee} alt="Eevee" className="w-1/2" />
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
            gap-6 justify-items-center items-center py-10
            border-b-2 border-white max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
                <div className="flex flex-col gap-2 justify-center items-center h-24">
                    <p className="text-center">DESCARGAR TCG POCKET</p>
                    <a href="https://apps.apple.com/us/app/pok%C3%A9mon-tcg-pocket/id6479970832" target="_blank"
                    className="text-center hover:scale-110 transition transform">iOS App Store</a>
                    <a  href="https://play.google.com/store/apps/details?id=com.pokemon.tcgpocket" target="_blank"
                    className="text-center hover:scale-110 transition transform">Google Play</a>
                </div>
                <div className="flex flex-col justify-center items-center h-24">
                    <p className="text-center">IR A LA PÁGINA OFICIAL</p>
                    <a href="https://tcgpocket.pokemon.com/es-es/" target="_blank" 
                    className="text-center hover:scale-110 transition transform"><img src={TCGPLogo} alt="TCG Pocket Logo" /></a>
                </div>

                <div className="flex flex-col gap-2 justify-between items-center h-24">
                    <p className="text-center">X OFICIAL DE NINTENDO</p>
                    <a href="https://twitter.com/NintendoES" target="_blank" 
                    className="text-center hover:scale-110 transition transform"><img src={XLogo} alt="X Logo" className="w-10 h-10" /></a>
                </div>
                <div className="flex flex-col gap-2 justify-between items-center h-24">
                    <p className="text-center">YT OFICIAL DE NINTENDO</p>
                    <a href="https://www.youtube.com/NintendoES" target="_blank" 
                    className="text-center hover:scale-110 transition transform"><img src={YTLogo} alt="Youtube Logo" className="w-10 h-10" /></a>
                </div>
                <div className="absolute right-0 bottom-[-0.5px] lg:-bottom-[40px]
                bg-white
                flex justify-evenly items-center px-2 md:px-4">
                    <a href="https://www.linkedin.com/in/emma-lanza-m/" target="_blank"
                    className="text-center hover:scale-110 transition transform"><img src={LinkedinLogo} alt="LinkedIn Logo" 
                    className="w-4 md:w-6 h-4 md:h-6" /></a>
                    <a href="www.github.com/emmalanza" target="_blank" 
                    className="text-center hover:scale-110 transition transform"><img src={GithubLogo} alt="Github Logo" className="w-6 md:w-10 h-6 md:h-10" /></a>
                </div>
            </div>

            <div className="max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-7xl mx-auto py-10">
                <p className="text-xs text-left max-w-lg">
                    © 2025 Este es un sitio web creado con fines educativos.
                    Pokémon TCG Pocket es desarrollado por Creatures Inc. y DeNA Co., Ltd.
                    Las propiedades de Pokémon y Nintendo son marcas registradas de Nintendo.
                    No estamos afiliados con Nintendo, Creatures Inc. o DeNA Co., Ltd.
                </p>
            </div>

        </footer>

    )
}
export default Footer;