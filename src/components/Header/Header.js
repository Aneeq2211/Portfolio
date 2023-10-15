import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/'>
        <a style={{display:'flex', alignItems:'center', color:'black', marginBottom: '24px'}}>
          <DiCssdeck size='4rem'/> <Span> Aneeq Ul Waseeq </Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href='#projects'>
          <NavLink> Projects </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'>
          <NavLink> Technology </NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'>
          <NavLink> About </NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/Aneeq2211'>
        <AiFillGithub size='4rem' />
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/aneeq-ul-waseeq-4958b2183/'>
        <AiFillLinkedin size='4rem' />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
