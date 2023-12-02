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

import About from "./page";
import { Locale } from "@/app/config/i18n.config";

test("should render the heading on the AboutPage", () => {
  const valueEn = { lang: "en-US" as Locale };
  const { container: containerEn } = render(<About params={valueEn} />);
  expect(containerEn.innerHTML).toContain("About");

  const valuePt = { lang: "pt-BR" as Locale };
  const { container: containerPt } = render(<About params={valuePt} />);
  expect(containerPt.innerHTML).toContain("Sobre");
});
