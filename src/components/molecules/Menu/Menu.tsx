import React, { FC } from 'react';
import { Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { DropDownLink, Item, MenuWrapper } from './Menu.styled';
import { NavLink } from 'react-router-dom';
import menuItems from './mock';
import { v4 as uuid } from 'uuid';

const DropDownMenu: FC = () => {
  const menu = () => {
    return (
      <MenuWrapper className="menu-list">
        {menuItems.map(item => {
          return (
            <Item key={uuid()}>
              <NavLink to={item.link}>{item.title}</NavLink>
            </Item>
          );
        })}
      </MenuWrapper>
    );
  };

  return (
    <Dropdown
      overlay={menu}
      arrow={false}
      trigger={['click']}
      placement="bottom"
      getPopupContainer={trigger => trigger.parentElement as HTMLElement}
    >
      <DropDownLink onClick={e => e.preventDefault()}>
        // <p>Resources</p>
        <DownOutlined />
      </DropDownLink>
    </Dropdown>
  );
};

export default DropDownMenu;
