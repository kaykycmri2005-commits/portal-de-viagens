import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import { destinos } from "../../data/destinos";

export default function DetalheDestino() {
  const router = useRouter();
  const { id } = router.query;

  const destino = destinos.find((d) => d.id === id);

  if (!destino) return <p>Carregando...</p>;

  return (
    <Layout>
      <h2>{destino.nome}</h2>
      <img src={destino.imagem} alt={destino.nome} width="400" />
      <p>{destino.descricao}</p>
    </Layout>
  );
}
