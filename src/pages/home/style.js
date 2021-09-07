import styled from 'styled-components';
import {shade, lighten, darken} from 'polished';

export const HomeDetails = styled.div`

    .hitext{
      font-size:1.3em;
      color:#ff152d;
      font-weight:bold;
    }

    .name{
      font-size:4em;
      font-weight: bold;
      color:${darken(0.1,"#afafb1")};
    }
    .craft{
      font-size:4em;
      font-weight: bold;
      color:${lighten(0.2,"#afafb1")};
    }

    .decription{
      font-size:1.3em;
      color:${darken(0.1,"#afafb1")};
    }

    

    
`;