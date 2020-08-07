import Styled from 'styled-components';

export const Title = Styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight:800;
    white-space:nowrap;
    font-size:clamp(0.8em, 1em + 5vw, 72px);
    @media(max-width: 576px) {
        font-size:clamp(0.8em, 1.5em + 5vw, 50px);
      }
`;

export const SubTitle = Styled.h2`
    font-family: 'Open Sans', sans-serif;
    font-weight:400;
    font-size:clamp(0.8em, 1em + 2.5vw, 48px);
    margin-top:-25px !important;
    margin-left:10px;

    @media(max-width: 576px) {
        margin-top:-15px !important;
      }
`;

export const Download = Styled.h4`
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight:700;
    font-size:clamp(1em, 0.56em + 1vw, 2.5em);
    color:#000000;
    position:absolute;
    top:50px;
    left: 50%;
    transform: translate(-50%, 0) rotate(-10deg);
        @media(max-width: 576px) {
            top:30px;
        }
`;

export const Main = Styled.section`
      height:100vh;
      display:flex;
      align-items:center;

      #my-picture{
        height:80%;
      }
      @media(max-width: 800px) {
        height:40vh;
        #my-picture{
          height:auto;
        }
      }
      @media(max-width: 576px) {
        height:100vh;
        flex-direction:column;
        overflow:hidden;
        #my-picture{
        height:50%;
        width:105vw;
      }
      };
`;
