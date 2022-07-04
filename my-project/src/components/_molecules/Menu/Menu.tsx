import SubMenu from 'antd/lib/menu/SubMenu'
import { Link } from 'react-router-dom'
import { Avatar, Menu } from 'antd'
import {
  InfoCircleOutlined, 
  CommentOutlined,
  UserAddOutlined,
  PictureOutlined,
  LogoutOutlined,
  LoginOutlined,
  PhoneOutlined,
  HomeOutlined,
  UserSwitchOutlined,
  FireOutlined,
} from '@ant-design/icons'

import { routes } from 'src/router/Config/config.routes'
import { IMG_PROFILE } from 'src/helper/helper'
import useRouter from 'src/hooks/useRouter'
import { MENU_ITEM } from 'src/constants'
import { MenuProjectType } from '.'
import './style.scss'


export const MenuProject = ({isLogin}: MenuProjectType) => {
  const { push } = useRouter()

  const signUp = () => {
    localStorage.clear()
    push(routes.default)
  }
  
  return (
    <div className="header-menu">
      <div className="menu-left-item">
        <Menu mode="horizontal" className="menu-home">
          <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => push(routes.homepage)}>
              {MENU_ITEM.ITEM_HOME}
          </Menu.Item>
          <Menu.Item key="about" icon={<InfoCircleOutlined />} onClick={() => push(routes.about)}>
              {MENU_ITEM.ITEM_ABOUT}
          </Menu.Item>
          <Menu.Item key="gallery" icon={<PictureOutlined />} onClick={() => push(routes.gallery)}>
              {MENU_ITEM.ITEM_GALLERY}
          </Menu.Item>
          <Menu.Item key="contacts" icon={<PhoneOutlined />} onClick={() => push(routes.contacts)}>
              {MENU_ITEM.ITEM_CONTACTS}
          </Menu.Item>
          <Menu.Item key="comments" icon={<CommentOutlined />} onClick={() => push(routes.comments)}>
              {MENU_ITEM.ITEM_COMMENTS}
          </Menu.Item>
          {isLogin ? (
            <>
              <Menu.Item key="users-list" icon={<UserSwitchOutlined />} onClick={() => push(routes.userslist)}>
                {MENU_ITEM.ITEM_USERS_LIST}
              </Menu.Item>
              <Menu.Item key="lottery" icon={<FireOutlined />} onClick={() => push(routes.lottery)}>
                {MENU_ITEM.ITEM_LOTTERY}
              </Menu.Item>
              <Menu.Item key="sign-up" icon={<LogoutOutlined />} className="sign-in-up-item-menu" onClick={signUp}>
                {MENU_ITEM.ITEM_SIGN_UP}
              </Menu.Item>
            </>
          ) : (
            <>
              <SubMenu key="sub1" title={MENU_ITEM.ITEM_GROUP_TITLE}>
                <Menu.Item key="sign-in" icon={<LoginOutlined />} onClick={() => push(routes.signIn)}>
                  {MENU_ITEM.ITEM_SIGN_IN}
                </Menu.Item>
                <Menu.Item key="registr" icon={<UserAddOutlined />}className="sign-in-up-item-menu" onClick={() => push(routes.register)}>
                  {MENU_ITEM.ITEM_REGISTRATION}
                </Menu.Item>
              </SubMenu>
            </>
            )}
        </Menu>
      </div>
      <div className="menu-right-item">
      {isLogin ? (
        <Link to={routes.personalarea}>
          <Avatar size="large" src={IMG_PROFILE} />
        </Link>
        ) : (<div/>)} 
      </div>
    </div>
  );
};