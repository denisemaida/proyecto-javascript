const productosArray = [
  {
    id: "Camisa roja Aéro",
    titulo: "Camisa roja Aéro",
    imagen: "./pictures/camisas/camisa_roja_lisa_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1000,
  },
  {
    id: "Blusa off shoulder",
    titulo: "Blusa off shoulder",
    imagen: "./pictures/camisas/blusa_estampada_flores_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 2000,
  },
  {
    id: "Blusa fucsia",
    titulo: "Blusa fucsia",
    imagen: "./pictures/camisas/blusa_fucsia_mujer.png",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 2000,
  },
  {
    id: "Camisa bordo",
    titulo: "Camisa bordo",
    imagen: "./pictures/camisas/camisa_bordo_entallada_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1000,
  },
  {
    id: "Camisa manga corta Jean",
    titulo: "Camisa manga corta Jean",
    imagen: "./pictures/camisas/camisa_corta_jean_niño.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 500,
  },
  {
    id: "Camisa escocesa celeste",
    titulo: "Camisa escocesa celeste",
    imagen: "./pictures/camisa_escosesa_celeste.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1500,
  },
  {
    id: "Camisa Bennetton niña",
    titulo: "Camisa Bennetton niña",
    imagen: "./pictures/camisas/camisa_estampada_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 500,
  },
  {
    id: "Camisa Grisino dinos",
    titulo: "Camisa Grisino dinos",
    imagen: "./pictures/camisas/camsisa_estampada_niño.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 500,
  },
  {
    id: "Camisa blanca Zara",
    titulo: "Camisa blanca Zara",
    imagen: "./pictures/camisas/camisa_lisa_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 500,
  },
  {
    id: "Camisa manga corta Montagne",
    titulo: "Camisa manga corta Montagne",
    imagen: "./pictures/camisas/camisa_manga_corta_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1000,
  },
  {
    id: "Camisa manga corta amarilla",
    titulo: "Camisa manga corta amarilla",
    imagen: "./pictures/camisas/camisa_manga_corta_niña.jpeg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 500,
  },
  {
    id: "Buzo Aéro",
    titulo: "Buzo Aéro",
    imagen: "./pictures/abrigos/buzo_estampado_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1800,
  },
  {
    id: "Buzo Spread",
    titulo: "Buzo Spread",
    imagen: "./pictures/abrigos/buzo_estampado_niño.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 900,
  },
  {
    id: "Buzo Negro",
    titulo: "Buzo Negro",
    imagen: "./pictures/abrigos/buzo_liso_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1000,
  },
  {
    id: "Buzo bicolor Montagne",
    titulo: "Buzo bicolor Montagne",
    imagen: "./pictures/abrigos/buzo_niño_deportivo.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 900,
  },
  {
    id: "Buzo corto Pili",
    titulo: "Buzo corto Pili",
    imagen: "./pictures/abrigos/buzos_cortos_niñas",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 900,
  },
  {
    id: "Buzo niña Happy",
    titulo: "Buzo niña Happy",
    imagen: "./pictures/abrigo/buzos_estampados_niñas.png",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 900,
  },
  {
    id: "Buzo canguro colores",
    titulo: "Buzo canguro colores",
    imagen: "./pictures/abrigos/buzos_lisos_mujer.jpeg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1800,
  },
  {
    id: "Campera de abrigo Max",
    titulo: "Campera de abrigo Max",
    imagen: "./pictures/abrigos/campera_abrigo_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 2000,
  },
  {
    id: "Campera de abrigo Barbie",
    titulo: "Campera de abrigo Barbie",
    imagen: "./pictures/abrigos/campera_abrigo_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 2000,
  },
  {
    id: "Campera de abrigo Alex",
    titulo: "Campera de abrigo Alex",
    imagen: "./pictures/abrigos/campera_abrigo_unisex_niños.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 1400,
  },
  {
    id: "Campera deportiva Adidas",
    titulo: "Campera deportiva Adidas",
    imagen: "./pictures/abrigos/campera_adidas_deportiva_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1600,
  },
  {
    id: "Campera deportiva negra",
    titulo: "Campera deportiva negra",
    imagen: "./pictures/abrigos/campera_deportiva_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1600,
  },
  {
    id: "Sweater bordado Flor",
    titulo: "Sweater bordado Flor",
    imagen: "./pictures/abrigos/sweater_bordado_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 2000,
  },
  {
    id: "Sweater Negro",
    titulo: "Sweater Negro",
    imagen: "./pictures/abrigos/sweater_liso_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1900,
  },
  {
    id: "Sweater Netflix",
    titulo: "Sweater Netflix",
    imagen: "./pictures/abrigos/sweater_liso_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres,",
    },
    precio: 1900,
  },
  {
    id: "Sweater rayado Cindy",
    titulo: "Sweater rayado Cindy",
    imagen: "./pictures/abrigos/sweater_rayado_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1850,
  },
  {
    id: "Sweater rombos",
    titulo: "Sweater rombos",
    imagen: "./pictures/abrigos/sweater_rombos_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres,",
    },
    precio: 1850,
  },
  {
    id: "Baberos estampados",
    titulo: "Baberos estampados",
    imagen: "./pictures/accesorios/baberos_bebe.jpeg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 100,
  },
  {
    id: "Bandolera verde Studio F",
    titulo: "Bandolera verde Studio F",
    imagen: "./pictures/accesorios/bandolera_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 200,
  },
  {
    id: "Cinturón negro",
    titulo: "Cinturón negro",
    imagen: "./pictures/accesorios/cinturon_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 550,
  },
  {
    id: "Cinturón Flora",
    titulo: "Cinturón Flora",
    imagen: "./pictures/accesorios/cinturon_mujer.png",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 550,
  },
  {
    id: "Conjunto gorrito + mitones varios colores",
    titulo: "Conjunto gorrito + mitones varios colores",
    imagen: "./pictures/accesorios/conjunto_gorros_mitones_bebe.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 120,
  },
  {
    id: "Scrunchies x4 colores varios",
    titulo: "Scrunchies x4 colores varios",
    imagen: "./pictures/accesorios/gomitas_pelo_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 100,
  },
  {
    id: "Gomitas coloridas",
    titulo: "Gomitas coloridas",
    imagen: "./pictures/accesorios/gomitas_pelo_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 50,
  },
  {
    id: "Gorra rosa Zara",
    titulo: "Gorra rosa Zara",
    imagen: "./pictures/accesorios/gorra_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 200,
  },
  {
    id: "Gorra rojo y azul",
    nombre: "Gorra rojo y azul",
    imagen: ".pictures/accesorios/gorra_zara_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 200,
  },
  {
    id: "Gorro UV naranja bebé",
    titulo: "Gorro UV naranja bebé",
    imagen: "./pictures/accesorios/gorro_uv_bebe.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 200,
  },
  {
    id: "Hebillitas con rositas X12 varios colores",
    titulo: "Hebillitas con rositas X12 varios colores",
    imagen: "./pictures/accesorios/habillas_pelo_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 50,
  },
  {
    id: "Pares de medias estamapadas Man",
    titulo: "Pares de medias estamapadas Man",
    imagen: "./pictures/accesorios/medias_estampadas_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 60,
  },
  {
    id: "Pares de medias estampadas Woman",
    titulo: "Pares de medias estampadas Woman",
    imagen: "./pictures/accesorios/medias_estampadas_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 60,
  },
  {
    id: "Pares de medias estampadas Kids",
    titulo: "Pares de medias estampadas Kids",
    imagen: "./pictures/accesorios/medias_estampadas_niños.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 60,
  },
  {
    id: "Mochila Zara",
    titulo: "Mochila Zara",
    imagen: "./pictures/accesorios/mochila_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 80,
  },
  {
    id: "Pañuelo estampado",
    titulo: "Pañuelo estampado",
    imagen: "./pictures/accesorios/pañuelo_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 90,
  },
  {
    id: "Pulseras árbol",
    titulo: "Pulseras árbol",
    imagen: "./pictures/accesorios/pulsera_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 85,
  },
  {
    id: "Pulseras rose gold",
    titulo: "Pulseras rose gold",
    imagen: "./pictures/accesorios/pulsera_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 95,
  },
  {
    id: "Reloj negro Massimo",
    titulo: "Reloj negro Massimo",
    imagen: "./pictures/accesorios/reloj_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 120,
  },
  {
    id: "Sombrero Crudo",
    titulo: "Sombrero Crudo",
    imagen: "./pictures/accesorios/sombrero_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 140,
  },
  {
    id: "Vincha moño Mona",
    titulo: "Vincha moño Mona",
    imagen: "./pictures/accesorios/vincha_moños_bebe.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 55,
  },
  {
    id: "Vinchas Vichy",
    titulo: "Vinchas Vichy",
    imagen: "./pictures/accesorios/vincha_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 60,
  },
  {
    id: "Bodys Bebé rosa",
    titulo: "Bodys Bebé rosa",
    imagen: "./pictures/bebe/body_bebe_estampados_niña.jpeg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 400,
  },
  {
    id: "Bodys Animalitos",
    titulo: "Bodys Animalitos",
    imagen: "./pictures/bebe/bodys_bebe_estampa.png",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 400,
  },
  {
    id: "Bodys Celeste",
    titulo: "Bodys Celeste",
    imagen: "./pictures/bebe/bodys_bebe_estampados_niños.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 400,
  },
  {
    id: "Bodys color",
    titulo: "Bodys color",
    imagen: "./pictures/bebe/bodys_bebe_lisos.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 400,
  },
  {
    id: "Buzo conejitos",
    titulo: "Buzo conejitos",
    imagen: "./pictures/bebe/buzo_bebe_niña.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 500,
  },
  {
    id: "Buzo zoo",
    titulo: "Buzo zoo",
    imagen: "./pictures/bebe/buzo_estampado_bebe.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 500,
  },
  {
    id: "Conjunto ositos",
    titulo: "Conjunto ositos",
    imagen: "./pictures/bebe/conjunto_bebe_animalitos.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 450,
  },
  {
    id: "Conjunto volados",
    titulo: "Conjunto volados",
    imagen: "./pictures/bebe/conjunto_bebe_volados.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 450,
  },
  {
    id: "Medias estamapadas corderito",
    titulo: "Medias estamapadas corderito",
    imagen: "./pictures/bebe/medias_bebe_corderito.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 150,
  },
  {
    id: "medias antideslizantes",
    titulo: "medias antideslizantes",
    imagen: "./pictures/bebe/medias_bebe_estampadas_antideslisantes.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 150,
  },
  {
    id: "Medias bebé pastel",
    titulo: "Medias bebé pastel",
    imagen: "./pictures/bebe/medias_bebe_pastel.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 150,
  },
  {
    id: "Botas bordadas Chealsea",
    titulo: "Botas bordadas Chealsea",
    imagen: "./pictures/calzado/botas_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 2500,
  },
  {
    id: "Botín Cordelia",
    titulo: "Botín Cordelia",
    imagen: "./pictures/calzado/botin_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 2500,
  },
  {
    id: "Mocasín Nino",
    titulo: "Mocasín Nino",
    imagen: "./pictures/calzado/mocasin_niño.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 2000,
  },
  {
    id: "Ojotas Adidas",
    titulo: "Ojotas Adidas",
    imagen: "./pictures/calzado/ojotas_adidas_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1900,
  },
  {
    id: "Zapato Guillermina",
    titulo: "Zapato Guillermina",
    imagen: "./pictures/calzado/guillerminas_colores_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 2000,
  },
  {
    id: "Ojota panda bebé",
    titulo: "Ojota panda bebé",
    imagen: "./pictures/calzado/ojotas_bebe.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 1800,
  },
  {
    id: "Ojota Simli",
    titulo: "Ojota Simli",
    imagen: "./pictures/calzado/ojotas_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1800,
  },
  {
    id: "Ojotas Princesas",
    titulo: "Ojotas Princesas",
    imagen: "./pictures/calzado/ojotas_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 1800,
  },
  {
    id: "Ojotas Comic",
    titulo: "Ojotas Comic",
    imagen: "./pictures/calzado/ojotas_niño.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 1800,
  },
  {
    id: "Sandalias Vera",
    titulo: "Sandalias Vera",
    imagen: "./pictures/calzado/sanadalias_fucsia_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1850,
  },
  {
    id: "Sandalias Paloma",
    titulo: "Sandalias Paloma",
    imagen: "./pictures/calzado/sandalias_rosa_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 1750,
  },
  {
    id: "Stiletto Siyah",
    titulo: "Stiletto Siyah",
    imagen: "./pictures/calzado/tacos_negros_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1750,
  },
  {
    id: "Zapatillas Renk",
    titulo: "Zapatillas Renk",
    imagen: "./pictures/calzado/zapatillas_bebe.jpg",
    categoria: {
      nombre: "Bebés",
      id: "bebés",
    },
    precio: 1300,
  },
  {
    id: "Zapatillas deportivas IV",
    titulo: "Zapatillas deportivas IV",
    imagen: "./pictures/calzado/zapatillas_deportivas_niños.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 1400,
  },
  {
    id: "Zapatillas deportivas Nike",
    titulo: "Zapatillas deportivas Nike",
    imagen: "./pictures/calzado/Zapatillas_Nike_adultos.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1450,
  },
  {
    id: "Zapatillas puntera",
    titulo: "Zapatillas puntera",
    imagen: "./pictures/calzado/zapatillas_niños_con_puntera.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 1400,
  },
  {
    id: "Zapatillas Narrow",
    titulo: "Zapatillas Narrow",
    imagen: "./pictures/calzado/zapatillas_urbanas_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1450,
  },
  {
    id: "Zapatillas Camel",
    titulo: "Zapatillas Camel",
    imagen: "./pictures/calzado/zapatillas_urbanas_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1455,
  },
  {
    id: "Jean Cheeky",
    titulo: "Jean Cheeky",
    imagen: "./pictures/pantalones/jean_cheecky_niño.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 550,
  },
  {
    id: "Jean tiro alto",
    titulo: "Jean tiro alto",
    imagen: "./pictures/pantalones/jean_tiro_alto_mujer.jpg",
    categoria: {
      nombre: "Mujeres",
      id: "mujeres",
    },
    precio: 1500,
  },
  {
    id: "Jean tiro bajo",
    titulo: "Jean tiro bajo",
    imagen: "./pictures/pantalones/jeans_hombre.jpg",
    categoria: {
      nombre: "Hombres",
      id: "hombres",
    },
    precio: 1500,
  },
  {
    id: "Jogging Lunares",
    titulo: "Jogging Lunares",
    imagen: "./pictures/pantalones/joggin__lunares_oshkosh_niña.jpg",
    categoria: {
      nombre: "Niños",
      id: "niños",
    },
    precio: 550,
  },
  {
    id: "Jogging Blacky",
    titulo: "Jogging Blacky",
    imagen: "./pictures/pantalones/jogging_liso_deportivo_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1450,
  },
  {
    id: "Palazzo Tiger",
    titulo: "Palazzo Tiger",
    imagen: "./pictures/pantalones/palazzo_estampado_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1600,
  },
  {
    id: "Pantalón gabardina",
    titulo: "Pantalón gabardina",
    imagen: "./pictures/pantalones/pantalon_beige_hombre.jpg",
    categoria: { nombre: "Hombres", id: "hombres", },
    precio: 1550,
  },
  {
    id: "Pantalón Gris",
    titulo: "Pantalón Gris",
    imagen: "./pictures/pantalones/pantalon_hombre_gris.jpg",
    categoria: { nombre: "Hombres", id: "hombres" ,},
    precio: 1550,
  },
  {
    id: "Pantalón mono",
    titulo: "Pantalón mono",
    imagen: "./pictures/pantalones/pantalon_mono_niños.png",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 550,
  },
  {
    id: "Pantalón negro Work",
    titulo: "Pantalón negro Work",
    imagen: "./pictures/pantalones/pantalon_negro_hombre.jpg",
    categoria: { nombre: "Hombres", id: "hombres" ,},
    precio: 1550,
  },
  {
    id: "Pantalón Granate Little Akiabara",
    titulo: "Pantalón Granate Little Akiabara",
    imagen: "./pictures/pantalones/pantalon_ñiña_little_akiabara.jpg",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 800,
  },
  {
    id: "Pantalón Sastrero",
    titulo: "Pantalón Sastrero",
    imagen: "./pictures/pantalones/pantalon_sastrero_verde_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 1600,
  },
  {
    id: "Jean oxford Zara",
    titulo: "Jean oxford Zara",
    imagen: "./pictures/pantalones/vaqueros_zara_niña.jpg",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 800,
  },
  {
    id: "Pollera Cora",
    titulo: "Pollera Cora",
    imagen: "./pictures/polleras/falda_niñas.jpg",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 600,
  },
  {
    id: "Minifalda Party",
    titulo: "Minifalda Party",
    imagen: "./pictures/polleras/minifalda_negra_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1000,
  },
  {
    id: "Pollera Urban",
    titulo: "Pollera Urban",
    imagen: "./pictures/polleras/pollera_deportiva_adidas.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 1000,
  },
  {
    id: "Pollera jean Bea",
    titulo: "Pollera jean Bea",
    imagen: "./pictures/polleras/pollera_jean_mujer.jpeg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 1000,
  },
  {
    id: "Pollera Lápiz Crema",
    titulo: "Pollera Lápiz Crema",
    imagen: "./pictures/polleras/pollera_lapiz_crema_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1500,
  },
  {
    id: "Pollera larga Cebra",
    titulo: "Pollera larga Cebra",
    imagen: "./pictures/polleras/pollera_larga_zebra_estampada_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 1500,
  },
  {
    id: "Pollera deportiva Sonder",
    titulo: "Pollera deportiva Sonder",
    imagen: "./pictures/polleras/pollera_pantalon_deportiva_niña.jpg",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 800,
  },
  {
    id: "Pollera volados Flopy",
    titulo: "Pollera volados Flopy",
    imagen: "./pictures/polleras/pollera_summer_negro_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 1500,
  },
  {
    id: "Remera Pierce",
    titulo: "Remera Pierce",
    imagen: "./pictures/remeras/remera-de-mujer-pierce.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1000,
  },
  {
    id: "Remera Arabesque",
    titulo: "Remera Arabesque",
    imagen: "./pictures/remeras/remera-manga-larga-de-mujer-arabesque.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1000,
  },
  {
    id: "Remera Azur",
    titulo: "Remera Azur",
    imagen: "./pictures/remeras/remera_azul_hombre.jpg",
    categoria: { nombre: "Hombres", id: "hombres" ,},
    precio: 1000,
  },
  {
    id: "Remera Silueta",
    titulo: "Remera Silueta",
    imagen: "./pictures/remeras/remera_estampada_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 1000,
  },
  {
    id: "Remera Chicas Superpoderosas",
    titulo: "Remera Chicas Superpoderosas",
    imagen: "./pictures/remeras/remera_estampada_niña.jpg",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 500,
  },
  {
    id: "Remera Jaspeada",
    titulo: "Remera Jaspeada",
    imagen: "./pictures/remeras/remera_gris_bordada_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 2000,
  },
  {
    id: "Remera Henley",
    titulo: "Remera Henley",
    imagen: "./pictures/remeras/remera_henley_hombre.jpg",
    categoria: { nombre: "Hombres", id: "hombres", },
    precio: 1500,
  },
  {
    id: "Remera Blur",
    titulo: "Remera Blur",
    imagen: "./pictures/remeras/remera_manga_larga_lisa_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1000,
  },
  {
    id: "Remera Bonnie",
    titulo: "Remera Bonnie",
    imagen: "./pictures/remeras/remera_niña_manga_larga_bonie.jpg",
    categoria: { nombre: "Niños", id: "niños", },
    precio: 650,
  },
  {
    id: "Remera Scooby",
    titulo: "Remera Scooby",
    imagen: "./pictures/remeras/remera_niños_scooby_doo.jpg",
    categoria: { nombre: "Niños", id: "niños", },
    precio: 650,
  },
  {
    id: "Remera Búho",
    titulo: "Remera Búho",
    imagen: "./pictures/remeras/remera_owl_niño_manga_larga.jpg",
    categoria: { nombre: "Niños", id: "niños", },
    precio: 650,
  },
  {
    id: "Remera Teddy",
    titulo: "Remera Teddy",
    imagen: "./pictures/remeras/remera_roja_hombre.jpg",
    categoria: { nombre: "Hombres", id: "hombres", },
    precio: 1000,
  },
  {
    id: "Remera Salty",
    titulo: "Remera Salty",
    imagen: "./pictures/remeras/remera_salty_water_hombre.jpg",
    categoria: { nombre: "Hombres", id: "hombres", },
    precio: 1000,
  },
  {
    id: "Remera Tropic",
    titulo: "Remera Tropic",
    imagen: "./pictures/remeras/remera_tropic_waves_hombre.jpg",
    categoria: { nombre: "Hombres", id: "hombres", },
    precio: 1000,
  },
  {
    id: "Remera Lisa",
    titulo: "Remera Lisa",
    imagen: "./pictures/remeras/remeras_lisas_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1000,
  },
  {
    id: "Remeras Volados",
    titulo: "Remera Volados",
    imagen: "./pictures/remeras/remeras_lisas_niñas.jpg",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 600,
  },
  {
    id: "Remera Colors",
    titulo: "Remera Colors",
    imagen: "./pictures/remeras/remeras_lisas_niño.jpg",
    categoria: { nombre: "Niños", id: "niños", },
    precio: 500,
  },
  {
    id: "Vestido Flowers",
    titulo: "Vestido Flowers",
    imagen: "./pictures/vestidos/vestido_corto_estampado_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 1500,
  },
  {
    id: "Vestido Hi-Low",
    titulo: "Vestido Hi-Low",
    imagen: "./pictures/vestidos/vestido_corto_liso_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 1500,
  },
  {
    id: "Vestido largo Apricot",
    titulo: "Vestido largo Apricot",
    imagen: "./pictures/vestidos/vestido_largo_estampado_apricot_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres", },
    precio: 2000,
  },
  {
    id: "Vestido largo Italia",
    titulo: "Vestido largo Italia",
    imagen: "./pictures/vestidos/vestido_largo_liso_colores_mujer.jpg",
    categoria: { nombre: "Mujeres", id: "mujeres" ,},
    precio: 2000,
  },
  {
    id: "Vestido Fanny",
    titulo: "Vestido Fanny",
    imagen: "./pictures/vestidos/vestidos_estampados_niñas.jpg",
    categoria: { nombre: "Niños", id: "niños" ,},
    precio: 950,
  },
  {
    id: "Vestido Lavanda",
    titulo: "Vestido Lavanda",
    imagen: "./pictures/vestidos/vestido_asismetrico_popelin_niña.jpg",
    categoria: { nombre: "Niños", id: "niños", },
    precio: 950,
  },
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
  aside.classList.remove("aside-visible");
}))

