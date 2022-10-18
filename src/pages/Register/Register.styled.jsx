import styled from "styled-components";

export const FormContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  background-color: #131324;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  img {
    height: 5rem;
  }
  h1 {
    color: white;
    text-transform: uppercase;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem 5rem;
    background-color: #00000076;
    border-radius: 2rem;
    input {
      padding: 1rem;
      font-size: 1rem;
      border: 0.1rem solid #4e0eff;
      border-radius: 0.4rem;
      background-color: transparent;
      color: white;
      width: 100%;
      &:focus {
        border: 0.1rem solid #997af0;
        outline: none;
      }
    }
    button {
      padding: 1rem 2rem;
      font-size: 1rem;
      font-weight: bold;
      text-transform: uppercase;
      background-color: #997af0;
      color: white;
      border: none;
      border-radius: 0.4rem;
      cursor: pointer;
      transition: 0.5s ease-in-out;
      &:hover {
        background-color: #4e0eff;
      }
    }
    span {
      color: white;
      text-transform: uppercase;
      a {
        color: #4e0eff;
        text-decoration: none;
        font-weight: bold;
      }
    }
  }
`;
