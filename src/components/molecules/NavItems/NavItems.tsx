import React from 'react';
import { ItemsWrapper } from './NavItems.styled';
import NavItem from '../../atoms/NavItem';
import Logo from '../../atoms/Logo';

const NavItems = () => {
  return (
    <ItemsWrapper>
      <NavItem to={'/'}>
        <Logo />
      </NavItem>
    </ItemsWrapper>
  );
};

export default NavItems;
