import { CarAddResponse, FormAddData } from "./api";
import { HTTP_METHODS } from "src/helper/api";
import Fetcher from "src/services/Fetcher";

const fetcher = new Fetcher()

export const requestAddCar = (data: FormAddData) => 
    fetcher.requestToReceive<FormAddData, CarAddResponse>({
        url: `http://localhost:3000/car`,
        method: HTTP_METHODS.POST,
        data,
    })