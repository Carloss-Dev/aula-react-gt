export const aulaAsync = () => {
  //? O que é uma promise?

  // const promessa = new Promise((respostaCasoCerta, reject) => {
  //   let condicao = true;
  //   if (condicao) {
  //     respostaCasoCerta("que meu salário chegue logo");
  //   } else {
  //     reject(Error("Vai atrasar 5 dias"));
  //   }
  // });

  // console.log(promessa);
  // console.log("----------------");

  //? then.then.then.then.then.then

  // promessa
  //   .then((resposta) => {
  //     console.log(resposta);
  //     return "Resposta nova";
  //   })
  //   .then((resNova) => {
  //     console.log(resNova);
  //     return "ota resposta";
  //   })
  //   .then((resNovaNova) => {
  //     console.log(resNovaNova);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  //? Fetch

  fetch("https://6716344633bc2bfe40bce0d8.mockapi.io/products")
    .then((batata) => batata.json())
    .then((batataCozida) => {
      console.log(batataCozida);
    });

  console.log("----------------------");

  //? Async await

  const fetchAssincrono = async () => {
    const response = await fetch(
      "https://6716344633bc2bfe40bce0d8.mockapi.io/products"
    );

    const expressao = (await 1) + 1;

    const json = await response.json();

    console.log(json);

    return "aoba";
  };

  fetchAssincrono();
};
