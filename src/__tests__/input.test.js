import React from "react";
import Search from "../../src/components/Search";
import { render, screen } from "@testing-library/react";
import Providers from "../providers";

describe("Input", () => {
  test("should be able to render an input", () => {
    render(
      <Providers>
        <Search />;
      </Providers>
    );
    expect(screen.getByPlaceholderText("Insira o CEP")).toBeTruthy();
  });
});
