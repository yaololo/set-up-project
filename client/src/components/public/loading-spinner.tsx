import styled from "styled-components";

const Loading = styled.span`
  position: relative;
  display: inline-block;
  font-size: 20px;
  width: 0.8em;
  height: 0.8em;
  border: 3px solid #ccc;
  border-radius: 50%;
  border-top-color: #fff;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;

export default Loading;
