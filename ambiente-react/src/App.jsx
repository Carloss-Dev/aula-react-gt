import { HandleComponent } from "./components/HandleComponent";
import "./css/App.css";

// function App() {
//   const products = [
//     {
//       id: 1,
//       name: "Smartphone Android",
//       description: "Smartphone de última geração com sistema Android",
//       price: 1999.99,
//       stock: 150,
//       category: "Eletrônicos",
//     },
//     {
//       id: 2,
//       name: "Notebook Gamer",
//       description: "Notebook de alta performance para jogos e trabalho",
//       price: 4999.99,
//       stock: 50,
//       category: "Computadores",
//     },
//     {
//       id: 3,
//       name: "Câmera DSLR",
//       description: "Câmera profissional com lente intercambiável",
//       price: 2999.99,
//       stock: 25,
//       category: "Fotografia",
//     },
//     {
//       id: 4,
//       name: "Fone de Ouvido Bluetooth",
//       description: "Fone de ouvido sem fio com cancelamento de ruído",
//       price: 399.99,
//       stock: 200,
//       category: "Acessórios",
//     },
//     {
//       id: 5,
//       name: "Smart TV 4K",
//       description:
//         "TV com resolução 4K, conectividade smart e controle por voz",
//       price: 3999.99,
//       stock: 75,
//       category: "Eletrônicos",
//     },
//   ];

//   function darOla() {
//     return "Ola ";
//   }

//   return (
//     <>
//       {products.map((product) => (
//         <ul key={product.id}>
//           <li>{product.name}</li>
//         </ul>
//       ))}
//     </>
//   );
// }

// export default App;

import React from "react";

export const App = () => {
  const [dados, setDados] = React.useState();

  async function fetchProducts() {
    const response = await fetch(
      `https://671694143fcb11b265d3016a.mockapi.io/products/`
    );
    const responseJson = await response.json();

    setDados(responseJson);
  }

  React.useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      {dados && <HandleComponent dados={dados} />}

      <button>Trazer Produtos</button>
    </>
  );
};
