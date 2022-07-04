import { HTTP_METHODS } from "src/helper/api"
import Fetcher from "src/services/Fetcher"
import { RegisterData, RegisterResponse } from "."

const fetcher = new Fetcher()

export const reqestRegister = (data: RegisterData) =>
  fetcher.requestToReceive<RegisterData, RegisterResponse>({
    url: 'http://localhost:5000/api/auth/register',
    method: HTTP_METHODS.POST,
    data,
  })