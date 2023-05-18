import React from "react";
import { RenderResult, render } from "@testing-library/react";
import { MyRenderContext } from "@learnbit-react/common-render-context.render.my-render-context";

export function myRender(children: React.JSX.Element): RenderResult {
  return render(<MyRenderContext>{children}</MyRenderContext>);
}
