const wordList = [
  { word: "guitar", hint: "A musical instrument with strings." },
  { word: "oxygen", hint: "A colorless, odorless gas essential for life." },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  { word: "football", hint: "A popular sport played with a spherical ball." },
  { word: "chocolate", hint: "A sweet treat made from cocoa beans." },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
  },
  { word: "history", hint: "The study of past events and human civilization." },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  { word: "adventure", hint: "An exciting or daring experience." },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  { word: "bicycle", hint: "A human-powered vehicle with two wheels." },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  { word: "astronaut", hint: "A person trained to travel and work in space." },
  { word: "waterfall", hint: "A cascade of water falling from a height." },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  { word: "sunflower", hint: "A tall plant with a large yellow flower head." },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  { word: "breeze", hint: "A gentle wind." },
  { word: "oasis", hint: "A fertile spot in a desert where water is found." },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  { word: "secret", hint: "Something kept hidden or unknown to others." },
  { word: "curiosity", hint: "A strong desire to know or learn something." },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  { word: "moonlight", hint: "The light from the moon." },
  { word: "vibrant", hint: "Full of energy, brightness, and life." },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  { word: "brilliant", hint: "Exceptionally clever, talented, or impressive." },
  {
    word: "nebula",
    hint: "A cloud of gas and dust in space, often forming stars.",
  },
  {
    word: "chameleon",
    hint: "A type of lizard known for its ability to change color.",
  },
  { word: "zephyr", hint: "A soft, gentle breeze." },
  {
    word: "quicksand",
    hint: "A trap of loosely packed sand that can cause objects to sink.",
  },
  { word: "firefly", hint: "A bioluminescent insect that glows in the dark." },
  {
    word: "hologram",
    hint: "A three-dimensional image formed by the interference of light beams.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, and hot gases are ejected.",
  },
  { word: "sunflower", hint: "A tall plant with a large yellow flower head." },
  {
    word: "aurora",
    hint: "A natural light display in the Earth's sky, typically in polar regions.",
  },
  {
    word: "coral",
    hint: "Marine invertebrates that form large underwater colonies.",
  },
  {
    word: "tornado",
    hint: "A violent rotating column of air extending from a thunderstorm to the ground.",
  },
  { word: "zebra", hint: "A striped horse-like animal native to Africa." },
  {
    word: "mushroom",
    hint: "A type of fungus that typically has a stem and cap.",
  },
  {
    word: "glacier",
    hint: "A large mass of ice and snow that moves slowly over land.",
  },
  {
    word: "asteroid",
    hint: "A small rocky body that orbits the sun, usually found in the asteroid belt.",
  },
  {
    word: "cactus",
    hint: "A plant with thick, fleshy stems and spines, typically found in deserts.",
  },
  { word: "bat", hint: "A flying mammal, typically active at night." },
  {
    word: "elephant",
    hint: "The largest land mammal, known for its long trunk and tusks.",
  },
  {
    word: "lighthouse",
    hint: "A tall structure with a light at the top to guide ships.",
  },
  {
    word: "penguin",
    hint: "A flightless bird that is typically found in cold regions.",
  },
  {
    word: "crystal",
    hint: "A solid material with a regular arrangement of atoms.",
  },
  { word: "turtle", hint: "A slow-moving reptile known for its hard shell." },
  {
    word: "satellite",
    hint: "A man-made object placed in orbit around a planet or moon.",
  },
  {
    word: "puzzle",
    hint: "A game or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whale",
    hint: "A large marine mammal known for its size and intelligence.",
  },
  {
    word: "rocket",
    hint: "A vehicle used for space travel or launching satellites.",
  },
  {
    word: "seahorse",
    hint: "A small, marine fish with a horse-like head and prehensile tail.",
  },
  {
    word: "spacecraft",
    hint: "A vehicle designed for travel or operation in outer space.",
  },
  {
    word: "hurricane",
    hint: "A powerful tropical storm with heavy rains and strong winds.",
  },
  { word: "marsh", hint: "An area of soft, wet, low-lying land." },
  { word: "starlight", hint: "The light emitted by stars." },
  {
    word: "raccoon",
    hint: "A small, nocturnal mammal known for its black facial mask and dexterous hands.",
  },
  {
    word: "tornado",
    hint: "A violent rotating column of air extending from a thunderstorm to the ground.",
  },
  {
    word: "echo",
    hint: "A sound that is reflected off a surface and heard again.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "holograph",
    hint: "A document that is handwritten by the person whose signature it bears.",
  },
  {
    word: "mars",
    hint: "The fourth planet from the sun, often referred to as the Red Planet.",
  },
  {
    word: "polar",
    hint: "Relating to the North or South Pole, or the cold regions near them.",
  },
  {
    word: "fossil",
    hint: "Remains or traces of ancient organisms preserved in rock.",
  },
  {
    word: "satellite",
    hint: "An object placed in orbit around a planet or other celestial body.",
  },
  {
    word: "asteroid",
    hint: "A small rocky body that orbits the sun, typically found in the asteroid belt.",
  },
  {
    word: "whirlpool",
    hint: "A body of rotating water with a current that can suck in objects.",
  },
  {
    word: "crater",
    hint: "A large, bowl-shaped depression in the ground or on a celestial body.",
  },
  { word: "holograph", hint: "A handwritten document or letter." },
  {
    word: "blizzard",
    hint: "A severe snowstorm with strong winds and low visibility.",
  },
  {
    word: "nucleus",
    hint: "The central part of an atom, containing protons and neutrons.",
  },
  { word: "lunar", hint: "Relating to the moon." },
  {
    word: "echo",
    hint: "A sound that is reflected off a surface and heard again.",
  },
  {
    word: "neutron",
    hint: "A subatomic particle found in the nucleus of an atom.",
  },
  { word: "solar", hint: "Relating to or caused by the sun." },
  {
    word: "quicksand",
    hint: "A type of trap in loose sand that can engulf objects.",
  },
  { word: "tundra", hint: "A cold, treeless biome found in polar regions." },
  {
    word: "gargoyle",
    hint: "A grotesque stone carving, often used as a waterspout.",
  },
  {
    word: "flamingo",
    hint: "A tall, wading bird known for its pink feathers and long neck.",
  },
  {
    word: "crystal",
    hint: "A solid material with a regular arrangement of atoms.",
  },
  { word: "chasm", hint: "A deep fissure or gap in the earth's surface." },
  { word: "pegasus", hint: "A mythical winged horse from Greek mythology." },
  {
    word: "polarize",
    hint: "To cause something to divide into two sharply contrasting groups or opinions.",
  },
  {
    word: "quicksilver",
    hint: "Another name for mercury, a toxic metal that is liquid at room temperature.",
  },
  {
    word: "sandstorm",
    hint: "A strong wind carrying sand, typically in desert regions.",
  },
  {
    word: "galaxy",
    hint: "A system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "zigzag",
    hint: "A pattern or path that proceeds in sharp turns in alternating directions.",
  },
  {
    word: "astrology",
    hint: "The study of celestial bodies' movements and positions, believed to influence human affairs.",
  },
  {
    word: "germinate",
    hint: "To begin to grow or develop, especially a seed.",
  },
  {
    word: "universe",
    hint: "All of space and everything it contains, including stars, planets, galaxies, and more.",
  },
  {
    word: "pyramid",
    hint: "A structure with a square base and four triangular sides meeting at a point.",
  },
  {
    word: "aurora",
    hint: "A natural light display in the Earth's sky, typically in polar regions.",
  },
  {
    word: "crater",
    hint: "A large, bowl-shaped depression in the ground, formed by an impact or volcanic activity.",
  },
  { word: "solar", hint: "Relating to the sun." },
  {
    word: "whirlpool",
    hint: "A body of rotating water with a current that can suck in objects.",
  },
  { word: "void", hint: "A completely empty space." },
  {
    word: "ecosystem",
    hint: "A biological community of interacting organisms and their physical environment.",
  },
  {
    word: "quicksand",
    hint: "A trap of loosely packed sand that can cause objects to sink.",
  },
  {
    word: "erosion",
    hint: "The process by which rocks and soil are gradually worn away, often by wind or water.",
  },
  {
    word: "meteor",
    hint: "A small object from space that enters the Earth's atmosphere.",
  },
  {
    word: "tornado",
    hint: "A violent rotating column of air extending from a thunderstorm to the ground.",
  },
  { word: "astronaut", hint: "A person trained to travel and work in space." },
  {
    word: "plasma",
    hint: "The fourth state of matter, consisting of charged particles.",
  },
  {
    word: "supernova",
    hint: "A powerful explosion of a star at the end of its life cycle.",
  },
  {
    word: "whale",
    hint: "A large marine mammal known for its size and intelligence.",
  },
  {
    word: "crescent",
    hint: "The shape of the moon when only a small part is illuminated.",
  },
  {
    word: "hydroponics",
    hint: "The method of growing plants in water, without soil.",
  },
  { word: "moonlight", hint: "The light reflected from the moon." },
  {
    word: "meteorite",
    hint: "A meteor that survives its passage through the Earth's atmosphere and lands on the surface.",
  },
  {
    word: "volcano",
    hint: "A mountain with an opening through which molten rock, gas, and ash are ejected.",
  },
  { word: "solar", hint: "Relating to the sun." },
  { word: "starfish", hint: "A marine invertebrate with a star-shaped body." },
  {
    word: "horizon",
    hint: "The line at which the Earth and sky appear to meet.",
  },
  {
    word: "robot",
    hint: "A machine capable of carrying out tasks autonomously or via programming.",
  },
  { word: "geode", hint: "A rock with a cavity lined with crystals." },
];
