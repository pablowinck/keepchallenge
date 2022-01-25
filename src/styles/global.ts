import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * { 
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Raleway', sans-serif;
    }
    html, body, #root {
        height: 100%;
    }
    input {
        border: 1px solid #bdbdbd;
        padding: 0 1rem;

        ::placeholder {
            color: #828282;
        }
    }

    button{
        border: none;
         background: #2F80ED;
         color: white;
         cursor: pointer;
         };
`;
