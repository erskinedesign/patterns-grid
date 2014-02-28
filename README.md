EDX Grid Pattern
------------

A customisable, fully responsive grid system with multiple breakpoints that we use for multiple Erskine projects.

For implementing this module into a project take a look at the [docs](http://erskinedesign.github.io/patterns-grid/).

[![The docs](http://cl.ly/image/160N1K1J3V3q/Screen%20Shot%202014-02-28%20at%2014.10.54.png)](http://erskinedesign.github.io/patterns-grid)


## Features
- Fluid grid with fixed gutters.
- Multiple breakpoints for fine control over responsive components.
- Breakpoint specific grid columns.
- Push grid columns left or right and center smaller columns.
- No .clear, .start, .end or .last classes.


## Dependencies
- Sass
- Compass
- Breakpoint


## Additions to be made
- [] Add support for older browsers that don’t parse REM units with Compass.
- [X] Use the latest release of Breakpoint.
- [X] Set breakpoints with Sass maps. This way we won’t need to loop over the respond-to mixin over and over again.
- [X] Set colors to specific breakpoints (ie. medium == red, large == blue, etc.)
- [X] Shorten the length of grid column class names to g--12--medium.
- [X] Place underscores in front of variables / mixins that are not global.
- [X] Need to turn off certain parts of the grid system by default. We need some kind of directory structure for a module’s settings, config and imports. 


## Acknowledgements
- [Griddle](https://github.com/necolas/griddle) by Nicholas Gallagher
- [csswizardry-grid](https://github.com/csswizardry/csswizardry-grids) by Harry Roberts
- [Better, simpler grid systems](http://philipwalton.github.io/solved-by-flexbox/demos/grids/) by Phil Walton
