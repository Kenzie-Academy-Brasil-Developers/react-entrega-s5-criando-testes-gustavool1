import React from "react";
import { screen, render } from "@testing-library/react";
import Search from "../../src/components/Search";
import Providers from "../providers";

describe("Button", () => {
  it("Should be able to render an button", () => {
    render(
      <Providers>
        <Search />
      </Providers>
    );
    expect(screen.getByTestId("Button")).toBeTruthy();
  });
});
