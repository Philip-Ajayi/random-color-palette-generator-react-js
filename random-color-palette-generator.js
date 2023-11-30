import React, { useState } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const ColorPaletteGenerator = () => {
  const [colors, setColors] = useState([]);

  const generatePalette = () => {
    const newColors = [];
    for (let i = 0; i < 5; i++) {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.random();
      const lightness = 0.5 + Math.random();

      const newColor = {
        hue,
        saturation,
        lightness,
      };
      newColors.push(newColor);
    }

    setColors(newColors);
  };

  const renderColorSwatch = (color) => {
    const hslString = `hsl(${color.hue}, ${color.saturation * 100}%, ${color.lightness * 100}%)`;
    return (
      <View
        key={color.hue}
        style={[styles.colorSwatch, { backgroundColor: hslString }]}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Color Palette Generator</Text>

      <View style={styles.buttonContainer}>
        <Button title="Generate Palette" onPress={generatePalette} />
      </View>

      <ScrollView style={styles.colorPalette}>
        {colors.map((color) => renderColorSwatch(color))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  colorPalette: {
    flex: 1,
    width: '95%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  colorSwatch: {
    width: 100,
    height: 100,
    margin: 10,
  },
});

export default ColorPaletteGenerator;