function cargarProductos (productosElegidos) {

contenedorProductos.innerHTML = "";

productosElegidos.forEach(producto => {
  
  const div = document.createElement("div");
  
  div.classList.add("producto");
  div.innerHTML = `
<img class="producto-imagen" src="${producto.imagen}"
      alt="${producto.titulo}">
      <div class="producto-detalles"></div>
        <h3 class="producto-titulo">${producto.titulo}</h3>
        <p class="producto-precio">${producto.precio}</p>
        <button class="producto-agregar">${producto.id}Agregar</button>
      </div></>
  `;

  contenedorProductos.append(div);
})

}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
  boton.addEventListener("click", (e) => {

  botonesCategorias.forEach(boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

if (e.currentTarget.id != "todos") {
  const productoCategoria = productos.find(producto => producto.categoria.id);

    tituloPrincipal.innerText = productoCategoria.categoria.nombre;

  const productosBoton = productos.filter (producto => producto.categoria.id === e.currentTarget.id);
    cargarProductos(productosBoton);
} else {
  tituloPrincipal.innerText = "Todos los productos";
  cargarProductos(productos);
}

  })

});

function actualizarBotonesAgregar () {
  botonesAgregar = document.querySelectorAll(".producto-agregar");

  botonesAgregar.forEach(boton => {
    boton.addEventListener("click", agregarAlCarrito)
  });
  }

  const productosEnCarrito = [];

  function agregarAlCarrito(e) {

const idBoton = e.currentTarget.id;

const productoAgregado = productos.find(producto => producto.id === idBoton);

if(productosEnCarrito.some(producto => producto.id === idBoton)) {
} else {
productoAgregado.cantidad = 1;
  productosEnCarrito.push(productoAgregado);

}


  }

let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })

botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <button class="producto-agregar" id="${producto.id}">Agregar</button>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;
            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }

    })
});

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnElCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");

if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}
function agregarAlCarrito(e) {

  Toastify({
      text: "Producto agregado",
      duration: 3000,
      close: true,
      gravity: "top",
      position: "right", 
      stopOnFocus: true, 
      style: {
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem"
      },
      offset: {
          x: '1.5rem', 
          y: '1.5rem' 
        },
      onClick: function(){} 
    }).showToast();

  const idBoton = e.currentTarget.id;
  const productoAgregado = productos.find(producto => producto.id === idBoton);

  if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
  } else {
      productoAgregado.cantidad = 1;
      productosEnCarrito.push(productoAgregado);
  }

  actualizarNumerito();

  localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
  let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
  numerito.innerText = nuevoNumerito;
}


