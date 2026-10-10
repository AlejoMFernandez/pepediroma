/* Carta Pepe Di Roma — transcripta de las cartas (almuerzo, desayuno y merienda, mostrador).
   tags: p = picante, v = veggie. img = foto que aparece al pasar el mouse. */
window.MENU = {
  colazione: {
    label: "Colazione e merenda",
    sub: "Desayuno y merienda",
    groups: [
      { t: "Specialità italiane", items: [
        ["Cornetto", "Corneto tradicional", 2500],
        ["Cornetto alla nocciola", "Cornetto relleno de crema de avellanas", 4500],
        ["Sfogliatella", "Consultar rellenos del día", 4000, { img: "sfogliatelle" }],
        ["Cannoli siciliani", "Rellenos de crema pastelera y pistacho", 4500],
        ["Napoletani bianchi", "Alfajores de vainilla rellenos de crema pastelera y avellanas tostadas", 3800]
      ]},
      { t: "Lingotti dolci", s: "Crostata rellena", items: [
        ["Limone", "Crema de limón, sablée de vainilla y merengue italiano", 10900],
        ["Cioccolato", "Sablé de cacao, cheesecake de chocolate y ganache de café", 10900],
        ["Frutto rosso", "Sablé de vainilla, masa de almendras, mermelada de frambuesa, crema chantilly y frutos rojos frescos", 10900]
      ]},
      { t: "Biscotti & cookies", items: [
        ["Cookie al pistacchio", "Cookie de pistacho con ganache de chocolate blanco y gel de frambuesa", 5900],
        ["Cookie al cioccolato", "Cookie de chocolate semiamargo con compota de frambuesa", 5900],
        ["Cookie con gocce di cioccolato", "Cookie con chips de chocolate, toffee salado y almendras", 5900],
        ["Duo di biscotti", "2 de pistacho y cacao · 2 de praliné", 3500]
      ]},
      { t: "Soffici & lievitati", items: [
        ["Torta di carote e noci", "Budín de zanahoria y nueces con crema de queso", 6500],
        ["Cinnamon rolls", "Masa suave con canela y crema", 4500]
      ]},
      { t: "Focacce assortite", s: "Sandwiches de focaccia", items: [
        ["Schiacciata di mortadella", "Focaccia fina rellena de mortadella con nuez, pesto, stracciatella y pistacho picado", 16800, { img: "focaccia-mortadella" }],
        ["Schiacciata di prosciutto", "Focaccia fina rellena de prosciutto, rúcula, cherries confitados y mozzarella fior di latte", 20000, { img: "focaccia-prosciutto" }],
        ["Schiacciata cotto e formaggio", "Focaccia fina rellena de jamón cocido, queso mozzarella y parmesano", 11500, { img: "focaccia-cotto" }],
        ["Schiacciata di melanzane alla parmigiana", "Focaccia fina rellena de berenjena frita, pomodoro italiano, albahaca, mozzarella fior di latte y parmesano", 14800, { img: "focaccia-melanzane", tags: "v" }]
      ]},
      { t: "Altre cose", items: [
        ["Pane tostato", "Tostadas con queso crema y mermelada", 7500],
        ["Uova strapazzate", "Huevos revueltos, tostada en pan de ciabatta", 8500],
        ["Uova strapazzate e avocado", "Huevos revueltos, palta, cherries confitados y tostada", 12800],
        ["Yogurt e granola", "Yogurt natural, granola, frutas frescas, oliva, menta y miel", 10900]
      ]}
    ]
  },
  pranzo: {
    label: "Pranzo",
    sub: "Almuerzo",
    groups: [
      { t: "L'antipasto", items: [
        ["Gnocchi fritti all'arrabbiata", "Gnocchis de papa y muzzarella fritos, salsa de pomodoro italiano con pepperoncino, ajo y perejil", 15900, { tags: "p" }],
        ["Polpette al sugo", "Albóndiga de carne de cerdo y res cocida en pomodoro italiano, mortadella, guanciale y parmesano", 15900],
        ["Burrata, romesco e gamberi", "Burrata, salsa romesco, chauchas y arvejas, langostinos a la plancha y limón", 23500],
        ["Asparagi alla carbonara", "Espárragos a la plancha, crema de carbonara, guanciale crocante y pangrattato, parmesano 24 meses y pimienta negra", 15900, { img: "asparagi" }],
        ["Cavolfiore al forno", "Coliflores asados con canela, hojas de repollitos, ajo blanco, puré de limón", 13700, { tags: "v" }],
        ["Pizza margherita", "Pizzeta de masa madre, salsa de tomate italiano, muzzarella fior di latte, cherrys reliquia frescos, albahaca", 19500, { tags: "v" }],
        ["Pizza alla mortadella", "Pizzeta bianca con mozzarella, mortadella con nuez, pesto, stracciatella, pistacho", 19500, { img: "pizza-mortadella" }]
      ]},
      { t: "Il primo piatto", items: [
        ["Radiatore al pesto e gamberi", "Pasta corta extruida en bronce, pesto de albahaca, stracciatella y langostinos a la plancha", 31500],
        ["Spaghetti cacio e pepe", "Pasta larga extruida en bronce con queso parmesano de 24 meses y pimienta negra", 28500, { tags: "p" }],
        ["Mafaldine pomodoro e stracciatella", "Pasta larga extruida en bronce, pomodoro italiano, albahaca, stracciatella, cherrys asados", 29500],
        ["Mezze maniche all'amatriciana", "Pasta corta extruida en bronce, guanciale, pomodoro italiano, pimienta negra, pepperoncino, parmesano de 24 meses", 28500, { tags: "p" }],
        ["Casoncelli di patate dolci", "Pasta rellena hecha a mano, masa veteada de remolacha, con boniato y mascarpone, crema de queso gorgonzola, pistachos y puré ácido de remolacha", 31500],
        ["Cappelletti di ossobuco", "Pasta hecha a mano, masa tricolor de huevo, pimentón y carbón activado, relleno de ossobuco al vino tinto, demi glace, pomodoro, ricotta asada y chips de papa", 31500, { img: "cappelletti-ossobuco" }],
        ["Anolini di gamberi", "Pasta rellena hecha a mano, masa tricolor con remolacha y carbón activado, mejillones, crema ácida, limón, croutons, cherry confitado y polvo de pepperoncino", 32500],
        ["Agnolotti ai funghi", "Pasta rellena hecha a mano, masa al huevo, relleno de hongos y parmesano, demiglace de hongos, puré de limón, mollica", 29900],
        ["Lasagna al ragù", "Láminas de masa al huevo, ragú de asado y salchicha casera, fonduta de parmesano y pomodoro", 43500, { img: "lasagna" }],
        ["Tagliata di manzo", "Ojo de bife, demi glace, zanahoria y cebollas asadas, cremoso de boniato", 49500, { img: "tagliata" }],
        ["Pesce alla piastra", "Pesca blanca, hummus de zucchini y tahina, brócoli y papines asados con beurre blanc. Opcional de guarnición: mix verdes, cebolla, aderezo de limón", 36500]
      ], note: "Consultá por nuestras pastas veganas simples o rellenas." },
      { t: "Il dolce", items: [
        ["Tiramisù", "Crema de mascarpone, cacao, vainilla casera con almíbar de café y oporto", 15900, { img: "tiramisu" }],
        ["Affogato", "Helado casero de vainilla, praliné de pistacho y shot de espresso illy", 15900],
        ["Cioccolato 70% e kumquat", "Mousse de chocolate al 70%, chantilly de vainilla, quinotos al whisky, praliné de avellanas tostadas y crocante de feuilletine", 15900, { img: "cioccolato-kumquat" }],
        ["Pavlova al limone e mirtilli", "Merengue relleno de ganache de arándanos y choco blanco, curd de limón, soleta de frambuesa y frutos rojos frescos de estación", 15900, { img: "pavlova" }],
        ["Crostata de formaggio", "Tarta tipo vasca, membrillo casero en almíbar, nueces pecan caramelizadas", 15900, { img: "crostata" }],
        ["Vulcano di pistacchio", "Volcán de pistacho, helado casero de chocolate blanco y lima", 17500]
      ]}
    ]
  },
  mostrador: {
    label: "Per portare via",
    sub: "Venta por mostrador",
    groups: [
      { t: "Paste ripiene", s: "Pastas rellenas · 200 g", items: [
        ["Anolini", "Jamón cocido natural y queso mozzarella", 8500, { img: "caja-anolini", shape: "anolini" }],
        ["Cappelacci", "Espinaca, gruyere y ricotta", 8500, { shape: "cappelacci" }],
        ["Caramelle", "Calabaza y mascarpone", 8500, { shape: "caramelle" }],
        ["Casoncelli", "Estofado de tres carnes (res, cerdo y pollo)", 9500, { shape: "casoncelli" }],
        ["Tortelloni", "Pollo estofado y espinaca", 9500, { shape: "tortelloni" }],
        ["Agnolotti ai funghi", "Hongos", 9500, { shape: "agnolotti" }],
        ["Casoncelli patate dolci", "Boniato, ajo confitado, mascarpone", 9500, { shape: "casoncelli" }],
        ["Cappelletti ossobuco", "Ossobuco braseado, morrón asado", 9500, { shape: "capelletti" }],
        ["Anolini gamberi", "Langostinos al ajillo", 10500, { shape: "anolini" }],
        ["Tortelli", "Trucha, mascarpone y ciboulette", 10500, { shape: "tortelli", img: "tortelli-bandeja" }],
        ["Lasagna bolognese", "", 18000]
      ]},
      { t: "Paste semplici", s: "Pastas simples · 180 g", items: [
        ["Spaghetti", "", 4900, { shape: "spaghetti", img: "caja-nidos" }],
        ["Mafaldine", "", 4900, { shape: "mafaldine" }],
        ["Radiatore", "", 4900, { shape: "radiatori" }],
        ["Maccheroni", "", 4900, { shape: "maccheroni" }],
        ["Fusilli", "", 4900, { shape: "fusilli" }],
        ["Mezze maniche", "", 4900, { shape: "mezze_maniche" }],
        ["Gnocchi di patate", "", 4900, { shape: "gnocchi" }]
      ]},
      { t: "Salse", s: "Salsas", items: [
        ["Pomodoro", "Ajo, albahaca y tomate italiano", 4900],
        ["Fonduta de queso", "Crema de parmesano, gruyere y provolone", 7500],
        ["Pesto", "Albahaca, semillas de girasol, oliva, sal de mar", 11500, { img: "caja-verde" }],
        ["Amatriciana", "Panceta, guanciale, tomate italiano, pepperoncino", 9000]
      ]},
      { t: "Altre cose", items: [
        ["Parmigiano grattugiato", "Queso parmesano rayado", 5900],
        ["Focaccia clásica", "Consultar otros sabores", 3800]
      ]},
      { t: "Focacce", s: "Sandwiches de focaccia", items: [
        ["Schiacciata di mortadella", "Mortadella con nuez, pesto, stracciatella y pistacho picado", 16800, { img: "focaccia-mortadella" }],
        ["Schiacciata di prosciutto", "Prosciutto, rúcula, cherrys confitados y mozzarella fior di latte", 20000, { img: "focaccia-prosciutto" }],
        ["Schiacciata cotto e formaggio", "Jamón cocido, queso mozzarella y parmesano", 11500, { img: "focaccia-cotto" }],
        ["Schiacciata di melanzane", "Berenjena frita, pomodoro italiano, albahaca, mozzarella fior di latte y parmesano", 14800, { img: "focaccia-melanzane" }]
      ]},
      { t: "Il dolce", s: "Postres", items: [
        ["Tiramisù", "Crema de mascarpone, cacao, vainillas con almíbar de café y oporto", 15900, { img: "tiramisu" }],
        ["Tiramisù al pistacchio", "Crema de mascarpone y pistacho, pasta artesanal de pistachos, vainilla con almíbar de café y oporto", 15900, { img: "tiramisu-pistacchio" }],
        ["Pavlova di fichi", "Merengue crocante por fuera y suave por dentro, higos en almíbar, mermelada de higos y crema ligera de mascarpone con nueces acarameladas", 15900]
      ]},
      { t: "Altri dolci", s: "Otros dulces", items: [
        ["Cornetto", "Corneto tradicional", 2500],
        ["Cornetto alla nocciola", "Relleno de crema de avellanas", 4500],
        ["Sfogliatella", "Rellena de crema pastelera", 4000, { img: "sfogliatelle" }],
        ["Sfogliatella DDL", "Rellena de dulce de leche", 4000],
        ["Napoletani bianchi", "Alfajores de vainilla rellenos de crema pastelera, frutos rojos y avellanas tostadas", 3800],
        ["Lingotti al limone", "Crema de limón, sablée de vainilla y merengue italiano", 10900],
        ["Lingotti al cioccolato", "Sablée de cacao, húmedo de chocolate y crema de chocolate blanco", 10900],
        ["Lingotti pere & mandorle", "Sablée de vainilla, masa de almendras, peras y almendras tostadas", 10900],
        ["Cookie red velvet", "Chips de chocolate blanco, mermelada de frambuesa y crema de chocolate blanco", 5900],
        ["Cookie al cioccolato", "Sin harina, crema de chocolate con leche y Nutella", 5900],
        ["Cookie con gocce", "Chips de chocolate, crema de vainilla, toffee y nueces caramelizadas", 5900],
        ["Biscotti de pistacho y cacao", "", 3500],
        ["Biscotti de praliné", "", 3500],
        ["Torta de carote e noci", "Budín de zanahoria y nueces con crema de queso", 6500],
        ["Cinnamon rolls", "", 4500],
        ["Grageas al pistacho", "Pistachos tostados con chocolate caramelizado", 14500],
        ["Grageas de avellanas", "Avellanas caramelizadas con chocolate semiamargo", 14500]
      ]}
    ]
  },
  bar: {
    label: "Caffè e bar",
    sub: "Café, té y tragos",
    groups: [
      { t: "Il caffè", items: [
        ["Espresso italiano", "pocillo", 4200], ["Espresso lungo", "pocillo", 4200],
        ["Espresso americano", "taza", 5200], ["Espresso doppio", "taza", 5200],
        ["Macchiato", "pocillo", 4200], ["Cortado", "jarrito", 4400], ["Flat white", "taza", 5200],
        ["Caffè latte", "taza grande", 5700], ["Moca latte", "taza grande", 6200],
        ["Vaniglia latte", "taza grande", 6200], ["Caramel latte", "taza grande", 6200],
        ["Pistacchio latte", "taza grande", 6200], ["Nocciola latte", "taza grande", 6200],
        ["Cappuccino italiano", "taza", 5600], ["Cappuccino doble", "taza grande", 6200],
        ["Submarino", "taza grande", 5200],
        ["Adicional leche de almendras, crema o shot de caffè", "", 500]
      ]},
      { t: "Il tè", items: [
        ["Tehani Chai", "Té negro, pimienta en grano, anís estrellado, clavo de olor, cardamomo, jengibre, canela", 5200],
        ["Tehani Chamomile", "Flores de manzana, pétalos de rosa, ginkgo biloba, menta, poleo, sabor miel", 5200],
        ["Tehani Green Tea", "Cosecha selección", 5200],
        ["Tehani Earl Grey", "Té negro en hebras, bergamota, cáscara de naranja, clavo de olor", 5200],
        ["Té clásico negro", "", 3900]
      ]},
      { t: "La bevanda", items: [
        ["Agua con gas, sin gas o saborizada", "", 4600],
        ["Acqua Panna sin gas", "505 ml", 8900], ["S. Pellegrino gasificada", "505 ml", 9500],
        ["S. Pellegrino Tonica · Pompelmo · Limonata · Aranciata Rossa", "330 ml", 7000],
        ["Gaseosas", "", 4600], ["Limonada", "", 5900], ["Pomelada", "", 5900]
      ]},
      { t: "La birra", items: [
        ["Cerveza Minga Amber Lager", "", 6200], ["Cerveza Minga Light Lager", "", 6200], ["Peroni", "cerveza rubia", 8800]
      ]},
      { t: "Il cocktail-bar", items: [
        ["Aperol Spritz", "", 11500], ["Gin Tonic (Gin Blu)", "", 11500], ["Adicional Gin Bombay", "", 6000],
        ["Vermut Carpano Rosso con soda", "", 11500], ["Campari con naranja", "", 11500], ["Negroni", "", 11500],
        ["Campari Spritz (con Prosecco)", "", 12000], ["Fernet Branca + Cola", "", 11500]
      ]},
      { t: "Licores", items: [
        ["Antica Formula / Grappa", "", 5500], ["Limoncello", "Strega", 5500], ["Licor de café", "Borghetti", 5500],
        ["Fernet Branca", "", 5500], ["Sambuca", "Oro Borghetti", 5500]
      ]}
    ]
  },
  vini: {
    label: "I vini",
    sub: "Precios en salón",
    groups: [
      { t: "I vini per calice", items: [["Copa de vino", "Consultar variedad", 9200]] },
      { t: "Tintos livianos", items: [
        ["Tutu Pinot Noir", "Tutu Wines", 36000], ["Red Soil Manos Negras Pinot Noir", "", 29500],
        ["Coincidir Pinot Noir", "Coincidir Wines", 30500], ["Tinto Nero Sangiovese", "Mil Suelos", 24000],
        ["Beaujolais", "Magna Montis", 41500], ["Rosso D Uco", "Bira Wines", 33000],
        ["Kung Fu Criolla", "Riccitelli Wines", 44000], ["Tigerstone Garnacha", "Estancia Los Cardones", 31000]
      ]},
      { t: "Tintos medianos", items: [
        ["Tutu Cabernet Franc", "Tutu Wines", 36000], ["Asa Nisi Masa Cabernet Franc", "Mundo Reves Wine", 32000],
        ["Berna Malbec", "", 32000], ["Tanito", "Blend Malbec / Sangiovese / Cab. Franc", 31000],
        ["Tano", "Bira Wines", 56000], ["Kung Fu Malbec", "Riccitelli Wines", 44000], ["Solito Va Malbec", "", 25000],
        ["The Party Malbec", "Riccitelli Wines", 34000], ["Flor de Cardón Cabernet Sauvignon", "", 27000],
        ["Berna Syrah", "", 29500], ["Berna Malbec y Cabernet Franc", "", 23000], ["Zaha Cabernet Sauvignon", "", 37000]
      ]},
      { t: "Blancos, rosados y naranjos", items: [
        ["Antro Clarete", "Tutu Wines", 24000], ["Antropo Clarete", "Antropo Wines", 32000],
        ["Kung Fu Orange", "Riccitelli Wines", 44000], ["Rosa Di Rosso", "Bira Wines", 29500],
        ["Flora by Zaha Rosé de Pinot", "Mil Suelos", 29500], ["Invader Semillón", "Riccitelli Wines", 46000],
        ["Invader Chenin Blanc", "Riccitelli Wines", 46000], ["Tutu Chardonnay", "Tutu Wines", 33000],
        ["3 Sapas Viognier", "", 31500], ["Bianco D Uco", "Bira Wines", 32000], ["Berna Chardonnay", "", 29500]
      ]},
      { t: "Espumantes", items: [
        ["Manos Negras Brut Nature", "", 28000], ["Baron B Extra Brut", "", 55000], ["Baron B Brut Nature", "", 55000]
      ]}
    ]
  }
};

