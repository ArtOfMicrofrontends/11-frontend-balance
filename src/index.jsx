import * as React from "react";
import { render } from "react-dom";

let BalanceSheet = undefined;

export function setup(api) {
  api.registerPage("/", {
    bootstrap: () =>
      import("./BalanceSheet").then((content) => {
        BalanceSheet = content.BalanceSheet;
      }),
    mount: (target) => render(<BalanceSheet onRender={api.renderExtension} />, target),
    unmount: (target) => render(null, target),
  });
}
