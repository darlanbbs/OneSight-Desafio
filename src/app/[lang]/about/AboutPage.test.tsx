import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import About from "./page";
import { Locale } from "@/app/config/i18n.config";

test("should render the heading", () => {
  // Teste para lang "en-US"
  const valueEn = { lang: "en-US" as Locale };
  const { container: containerEn } = render(<About params={valueEn} />);
  expect(containerEn.innerHTML).toContain("About");

  // Teste para lang "pt-BR"
  const valuePt = { lang: "pt-BR" as Locale };
  const { container: containerPt } = render(<About params={valuePt} />);
  expect(containerPt.innerHTML).toContain("Sobre");
});
