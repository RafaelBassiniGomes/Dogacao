import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin-bottom: 30px;
`;

export const Content = styled.div`
  margin: 15px 30px;
  -webkit-box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;
  box-shadow: 0px 0px 0px 0px #e4e7ed, 0px 0px 0px 1px #e4e7ed;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;
  width: 250px;
  float: left;

  &:hover {
    -webkit-box-shadow: 0px 0px 6px 0px #e4e7ed, 0px 0px 0px 2px #d10024;
    box-shadow: 0px 0px 6px 0px #e4e7ed, 0px 0px 0px 2px #d10024;
  }

  img {
    width: 250px;
    height: 250px;
  }
`;
export const Body = styled.div`
  padding: 30px;
  background-color: #fff;
  text-align: center;
  z-index: 20;

  label1 {
    opacity: 1;
    visibility: visible;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 700;
  }

  label2 {
    opacity: 1;
    visibility: visible;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
  }
`;

export const ContainerForm = styled.div`
  max-width: 500px;
  margin: 10px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(150, 150, 150, 0.7);
      }
    }
    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(150, 150, 150, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(150, 150, 150, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #ff0000;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#FF0000')};
    }
  }
`;

export const ContainerNovo = styled.div`
  max-width: 500px;
  margin: 100px auto;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(150, 150, 150, 0.7);
      }
    }
    select {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(150, 150, 150, 0.7);
      }
    }

    textarea {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      padding: 0 15px;
      color: #333;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(150, 150, 150, 0.7);
      }
    }
    span {
      color: #fb6f91;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #3b9eff;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }
  }

  > button {
    width: 100%;
    margin: 10px 0 0;
    height: 44px;
    background: #ff0000;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.08, '#FF0000')};
    }
  }
`;
