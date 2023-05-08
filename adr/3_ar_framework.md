# AR Framework - AR.js

## Status

Accepted

## Context
For the requirements an augmented reality frameworks is needed. There are a few options:

- AR.js
- WebXR
- 8thWall


## Decision
[8thWall WebAR](https://www.8thwall.com/docs/getting-started/requirements/) provides a lot of features, like remote debugging, anchoring objects to planes/faces and support a wide variety of devices, browsers and 3D Frameworks. However this is a paid solution. Their free trial is only 14 days so this option is not suitable.
The [WebXR API](https://www.w3.org/TR/webxr/) is standarized by the w3c. Also it has a good documentation. Problematic is the [browser support](https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API#browser_compatibility): It does not support any Browser on iOS and only chrome on Andorid (and its forks like Samsungs Internet Browser). It is not planned to exclude roughly 25% of internet users here: https://gs.statcounter.com/. It can be combined with most 3D-Frameworks.
AR.js uses [webGL](https://caniuse.com/webgl) instead. As seen on the link, it is broadly supported in most browsers and furthermore by most mobile devices. It can be used together with a-frame and three.js only. Negative is only the really short and a bit chaotic documentation. Also it only supports marker, image and location based AR. Still the decision was made for AR.js as it provides ease of use in a complex topic and provides the wanted functionality.

## Consequences

### Pros
- A broad amount of devices is supported
- easier to implement

### Cons
- Documentation is bit short
- lesser functionality
- only supports three.js and a-frame



