import React from 'react';
import Line from './../../components/line/line';
import { Cabecalho, Title, Main, Content, ButtonSocial } from './style';

import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';
const SocialMedia = () => {
  return (
    <Main>
      <Cabecalho>
        <Title>Redes Socias</Title>
        <Line style={{ width: '300px' }} />
      </Cabecalho>
      <Content>
        <ButtonSocial href="https://github.com/santmunis">
          <p>
            <span>
              <FaGithub />
            </span>
            GitHub
          </p>
        </ButtonSocial>
        <ButtonSocial href="https://www.linkedin.com/in/nathanmunisdesantana/">
          <p>
            <span>
              <FaLinkedinIn />
            </span>
            Linkedin
          </p>
        </ButtonSocial>
        <ButtonSocial href="https://www.facebook.com/nathan.munis/">
          <p>
            <span>
              <FaFacebookF />
            </span>
            Facebook
          </p>
        </ButtonSocial>
      </Content>
    </Main>
  );
};

export default SocialMedia;
