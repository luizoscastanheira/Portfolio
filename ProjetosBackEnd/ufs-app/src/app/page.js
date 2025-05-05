import estilos from "./page.module.css";
import { retornaUfs } from "./servicos/ufs";

// Chamando a função inportada
const listaUfs = await retornaUfs();

export default function Home() {
  return (
    <main className={estilos.main}>
      <header className={estilos.header}>
        App de UFs
      </header>
      <table className={estilos.tabela}>
        <thead>
          <tr>
            <th>ID</th>
            <th>UF</th>
            <th>NOME</th>
          </tr>
        </thead>
        <tbody>
          {
            listaUfs.map((dadosUF, index) =>(
              <tr key={index}>
                <td>{dadosUF.id}</td>
                <td>{dadosUF .uf}</td>
                <td>{dadosUF.nome}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  );
}
