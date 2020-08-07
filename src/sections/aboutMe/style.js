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
    font-size:clamp(0.5em, 1.5em + 1vw, 4em);;
`;

export const Text = Styled.p`
    font-size:clamp(0.2em, 0.125em + 1.5vw, 3em);
    @media(max-width: 576px) {
        font-size:clamp(0.2em, 0.125em + 3vw, 3em);
    };
`;
export default boxLeft;
