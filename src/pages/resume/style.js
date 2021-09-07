import styled from 'styled-components';
import { darken } from 'polished';

export const ResumeStyle = styled.div`
    .name{
      font-size:4em;
      font-weight: bold;
      color:${darken(0.1, "#afafb1")};
    }
`;