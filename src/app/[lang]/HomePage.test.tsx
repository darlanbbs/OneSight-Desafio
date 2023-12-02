jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
    replace: jest.fn(),
    pathname: "/",
    query: {},
    asPath: "/",
  }),
}));

import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import Home from "./page";
import { Locale } from "@/app/config/i18n.config";

test("should render the heading", () => {
  const valueEn = { lang: "en-US" as Locale };
  const { container: containerEn } = render(<Home params={valueEn} />);
  expect(containerEn.innerHTML).toContain("Welcome to Onesight");

  const valuePt = { lang: "pt-BR" as Locale };
  const { container: containerPt } = render(<Home params={valuePt} />);
  expect(containerPt.innerHTML).toContain("Bem-vindo à OneSight");
});
