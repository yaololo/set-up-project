import React from "react";
import ajax from "../lib/axios";
import MockAdapter from "axios-mock-adapter";
import EmployeeExplore from "../components/employee-explore";
import { act } from "react-dom/test-utils";

import {
  cleanup,
  render,
  fireEvent,
  waitForElement
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeAll(async () => {
  const mockAxios = new MockAdapter(ajax);
  mockAxios
    .onGet("http://api.additivasia.io/api/v1/assignment/employees/Ayam")
    .reply(200, ["employee"]);
  mockAxios
    .onGet("http://api.additivasia.io/api/v1/assignment/employees/Chili")
    .reply(200, ["employee"]);

  mockAxios
    .onGet("http://api.additivasia.io/api/v1/assignment/employees/John")
    .reply(200, ["ceo", { "direct-subordinates": ["Ayam", "Chili"] }]);

  await new Promise((res: any, rej: any) => {
    setTimeout(() => {
      res();
    }, 0);
  });
});

afterEach(cleanup);

describe("Default view", () => {
  const getMock = jest.spyOn(ajax, "get");
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("User should see a search button", () => {
    const { getByText } = render(<EmployeeExplore />);
    expect(getByText("Search")).toBeInTheDocument();
  });

  test("It contains an overview heading", () => {
    const { getByText } = render(<EmployeeExplore />);
    expect(getByText("Overview")).toBeInTheDocument();
  });

  test("should not fetch data if input value is empty", () => {
    const { getByText } = render(<EmployeeExplore />);
    act(() => {
      fireEvent.click(getByText("Search"));
    });
    expect(getMock).toBeCalledTimes(0);
  });
});

describe("When user input valid employee name and click search button", () => {
  const getMock = jest.spyOn(ajax, "get");
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch data 3 time if search for 'John' and display sub ordinates employee name", async () => {
    const { getByText, getByPlaceholderText } = render(<EmployeeExplore />);
    const input = getByPlaceholderText("Search...");
    act(() => {
      fireEvent.change(input, { target: { value: "John" } });
      fireEvent.click(getByText("Search"));
    });

    const employeeAyam = await waitForElement(() => getByText("Ayam"));
    const employeeChili = await waitForElement(() => getByText("Chili"));
    expect(employeeAyam).toBeInTheDocument();
    expect(employeeChili).toBeInTheDocument();
    expect(getMock).toHaveBeenCalledTimes(3);
  });
});

describe("When user input invalid employee name and click search button", () => {
  const getMock = jest.spyOn(ajax, "get");
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should fetch data 3 time if search for 'John' and display sub ordinates employee name", async () => {
    const { getByText, getByPlaceholderText, container } = render(
      <EmployeeExplore />
    );
    const input = getByPlaceholderText("Search...");
    act(() => {
      fireEvent.change(input, { target: { value: "Dummy user" } });
      fireEvent.click(getByText("Search"));
    });

    const errorMsg = await waitForElement(() =>
      container.querySelector(".error-msg")
    );
    expect(errorMsg).toHaveTextContent(
      "Dummy User is not a valid employee name!"
    );
    expect(getMock).toHaveBeenCalledTimes(1);
  });
});
