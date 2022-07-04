import { HTTP_METHODS } from "src/helper/api";
import { ICar } from "src/redux";
import Fetcher from "src/services/Fetcher";

const fetcher = new Fetcher()

export const reqesDeleteCar = (id: number) => 
    fetcher.requestToReceive<ICar, Object>({
        url: `http://localhost:3000/car/${id}`,
        method: HTTP_METHODS.DELETE,
    })