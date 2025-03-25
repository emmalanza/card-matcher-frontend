import Separator from "@assets/img/line-tcgp.webp";
import XMark from "@assets/img/x-mark.webp";
const InfoSection = () => {
    return (
        <section className="flex flex-col items-center justify-center gap-10 p-4 lg:p-10
        bg-gradient-to-b from-[#2649ad] to-[#326bbb] bg-center h-screen">

            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-third font-bold">
                Encuentra tu <strong>MATCH</strong>
            </h2>

            <img src={Separator} className="w-full lg:w-2/3" alt="Line" />

            <h3 className="text-white textl-lg md:text-2xl text-center font-bold">Si juegas TCG Pokect y quieres conseguir esas cartas que te faltan,
                <strong> CardMatchr</strong>  es la app perfecta para ti.</h3>

            <ul className="text-white text-xs md:text-md lg:text-lg
            space-y-4 max-w-md md:max-w-lg lg:max-w-2xl">
                <li className="flex items-start space-x-6">
                    <img src={XMark} alt="X" className="w-2 h-2 md:w-4 md:h-4" />
                    <span>
                        Encuentra intercambios al instante: Conéctate con otros jugadores y encuentra el
                        <strong> match ideal</strong> para completar tu colección.
                    </span>
                </li>

                <li className="flex items-start space-x-6">
                    <img src={XMark} alt="X" className="w-2 h-2 md:w-4 md:h-4" />
                    <span>
                        Crea y gestiona tus listas: sube fácilmente las cartas que tienes para intercambiar y marca las que buscas.
                    </span>
                </li>

                <li className="flex items-start space-x-6">
                    <img src={XMark} alt="X" className="w-2 h-2 md:w-4 md:h-4" />
                    <span>
                        Negocia sin esfuerzo: Usa el chat integrado para acordar intercambios.
                        Ahora puedes negociar directamente con los jugadores.
                    </span>
                </li>
            </ul>
        </section>
    );
}


export default InfoSection;