// ARRAY DE PRODUCTOS
const productos = [
  {
    id: 1,
    nombre: "ALL EYEZ ON ME",
    imagen: "../Assets/High Stakes/Café/FullSizeRender-_9_.webp",
    precio: "$850.00",
    descripcion:
      "Haciendo honor al WESTSIDE. Hecha de gamuza, con bordado 3D en el frente y micro bordado en el lateral. Debajo de la visera tiene diseño impreso de un pañuelo. Con un estilo callejero pero fino.",
    infoAdicional: [
      "Marca: High Stakes.",
      "Colores disponibles: Café.",
      "Modelo: ALL EYEZ ON ME",
    ],
    imagenes: [
      "../Assets/High Stakes/Café/FullSizeRender-_9_.webp",
      "../Assets/High Stakes/Café/Exportación/IMG_4653.jpg",
      "../Assets/High Stakes/Café/Exportación/IMG_4654.jpg",
      "../Assets/High Stakes/Café/Exportación/IMG_4655.jpg",
      "../Assets/High Stakes/Café/Exportación/IMG_4657.jpg",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 0,
  },
  {
    id: 2,
    nombre: "JGL - 701",
    imagen: "../Assets/High Stakes/JGL/FullSizeRender-_8_.webp",
    precio: "$850.00",
    descripcion:
      "Hecha de algodón, bordado 3D y el logo lateral con micro bordado. En la visera tiene logos con relieve y un llamativo color morado.",
    infoAdicional: [
      "Marca: High Stakes.",
      "Colores disponibles: Gris.",
      "Modelo: JGL - 701",
    ],
    imagenes: [
      "../Assets/High Stakes/JGL/FullSizeRender-_8_.webp",
      "../Assets/High Stakes/JGL/IMG_4764.webp",
      "../Assets/High Stakes/JGL/IMG_4765.webp",
      "../Assets/High Stakes/JGL/IMG_4766.webp",
      "../Assets/High Stakes/JGL/IMG_4768.webp"
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 3,
    nombre: "BLACK PANTHER",
    imagen: "../Assets/High Stakes/Pantera Negra/FullSizeRender (5).webp",
    precio: "$850.00",
    descripcion:
      "La clásica pantera negra. Hecha de poliéster y con malla en la parte de atrás. Tiene parche de PVC y diseño con relieve en la parte de abajo de la visera. 🐾",
    infoAdicional: [
      "Marca: High Stakes.",
      "Colores disponibles: Negro.",
      "Modelo: BLACK PANTHER",
    ],
    imagenes: [
      "../Assets/High Stakes/Pantera Negra/FullSizeRender (5).webp",
      "../Assets/High Stakes/Pantera Negra/Exportación/8A7F73FC-FD09-4295-BE7A-4CAAA2FE148A.jpeg",
      "../Assets/High Stakes/Pantera Negra/Exportación/D7961945-0C9A-432B-B8D1-064EFDB1AAE0.jpeg",
      "../Assets/High Stakes/Pantera Negra/Exportación/D7D41810-0F36-459C-9B9F-D4B6804B8F04.jpeg",
      "../Assets/High Stakes/Pantera Negra/Exportación/DC5CB8E8-5AAA-4FA5-953B-917A3EDB1179.jpeg",
      "../Assets/High Stakes/Pantera Negra/Exportación/421AE486-71B9-4A44-ACF8-A8EF373E286C.jpeg",
      // ... más imágenes ...
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 4,
    nombre: "SPEND MONEY CAMO",
    imagen: "../Assets/JC Hats/Born to Spend Camuflage/FullSizeRender-_7_.webp",
    precio: "$800.00",
    descripcion:
      "La colección de Spend Money forma parte de la nueva línea de diseño que lleva JC Hats, la cual consta de enfocarnos más hacia la moda (reflejándose en el cambio de materiales y uso de colores nuevos) pero siempre manteniendo la esencia de la marca del lujo y la diversión (a través de frases utilizadas en los diseños frontales).",
    infoAdicional: [
      "Marca: JC Hats.",
      "Colores disponibles: Camuflaje.",
      "Modelo: Spend Money Camo",
    ],
    imagenes: [
      "../Assets/JC Hats/Born to Spend Camuflage/FullSizeRender-_7_.webp",
      "../Assets/JC Hats/Born to Spend Camuflage/IMG_4760.webp",
      "../Assets/JC Hats/Born to Spend Camuflage/IMG_4761.webp",
      "../Assets/JC Hats/Born to Spend Camuflage/IMG_4762.webp",
      "../Assets/JC Hats/Born to Spend Camuflage/IMG_4763.webp"
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 5,
    nombre: "SPEND MONEY BLACK MESH",
    imagen:
      "../Assets/JC Hats/Born to Spend Malla Negra/FullSizeRender-_13_.webp",
    precio: "$800.00",
    descripcion:
      "Una gorra negra con malla para mayor ventilación y comodidad. Diseño elegante con detalles bordados.",
    infoAdicional: [
      "Marca: JC Hats.",
      "Colores disponibles: Negro.",
      "Modelo: Spend Money Black Mesh",
    ],
    imagenes: [
      "../Assets/JC Hats/Born to Spend Malla Negra/FullSizeRender-_13_.webp",
      "../Assets/JC Hats/Born to Spend Malla Negra/IMG_4771.webp",
      "../Assets/JC Hats/Born to Spend Malla Negra/IMG_4772.webp",
      "../Assets/JC Hats/Born to Spend Malla Negra/IMG_4773.webp",
      "../Assets/JC Hats/Born to Spend Malla Negra/IMG_4774.webp"
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 6,
    nombre: "SPEND MONEY BLACK",
    imagen:
      "../Assets/JC Hats/Born to Spend Negra c Rojo/FullSizeRender-_12_.webp",
    precio: "$800.00",
    descripcion:
      "Con un diseño en negro y rojo, esta gorra es perfecta para quienes buscan un estilo audaz y moderno.",
    infoAdicional: [
      "Marca: JC Hats.",
      "Colores disponibles: Negro y Rojo.",
      "Modelo: Spend Money Black",
    ],
    imagenes: [
      "../Assets/JC Hats/Born to Spend Negra c Rojo/FullSizeRender-_12_.webp",
      "../Assets/JC Hats/Born to Spend Negra c Rojo/IMG_4734.webp",
      "../Assets/JC Hats/Born to Spend Negra c Rojo/IMG_4735.webp",
      "../Assets/JC Hats/Born to Spend Negra c Rojo/IMG_4739.webp",
      "../Assets/JC Hats/Born to Spend Negra c Rojo/IMG_4742.webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 0,
  },
  {
    id: 7,
    nombre: "SPEND MONEY GREEN",
    imagen: "../Assets/JC Hats/Spend Money Green/FullSizeRender-_11_.webp",
    precio: "$800.00",
    descripcion:
      "La colección de Spend Money forma parte de la nueva línea de diseño que lleva JC Hats, la cual consta de enfocarnos más hacia la moda (reflejándose en el cambio de materiales y uso de colores nuevos) pero siempre manteniendo la esencia de la marca del lujo y la diversión (a través de frases utilizadas en los diseños frontales).",
    infoAdicional: [
      "Marca: JC Hats.",
      "Colores disponibles: Verde.",
      "Modelo: SPEND MONEY GREEN",
    ],
    imagenes: [
      "../Assets/JC Hats/Spend Money Green/FullSizeRender-_11_.webp",
      "../Assets/JC Hats/Spend Money Green/Exportación/IMG_4638.webp",
      "../Assets/JC Hats/Spend Money Green/Exportación/IMG_4640.webp",
      "../Assets/JC Hats/Spend Money Green/Exportación/IMG_4641.webp",
      "../Assets/JC Hats/Spend Money Green/Exportación/IMG_4643.webp",
      // ... más imágenes ...
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 8,
    nombre: "SPEND MONEY GRAY BLUE",
    imagen: "../Assets/JC Hats/Spend Money Gray Blue/FullSizeRender (1).webp",
    precio: "$800.00",
    descripcion:
      "La colección de Spend Money forma parte de la nueva línea de diseño que lleva JC Hats, la cual consta de enfocarnos más hacia la moda (reflejándose en el cambio de materiales y uso de colores nuevos) pero siempre manteniendo la esencia de la marca del lujo y la diversión (a través de frases utilizadas en los diseños frontales).",
    infoAdicional: [
      "Marca: JC Hats.",
      "Colores disponibles: Azul.",
      "Modelo: SPEND MONEY GRAY BLUE",
    ],
    imagenes: [
      "../Assets/JC Hats/Spend Money Gray Blue/FullSizeRender (1).webp",
      "../Assets/JC Hats/Spend Money Gray Blue/Exportación/IMG_4649.webp",
      "../Assets/JC Hats/Spend Money Gray Blue/Exportación/IMG_4650.webp",
      "../Assets/JC Hats/Spend Money Gray Blue/Exportación/IMG_4651.webp",
      "../Assets/JC Hats/Spend Money Gray Blue/Exportación/IMG_4652.webp",
      // ... más imágenes ...
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 9,
    nombre: "SPEND MONEY BEIGE GREEN",
    imagen:
      "../Assets/JC Hats/Spend Money Beige Green/FullSizeRender-_10_.webp",
    precio: "$800.00",
    descripcion:
      "La colección de Spend Money forma parte de la nueva línea de diseño que lleva JC Hats, la cual consta de enfocarnos más hacia la moda (reflejándose en el cambio de materiales y uso de colores nuevos) pero siempre manteniendo la esencia de la marca del lujo y la diversión (a través de frases utilizadas en los diseños frontales).",
    infoAdicional: [
      "Marca: JC Hats.",
      "Colores disponibles: Beige - Verde.",
      "Modelo: SPEND MONEY BEIGE GREEN",
    ],
    imagenes: [
      "../Assets/JC Hats/Spend Money Beige Green/FullSizeRender-_10_.webp",
      "../Assets/JC Hats/Spend Money Beige Green/Exportación/IMG_4630.webp",
      "../Assets/JC Hats/Spend Money Beige Green/Exportación/IMG_4631.webp",
      "../Assets/JC Hats/Spend Money Beige Green/Exportación/IMG_4634.webp",
      "../Assets/JC Hats/Spend Money Beige Green/Exportación/IMG_4636.webp",

      // ... más imágenes ...
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 10,
    nombre: "Oracle Red Bull Racing Checo Pérez 9FORTY Snapback",
    imagen: "../Assets/New Era/Checo Perez/FullSizeRender (6).webp",
    precio: "$900.00",
    descripcion:
      "Demuestra tu pasión por las carreras y la velocidad con esta gorra New Era 9FORTY de Oracle Red Bull Racing de la colección de la temporada 2024 con el logotipo de Red Bull Racing en los paneles frontales, el número 11 de Checo Pérez en la visera, patrocinios en la corona, y el flag de New Era bordado en el lado izquierdo. Apoya a tu piloto favorito y cómprala ya.",
    infoAdicional: [
      "Marca: New Era.",
      "Colores disponibles: Azul.",
      "Modelo: Oracle Red Bull Racing Checo Pérez 9FORTY Snapback",
      "Medida: 9Forty Snapback",
    ],
    imagenes: [
      "../Assets/New Era/Checo Perez/FullSizeRender (6).webp",
      "../Assets/New Era/Checo Perez/Exportación/Front-2.webp",
      "../Assets/New Era/Checo Perez/Exportación/Left.webp",
      "../Assets/New Era/Checo Perez/Exportación/Back-2.webp",
      "../Assets/New Era/Checo Perez/Exportación/Inside.webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 11,
    nombre: "Los Angeles Dodgers MLB Classics 39THIRTY Elástica",
    imagen: "../Assets/New Era/Dodgers/FullSizeRender (4).webp",
    precio: "$800.00",
    descripcion:
      "Completa tu outfit y sube de nivel tu estilo con esta gorra New Era de Los Angeles Dodgers y lleva a tu equipo siempre contigo. Sus materiales y forma única hacen de esta colección la mejor elección. No te quedes sin la tuya.",
    infoAdicional: [
      "Marca: New Era.",
      "Colores disponibles: Azul.",
      "Modelo: Los Angeles Dodgers MLB Classics 39THIRTY Elástica",
      "Medida: 39 Thirty - Talla M/L",
    ],
    imagenes: [
      "../Assets/New Era/Dodgers/FullSizeRender (4).webp",
      "../Assets/New Era/Dodgers/Exportación/front.webp",
      "../Assets/New Era/Dodgers/Exportación/Behind.webp",
      "../Assets/New Era/Dodgers/Exportación/under.webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 12,
    nombre: "New York Yankees Black on Black 59FIFTY Cerrada",
    imagen: "../Assets/New Era/NY Yankees/Black/FullSizeRender (2).webp",
    precio: "$800.00",
    descripcion:
      "La colección Black on Black de los New York Yankees esta diseñada en color negro para lucir elegante y con más estilo que nunca. ¿Quieres una gorra única? Esta 59FIFTY es la indicada, siempre se ve bien y combina con todo. Agrégala a carrito ahora.",
    infoAdicional: [
      "Marca: New Era.",
      "Colores disponibles: Negro.",
      "Modelo: New York Yankees Black on Black 59FIFTY Cerrada",
      "Medida: 59 Fifty 7 1/4",
    ],
    imagenes: [
      "../Assets/New Era/NY Yankees/Black/FullSizeRender (2).webp",
      "../Assets/New Era/NY Yankees/Black/Exportación/front-5.webp",
      "../Assets/New Era/NY Yankees/Black/Exportación/left-4.webp",
      "../Assets/New Era/NY Yankees/Black/Exportación/under-2.webp",
      "../Assets/New Era/NY Yankees/Black/Exportación/under 2-2.webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 13,
    nombre: "New York Yankees MLB Classics 59FIFTY Cerrada Roja",
    imagen: "../Assets/New Era/NY Yankees/Red/FullSizeRender (3).webp",
    precio: "$850.00",
    descripcion:
      "Completa tu outfit y sube de nivel tu estilo con esta gorra New Era de New York Yankees y lleva a tu equipo siempre contigo. Sus materiales y forma única hacen de esta colección la mejor elección. No te quedes sin la tuya.",
    infoAdicional: [
      "Marca: New Era.",
      "Colores disponibles: Rojo.",
      "Modelo: New York Yankees MLB Classics 59FIFTY Cerrada Roja",
      "Medida: 59 Fifty 7 1/4",
    ],
    imagenes: [
      "../Assets/New Era/NY Yankees/Red/FullSizeRender (3).webp",
      "../Assets/New Era/NY Yankees/Red/Exportación/front-4.webp",
      "../Assets/New Era/NY Yankees/Red/Exportación/left-3.webp",
      "../Assets/New Era/NY Yankees/Red/Exportación/back-3.webp",
      "../Assets/New Era/NY Yankees/Red/Exportación/bottom.webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 14,
    nombre: "Texas Rangers Authentic Collection 59FIFTY Cerrada",
    imagen: "../Assets/New Era/Texas Rangers/FullSizeRender.webp",
    precio: "$850.00",
    descripcion:
      "Esta gorra New Era 59FIFTY de Texas Rangers Authentic Collection presenta el logotipo de los Rangers bordado en los paneles frontales, el MLB Batterman al reverso y el flag de New Era bordado en el lado izquierdo. Luce como tus peloteros favoritos y apoya a tu equipo con la gorra oficial de la MLB.",
    infoAdicional: [
      "Marca: New Era.",
      "Colores disponibles: Rojo.",
      "Modelo: Texas Rangers Authentic Collection 59FIFTY Cerrada",
      "Medida: 59 Fifty 7 1/4",
    ],
    imagenes: [
      "../Assets/New Era/Texas Rangers/FullSizeRender.webp",
      "../Assets/New Era/Texas Rangers/Exportación/front-3.webp",
      "../Assets/New Era/Texas Rangers/Exportación/left-2.webp",
      "../Assets/New Era/Texas Rangers/Exportación/under.webp",
      "../Assets/New Era/Texas Rangers/Exportación/under 2.webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 15,
    nombre: "ALL EYEZ ON ME - BLACK",
    imagen: "../Assets/High Stakes/All Eyez On Me - Black/FullSizeRender (14).webp",
    precio: "$850.00",
    descripcion:
      "Haciendo honor al WESTSIDE. Hecha de gamuza, con bordado 3D en el frente y micro bordado en el lateral. Debajo de la visera tiene diseño impreso de un pañuelo. Con un estilo callejero pero fino. Llévatela en negro y/o café, no hay fallas.",
    infoAdicional: [
      "Marca: High Stakes.",
      "Colores disponibles: Negro.",
      "Modelo: All Eyez On Me",
    ],
    imagenes: [
      "../Assets/High Stakes/All Eyez On Me - Black/FullSizeRender (14).webp",
      "../Assets/High Stakes/All Eyez On Me - Black/IMG_4775.webp",
      "../Assets/High Stakes/All Eyez On Me - Black/IMG_4776.webp",
      "../Assets/High Stakes/All Eyez On Me - Black/IMG_4777.webp",
      "../Assets/High Stakes/All Eyez On Me - Black/IMG_4778.webp"
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 0,
  },
  {
    id: 16,
    nombre: "SINNER LOVER",
    imagen: "../Assets/High Stakes/Sinner Lover/FullSizeRender (17).webp",
    precio: "$850.00",
    descripcion:
      "Y tu, ¿te consideras sinner o lover? Fácilmente podemos ser ambas. Esta es de las favoritas de todos. Hecha de algodón y con visera de gamuza. El logo frontal es de bordado 3D y en los laterales tiene al angelito y el diablito hablándote al oído, hechos con micro bordado. En la parte de abajo tiene el 777 (el número angelical que te dice que confíes en tu intuición para tomar decisiones) con relieve. ",
    infoAdicional: [
      "Marca: High Stakes.",
      "Modelo: Sinner Lover",
    ],
    imagenes: [
      "../Assets/High Stakes/Sinner Lover/FullSizeRender (17).webp",
      "../Assets/High Stakes/Sinner Lover/IMG_4779.webp",
      "../Assets/High Stakes/Sinner Lover/IMG_4780.webp",
      "../Assets/High Stakes/Sinner Lover/IMG_4781.webp",
      "../Assets/High Stakes/Sinner Lover/IMG_4782.webp",
      "../Assets/High Stakes/Sinner Lover/IMG_4783.webp"
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 0,
  },
  {
    id: 17,
    nombre: "BIPOLAR",
    imagen: "../Assets/High Stakes/Bipolar/FullSizeRender (15).webp",
    precio: "$850.00",
    descripcion:
      "A veces arriba, a veces abajo. La gorra Bipolar esta hecha de gamuza, bordado 3D enfrente y micro bordado en el lateral, abajo tiene diseño con relieve y es en general un diseño muy flexible.",
    infoAdicional: [
      "Marca: High Stakes.",
      "Colores disponibles: Negro.",
      "Modelo: Bipolar",
    ],
    imagenes: [
      "../Assets/High Stakes/Bipolar/FullSizeRender (15).webp",
      "../Assets/High Stakes/Bipolar/IMG_4788.webp",
      "../Assets/High Stakes/Bipolar/IMG_4789.webp",
      "../Assets/High Stakes/Bipolar/IMG_4790.webp",
      "../Assets/High Stakes/Bipolar/IMG_4791.webp"
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 0,
  },
  {
    id: 18,
    nombre: "RISK RICH",
    imagen: "../Assets/High Stakes/Risk Rich/FullSizeRender (16).webp",
    precio: "$850.00",
    descripcion:
      "¿Estás listo para apostar por el éxito? La gorra RISK RICH es para aquellos que se atreven a jugar en las grandes ligas. Fabricada con una elegante visera de gamuza, esta gorra es una declaración de estilo y ambición.",
    infoAdicional: [
      "Marca: High Stake.",
      "Colores disponibles: Rojo.",
      "Modelo: RISK RICH",
    ],
    imagenes: [
      "../Assets/High Stakes/Risk Rich/FullSizeRender (16).webp",
      "../Assets/High Stakes/Risk Rich/IMG_4784.webp",
      "../Assets/High Stakes/Risk Rich/IMG_4785.webp",
      "../Assets/High Stakes/Risk Rich/IMG_4786.webp",
      "../Assets/High Stakes/Risk Rich/IMG_4787.webp"
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 19,
    nombre: "CLOVER AEOM",
    imagen: "../Assets/Clover/All Eyez On Me/IMG_1.webp",
    precio: "$1,200.00",
    descripcion:
      "Descubre nuestra exclusiva gorra de edición limitada All Eyez on Me, diseñada para quienes buscan destacar con estilo y personalidad. Esta gorra única combina materiales de alta calidad y detalles cuidadosamente elaborados para ofrecerte una pieza verdaderamente especial.",
    infoAdicional: [
      "Material: Confeccionada en suave gamuza de primera calidad, esta gorra ofrece una sensación lujosa y duradera.",
      "Bordado: Destaca por su bordado detallado en la parte frontal, con la frase All Eyez on Me en un elegante estilo gótico y un llamativo crucifijo rojo que añade un toque distintivo.",
      "Parte Trasera: La parte trasera está hecha de malla transparente, permitiendo una mejor ventilación y comodidad durante todo el día.",
      "Detalles Adicionales: Incorpora elementos decorativos adicionales en la visera y los laterales, incluyendo cruces bordadas y un diseño único en el borde de la visera.",
    ],
    imagenes: [
      "../Assets/Clover/All Eyez On Me/IMG_1.webp",
      "../Assets/Clover/All Eyez On Me/FullSizeRender (29).webp",
      "../Assets/Clover/All Eyez On Me/FullSizeRender (27).webp",
      "../Assets/Clover/All Eyez On Me/FullSizeRender (25).webp",
      "../Assets/Clover/All Eyez On Me/FullSizeRender (26).webp",
      "../Assets/Clover/All Eyez On Me/FullSizeRender (28).webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 20,
    nombre: "CLOVER red heart",
    imagen: "../Assets/Clover/Clover Red Heart/FullSizeRender (3).webp",
    precio: "$1,100.00",
    descripcion:
      "Presenta nuestra gorra exclusiva 'Clover Red', una pieza de edición limitada que combina estilo urbano con un diseño audaz. Esta gorra destaca por su llamativo color rojo y su bordado distintivo.",
    infoAdicional: [
      "Material: Confeccionada en gamuza de alta calidad para una comodidad duradera y un ajuste perfecto.",
      "Bordado: Presenta un impresionante bordado frontal con el logotipo 'Clover' en letras góticas negras, complementado con pequeños detalles de corazones.",
      "Detalle Lateral: Incluye un parche bordado adicional en el lateral, añadiendo un toque extra de estilo.",
      "Visera: Cuenta con un detalle metálico en la visera, elevando el diseño con un toque de lujo.",
    ],
    imagenes: [
      "../Assets/Clover/Clover Red Heart/FullSizeRender (3).webp",
      "../Assets/Clover/Clover Red Heart/FullSizeRender (35).webp",
      "../Assets/Clover/Clover Red Heart/FullSizeRender (33).webp",
      "../Assets/Clover/Clover Red Heart/FullSizeRender (21).webp",
      "../Assets/Clover/Clover Red Heart/FullSizeRender (32).webp",
      "../Assets/Clover/Clover Red Heart/FullSizeRender (34).webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 21,
    nombre: "CLOVER with love",
    imagen: "../Assets/Clover/From Clover With Love/IMG-F.webp",
    precio: "$1,100.00",
    descripcion:
      "Descubre nuestra gorra 'From Clover with Love', una pieza elegante que fusiona el estilo clásico con un toque moderno. Este diseño en negro profundo con bordado blanco es perfecto para aquellos que aprecian la sutileza y la sofisticación en su vestimenta.",
    infoAdicional: [
      "Material: Fabricada con un tejido premium que garantiza durabilidad y comodidad durante todo el día.",
      "Bordado: Presenta un elaborado bordado frontal con la frase 'From Clover with Love' en un elegante estilo gótico blanco.",
      "Detalles: Incorpora delicados diseños de mariposas bordadas, añadiendo un toque de gracia al diseño.",
      "Accesorio: Incluye un detalle metálico en la visera, aportando un elemento de distinción al conjunto.",
    ],
    imagenes: [
      "../Assets/Clover/From Clover With Love/IMG-F.webp",
      "../Assets/Clover/From Clover With Love/IMG.webp",
      "../Assets/Clover/From Clover With Love/IMG_1.webp",
      "../Assets/Clover/From Clover With Love/FullSizeRender (24).webp",
      "../Assets/Clover/From Clover With Love/FullSizeRender (30).webp",
      "../Assets/Clover/From Clover With Love/FullSizeRender (31).webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 22,
    nombre: "CLOVER LA",
    imagen: "../Assets/Clover/LA Clover/FullSizeRender.webp",
    precio: "$1,100.00",
    descripcion:
      "Presentamos nuestra gorra 'LA Clover', una pieza única que combina elegancia y extravagancia. Con su diseño negro y detalles brillantes, esta gorra es perfecta para quienes buscan destacar en su estilo.",
    infoAdicional: [
      "Material: Confeccionada en gamuza de alta calidad que proporciona comodidad y durabilidad.",
      "Diseño Frontal: Cuenta con un impresionante bordado de las letras 'LA' en un llamativo color morado, rodeado de un patrón de cristales brillantes.",
      "Acabado: El diseño se complementa con detalles adicionales bordados en los laterales y la parte trasera.",
      "Detalle Especial: Incluye un accesorio metálico en la visera, añadiendo un toque de sofisticación al conjunto.",
    ],
    imagenes: [
      "../Assets/Clover/LA Clover/FullSizeRender.webp",
      "../Assets/Clover/LA Clover/FullSizeRender (18).webp",
      "../Assets/Clover/LA Clover/FullSizeRender (19).webp",
      "../Assets/Clover/LA Clover/FullSizeRender (20).webp",
      "../Assets/Clover/LA Clover/FullSizeRender (22).webp",
      "../Assets/Clover/LA Clover/FullSizeRender (23).webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 23,
    nombre: "CLOVER tumbados club",
    imagen: "../Assets/Clover/Tumbados Club/FullSizeRender (1).webp",
    precio: "$1,100.00",
    descripcion:
      "Introduce nuestra gorra 'Tumbados Club', una pieza única que fusiona el estilo tumbado con un toque de lujo y originalidad. Esta gorra negra con detalles en rojo es perfecta para aquellos que buscan expresar su personalidad.",
    infoAdicional: [
      "Material: Fabricada con una gamuza resistente y cómoda, ideal para el uso diario.",
      "Diseño Frontal: Presenta un llamativo bordado en blanco con corazones en rojo brillante",
      "Contraste: El bordado rojo sobre el fondo negro crea un contraste impactante que capta la atención.",
      "Accesorio: Incluye un detalle metálico en la visera, añadiendo un toque de elegancia al diseño divertido.",
    ],
    imagenes: [
      "../Assets/Clover/Tumbados Club/FullSizeRender (1).webp",
      "../Assets/Clover/Tumbados Club/IMG_2.webp",
      "../Assets/Clover/Tumbados Club/FullSizeRender (14).webp",
      "../Assets/Clover/Tumbados Club/FullSizeRender (17).webp",
      "../Assets/Clover/Tumbados Club/FullSizeRender (15).webp",
      "../Assets/Clover/Tumbados Club/FullSizeRender (16).webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 24,
    nombre: "corridos tumbados",
    imagen: "../Assets/MC/CT/FullSizeRender (2).webp",
    precio: "$900.00",
    descripcion:
      "Introduce nuestra gorra 'Corridos Tumbados', una pieza única que fusiona lo tumbado con la exclusividad de la marca.",
    infoAdicional: [
      "Material: Fabricada con gamuza negra resistente y cómodo, ideal para el uso diario.",
      "Diseño Frontal: Presenta un llamativo bordado de las letras 'CT' en rojo brillante, con un perezoso ingeniosamente integrado en el diseño.",
      "Contraste: El bordado rojo sobre el fondo negro crea un contraste impactante que capta la atención.",
      "Accesorio: El lateral tiene impresos logtipos referentes a los corridos tumbados y a marcas de lujo para darle un toque único a la gorra.",
    ],
    imagenes: [
      "../Assets/MC/CT/FullSizeRender (2).webp",
      "../Assets/MC/CT/FullSizeRender (6).webp",
      "../Assets/MC/CT/FullSizeRender (7).webp",
      "../Assets/MC/CT/FullSizeRender (8).webp",
      "../Assets/MC/CT/FullSizeRender (9).webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 25,
    nombre: "LA Angel",
    imagen: "../Assets/MC/LA Angel/FullSizeRender (4).webp",
    precio: "$900.00",
    descripcion:
      "Presenta nuestra gorra exclusiva 'LA Angel', una pieza de edición limitada que fusiona el estilo urbano con un toque celestial. Esta gorra negra destaca por su impresionante bordado frontal, combinando la elegancia de las alas con la fuerza de las letras góticas, perfecta para aquellos que buscan expresar su individualidad con un diseño simbólico.",
    infoAdicional: [
      "Material: Confeccionada en gamuza negra de alta calidad, que ofrece durabilidad y un aspecto premium.",
      "Bordado Principal: Presenta un llamativo diseño frontal con la letra 'LA' en estilo gótico, flanqueada por alas detalladas en tonos blancos y celestes, creando un efecto tridimensional.",
      "Detalles Laterales: Incluye un bordado adicional en el lateral, añadiendo profundidad y complejidad al diseño general.",
      "Contraste: El uso de colores claros sobre el fondo negro crea un contraste dramático que capta la atención y realza el diseño.",
      "Ajuste: Diseñada para proporcionar un ajuste cómodo y adaptable a diferentes tamaños de cabeza."
    ],
    imagenes: [
      "../Assets/MC/LA Angel/FullSizeRender (4).webp",
      "../Assets/MC/LA Angel/FullSizeRender (10).webp",
      "../Assets/MC/LA Angel/FullSizeRender (11).webp",
      "../Assets/MC/LA Angel/FullSizeRender (12).webp",
      "../Assets/MC/LA Angel/FullSizeRender (13).webp",
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 26,
    nombre: "Modo Avión",
    imagen: "./Assets/New Religion/Modo Avion/FullSizeRender (2).webp",
    precio: "$900.00",
    descripcion: "“Modo Avión” ✈️, porfa solo háblenme para negocios estoy en modo avión!",
    infoAdicional: [],
    imagenes: [
      '../Assets/New Religion/Modo Avion/FullSizeRender (2).webp',
      '../Assets/New Religion/Modo Avion/Galery/FullSizeRender (13).webp',
      '../Assets/New Religion/Modo Avion/Galery/FullSizeRender (15).webp',
      '../Assets/New Religion/Modo Avion/Galery/FullSizeRender (16).webp',
      '../Assets/New Religion/Modo Avion/Galery/FullSizeRender (17).webp',
      '../Assets/New Religion/Modo Avion/Galery/FullSizeRender (18).webp',
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 27,
    nombre: "La People",
    imagen: "./Assets/New Religion/La People/FullSizeRender.webp",
    precio: "$900.00",
    descripcion: "Por ahí me vieron y fue echando vergazos, rifle en el hombro piernera, la Dior, Under Armour",
    infoAdicional: [],
    imagenes: [
      '../Assets/New Religion/La People/FullSizeRender.webp',
      '../Assets/New Religion/La People/Galery/FullSizeRender (19).webp',
      '../Assets/New Religion/La People/Galery/FullSizeRender (20).webp',
      '../Assets/New Religion/La People/Galery/FullSizeRender (21).webp',
      '../Assets/New Religion/La People/Galery/FullSizeRender (22).webp',
      '../Assets/New Religion/La People/Galery/FullSizeRender (23).webp',
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 3,
  },
  {
    id: 28,
    nombre: "Rich Man",
    imagen: "./Assets/New Religion/Rich Man/IMG.webp",
    precio: "$900.00",
    descripcion: "“Mom I Am A Rich Man”, para aquellos soñadores! Uno de nuestros diseños favoritos!",
    infoAdicional: [],
    imagenes: [
      '../Assets/New Religion/Rich Man/IMG.webp',
      '../Assets/New Religion/Rich Man/Galery/FullSizeRender (24).webp',
      '../Assets/New Religion/Rich Man/Galery/FullSizeRender (25).webp',
      '../Assets/New Religion/Rich Man/Galery/FullSizeRender (26).webp',
      '../Assets/New Religion/Rich Man/Galery/FullSizeRender (27).webp',
      '../Assets/New Religion/Rich Man/Galery/FullSizeRender (28).webp',
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 3,
  },
  {
    id: 29,
    nombre: "LA-47",
    imagen: "./Assets/New Religion/LA47/FullSizeRender (1).webp",
    precio: "$900.00",
    descripcion: "“LA AK47” nuestra historia no tiene fin.",
    infoAdicional: [],
    imagenes: [
      '../Assets/New Religion/LA47/FullSizeRender (1).webp',
      '../Assets/New Religion/LA47/Galery/FullSizeRender (5).webp',
      '../Assets/New Religion/LA47/Galery/FullSizeRender (6).webp',
      '../Assets/New Religion/LA47/Galery/FullSizeRender (8).webp',
      '../Assets/New Religion/LA47/Galery/FullSizeRender (9).webp',
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 3,
  },
  {
    id: 30,
    nombre: "SKULL",
    imagen: "./Assets/New Religion/Skull/FullSizeRender (4).webp",
    precio: "$900.00",
    descripcion: "Skull”, el lujo en una gorra.",
    infoAdicional: [],
    imagenes: [
      '../Assets/New Religion/Skull/FullSizeRender (4).webp',
      '../Assets/New Religion/Skull/Galery/FullSizeRender (10).webp',
      '../Assets/New Religion/Skull/Galery/FullSizeRender (11).webp',
      '../Assets/New Religion/Skull/Galery/FullSizeRender (12).webp',
      '../Assets/New Religion/Skull/Galery/FullSizeRender (7).webp',
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  },
  {
    id: 31,
    nombre: "LA-LV",
    imagen: "./Assets/New Religion/LAV/FullSizeRender (3).webp",
    precio: "$900.00",
    descripcion: "“LA-LV”… no tenemos mucho que decir de este Release, el diseño habla por sí solo; se parte del “richest boys club”",
    infoAdicional: [],
    imagenes: [
      '../Assets/New Religion/LAV/FullSizeRender (3).webp',
      '../Assets/New Religion/LAV/Galery/FullSizeRender (29).webp',
      '../Assets/New Religion/LAV/Galery/FullSizeRender (30).webp',
      '../Assets/New Religion/LAV/Galery/FullSizeRender (31).webp',
      '../Assets/New Religion/LAV/Galery/FullSizeRender (32).webp',
    ],
    linkCompra: "https://wa.me/message/M6VLN4VURGDIF1",
    stock: 1,
  }
];

document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = parseInt(urlParams.get("id"));

  const producto = productos.find((p) => p.id === productId);

  if (producto) {
    document.title = `Dream High - ${producto.nombre}`;
    document.querySelector(".product-name").textContent = producto.nombre;
    document.getElementById("product-price").textContent = producto.precio;
    document.getElementById("product-description").textContent =
      producto.descripcion;

    const ulInfo = document.getElementById("product-additional-info");
    producto.infoAdicional.forEach((info) => {
      const li = document.createElement("li");
      li.textContent = info;
      ulInfo.appendChild(li);
    });

    const buyButton = document.getElementById("buy-button");
    if (producto.stock === 0) {
      buyButton.textContent = "AGOTADO!";
      buyButton.href = "#"; // Removemos el link de compra
      buyButton.classList.add("btn-danger"); // Cambiamos el color a rojo
      buyButton.classList.remove("btn-primary"); // Removemos la clase original si existe
      buyButton.style.pointerEvents = "none"; // Deshabilitamos interacciones
    } else {
      buyButton.textContent = "Comprar";
      buyButton.href = "https://wa.link/l8ff9a";
    }

    const carouselInner = document.querySelector(".carousel-inner");
    producto.imagenes.forEach((img, index) => {
      const div = document.createElement("div");
      div.className = `carousel-item${index === 0 ? " active" : ""}`;
      div.innerHTML = `
                <a href="#" data-bs-toggle="modal" data-bs-target="#modalImage${index + 1
        }">
                    <img src="${img}" class="d-block w-100" alt="Imagen de producto">
                </a>
            `;
      carouselInner.appendChild(div);

      // Crear modal para cada imagen
      const modal = document.createElement("div");
      modal.className = "modal fade";
      modal.id = `modalImage${index + 1}`;
      modal.innerHTML = `
                <div class="modal-dialog modal-lg modal-dialog-centered">
                    <div class="modal-content">
                        <img src="${img}" alt="">
                    </div>
                </div>
            `;
      document.body.appendChild(modal);
    });
  }
  else {
    // Manejar el caso en que no se encuentra el producto
    document.querySelector(".product-name").textContent =
      "Producto no encontrado";
  }
});