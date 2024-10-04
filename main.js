import Reveal from './node_modules/reveal.js/dist/reveal.esm.js';
import Markdown from './node_modules/reveal.js/plugin/markdown/markdown.esm.js';
import Highlight from './node_modules/reveal.js/plugin/highlight/highlight.esm.js';
import Badges from './node_modules/@thomasweinert/reveal-badges/src/badges.js';
import Sampler from "./node_modules/@thomasweinert/reveal-sampler/src/sampler.js";
import Menu from "./node_modules/reveal.js-menu/menu.esm.js";

const deck = new Reveal(
  {
    plugins: [Badges, Markdown, Highlight, Sampler, Menu]
  }
)
deck.initialize(
  {
    menu: {
      side: 'left',
      markers: true,
      numbers: false,
      themes: [
        {name: 'Black', theme: './node_modules/reveal.js/dist/theme/black.css'},
        {name: 'White', theme: './node_modules/reveal.js/dist/theme/white.css'}
      ],
    },

    badges: {
      languages: true
    },

    sampler: {
      removeIndentation: true,
      lineNumbers: 'original'
    }
  }
);
