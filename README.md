# React GSAP Utils

Collection of zero-config, drop-in utilities to animate React elements and components using GSAP.
Supports all GSAP Tween animation props.

#### See the DEMO on Codepen

- 👍🏻 Zero-config, easy to use
- 👌🏻 No dependencies, only 16KB unpacked size
- 🧩 Fully written in TypeScript
- ✅ Compatible with existing GSAP's ScrollSmoother, ScrollTriggers in your project

## Installation

`npm install @lynksen/react-gsap-utils`

## Usage

### 1. Animate On Mount

Easily animate any custom elements mount/unmount based on conditional rendering.

- param {Object} props - The component props.
- param {React.ReactNode} props.children - The children to be animated.
- param {boolean} props.mounted - Determines whether the component is mounted or not.
- param {string} props.className - The CSS class name for the component.
- param {Array<Object>} props.fromTo - The animation configuration for the component.
- param {number} props.fromTo[].opacity - The initial opacity value.
- param {number} props.fromTo[].y - The initial y-axis position.
- param {number} props.fromTo[].duration - The duration of the animation.
- param {string} props.fromTo[].ease - The easing function for the animation.
- returns {React.ReactElement} The rendered component.

```
import { AnimateOnMount } from "@lynksen/react-gsap-utils";

<AnimateOnMount
    mounted={condition}
    fromTo={[
      { opacity: 0, y: "60%" },
      { opacity: 1, y: "0%" },
    ]}
>
  <YourCustomElement>
   <p>Animating mount and unmount on condition change</p>
  </YourCustomElement>
</AnimateOnMount>
```

### 2. Animate On Scroll

A no-config ScrollTrigger component for children reveal animation.

- @param children - The content to be animated.
- @param int YOffset - The offset in percentage from the top of the viewport where the animation should start.
- @param from - The initial animation properties (as in gsap.from())
- @param string className - Additional class name for the container.
- @param childClassName - Additional class name for the child element.
- @param onComplete - Callback function to be called when the animation completes.
- @param onStart - Callback function to be called when the animation starts.
- @param debug - Whether to show debug markers during animation.

```
import { AnimateOnScroll } from "@lynksen/react-gsap-utils";

<AnimateOnScroll
>
  <YourCustomElement>
   <p>Revealing and disappearing according to the scroll animation defined.</p>
  </YourCustomElement>
</AnimateOnScroll>
```

## Caveats

- ⚠️ Compatibility with custom scroll smoothing libraries may not be possible.

#### License

[MIT](LICENSE).
