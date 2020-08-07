import Styled from 'styled-components';

const Line = Styled.hr`
  border-color:#DAA520;
  box-sizing:border-box;
  border-width: ${props => props.border};
  width:50px;
`;

export default Line;
