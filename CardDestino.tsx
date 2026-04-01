import Link from "next/link";
import styles from "./CardDestino.module.css";

type Props = {
  id: string;
  nome: string;
  imagem: string;
};

export default function CardDestino({ id, nome, imagem }: Props) {
  return (
    <div className={styles.card}>
      <img src={imagem} alt={nome} />
      <h3>{nome}</h3>
      <Link href={`/destinos/${id}`}>Ver detalhes</Link>
    </div>
  );
}
