const URL_API = "http://localhost:5014/api";

async function pedidoAPI(caminho, metodo = "GET", dados = null) {
    const opcoes = {
        method: metodo,
        headers: {
            "Content-Type": "application/json"
        }
    };

    if (dados !== null) {
        opcoes.body = JSON.stringify(dados);
    }

    const resposta = await fetch(URL_API + caminho, opcoes);
    let resultado = null;
    try {
        resultado = await resposta.json();
    } catch (erro) {
        resultado = null;
    }

    if (!resposta.ok) {
        const mensagem = resultado && resultado.mensagem ? resultado.mensagem : "Ocorreu um erro ao comunicar com o servidor.";
        throw new Error(mensagem);
    }
    return resultado;
}

export async function listarUtilizadores() {
    return pedidoAPI("/Utilizadores");
}

export async function obterUtilizador(idUtilizador) {
    return pedidoAPI(`/Utilizadores/${idUtilizador}`);
}

export async function criarUtilizador(utilizador) {
    return pedidoAPI("/Utilizadores", "POST", utilizador);
}

export async function login(email, palavraPasse) {
    return pedidoAPI("/Utilizadores/login", "POST", {
        email: email,
        palavraPasse: palavraPasse
    });
}

export async function editarUtilizador(utilizador) {
    return pedidoAPI(`/Utilizadores/${utilizador.idUtilizador}`, "PUT", utilizador);
}

export async function eliminarUtilizador(idUtilizador) {
    return pedidoAPI(`/Utilizadores/${idUtilizador}`, "DELETE");
}

export async function listarPerfis() {
    return pedidoAPI("/Perfis");
}

export async function obterPerfil(idPerfil) {
    return pedidoAPI(`/Perfis/${idPerfil}`);
}

export async function listarPerfisUtilizador(idUtilizador) {
    return pedidoAPI(`/Perfis/utilizador/${idUtilizador}`);
}

export async function criarPerfil(perfil) {
    return pedidoAPI("/Perfis", "POST", perfil);
}

export async function editarPerfil(perfil) {
    return pedidoAPI(`/Perfis/${perfil.idPerfil}`, "PUT", perfil);
}

export async function eliminarPerfil(idPerfil) {
    return pedidoAPI(`/Perfis/${idPerfil}`, "DELETE");
}

export async function listarMedicamentos() {
    return pedidoAPI("/Medicamentos");
}

export async function obterMedicamento(idMedicamento) {
    return pedidoAPI(`/Medicamentos/${idMedicamento}`);
}

export async function listarMedicamentosPerfil(idPerfil) {
    return pedidoAPI(`/Medicamentos/perfil/${idPerfil}`);
}

export async function criarMedicamento(medicamento) {
    return pedidoAPI("/Medicamentos", "POST", medicamento);
}

export async function editarMedicamento(medicamento) {
    return pedidoAPI(`/Medicamentos/${medicamento.idMedicamento}`, "PUT", medicamento);
}

export async function eliminarMedicamento(idMedicamento) {
    return pedidoAPI(`/Medicamentos/${idMedicamento}`, "DELETE");
}

export async function listarTomas() {
    return pedidoAPI("/Tomas");
}

export async function obterToma(idToma) {
    return pedidoAPI(`/Tomas/${idToma}`);
}

export async function listarTomasMedicamento(idMedicamento) {
    return pedidoAPI(`/Tomas/medicamento/${idMedicamento}`);
}

export async function listarTomasPendentes() {
    return pedidoAPI("/Tomas/pendentes");
}

export async function criarToma(toma) {
    return pedidoAPI("/Tomas", "POST", toma);
}

export async function editarToma(toma) {
    return pedidoAPI(`/Tomas/${toma.idToma}`, "PUT", toma);
}

export async function registarToma(idToma) {
    return pedidoAPI(`/Tomas/${idToma}/registar`, "PUT");
}

export async function eliminarToma(idToma) {
    return pedidoAPI(`/Tomas/${idToma}`, "DELETE");
}