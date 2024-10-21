export const aulaAsync = () => {
  //? O que é uma promise?

  const promessa = new Promise((resolve, reject) => {
    let condicao = true;
    if (condicao) {
      resolve("Aoba galera, resposta certa");
    } else {
      reject(Error("Erro de promise"));
    }
  });

  //? then.then.then.then.then.then

  promessa
    .then((resposta) => {
      console.log(resposta);
      return "Resposta nova";
    })
    .then((resNova) => {
      console.log(resNova);
      return "ota resposta";
    })
    .then((resNovaNova) => {
      console.log(resNovaNova);
    })
    .catch((error) => {
      console.log(error);
    });

  //? Fetch

  fetch("https://6716344633bc2bfe40bce0d8.mockapi.io/products")
    .then((response) => {
      console.log("----------------------");
      console.log(response);
      return response.json();
    })
    .then((json) => {
      console.log(json);
      console.log("----------------------");
    });

  //? Async await

  const fetchAssincrono = async () => {
    const response = await fetch(
      "https://6716344633bc2bfe40bce0d8.mockapi.io/products"
    );
    const json = await response.json();

    console.log(json);
  };

  fetchAssincrono();
};
