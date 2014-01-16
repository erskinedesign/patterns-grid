# Grid
Default go-to grid system with common modules built in for easy setup grids.


### Rules
- Separate grid container from grid columns.
- Add viewport-specific classes to the cells, (medium--1of3, large--5of7,etc).
- Supports multiple grid types (grid--a, grid--b, etc).
- Backwards compatible with IE8 and up.
- No .clear, .start, .end or .last classes.
- Should be able to center columns.
- Lightweight + fast (compiles into small amount of CSS).
- Sometimes need children of a grid to break the width of a column.
- Grid toggler script.


#### Grid toggler
- Automatically creates number of columns based on $columns variable.
- Sets background-color of grid--overlay__cell.


### Dependencies
- Compass
- Breakpoint