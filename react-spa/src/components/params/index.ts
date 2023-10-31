import { useParams } from "react-router-dom";

export const GetUrlParam = (param: string) => {
    const params = useParams();

    return params[param];    
};