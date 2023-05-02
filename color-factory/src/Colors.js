import { v4 as uuid } from 'uuid';

class Color {
  constructor(name, rgb) {
    this.name = name;
    this.rgb = rgb;
    this.id = uuid();
  }
}

const allColors = [
  new Color('red', 'rgb(255, 0, 0)'),
  new Color('green', 'rgb(0, 255, 0)'),
  new Color('blue', 'rgb(0, 0, 255)')
];

export { Color, allColors };
