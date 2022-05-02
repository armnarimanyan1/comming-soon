import React from 'react';
import { StyledHeader, StyledTopRightNavStyles } from './Navbar.styled';
import NavLanguageSelector from '../../molecules/NavLanguageSelector';
import useMobile from '../../../hooks/Mobile';
import NavItems from '../../molecules/NavItems';
import ThemePicker from '../../atoms/ThemePicker';
import MobileCollapse from './mobile';
import { ThemeProps } from '../../../types';
import Button from '../../atoms/Button';

const Navbar = ({ switchTheme }: ThemeProps) => {
  const isMobile = useMobile();
  return !isMobile ? (
    <StyledHeader className="top-nav">
      <NavItems />
      <StyledTopRightNavStyles size="middle">
        <NavLanguageSelector />
        <ThemePicker onClick={switchTheme} />
        <Button outlined={true}>Connect</Button>
      </StyledTopRightNavStyles>
    </StyledHeader>
  ) : (
    <MobileCollapse switchTheme={switchTheme} />
  );
};

export default Navbar;
