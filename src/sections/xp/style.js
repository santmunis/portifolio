import Styled from 'styled-components';

export const boxLeft = Styled.div`
    width:50vw;
    @media(max-width: 576px) {
        width:100vw;
    };
`;
export const Title = Styled.h1`
    font-family: 'Open Sans', sans-serif;
    font-weight:800;
    font-size:${props => `clamp(0.8em, ${props.font} + 5vw, 96px)`};
`;

export const Text = Styled.h6`
    font-family: 'Open Sans', sans-serif;
    font-weight:800;
    font-size:${props => `clamp(0.2em, ${props.font} + 2vw, 25px)`};
    margin-top:20px;
    @media(max-width: 576px) {
        font-size:1em;
        };
    
`;

export const Main = Styled.div`
      height:100vh;
      display:flex;
      align-items:center;
      @media(max-width: 800px) {
            height:auto;
        };
        @media(max-width: 576px) {
            height:100vh;
            flex-direction:column-reverse;
        };
      
`;
export default boxLeft;
