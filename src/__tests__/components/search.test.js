import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Search from "../../components/Search";
import Providers from "../../providers";
import api from "../../../src/services/index";
import MockAdapter from "axios-mock-adapter";
import Address from "../../components/Cep";
const apiMock = new MockAdapter(api);
describe("Search component", () => {
  it("It should be able to send", () => {
    apiMock.onGet("/11713290").replyOnce(200, {});
    render(
      <Providers>
        <Search />
        <Address />
      </Providers>
    );
    const addressTextField = screen.getByPlaceholderText(/Insira o CEP/);
    const button = screen.getByTestId("Button");
    fireEvent.change(addressTextField, { target: { value: 11713290 } });
    fireEvent.click(button);

    expect(addressTextField).toHaveValue(11713290);
  });
});
