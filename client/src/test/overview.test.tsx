import React from "react";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Overview from "../components/employee-explore/overview";
import { getByTestId } from "@testing-library/dom";

afterEach(cleanup);

describe("Overview", () => {
  describe("when error message present", () => {
    test("should display error message only", () => {
      const dummyData = {
        errorMsg: "Some error message",
        subordinates: ["employee1", "employee2"],
        isLoading: false,
        employeeName: "John"
      };

      const { queryByText, container } = render(<Overview {...dummyData} />);
      expect(container.querySelector(".error-msg")).toHaveTextContent(
        dummyData.errorMsg
      );
      expect(queryByText(dummyData.subordinates[0])).toBeNull();
    });
  });

  describe("error message is not present and subordinates is not empty", () => {
    test("should show subordinates employee names", () => {
      const dummyData = {
        errorMsg: "",
        subordinates: ["employee1", "employee2"],
        isLoading: false,
        employeeName: "John"
      };

      const { getByText, container } = render(<Overview {...dummyData} />);

      expect(container.querySelector(".error-msg")).toBeNull();
      expect(getByText(dummyData.subordinates[0])).toBeInTheDocument();
      expect(getByText(dummyData.subordinates[1])).toBeInTheDocument();
    });
  });

  describe("error message is not present and subordinates is empty", () => {
    test("should show no subordinates message", () => {
      const dummyData = {
        errorMsg: "",
        subordinates: [],
        isLoading: false,
        employeeName: "John"
      };
      const message = `There is not subordinates for ${dummyData.employeeName}`;
      const { container } = render(<Overview {...dummyData} />);
      expect(getByTestId(container, "no-subordinates")).toHaveTextContent(
        message
      );
    });
  });
});
