import { createGlobalStyle } from 'styled-components';
import {lighten} from 'polished';

export default createGlobalStyle`

    *{
        margin:0;
        padding:0;
        outline:0;
        box-sizing:border-box;

        font-family:Calibre, sans-serif;
    }
    body{
        -webkit-font-smoothing:antialiased;
        overflow-y: scroll !important;
        padding-right: 0px !important;
        background:#0c0c0c;
    }

    body, input, button {
        font-family: 'Open Sans', sans-serif;
    } 

    div{
        transition: height 1s;
    }

    #root{
        /* max-width: 960px; */
        margin: 0 auto;
        /* padding: 40px 20px; */
    }
    
`;