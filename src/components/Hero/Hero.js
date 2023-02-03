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
          Hey there! My name is Mulia and I'm currently living in Bogor. I just graduated from Bandung Institute of Technology, majoring in Physics. Also, I enthusiast in software engineering and development.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;