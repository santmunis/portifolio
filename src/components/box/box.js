import Styled from 'styled-components';

const Box = Styled.div`
    ${props => (!props.size ? `width: 50%;` : `width:59%;`)}
    height:85%;
    background-color:#313552;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;

    .img-section{
        @media(max-width: 576px) {
            width:90vw; 
            
        }
    }
    #donwload{
        margin-bottom:-25px;
        position:relative;

        img{
            height:140px;
            @media(max-width: 800px) {
                height:122px;  
            }
            @media(max-width: 576px) {
                height:80px; 
             }
        }
    }
    @media(max-width: 800px) {
        ${props => (!props.size ? `width: 50%;` : `width:100%;`)}
      }
`;

export const Content = Styled.div`

    div{
        display:flex;
        flex-direction:row;
        align-items:center;
        p{
            font-family: 'Open Sans', sans-serif;
            font-weight:300;
        }
        span {
            margin-right:10px;
        }
    }
   
`;

export default Box;
