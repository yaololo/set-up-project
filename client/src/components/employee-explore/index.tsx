import React, { useState, useRef } from "react";
import { StyledButton, SearchWrapper } from "./styles";
import ajax from "../../lib/axios";
import { IEmployeeResponse } from "../../interface/employee";
import Loading from "../public/loading-spinner";
import Overview from "./overview";

const EmployeeExplore = () => {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [employeeName, setEmployeeName] = useState<string>("");
  const [subordinates, setSubordinates] = useState<Array<string>>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (
      inputRef.current!.value.trim() !== "" &&
      inputRef.current!.value !== null &&
      inputRef.current!.value !== undefined
    ) {
      setSubordinates([]);
      setErrorMsg("");
      setIsFetching(true);
      setEmployeeName(inputRef.current!.value.trim());

      let buffer: Array<string> = [];
      await getSubordinates(inputRef.current!.value.trim(), buffer);

      setIsFetching(false);
      setSubordinates(buffer);
    }
  };

  const getSubordinates = async (
    currentEmployeeName: string,
    buffer: Array<string>
  ) => {
    const result = await fetchData(currentEmployeeName);
    if (result && result[1] && result[1]["direct-subordinates"]) {
      const subordinateNames = result[1]["direct-subordinates"];
      for (let i = 0; i < subordinateNames.length; i++) {
        // avoid unnecessary fetch if the employee is already checked
        if (buffer.includes(subordinateNames[i])) {
          return;
        }
        buffer.push(subordinateNames[i]);
        await getSubordinates(subordinateNames[i], buffer);
      }
    } else if (!result) {
      // result is false indicating api fail, should display error msg
      if (currentEmployeeName === inputRef.current!.value.trim()) {
        const invalidEmployee = inputRef
          .current!.value.trim()
          .split(" ")
          .map(el => el.charAt(0).toUpperCase() + el.slice(1))
          .join(" ");
        setErrorMsg(`${invalidEmployee} is not a valid employee name!`);
      } else {
        setErrorMsg("There was an network error, please try again later.");
      }
    } else {
      return true;
    }
  };

  const fetchData = async (employeeName: string) => {
    try {
      const { data } = await ajax.get<IEmployeeResponse>(
        `http://api.additivasia.io/api/v1/assignment/employees/${employeeName}`
      );
      return data;
    } catch (e) {
      return false;
    }
  };

  return (
    <>
      <SearchWrapper>
        <h1>Employee Explore</h1>
        <div className="search-field">
          <input
            type="text"
            placeholder="Search..."
            name="search"
            ref={inputRef}
          />
          <StyledButton
            disabled={isFetching}
            onClick={handleSearch}
            isFetching={isFetching}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              {isFetching ? <Loading /> : null}
              <span style={{ marginLeft: 10, fontSize: "1.2em" }}>Search</span>
            </div>
          </StyledButton>
        </div>
      </SearchWrapper>
      <Overview
        errorMsg={errorMsg}
        employeeName={employeeName}
        subordinates={subordinates}
        isLoading={isFetching}
      ></Overview>
    </>
  );
};

export default EmployeeExplore;
