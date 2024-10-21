export const initContador = () => {
  const container = document.querySelector(".contador-container");
  const button = document.querySelector("button");
  const p = document.createElement("p");
  container.appendChild(p);
  let contador = 0;

  const contar = () => {
    contador = contador + 1;
    p.innerText = contador;
  };
  button.addEventListener("click", contar);
};
