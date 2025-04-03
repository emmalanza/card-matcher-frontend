import { Outlet } from "react-router-dom";
import backgroundImage from "@assets/img/bg-pikachu.webp";
const SimpleLayout = () => {
    return (
        <>
            <main 
                className="relative bg-cover bg-center h-screen"
                style={{ 
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundAttachment: 'fixed',
                    backgroundSize: 'cover'
                }}
            >
                <div className="absolute inset-0 bg-[#b1c8fe]/40 backdrop-blur-xs"></div>

                <div className="relative z-10 flex items-center justify-center h-full">
                    <Outlet />
                </div>
            </main>
        </>
    );
};

export default SimpleLayout;
