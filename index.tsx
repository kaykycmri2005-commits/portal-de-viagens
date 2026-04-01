import Layout from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout>
      <h2>Bem-vindo ao Portal de Viagens ✈️</h2>
      <p>Explore destinos incríveis ao redor do mundo.</p>

      <Link href="/destinos">Ver destinos</Link>
    </Layout>
  );
}
