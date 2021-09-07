import styled from 'styled-components';
import {shade, lighten, darken} from 'polished';

export const AboutDetails = styled.div`

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

    p{
      color:${darken(0.1,"#afafb1")};;
    }

    .decription{
      font-size:1.3em;
      color:${darken(0.1,"#afafb1")};
    }

    img{
      max-width: 300px;
    }
    
    .separator{
      // color:#f7904b;
      border: 0;
      border-top:1px solid #ff152d;
      opacity: 0.50;
    }
`;