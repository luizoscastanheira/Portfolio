import axios from "axios";

export async function retornaUfs(){
    const endpoint = 'https://www.devmedia.com.br/projetos-api/ufs';
    const listaUfs = (await axios.get(endpoint)).data;

    return listaUfs;
}