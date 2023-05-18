import React from "react";
import { testRenderer } from "@learnbit-react/common-render-context.render.test-renderer";
import { SampleButton } from "./button.composition";

it("should render with the correct text", () => {
  const { getByText } = testRenderer(<SampleButton />);
  const rendered = getByText("Click Me!");
  expect(rendered).toBeTruthy();
});

it("should render with the theme color", () => {
  const { getByText } = testRenderer(<SampleButton />);
  const rendered = getByText("Click Me!");
  const styles = window.getComputedStyle(rendered);
  const primaryColor = "rgb(44, 0, 195)";
  expect(styles.backgroundColor).toBe(primaryColor);
});
