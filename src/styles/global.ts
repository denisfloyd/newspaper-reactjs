import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root {
    --color-white: #FFFFFF;
    --color-white-grey: #f1f1f1;
    --color-white-grey-hover: #ddd;
    --color-black: #000000;
    --color-black-translucent: rgb(52, 34, 50, 0.5);
    --color-text-primary-nav: #3E433E;
    --color-text-primary-nav-active: #4990E2;
    --color-text-secondary: #808080;
    --color-header-border: #979797;
    --color-input-border: #BFBFBF;
    --color-input-error: #c53030;
    --color-button-primary: #4990E2;
    --color-button-primary-hover: #5E9BE2;
    --color-interest-button-hover: rgb(10, 10, 20, 0.2);

    --color-type-tech: #4990E2;
    --color-type-business: #BD10E0;
    --color-type-politics: #FF001F;
    --color-type-science: #7CBC37;
    --color-type-sports: #F6A623;
  }

  html {
    overflow-y: scroll;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: var(--color-white);
    color: var(--color-black);
    -webkit-font-smoothing: antialiased;
    overflow-x:hidden;
  }

  body, input, button {
    font-family: 'Lato', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;
