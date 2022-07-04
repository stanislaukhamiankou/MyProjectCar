import { ContentDefault, MapDefault } from 'src/components/_molecules';
import { ContentContacts } from 'src/components/_organisms';
import './style.scss'

export const Contacts = () => {
    return (
        <div className="contacts-content">
            <ContentDefault className="contacts-left">
                <ContentContacts/>
            </ContentDefault>
            <MapDefault className="contacts-right" classNameMap="map-contacts"/>
        </div>
    );
}