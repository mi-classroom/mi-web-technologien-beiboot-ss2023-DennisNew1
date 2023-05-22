# Programming Language & UI Frameworks - js, vanilla HTML & CSS

## Status

Accepted

## Context

While this milestone requires mostly testing of augmented reality and 3D Frameworks, a UI-Framework could be included for easier handling and presenation of solutions. Also, a programming language is needed for creating the web application. However there are not many widespread alternatives right now:

- javaScript
- typeScript

and for UI related work there is a big amount but especially:

- vue.js
- angular
- react
- vanilla HTML & CSS

## Decision

As we only need the most basic functionalities, typeScript would be "over the top". So javascript is choosen as language. The same principle is used for the UI. HTML and CSS will keep the web app light and working just fine for the requirements right now. 

## Consequences

### Pros
- light project
- less configuration
- flexible for later technology changes
- no additional packages
- less dependencies
- less sources of errors
### Cons
- no type safety
- less IDE help
- no SPA Features (realtime server, variable bindings, reactivity etc.)
- no routing functions

