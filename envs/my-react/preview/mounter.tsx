import { createMounter } from '@teambit/react.mounter';
import { MyRenderContext } from '@learnbit-react/common-render-context.render.my-render-context';

/**
 * use the mounter to inject and wrap your component previews
 * with common needs like [routing](), [theming]() and [data fetching]().
 */


/**
 * to replace that mounter component for different purposes, just return a function
 * that uses ReactDOM to render a node to a div.
 */
// @ts-ignore
export default createMounter(MyRenderContext) as any;


