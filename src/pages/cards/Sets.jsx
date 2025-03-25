import CardsGrid from "@components/cards/CardsGrid";
import { useLocation } from "react-router-dom";

const Sets = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const setId = searchParams.get("setId"); 

    return (
        <CardsGrid setId={setId}/>
    )
}

export default Sets;