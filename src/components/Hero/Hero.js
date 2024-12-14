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
        With over a year of experience as a Software Developer, 
        I'm passionate creating seamless and efficient user experiences, 
        and continually strive to enhance my skills in both frontend and backend technologies.
        </SectionText>
        {/* <Button onClick={props.handleClick}>Learn More</Button> */}
      </LeftSection>
    </Section>
  </>
);

export default Hero;