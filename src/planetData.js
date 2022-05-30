import t1 from './assets/textures/1.jpeg';
import t2 from './assets/textures/2.jpeg';
import t3 from './assets/textures/3.jpeg';
import t4 from './assets/textures/4.jpeg';
import t5 from './assets/textures/5.jpeg';
import t6 from './assets/textures/6.jpeg';
import t7 from './assets/textures/7.jpeg';
import t8 from './assets/textures/8.jpeg';

const random = (a, b) => a + Math.random() * b;

const earthXOrbit = 80;
const earthZOrbit = 74;

const earthSize = 0.2;

const planetData = [
  {
    id: 1,

    // orbit radius
    xRadius: 0.38 * earthXOrbit,
    zRadius: 0.38 * earthZOrbit,

    //diameter
    size: earthSize * 0.4,

    //speed of revolution
    speed: random(0.005, 0.006),

    //offset before revolution
    offset: random(0, Math.PI * 2),

    //speed for rotation
    rotationSpeed: random(0.008, 0.004),

    //texture
    textureMap: t1,

    //name of planet
    name: 'Mercury',
  },
  {
    id: 2,
    xRadius: 0.72 * earthXOrbit,
    zRadius: 0.72 * earthZOrbit,
    size: earthSize * 0.9,
    speed: random(0.005, 0.006),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: t2,
    name: 'Venus',
  },

  {
    id: 3,
    xRadius: 1 * earthXOrbit,
    zRadius: 1 * earthZOrbit,
    size: earthSize * 1,
    speed: random(0.005, 0.006),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: t3,
    name: 'Earth',
  },
  {
    id: 4,
    xRadius: 1.5 * earthXOrbit,
    zRadius: 1.5 * earthZOrbit,
    size: earthSize * 0.5,
    speed: random(0.005, 0.006),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: t4,
    name: 'Mars',
  },
  {
    id: 5,
    xRadius: 5.2 * earthXOrbit,
    zRadius: 5.2 * earthZOrbit,
    size: earthSize * 11,
    speed: random(0.005, 0.006),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: t5,
    name: 'Jupiter',
  },
  {
    id: 6,
    xRadius: 9.5 * earthXOrbit,
    zRadius: 9.5 * earthZOrbit,
    size: earthSize * 9,
    speed: random(0.005, 0.006),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: t6,
    name: 'Saturn',
  },
  {
    id: 7,
    xRadius: 19.3 * earthXOrbit,
    zRadius: 19.2 * earthZOrbit,
    size: earthSize * 4,
    speed: random(0.005, 0.006),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: t7,
    name: 'Uranus',
  },
  {
    id: 8,
    xRadius: 30.1 * earthXOrbit,
    zRadius: 30.1 * earthZOrbit,
    size: earthSize * 3.8,
    speed: random(0.005, 0.006),
    offset: random(0, Math.PI * 2),
    rotationSpeed: random(0.008, 0.004),
    textureMap: t8,
    name: 'Neptune',
  },
];

export default planetData;
