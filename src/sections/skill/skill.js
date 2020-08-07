import React from 'react';
import {
  Cabecalho,
  Title,
  Main,
  Content,
  SkillContent,
  SkillItens,
  Text,
  Description,
} from './style';
import Line from './../../components/line/line';
import LogoReact from './../../assets/ReactLogo.png';
import LogoNode from './../../assets/nodeLogo.png';

const Skill = () => {
  return (
    <Main>
      <Cabecalho>
        <Title>Minhas Habilidades</Title>
        <Line style={{ width: '300px' }} />
      </Cabecalho>
      <Content>
        <SkillContent>
          <SkillItens>
            <img src={LogoReact} alt="Logo React" height="90%" />
            <Text style={{ marginTop: '10px' }}>Frond-end web</Text>
            <Text>React</Text>
            <Description>
              O React é uma biblioteca JavaScript de código aberto com foco em
              criar interfaces de usuário em páginas web. É mantido pelo
              Facebook, Instagram, outras empresas e uma comunidade de
              desenvolvedores individuais.
            </Description>
          </SkillItens>
        </SkillContent>
        <SkillContent>
          <SkillItens
            style={{
              borderLeftColor: '#F9C407',
              borderLeftStyle: 'solid',
              borderLeftWidth: '1px',
              borderRightColor: '#F9C407',
              borderRightStyle: 'solid',
              borderRightWidth: '1px',
            }}
          >
            <img src={LogoNode} alt="Logo NodeJS" height="90%" />
            <Text style={{ marginTop: '10px' }}>Back-end</Text>
            <Text>Node JS</Text>
            <Description>
              Node.js é um interpretador de JavaScript assíncrono com código
              aberto orientado a eventos, criado por Ryan Dahl em 2009, focado
              em migrar a programação do Javascript do cliente para os
              servidores
            </Description>
          </SkillItens>
        </SkillContent>
        <SkillContent>
          <SkillItens>
            <img src={LogoReact} alt="Logo React Native" height="90%" />
            <Text style={{ marginTop: '10px' }}>Frond-end Mobile</Text>
            <Text>React Native</Text>
            <Description>
              React Native é uma biblioteca Javascript criada pelo Facebook. É
              usada para desenvolver aplicativos para os sistemas Android e IOS
              de forma nativa.
            </Description>
          </SkillItens>
        </SkillContent>
      </Content>
    </Main>
  );
};

export default Skill;
