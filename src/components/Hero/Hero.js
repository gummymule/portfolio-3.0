import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          Mulia's Portfolio Website
        </SectionTitle>
        <SectionText>
        Graduated from Bandung Institute of Technology, majoring in Physics. 
        <br /> 
        <br /> 
        With over a year of experience as a Software Developer, I have honed my skills as a Frontend Engineer specializing in web development using React and 
        proficient in Backend development with Laravel. 
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;