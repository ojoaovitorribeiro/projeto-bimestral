import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    font-size: 12px;
    font-family: Verdana, Tahoma, Geneva, sans-serif;
    padding: 0;
  }
  html, body, #root {
    height: 100%;
  }
  body{
    background: linear-gradient(0deg,rgba(34, 193, 195, 1) 11%,rgba(0, 217, 116, 1) 91%);

  }

  h1 {
    font-size: 2em;
    color: #124456;
    font-weight: bold;

      }

  h2 {
    margin-top: 50px;
    margin-bottom: 10px;
    font-size: 1.6em;
    color: #fff;
  }
  input{
    width: 100%;
    margin-bottom:20px;
    padding: 15px;
    font-size: 1.5em;
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
    border-top: 0;
    border-right:0;
    border-left: 0;
}


  label {
    color: white;
    width: 100%;
    /* padding: 15px; */
    font-size: 1.5em;
  }
  p{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 1.6em;
    color: #124456; 
    padding: 10px;
}
 
  @media only screen and (max-width 798px) {
    .main-header {
      background: black;
      height: 50px;
      color: #fff;
      display: flex;
      justify-content: left;
      align-items: center;
    }
    section {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
    }

    div {
      display: flex;
      height: 60%;
      width: 100vh;
      /* padding: 30px; */
      background: rgb(79, 185, 255);
    }
    form {
      width: 100vh;
      height: 60%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      /* padding: 40px 40px 40px; */
    }

    button {
      background: black;
      color: white;
      margin-top: 5px;
      margin-bottom: 5px;
      padding: 8px;
      font-size: 1.5em;
    }

    .h2 {
      margin-top: 20px;
      margin-bottom: 05px;
      font-size: 1.6em;
      color: #fff;
    }
  }


`;
