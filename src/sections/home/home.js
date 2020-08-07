import React from 'react';
import { Title, SubTitle, Download, Main } from './style';
import Box, { Content } from './../../components/box/box';
import Line from './../../components/line/line';
import normal from './../../assets/Rectangle 2-1.png';
import small from './../../assets/Rectangle 2@0.75.png';
import pincel from './../../assets/pincel.svg';

const Home = () => {
  return (
    <Main>
      <Box size="true">
        <Content>
          <div>
            <span>
              <Line />
            </span>
            <p>Olá, Eu sou</p>
          </div>
          <Title>Nathan Munis</Title>
          <SubTitle>Front-End Developer</SubTitle>
        </Content>
        <div id="donwload">
          <img src={pincel} alt="pincelada" />
          <a href="https://drive.google.com/file/d/19g7ReSlM72DR3QK0ZinKht1QF6FJ4HoA/view">
            <Download>Download CV</Download>
          </a>
        </div>
      </Box>
      <img
        id="my-picture"
        src={normal}
        srcSet={`${small} 768w, ${normal} 1280w`}
        alt="Foto Nathan Munis"
      />
    </Main>
  );
};

export default Home;
