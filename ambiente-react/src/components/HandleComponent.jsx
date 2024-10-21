import React from "react";

export const HandleComponent = ({ dados }) => {
  return (
    <section className="card-section">
      {dados &&
        dados
          .filter((dado) => {
            return +dado.price > 2000;
          })
          .map((dado) => (
            <div className="card" key={dado.id}>
              <h3>Produto: {dado.name}</h3>
              <p>Descrição: {dado.description}</p>
            </div>
          ))}
    </section>
  );
};
