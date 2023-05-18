[![Bit Org Learnbit React](https://img.shields.io/badge/Bit-@learnbit--react-2C00C3)](https://bit.cloud/learnbit-react)
[![Scope Common Render Context](https://img.shields.io/badge/Scope-Common--Render--Context_(4)-820596)](https://bit.cloud/learnbit-react/common-render-context)

# Common Render Context
If you are using custom render context such as a Theme Provider, you need to wrap your components both for previewing and test execution for expected functinoality. You can create a common render context and share it between the Env mounter and Test runner.  
Let's look at how to create one and use it for a demo component. 

## Creating a Common Render Context
The easiest way is to create a new Bit component that has the render context logic. For example, following render context uses a Theme Provider thats needed by all the MUI components.

```ts
/* my-render-context.tsx */

import React, { ReactNode } from "react";
import { Box } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export interface MyRenderContextProps {
  children: ReactNode;
}
const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(44, 0, 195)',
    },
    secondary: {
      main: 'rgb(76, 175, 255)',
    },
  },
});
export function MyRenderContext({ children }: MyRenderContextProps) {
  return (
    <ThemeProvider theme={theme}>
    <Box sx={{ p: 5 }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end" }}/>
      {children}
    </Box>
    </ThemeProvider>
  );
}
```

### 1. With Env Mounter

In the Env mounter, you can import the common render context and use it as shown below.

```ts
import { createMounter } from '@teambit/react.mounter';
import { MyRenderContext } from '@learnbit-react/common-render-context.render.my-render-context';
export default createMounter(MyRenderContext) as any;

```

### 2. With Test Runner
When running the test cases, you can import the common render context and wrap your components as shown below.

```ts
import React from 'react';
import { render } from '@testing-library/react';
import { MyRenderContext } from '@learnbit-react/common-render-context.render.my-render-context';
import { SampleButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<MyRenderContext><SampleButton /></MyRenderContext>);
  const rendered = getByText('Click Me!');
  expect(rendered).toBeTruthy();
});

it('should render with the theme color', () => {
  const { getByText } = render(<MyRenderContext><SampleButton /></MyRenderContext>);
  const rendered = getByText('Click Me!');
  const styles = window.getComputedStyle(rendered);
  const primaryColor = 'rgb(44, 0, 195)';
  expect(styles.backgroundColor).toBe(primaryColor);
});
```

### Creating a Custom Render for Test Reusability
Wrapping each component with the shared render context in every test case lead to repetition of code. To avoid this, you can create a custom render function:

```ts
import React from "react";
import { RenderResult, render } from "@testing-library/react";
import { MyRenderContext } from "@learnbit-react/common-render-context.render.my-render-context";

export function myRender(children: React.JSX.Element): RenderResult {
  return render(<MyRenderContext>{children}</MyRenderContext>);
}
```

Then in each test case you can use the `myRender` as follows.

```ts
import { myRender } from './myRender';
import { SampleButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = myRender(<SampleButton />);
  const rendered = getByText('Click Me!');
  expect(rendered).toBeTruthy();
});

it('should render with the theme color', () => {
  const { getByText } = myRender(<SampleButton />);
  const rendered = getByText('Click Me!');
  const styles = window.getComputedStyle(rendered);
  const primaryColor = 'rgb(76, 175, 255)';
  expect(styles.backgroundColor).toBe(primaryColor);
});
```

Now you can use the `myRender` for all your unit tests.
