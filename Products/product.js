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
