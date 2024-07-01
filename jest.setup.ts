import "@testing-library/jest-dom";
import fetchMock from "jest-mock-fetch";
global.fetch = fetchMock as jest.Mock;
