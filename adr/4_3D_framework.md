# 3D framework - A-frame
## Status

Accepted

## Context
An augmented reality Framework without an 3D Framework is operative. But for showing objects like text, geometrics or even sound a 3D Framework is needed. The AR-Frameworks only allows three.js and a-frame.


## Decision
There are two folders in the [ARJS marker based folder](https://github.com/mi-classroom/mi-web-technologien-beiboot-ss2023-DennisNew1/tree/issue1/ARJS%20marker%20based). In there can be found to POCs for showing a box on a [hiro marker](https://commons.wikimedia.org/wiki/File:Hiro_marker_ARjs.png). 
As seen, both "do the job". Also both frameworks can fullfill the requirement, of showing an object or sound.
Codewise, a-frame needs much less code for a functioning example. However three.js seems to be more customizable on first look. 
From a "keep the project-light" perspective: three.js is intended to be used with node.js. The builded files can still be downloaded and used from there repository.
A-frame can be just loaded via CDN. 
To keep the project light, A-frame was choosen. 

## Consequences

### Pros
- easy to use
- no node.js required 
- keeps project light

### Cons
- framework may need to change in further issues
- examples are outdated or wrong




