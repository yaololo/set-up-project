import styled from "styled-components";

const StyledButton = styled.button<{ isFetching: boolean }>`
  color: #fff;
  background-color: #1890ff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  -webkit-box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  outline: 0;
  font-size: 14px;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  opacity: ${props => (props.isFetching ? 0.5 : 1)};

  :hover {
    cursor: ${props => (props.isFetching ? "auto" : "pointer")};
  }
`;

const SearchWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 15vh auto 0 auto;
  text-align: center;

  .search-field {
    width: 100%;
    display: flex;
    justify-content: center;
    max-width: 500px;
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
  }

  input {
    margin-right: 20px;
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

const OverviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  max-width: 600px;
  margin: 0 auto;

  h1 {
    text-align: center;
  }

  .content {
    max-width: 500px;
    padding: 20px;
    box-sizing: border-box;
    margin-left: 40px;

    b {
      text-transform: capitalize;
    }
  }

  .loading {
    text-align: center;
  }

  .error-msg {
    color: red;
  }
`;

export { StyledButton, SearchWrapper, OverviewWrapper };
