# 🎨 Random Color Generator

This mini React app generates random HEX or RGB background colors when you click a button.

## 🛠️ What I built

- A full-screen background that updates with a random color.
- Three buttons:
  1. **HEX Color** – sets mode to generate HEX.
  2. **RGB Color** – sets mode to generate RGB.
  3. **Generate Random Color** – creates a new color depending on the selected mode.
- Below the buttons, the current color type and the generated color are displayed.

## 🧠 What I learned

- `useState` hook to manage both the color type (`hex` or `rgb`) and the current color value.
- How to dynamically change styles in JSX using inline styling and `style={{}}` syntax.
- Writing utility logic to create:
  - A random HEX color by looping 6 times and grabbing characters from a HEX array.
  - A random RGB color using `Math.random()` and `Math.floor()` to get values from 0–255.
- Conditional rendering based on state (e.g., showing HEX or RGB based on user choice).

## 🧵 Logic flow

1. When a user clicks either "HEX" or "RGB", we update the color type using `setTypeOfColor`.
2. The "Generate Random Color" button runs a different function depending on the mode.
3. The background updates using `setColor()` with the generated color string.
4. Text below shows what type of color is selected and the color code currently active.
