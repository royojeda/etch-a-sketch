# etch-a-sketch

This is a browser version of something like etch-a-sketch but with mouse control. Hovering over any cell in the displayed grid will fill it with a black color. The dimensions of the grid is fixed, but the user can enter their desire number of cells per side of the grid (which is always a square) from 1 to 100.

The project is meant to test and demonstrate skill in DOM-manipulation, therefore the HTML body is intentionally left empty, and everything displayed on the page is achieved using mostly javascript and a little bit of basic and flexbox CSS.

The following skills are demonstrated in this project (aside from those already listed in the odin-recipes, landing-page, and rock-paper-scissors projects):
 - Creating HTML elements from the associated javascript file (createElement)
 - Editing element attributes using javascript (setAttribute)
 - Using more new DOM methods (appendChild, insertBefore, hasChildNodes)
 - Nesting loops, using continue and break as necessary, breaking out of the outer loop from the inner loop
 - Adding event listener to new event (mouseover)
 - Adding error handling for an input prompt that covers cancelled prompts, and unique new prompts depending on the type of undesired input that is received (undefined, null, '', non-numeric, non-integer, outside the range of 1 to 100)