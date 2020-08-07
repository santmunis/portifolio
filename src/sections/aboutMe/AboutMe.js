import React from 'react';
import Box, { Content } from './../../components/box/box';
import Line from './../../components/line/line';
import BoxLeft, { Title, Text } from './style';
import computer from './../../assets/computer.png';
const About = () => {
  return (
    <section>
      <BoxLeft>
        <Content style={{ padding: '20px' }}>
          <div>
            <span>
              <Line border="2px" />
            </span>
            <p>Quem eu sou ?</p>
          </div>
          <Title>
            Sou Estudante de Sistemas de Informação, apaixonado por tecnologia
          </Title>
          <span>
            <Line
              border="2px"
              style={{ width: '100px', marginBottom: '15px' }}
            />
          </span>
          <Text>
            Olá, eu sou Nathan Munis de Santana. Atualmente sou estudande de
            sistesmas de informação na UFRRJ, estou cursando o meu quinto
            périodo. Eu escolhi a área de tecnologia pois desde pequeno sempre
            gostei muito de computadores,video games etc. Tive certeza que era
            nessa área que eu gostaria de trabalhar quando fiz um curso tecnico
            de informática p/ web em 2013 e adorei tudo sobre desenvolvimento
            web que aprendi nesse curso.
          </Text>
        </Content>
      </BoxLeft>
      <Box style={{ backgroundColor: 'black' }}>
        <img
          src={computer}
          alt="Foto setup Nathan Munis"
          height="90%"
          width="93%"
          className="img-section"
        />
      </Box>
    </section>
  );
};

export default About;
