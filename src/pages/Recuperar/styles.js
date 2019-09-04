import styled from "styled-components";

export const Container = styled.div`
  .main-header {
    background: rgba(0, 217, 116, 1);
    height: 40px;
    color: #fff;
    display: flex;
    justify-content: center;
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
    width: 500px;
    /* padding: 30px; */
    background: rgb(79, 185, 255);
  }

  form {
    width: 100%;
    max-width: 500px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 40px 40px;
  }

  button {
    background: rgba(0, 217, 116, 1);
    color: white;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 15px;
    font-size: 1.5em;
  }
`;
