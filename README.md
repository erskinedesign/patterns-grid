# EDX Grid Pattern
A customisable, fully responsive grid system with multiple breakpoints.


## Features
- Fluid grid.
- Nesting (only one layer deep though).
- Add viewport-specific classes to the cells.
- Supports multiple grid types (grid--a, grid--b, etc).
- No .clear, .start, .end or .last classes.
- Push classes left or right for more customisation.
- Grid toggler for viewing 

## Problems
- Creates an enormous amount of CSS (we suggest you use a Grunt tool to remove unused classes).

#### Grid toggler
The grid toggler hides the `.grid--overlay` wrapper and automatically generates the number of columns that is being used in the `.grid--overlay` modifier. This means that if we update the number of columns in the overlay we won’t have change the script at all. 

The grid toggler is written in plain Javascript so that we can move this into an asynchronous module later on if we wish.



### Dependencies
- Compass
- Breakpoint


### Acknowledgements
- [Griddle](https://github.com/necolas/griddle) by Nicholas Gallagher
- [csswizardry-grid](https://github.com/csswizardry/csswizardry-grids) by Harry Roberts