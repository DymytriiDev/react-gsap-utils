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

Easily animate conditional rendering (mount/unmount) of any custom elements.

Parameters:
- **mounted** (boolean) - Mount/unmount condition.
- **fromTo** (gsap.fromToVars) - Animation properties, as in gsap.fromTo().
- **className** (string) - CSS classname for the component.

Returns: React.ReactElement || null 

```
import { AnimateOnMount } from "@lynksen/react-gsap-utils";

<AnimateOnMount
    mounted={condition}
    fromTo={[
      { opacity: 0, y: "60%" },
      { opacity: 1, y: "0%", duration: 1 },
    ]}
>
   <div>Animating mount and unmount on condition change</div>
</AnimateOnMount>
```

### 2. Animate On Scroll

Zero-config ScrollTrigger component for children reveal animation.

Parameters:
- **children** - The content to be animated.
- **YOffset** (int) - The offset in percentage from the top of the viewport where the animation should start.
- **from** (gsap.fromVars) - The initial animation properties (as in gsap.from())
- **className** (string) - CSS classname for the container.
- **childClassName** (string) - CSS classname for the child element.
- **onComplete** (function) - Callback function to be called when the animation completes.
- **onStart** (function) - Callback function to be called when the animation starts.
- **debug** (boolean) - Whether to show debug markers.

Returns: React.ReactElement

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
