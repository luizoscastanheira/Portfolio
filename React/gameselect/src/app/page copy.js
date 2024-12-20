'use client'
import { useState } from "react";

import Image from "next/image";
import estilos from "./page.module.css";

// Importando imagem
import Lupa from "../../public/lupa.png";
// Importando componentes
import ItemJogos from "@/componentes/ItemJogos";
// Importando a base de dados
import { jogosExclusivos } from "../dados/jogos.js";

export default function Home() {
// Criando funções de filtragem
// Função que faz um filtro na coleção de jogos
const jogosFiltrados = jogosExclusivos.filter((jogo) => jogo.plataforma === "xbox");

// variável de estado - Mudando o filtro de acordo com ação do usuário recebe no useState o array jogosExclusivos
const [listaJogos, setListaJogos] = useState(jogosExclusivos);
// Variável para limpar a aárea de busca
const [textoBusca, setTextoBusca] = useState("");

// funçao que mudará o filtro - no setListaJogos ele recebe uma .filter no array jogosExclusivos e um parametro para indicar o que será filtrado
function handlerFiltrarJogo(plataforma){
  setListaJogos(jogosExclusivos.filter((jogo) => jogo.plataforma === plataforma))
  setTextoBusca("");
}

// Funçao para limpar o filtro
const handlerLimparFiltro = () => {
  setListaJogos(jogosExclusivos);
  setTextoBusca("");
}

// Criando um busca textual
const handlerBuscarJogo = (textoDigitado) => {
  setTextoBusca(textoDigitado);
  setListaJogos(jogosExclusivos.filter((jogo) => jogo.plataforma.includes(textoDigitado)) || jogo.nome.toLowerCase().includes(textoDigitado.toLowerCase()))
}

  return (
    <div className={estilos.containerPrincipal}>
      <h1>Game Selector - By Luiz Otávio</h1>
      <h2>Lista de Jogos Exclusivos</h2>
      <div className={estilos.containerInput}>
        <Image className={estilos.lupaImg} src={Lupa} alt="icone" />
        <input 
        type="text"
        value={textoBusca}
        onChange={(event) => handlerBuscarJogo(event.target.value)}
        placeholder="Pesquisar por um jogo" 
        />
      </div>
      <div className={estilos.containerBts}>
        <button onClick={() => handlerFiltrarJogo("xbox")}>Xbox</button>
        <button onClick={() => handlerFiltrarJogo("playstation")}>PlayStation</button>
        <button onClick={() => handlerFiltrarJogo("nintendo")}>Nintendo</button>
        <button onClick={() => handlerLimparFiltro()}>Limpar Filtro</button>
      </div>

      <div className={estilos.containerCards}>
        { 
          /* se colocar jogosExclusivos no lugar de jogosFiltrados temos o 
          array completo. Aqui usamos na saida do .filter um .map */
          listaJogos.map((jogo) => (
            <ItemJogos key={jogo.id} nome={jogo.nome} plataforma={jogo.plataforma} />
          ) )
        }
      </div>
    </div>
  );
}
