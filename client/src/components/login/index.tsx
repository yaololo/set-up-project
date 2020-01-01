import React from "react";
import styled from "styled-components";

const LoginWrapper = styled.div`
  .wrapper {
    background: #50a3a2;
    background: -webkit-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: -moz-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: -o-linear-gradient(top left, #50a3a2 0%, #53e3a6 100%);
    background: linear-gradient(to bottom right, #50a3a2 0%, #53e3a6 100%);

    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 400px;
    margin-top: -200px;
    overflow: hidden;

    &.form-success {
      .container {
        h1 {
          transform: translateY(85px);
        }
      }
    }
  }

  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 80px 0;
    height: 400px;
    text-align: center;

    h1 {
      font-size: 40px;
      transition-duration: 1s;
      transition-timing-function: ease-in-put;
      font-weight: 200;
    }
  }

  form {
    padding: 20px 0;
    position: relative;
    z-index: 2;

    input {
      display: block;
      appearance: none;
      outline: 0;
      border: 1px solid rgba(255, 255, 255, 0.4);
      background-color: rgba(255, 255, 255, 0.2);
      width: 250px;

      border-radius: 3px;
      padding: 10px 0;
      margin: 0 auto 10px auto;
      display: block;
      text-align: center;
      font-size: 18px;

      color: white;

      transition-duration: 0.25s;
      font-weight: 300;

      &::placeholder {
        color: white;
        opacity: 1; /* Firefox */
      }

      &:-ms-input-placeholder {
        /* Internet Explorer 10-11 */
        color: white;
      }

      &::-ms-input-placeholder {
        /* Microsoft Edge */
        color: white;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.4);
      }

      &:focus {
        background-color: white;
        width: 300px;

        color: #53e3a6;
      }
    }

    button {
      appearance: none;
      outline: 0;
      background-color: white;
      border: 0;
      padding: 10px 15px;
      color: #53e3a6;
      border-radius: 3px;
      width: 250px;
      cursor: pointer;
      font-size: 18px;
      transition-duration: 0.25s;

      &:hover {
        background-color: rgb(245, 247, 249);
      }
    }
  }
`;

const Login = () => {
  return (
    <LoginWrapper>
      <div className="wrapper">
        <div className="container">
          <h1>Welcome</h1>

          <form className="form">
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button type="submit" id="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </LoginWrapper>
  );
};

export default Login;
