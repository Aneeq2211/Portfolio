import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href='tel:+917310045485'>+917310045485</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Mail</LinkTitle>
          <LinkItem href='mailto:aneequlwaseeq@gmail@gmail.com'>aneequlwaseeq@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Building more than just code.</Slogan>
        </CompanyContainer>

        <SocialIcons href='https://github.com/Aneeq2211'>
          <AiFillGithub size='4rem' />
        </SocialIcons>
        
        <SocialIcons href='https://www.linkedin.com/in/aneeq-ul-waseeq-4958b2183/'>
          <AiFillLinkedin size='4rem' />
        </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
