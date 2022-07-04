import { CommentsInfoData, CommentsInfoResponse } from "."
import { HTTP_METHODS } from "src/helper/api"
import Fetcher from "src/services/Fetcher"

const fetcher = new Fetcher()

export const reqestCommentsInfo = () => 
    fetcher.requestToReceive<CommentsInfoData, CommentsInfoResponse>({
        url: 'http://localhost:3000/comments',
        method: HTTP_METHODS.GET,
    })