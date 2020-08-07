import React from 'react';
import Box, { Content } from '../../components/box/box';
import Line from '../../components/line/line';
import BoxLeft, { Title, Text } from './style';
import signal from './../../assets/signal.jpg';
const About = () => {
  return (
    <section>
      <BoxLeft>
        <Content style={{ padding: '20px' }}>
          <div>
            <span>
              <Line border="2px" />
            </span>
            <p>Minhas experiencias</p>
          </div>
          <Title font="2.2em">Signal JR</Title>
          <span>
            <Line border="2px" style={{ width: '300px' }} />
          </span>
          <Text font="0.2em">
            Na signal jr trabalhei como desenvolvedor front-end, utilizando a
            tecnologia react.
          </Text>
        </Content>
      </BoxLeft>
      <Box style={{ backgroundColor: 'black' }}>
        <img
          src={signal}
          alt=" "
          width="94%"
          height="95%"
          className="img-section"
        />
      </Box>
    </section>
  );
};

export default About;
