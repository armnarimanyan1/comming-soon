import React from 'react';
import { StyledHeader, StyledTopRightNavStyles } from './Navbar.styled';
import NavLanguageSelector from '../../molecules/NavLanguageSelector';
import NavItems from '../../molecules/NavItems';
import ThemePicker from '../../atoms/ThemePicker';
import { ThemeProps } from '../../../types';
import Button from '../../atoms/Button';

const Navbar = ({ switchTheme }: ThemeProps) => {
  return (
    <StyledHeader className="top-nav">
      <NavItems />
      <StyledTopRightNavStyles size="middle">
        <NavLanguageSelector />
        <ThemePicker onClick={switchTheme} />
        <Button outlined={true}>Connect</Button>
      </StyledTopRightNavStyles>
    </StyledHeader>
  )
};

export default Navbar;
