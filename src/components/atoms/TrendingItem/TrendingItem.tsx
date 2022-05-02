import React from 'react';
import {
  Item,
  Left,
  Right,
  Number,
  ImageWrapper,
  Image,
  ItemTitle,
  Desc,
  OrangeText,
  Payments,
} from './TrendingItem.styled';
import { TrendProps } from './types';

const TrendingItem = ({ data, num }: { data: TrendProps; num: number }) => {
  return (
    <Item>
      <Left>
        <Number>{num + 1}</Number>
        <ImageWrapper>
          <Image src={data.logoUri} alt={data.name} />
        </ImageWrapper>
      </Left>
      <Right>
        <ItemTitle>{data.name}</ItemTitle>
        <Desc>
          <span style={{ marginRight: '10px' }}>
            <b>
              <span>₿</span>0.21
            </b>
          </span>
          <span>last 7 days </span>
          <OrangeText>+11%</OrangeText>
        </Desc>
        <Payments>{data.version} payments</Payments>
      </Right>
    </Item>
  );
};

export default TrendingItem;
