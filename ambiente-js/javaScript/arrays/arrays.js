export const aulaArrays = () => {
  const products = [
    {
      id: 1,
      name: "Smartphone Android",
      description: "Smartphone de última geração com sistema Android",
      price: 1999.99,
      stock: 150,
      category: "Eletrônicos",
    },
    {
      id: 2,
      name: "Notebook Gamer",
      description: "Notebook de alta performance para jogos e trabalho",
      price: 4999.99,
      stock: 50,
      category: "Computadores",
    },
    {
      id: 3,
      name: "Câmera DSLR",
      description: "Câmera profissional com lente intercambiável",
      price: 2999.99,
      stock: 25,
      category: "Fotografia",
    },
    {
      id: 4,
      name: "Fone de Ouvido Bluetooth",
      description: "Fone de ouvido sem fio com cancelamento de ruído",
      price: 399.99,
      stock: 200,
      category: "Acessórios",
    },
    {
      id: 5,
      name: "Smart TV 4K",
      description:
        "TV com resolução 4K, conectividade smart e controle por voz",
      price: 3999.99,
      stock: 75,
      category: "Eletrônicos",
    },
  ];

  //? map x foreach

  const produtoCopia = products.map((product) => {
    product;
  });

  const produtoCopia2 = products.forEach((product) => {
    return product;
  });

  console.log(produtoCopia);

  console.log(produtoCopia2);

  //? React x JavaScript

  const root = document.querySelector("#root");
  root.innerHTML = `${products
    .map((product) => {
      return `
        <h1>${product.name}</h1>
        <p> ${product.description}</p>
        <p> R$ ${product.price}</p>
      `;
    })
    .join(" ")}`;
};
