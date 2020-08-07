import Styled from 'styled-components';

export const Main = Styled.section`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
    @media(max-width: 576px) {
        font-size:clamp(0.2em, 0.125em + 3vw, 3em);
    };
`;
export const Title = Styled.h6`
    font-family: 'Roboto', serif;
    font-weight:400;
    font-size:25px;
`;

export const Cabecalho = Styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
`;

export const Content = Styled.div`
    width:100%;
    padding:25px;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    
    @media(max-width: 576px) {
      flex-direction:column;
    };
`;

export const ButtonSocial = Styled.a`
  width: 30%;
  height: 100px;
  background-color: #313552;
  box-shadow: inset 0px 0px 0px 2px #daa520;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  cursor: pointer;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: 'Open Sans', sans-serif;
    font-weight: bold;
    font-size: clamp(0.3em, 0.8em + 1vw, 30px);
    color: rgba(166, 120, 7, 1);
    span {
      font-size: clamp(0.3em, 1.4em + 1vw, 48px);
      margin-top: 10px;
      margin-right: 15px;
      color: rgba(166, 120, 7, 0.71);
    }
  }
  @media (max-width: 576px) {
    width: 100%;
    height: 60px;
    margin-bottom: 10px;
    p {
      font-size: clamp(0.3em, 0.8em + 2vw, 30px);

      span {
        font-size: clamp(0.3em, 1.4em + 2vw, 48px);
      }
    }
  }
`;
