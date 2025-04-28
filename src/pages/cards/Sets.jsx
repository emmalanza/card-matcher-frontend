import CardsGrid from "@components/cards/CardsGrid";
import { useLocation } from "react-router-dom";


const Sets = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const setId = searchParams.get("setId"); 
    const setName = searchParams.get("setName");

    return (
        <CardsGrid setId={setId} setName={setName}/>
    )
}

export default Sets;