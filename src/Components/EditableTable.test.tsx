import '@testing-library/jest-dom'
import { render,  waitFor, screen } from "@testing-library/react";
import EditableTable from "./EditableTable";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("EditableTable", () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: [
        { userId: 1, id: 1, title: "Title 1", body: "Body 1" },
        { userId: 2, id: 2, title: "Title 2", body: "Body 2" },
      ],
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders table headers correctly", async () => {
    render(<EditableTable />);
    await waitFor(() => expect(screen.getByText("User ID")).toBeInTheDocument());
    expect(screen.getByText("ID")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Body")).toBeInTheDocument();
  });

  it("displays data correctly", async () => {
    render(<EditableTable />);
    await waitFor(() => expect(screen.getByText("Title 1")).toBeInTheDocument());
    expect(screen.getByText("Title 2")).toBeInTheDocument();
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });

  

  it("handles API errors gracefully", async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error("Network Error"));

    render(<EditableTable />);
    await waitFor(() => expect(screen.getByText("Error: Network Error")).toBeInTheDocument());
  });
});
 