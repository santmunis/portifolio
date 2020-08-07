import React from 'react';
import Box, { Content } from '../../components/box/box';
import Line from '../../components/line/line';
import BoxLeft, { Title, Text, Main } from './style';
import NuesGames from './../../assets/1.jpg';
const About = () => {
  return (
    <section className="nues">
      <Main>
        <Box style={{ backgroundColor: 'black' }}>
          <img
            src={NuesGames}
            alt=" "
            width="95%"
            height="100%"
            className="img-section"
          />
        </Box>
        <BoxLeft>
          <Content style={{ padding: '20px' }}>
            <div>
              <span>
                <Line border="2px" />
              </span>
              <p>Minhas experiencias</p>
            </div>
            <Title font="1.8em">NuES Games</Title>
            <span>
              <Line border="2px" style={{ width: '300px' }} />
            </span>
            <Text font="0.2em">
              Na NuEs Games atuei pesquisando e criando conteudo, para o canal
              do youtube e blog, sobre o contéudo de engenahria de software
              voltadas a games, orientado pelo professor André Castro
            </Text>
          </Content>
        </BoxLeft>
      </Main>
    </section>
  );
};

export default About;
