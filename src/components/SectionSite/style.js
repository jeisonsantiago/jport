import styled from 'styled-components';
import { lighten } from 'polished';

export const MainContent = styled.div`
    // background: #eef8ee;
    
    min-height:70vh;

    
    //padding-bottom: 30px;
    //padding-top: 30px;

    @media (max-width: 768px) {
      padding-top: 10px;
    }

    display:flex;
    flex-direction: column;
    justify-content:center;

    .name{
      font-size:30px;
    }

    .title{
      font-weight: bold;
      font-size:4em;
      color:${lighten(0.1, "#afafb1")};
    }

    .separator{
      // color:#f7904b;
      border: 0;
      border-top:1px solid #ff152d;
      opacity: 0.50;
    }

    a{
      margin:0;
      padding:0;
      
    }
`;