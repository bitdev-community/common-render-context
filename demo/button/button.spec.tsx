import React from 'react';
import { render } from '@testing-library/react';
import { MyRenderContext } from '@learnbit-react/common-render-context.render-contexts.my-render-context';
import { SampleButton } from './button.composition';

it('should render with the correct text', () => {
  const { getByText } = render(<MyRenderContext><SampleButton /></MyRenderContext>);
  const rendered = getByText('Click Me!');
  expect(rendered).toBeTruthy();
});

