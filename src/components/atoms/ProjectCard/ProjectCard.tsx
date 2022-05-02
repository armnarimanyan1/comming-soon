import { Card, DescriptionWrapper, ImageWrapper } from './ProjectCard.styled';
import React, { useContext } from 'react';
import ThemeContext from '../../../context/ThemeContext';
const nhimbe_logo_b = require('../../../assets/Nhimbe_dark.png');
const nhimbe_logo_w = require('../../../assets/Nhimbe_light.png');

const ProjectCard = () => {
    const theme = useContext(ThemeContext);
  return (
    <Card>
      <ImageWrapper>
        <img
          src={theme === 'light' ? nhimbe_logo_b : nhimbe_logo_w}
          alt="NhimbeFresh logo"
        />
      </ImageWrapper>
      <DescriptionWrapper>
        <p className="title">NhimbeFresh</p>
        <div>
          <span>@nhimbe</span>
          <span style={{ marginLeft: '10px' }}>V 1.1</span>
        </div>
        <div>
          <span></span>
          <span></span>
        </div>
        <div className="overflowed">
          Nhimbe Fresh is raising bitcoin to plant blueberries.{' '}
        </div>
      </DescriptionWrapper>
    </Card>
  );
};

export default ProjectCard;
