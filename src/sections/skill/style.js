import Styled from 'styled-components';
export const Main = Styled.section`
    width:100%;
    height:auto;
    display:flex;
    flex-direction:column;
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
    overflow-x:hidden;
    overflow-y:hidden;
    @media(max-width: 576px) {
        overflow:scroll;
      }
`;

export const SkillContent = Styled.div`
    width:100%;
    background-color: #313552;
    padding:18px;
    
    
`;

export const SkillItens = Styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:15px;
    @media(max-width: 576px) {
        width:80vw;
      }
`;

export const Text = Styled.p`
    font-family: 'Roboto', serif;
    font-weight:bold;
    font-size:18px;
`;

export const Description = Styled.p`
    font-family: 'Roboto', serif;
    text-align: justify;
    font-size:15px;
    margin-top:10px;
`;

export default Cabecalho;
