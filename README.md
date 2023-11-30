# Random Color Palette Generator

This React.js application generates a random color palette and displays it in a visually appealing manner. It's a fun and interactive way to explore different color combinations.

Features:

* Generates a random color palette of five colors
* Displays the color palette as a set of colorful swatches
* Easy to use and fun to play with

To use

1. Clone the repository
2. Install the dependencies
3. Run the application

Dependencies:

* React
* React-Native
* Expo (optional)

Example:

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import ColorPaletteGenerator from './ColorPaletteGenerator';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ColorPaletteGenerator />
    </View>
  );
}
