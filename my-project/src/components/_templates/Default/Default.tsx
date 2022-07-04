import { Link } from 'react-router-dom'

import { routes } from 'src/router/Config/config.routes'
import { ContentHead } from 'src/components/_organisms'
import './style.scss'

export const Default = () => {

    return (
        <div>
            <Link to={routes.homepage}>
                <ContentHead className="block-home-info" />
            </Link> 
        </div>   
    )
}