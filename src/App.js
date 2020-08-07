import React from 'react';
import GlobalStyle from './styles/global';
import Home from './sections/home/home';
import AboutMe from './sections/aboutMe/AboutMe';
import Skill from './sections/skill/skill';
import SignalJr from './sections/xp/signalJr';
import NuesGames from './sections/xp/nuesGames';
import SocialMedia from './sections/socialMedia/socialMedia';
import Footer from './sections/footer/footer';
function App() {
  return (
    <>
      <GlobalStyle />
      <Home />
      <AboutMe />
      <Skill />
      <SignalJr />
      <NuesGames />
      <SocialMedia />
      <Footer />
    </>
  );
}

export default App;
