import { motion } from "framer-motion";
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
            <motion.img 
                src={heroImage}
                className="w-2xl 2xl:w-4xl"
                alt="Cards from TCGP"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            />
            
            <div className='relative'>

                <motion.h1 
                    className="text-lg md:text-2xl lg:text-3xl text-center font-bold italic text-primary"
                    initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} 
                >
                    Encuentra el intercambio perfecto para completar tu colección
                </motion.h1>

                <motion.img
                    src={line}
                    className="hidden lg:block absolute left-[325px]" 
                    alt="Line"
                    initial={{ opacity: 0, x: -50 }} 
                    animate={{ opacity: 1, x: 0 }} 
                    transition={{ duration: 1, ease: "easeOut", delay: 1 }} 
                />
            </div>
        </section>
    );
}

export default Hero;