/* Tiempos de cocción — de la carta de mostrador (minutos) */
window.COTTURA = [
  { id: "anolini", n: "Anolini", min: 4, max: 5 },
  { id: "cappelacci", n: "Cappelacci", min: 4, max: 5 },
  { id: "tortelli", n: "Tortelli", min: 4, max: 5 },
  { id: "tortelloni", n: "Tortelloni", min: 4, max: 5 },
  { id: "capelletti", n: "Cappelletti", min: 4, max: 5 },
  { id: "agnolotti", n: "Agnolotti", min: 4, max: 5 },
  { id: "casoncelli", n: "Casoncelli", min: 4, max: 5 },
  { id: "caramelle", n: "Caramelle", min: 4, max: 5 },
  { id: "maccheroni", n: "Maccheroni", min: 3, max: 4 },
  { id: "mafaldine", n: "Mafaldine", min: 3, max: 4 },
  { id: "mezze_maniche", n: "Mezze maniche", min: 3, max: 4 },
  { id: "radiatori", n: "Radiatori", min: 2, max: 3 },
  { id: "spaghetti", n: "Spaghetti", min: 2, max: 3 },
  { id: "fusilli", n: "Fusilli", min: 2, max: 3 },
  { id: "gnocchi", n: "Gnocchi", min: 2, max: 2 }
];
