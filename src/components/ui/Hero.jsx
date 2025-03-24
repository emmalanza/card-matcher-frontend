import backgroundImage from '@assets/img/bg-cards.webp';
import heroImage from '@assets/img/hero.webp';
import line from '@assets/img/line-hero.webp';

const Hero = () => {
    return (
        <section
            className="flex flex-col items-center justify-center 
          bg-cover bg-center h-screen"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <img src={heroImage}
                className="w-2xl"
                alt="Cards from TCGP" />
            <div className='relative'>
                <h1 className="text-3xl font-bold italic text-primary">
                    Encuentra el intercambio perfecto para completar tu colección
                </h1>

                {/* Imagen debajo del span */}
                <img src={line}
                    className="hidden lg:block absolute left-[325px]"  // Aquí se asegura que la imagen esté debajo del texto y centrada
                    alt="Line"
                />
            </div>

        </section>
    );

}


export default Hero;
