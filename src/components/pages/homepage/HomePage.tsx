import React  from 'react';
import { Section, Wrapper } from '../../../styles/global';
import Header from '../../organisms/HomePage/Header';

const HomePage = () => {
  return (
    <div>
      <Wrapper>
        <Section maxWidth={1080}>
          <Header />
        </Section>
      </Wrapper>
    </div>
  );
};

export default HomePage;
