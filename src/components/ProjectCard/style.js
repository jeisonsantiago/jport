import styled from 'styled-components';
import {Container} from 'react-bootstrap';
import { lighten } from 'polished';

export const ContainerStyle = styled(Container)`
  
  img{
    width: 600px;
    object-fit:cover;
    height:350px;
    position:absolute;
    border-radius:4px;
    z-index:-1;
    padding:0px;
  }

  .overlayImg {
    position:absolute;
    max-width: 600px;
    height:350px;
    width:600px;
    z-index: 1;
    background-color:#ff152d;
    opacity:0.3;
    cursor: pointer;
    padding:0;
    margin:0;
  }

  .overlayImg:hover {
    opacity:0;
    // z-index: 1;
  }

  .overlayImg:before {
    content: "";
    // width: 100%;
    // height: 100%;
    
    // position: absolute;
    // background: rgba(0,0,255,0.4);
    background-color:#ff152d;
    // opacity: 1;
    z-index:1;
  }


  margin: 32px 0px;

  min-height: 350px;
  
  .description{
    background:#282a30;
    padding:16px;
    color:#afafb1;
    border-radius: 4px;
    text-align: justify;
    z-index:2;
  }

  .titleProject{
    pointer-events: none;
    text-align: right;
    color:${lighten(0.1, "#afafb1")};
    h1{
      font-weight:bold;
    }

    z-index:2;
    a{
      pointer-events: all;
      width: fit-content;
      color:#c9c9ca;
    }

    a:hover{
      color:#c9c9ca;
      color:${lighten(0.2, "#c9c9ca")};
    }

    display:flex;
    justify-content:flex-end;
    
  }

  .kind{
    pointer-events: none;
    text-align: right;
    color:${lighten(0.1, "#ff152d")};
    h1{
      font-weight:bold;
    }

    h1{
      font-size:15px; 
    }
    z-index:2;
  }

  .tech{
    text-align: right;
    color:#afafb1;
    margin: 4px 0;
  }

  a{
    text-decoration: none;
  }
`;