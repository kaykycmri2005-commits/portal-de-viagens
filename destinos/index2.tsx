import Layout from "../../components/Layout";
import { destinos } from "../../data/destinos";
import CardDestino from "../../components/CardDestino";

export default function Destinos() {
  return (
    <Layout>
      <h2>Destinos</h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            id={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
          />
        ))}
      </div>
    </Layout>
  );
}
