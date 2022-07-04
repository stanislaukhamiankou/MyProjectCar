import { Typography } from "antd";
import { Link } from "react-router-dom";
import { BLOCK_INFO_CONTACTS } from "src/constants";
import { ContentContactsType } from "./ContentContactsType";

export const ContentContacts = ({ className }: ContentContactsType) => (
    <div>
        <div className="header-contacts-link">
            <Typography className="contacts-left-header">
                {BLOCK_INFO_CONTACTS.TITLE_CONTACTS}
            </Typography>
            <Link to='/' className="content-contacts-left">
                {BLOCK_INFO_CONTACTS.LINK_TO_HOME}
            </Link>
        </div>
            <Typography className="content-contacts-left">
                {BLOCK_INFO_CONTACTS.OPEN_NOW_CONTACTS}
            </Typography>
            <Typography className="content-contacts-left">
                {BLOCK_INFO_CONTACTS.NUMBER_PHONE}
            </Typography>
    </div>
)