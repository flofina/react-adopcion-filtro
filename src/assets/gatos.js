import card1 from './images/cards1-img.PNG';
import card2 from './images/cards2-img.PNG';
import card3 from './images/cards3-img.PNG';
import card4 from './images/cards4-img.PNG';
import card5 from './images/cards5-img.PNG';

const arrayGatos = [
  {
    name: "Renata",
    img: card1,
    shortDesc: "Tiene 1 año, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["gris"],
    sex: "f",
    available: true,
    extras: [{vacunado: true, desparasitado: true}]
  },
  {
    name: "Beto",
    img: card2,
    shortDesc: "Tiene 2 años, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["naranja"],
    sex: "m",
    available: false,
    extras: [{vacunado: true, desparasitado: false}]
  },
  {
    name: "Mecha",
    img: card3,
    shortDesc: "Tiene 1 año, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["blanco", "negro"],
    sex: "f",
    available: true,
    extras: [{vacunado: true, desparasitado: false}]
  },
  {
    name: "Silvestre",
    img: card4,
    shortDesc: "Tiene 2 años, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["atigrado"],
    sex: "m",
    available: true,
    extras: [{vacunado: false, desparasitado: true}]
  },
  {
    name: "Blackie",
    img: card5,
    shortDesc: "Tiene 2 años, le gusta perseguir mariposas, se lleva bien con ninios, gatos y perros.",
    longDesc: "Temporibus quam id inventore laboriosam repudiandae modi blanditiis porro sint ullam, distinctio commodi, accusantium aut! Voluptatem totam, dolor doloribus id distinctio obcaecati inventore velit temporibus architecto quis.",
    color: ["negro"],
    sex: "m",
    available: false,
    extras: [{vacunado: false, desparasitado: false}]
  }
];

export default arrayGatos;