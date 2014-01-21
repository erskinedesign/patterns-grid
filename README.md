# EDX Grid Pattern
A customisable, fully responsive grid system with multiple breakpoints.

This is the grid system that we’ve been using internally at Erskine, based on a lot of the problems that we’ve been encountering over and over again.


## Features
- Fluid grid with fixed gutters.
- Multiple breakpoints for fine control over responsive components.
- Breakpoint specific grid columns.
- Push grid columns left or right and center smaller columns.
- No .clear, .start, .end or .last classes.
- Complimentary grid overlay script.


## Compromises
- Generates an enormous amount of CSS – we recommend using a Grunt tool such as [Uncss](https://github.com/addyosmani/grunt-uncss) to strip out any unused styles.
- Grid units should only be set with these classes in the markup (rather than extended from another module entirely). Currently there’s no ability to change the width of a specific component with these settings.
- Due to the amount of CSS this module generates, you can only nest grid columns twice.


## Browser Support
- Chrome 32.0, Firefox 26.0, Safari 7.0


### Dependencies
- Sass
- Compass
- Breakpoint


### Acknowledgements
- [Griddle](https://github.com/necolas/griddle) by Nicholas Gallagher
- [csswizardry-grid](https://github.com/csswizardry/csswizardry-grids) by Harry Roberts
- [Better, simpler grid systems](http://philipwalton.github.io/solved-by-flexbox/demos/grids/) by Phil Walton