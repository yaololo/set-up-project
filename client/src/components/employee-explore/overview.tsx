import React from "react";
import Loading from "../public/loading-spinner";
import { OverviewWrapper } from "./styles";

interface IProps {
  errorMsg: string;
  subordinates: Array<string>;
  isLoading: boolean;
  employeeName: string;
}

const Overview: React.FC<IProps> = props => {
  const noEmployeeNameView = () => {
    return (
      <div>Type in employee name and search for his/her subordinates!</div>
    );
  };

  const withEmployeeNameView = (
    subordinates: Array<string>,
    employeeName: string
  ) => {
    return (
      <>
        {subordinates.length === 0 ? (
          <div data-testid="no-subordinates">
            There is not subordinates for <b>{employeeName}</b>.
          </div>
        ) : (
          <div>
            Subordinates of employee <b>{props.employeeName}</b>:
            <ol>
              {props.subordinates.map((name, idx) => (
                <React.Fragment key={idx}>
                  <li>{name}</li>
                </React.Fragment>
              ))}
            </ol>
          </div>
        )}
      </>
    );
  };

  return (
    <OverviewWrapper>
      <h1>Overview</h1>
      {props.isLoading ? (
        <div className="loading">
          <Loading></Loading>
        </div>
      ) : (
        <div className="content">
          {props.errorMsg !== "" ? (
            <div className="error-msg">{props.errorMsg}</div>
          ) : props.employeeName ? (
            withEmployeeNameView(props.subordinates, props.employeeName)
          ) : (
            noEmployeeNameView()
          )}
        </div>
      )}
    </OverviewWrapper>
  );
};

export default Overview;
