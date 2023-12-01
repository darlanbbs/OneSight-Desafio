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

import Contact from "./page";
import { Locale } from "@/app/config/i18n.config";

test("should render the heading", () => {
  const valueEn = { lang: "en-US" as Locale };
  const { container: containerEn } = render(<Contact params={valueEn} />);
  expect(containerEn.innerHTML).toContain("Get in touch with us.");

  const valuePt = { lang: "pt-BR" as Locale };
  const { container: containerPt } = render(<Contact params={valuePt} />);
  expect(containerPt.innerHTML).toContain("Entre em contato conosco");
});
