import * as api from "./api.js";


const traducoesTomas = {
    pt: {
        titulo: "Tomas",
        subtitulo: "Gere as tomas deste medicamento.",
        criar_toma: "Criar toma",
        nenhuma_toma: "Ainda não existem tomas.",
        nenhuma_toma_texto: "Cria uma toma para começares a registar a medicação.",
        hora_toma_nao_chegou: "Ainda não chegou a hora prevista para esta toma.",

        data: "Data",
        hora: "Hora",
        data_hora: "Data e hora",
        quantidade: "Quantidade",

        estado: "Estado",
        pendente: "Pendente",
        atrasada: "Atrasada",
        tomada: "Tomada",

        guardar: "Guardar",
        cancelar: "Cancelar",
        fechar: "Fechar",
        editar: "Editar",
        eliminar: "Eliminar",
        ver: "Ver detalhes",

        criar_toma_titulo: "Criar toma",
        editar_toma_titulo: "Editar toma",
        detalhes_toma: "Detalhes da toma",

        label_data_toma: "Data *",
        label_hora_toma: "Hora *",
        label_quantidade_toma: "Quantidade a tomar *",

        data_toma_obrigatoria: "Indica a data da toma.",
        hora_toma_obrigatoria: "Indica a hora da toma.",
        quantidade_toma_invalida: "A quantidade deve ser um número inteiro superior a zero.",
        data_toma_invalida: "A data e a hora da nova toma têm de ser futuras.",

        toma_criada: "Toma criada com sucesso.",
        toma_atualizada: "Toma atualizada com sucesso.",
        toma_eliminada: "Toma eliminada com sucesso.",
        toma_registada: "Toma registada com sucesso.",

        registar: "Registar toma",
        eliminar_toma: "Eliminar toma",

        confirmar_eliminar_toma_texto: "Tens a certeza de que pretendes eliminar esta toma?",
        confirmar_registo_toma: "Confirmar registo",
        confirmar_registo_toma_texto: "Confirmas que tomaste esta medicação?",
        confirmar_eliminacao_toma: "Eliminar toma",
        medicamento: "Medicamento",

        sem_informacao: "Sem informação",
        erro_carregar_tomas: "Não foi possível carregar as tomas.",
        erro_guardar_toma: "Não foi possível guardar a toma.",
        erro_eliminar_toma: "Não foi possível eliminar a toma.",
        erro_registar_toma: "Não foi possível registar a toma.",
        medicamento_nao_encontrado: "Não foi possível encontrar este medicamento."
    },

    en: {
        titulo: "Doses",
        subtitulo: "Manage this medication's doses.",
        criar_toma: "Create dose",
        nenhuma_toma: "There are no doses yet.",
        nenhuma_toma_texto: "Create a dose to start tracking your medication.",hora_toma_nao_chegou: "The scheduled time for this dose has not arrived yet.",

        data: "Date",
        hora: "Time",
        data_hora: "Date and time",
        quantidade: "Quantity",

        estado: "Status",
        pendente: "Pending",
        atrasada: "Late",
        tomada: "Taken",

        guardar: "Save",
        cancelar: "Cancel",
        fechar: "Close",
        editar: "Edit",
        eliminar: "Delete",
        ver: "View details",

        criar_toma_titulo: "Create dose",
        editar_toma_titulo: "Edit dose",
        detalhes_toma: "Dose details",

        label_data_toma: "Date *",
        label_hora_toma: "Time *",
        label_quantidade_toma: "Quantity to take *",

        data_toma_obrigatoria: "Enter the dose date.",
        hora_toma_obrigatoria: "Enter the dose time.",
        quantidade_toma_invalida: "The quantity must be a whole number greater than zero.",
        data_toma_invalida: "The new dose date and time must be in the future.",

        toma_criada: "Dose created successfully.",
        toma_atualizada: "Dose updated successfully.",
        toma_eliminada: "Dose deleted successfully.",
        toma_registada: "Dose registered successfully.",

        registar: "Register dose",
        eliminar_toma: "Delete dose",

        confirmar_eliminar_toma_texto: "Are you sure you want to delete this dose?",
        confirmar_registo_toma: "Confirm registration",
        confirmar_registo_toma_texto: "Do you confirm that you took this medication?",
        confirmar_eliminacao_toma: "Delete dose",
        medicamento: "Medication",

        sem_informacao: "No information",
        erro_carregar_tomas: "Could not load the doses.",
        erro_guardar_toma: "Could not save the dose.",
        erro_eliminar_toma: "Could not delete the dose.",
        erro_registar_toma: "Could not register the dose.",
        medicamento_nao_encontrado: "Could not find this medication."
    },

    es: {
        titulo: "Tomas",
        subtitulo: "Gestiona las tomas de este medicamento.",
        criar_toma: "Crear toma",
        nenhuma_toma: "Todavía no hay tomas.",
        nenhuma_toma_texto: "Crea una toma para empezar a controlar la medicación.",
        hora_toma_nao_chegou: "Todavía no ha llegado la hora prevista para esta toma.",

        data: "Fecha",
        hora: "Hora",
        data_hora: "Fecha y hora",
        quantidade: "Cantidad",

        estado: "Estado",
        pendente: "Pendiente",
        atrasada: "Atrasada",
        tomada: "Tomada",

        guardar: "Guardar",
        cancelar: "Cancelar",
        fechar: "Cerrar",
        editar: "Editar",
        eliminar: "Eliminar",
        ver: "Ver detalles",

        criar_toma_titulo: "Crear toma",
        editar_toma_titulo: "Editar toma",
        detalhes_toma: "Detalles de la toma",

        label_data_toma: "Fecha *",
        label_hora_toma: "Hora *",
        label_quantidade_toma: "Cantidad que tomar *",

        data_toma_obrigatoria: "Introduce la fecha de la toma.",
        hora_toma_obrigatoria: "Introduce la hora de la toma.",
        quantidade_toma_invalida: "La cantidad debe ser un número entero mayor que cero.",
        data_toma_invalida: "La fecha y hora de la nueva toma deben ser futuras.",

        toma_criada: "Toma creada correctamente.",
        toma_atualizada: "Toma actualizada correctamente.",

        toma_eliminada: "Toma eliminada correctamente.",
        toma_registada: "Toma registrada correctamente.",
        registar: "Registrar toma",
        eliminar_toma: "Eliminar toma",

        confirmar_eliminar_toma_texto: "¿Seguro que quieres eliminar esta toma?",
        confirmar_registo_toma: "Confirmar registro",
        confirmar_registo_toma_texto: "¿Confirmas que has tomado esta medicación?",
        confirmar_eliminacao_toma: "Eliminar toma",
        medicamento: "Medicamento",

        sem_informacao: "Sin información",
        erro_carregar_tomas: "No se pudieron cargar las tomas.",
        erro_guardar_toma: "No se pudo guardar la toma.",
        erro_eliminar_toma: "No se pudo eliminar la toma.",
        erro_registar_toma: "No se pudo registrar la toma.",
        medicamento_nao_encontrado: "No se pudo encontrar este medicamento."
    }
};


let idMedicamentoAtual = null;
let idTomaEmEdicao = null;
let idTomaParaEliminar = null;
let idTomaParaRegistar = null;
let tomaSelecionada = null;
let tomasAtuais = [];


function obterTextoTomas(chave) {
    const idioma = localStorage.getItem("idioma") || "pt";
    return traducoesTomas[idioma]?.[chave] || traducoesTomas.pt[chave] || chave;
}


function aplicarTraducoesTomas(idioma) {
    if (!traducoesTomas[idioma]) {
        idioma = "pt";
    }

    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const chave = elemento.getAttribute("data-i18n");
        if (traducoesTomas[idioma][chave] !== undefined) {
            elemento.textContent = traducoesTomas[idioma][chave];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(elemento => {
        const chave = elemento.getAttribute("data-i18n-placeholder");
        if (traducoesTomas[idioma][chave] !== undefined) {
            elemento.placeholder = traducoesTomas[idioma][chave];
        }
    });
    document.documentElement.lang = idioma === "pt" ? "pt" : idioma;
}


function obterSessao() {
    try {
        return JSON.parse(localStorage.getItem("sessao") || "null");
    } catch {
        return null;
    }
}

function verificarSessao() {
    const sessao = obterSessao();
    const id = sessao && (sessao.idUtilizador ?? sessao.id);
    if (id === null || id === undefined || String(id).trim() === "") {
        try { localStorage.removeItem("sessao"); } catch (erro) { }
        window.location.replace(new URL("intro.html", window.location.href).href);
        return false;
    }
    return true;
}


function configurarLogout() {
    document.getElementById("botao-logout")?.addEventListener("click", evento => {
        evento.preventDefault();
        localStorage.removeItem("sessao");
        window.location.href = "intro.html";
    });
}


function escaparHtml(texto) {
    const elemento = document.createElement("span");
    elemento.textContent = String(texto ?? "");
    return elemento.innerHTML;
}


function obterIdMedicamentoDaUrl() {
    return new URLSearchParams(window.location.search).get("medicamento");
}


function mostrarToast(mensagem, tipo = "sucesso") {
    let contentor = document.getElementById("toast-contentor");
    if (!contentor) {
        contentor = document.createElement("div");
        contentor.id = "toast-contentor";
        contentor.setAttribute("aria-live", "polite");
        document.body.appendChild(contentor);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;
    contentor.appendChild(toast);

    setTimeout(() => {
        toast.classList.add("toast-sair");
        setTimeout(() => toast.remove(), 300);
    }, 3500);
}


function mostrarAlerta(elemento, mensagem) {
    if (!elemento) return;
    elemento.textContent = mensagem;
    elemento.classList.add("visivel");
}

function esconderAlerta(elemento) {
    if (!elemento) return;
    elemento.textContent = "";
    elemento.classList.remove("visivel");
}

function obterClasseEstado(estado) {
    if (estado === "Tomada") return "estado-tomada";
    if (estado === "Atrasada") return "estado-atrasada";
    return "estado-pendente";
}


function atualizarEstadoToma(toma) {
    if (toma.estado === "Tomada") {
        return "Tomada";
    }

    const dataToma = new Date(toma.dataHora);
    if (Number.isNaN(dataToma.getTime())) {
        return "Pendente";
    }

    const limiteAtraso = dataToma.getTime() + 30 * 60 * 1000;
    return Date.now() >= limiteAtraso ? "Atrasada" : "Pendente";
}


function obterTextoEstado(estado) {
    if (estado === "Tomada") return obterTextoTomas("tomada");
    if (estado === "Atrasada") return obterTextoTomas("atrasada");
    return obterTextoTomas("pendente");
}

function formatarDataHora(dataHora) {
    const data = new Date(dataHora);
    if (Number.isNaN(data.getTime())) return "-";

    const idioma = localStorage.getItem("idioma") || "pt";

    const localidade = {
        pt: "pt-PT",
        en: "en-GB",
        es: "es-ES"
    }[idioma] || "pt-PT";

    return data.toLocaleString(localidade, {
        dateStyle: "short",
        timeStyle: "short"
    });
}

function obterDataLocal(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

function obterHoraLocal(data) {
    const horas = String(data.getHours()).padStart(2, "0");
    const minutos = String(data.getMinutes()).padStart(2, "0");
    return `${horas}:${minutos}`;
}


async function obterMedicamentoAtual() {
    if (!idMedicamentoAtual) return null;
    return await api.obterMedicamento(idMedicamentoAtual);
}

async function carregarInformacaoMedicamento() {
    const medicamento = await obterMedicamentoAtual();
    if (!medicamento) {
        mostrarToast(obterTextoTomas("medicamento_nao_encontrado"), "erro");
        return;
    }

    document.getElementById("titulo-medicamento").textContent = medicamento.nome || obterTextoTomas("medicamento");
    document.getElementById("subtitulo-medicamento").textContent = obterTextoTomas("subtitulo");
    document.getElementById("toma-medicamento-nome").textContent = medicamento.nome || obterTextoTomas("medicamento");

    const linkVoltar = document.getElementById("link-voltar-medicamentos");
    if (linkVoltar && medicamento.idPerfil != null) {
        linkVoltar.href = `medicamentos.html?perfil=${
            encodeURIComponent(medicamento.idPerfil)
        }`;
    } else if (linkVoltar) {
        linkVoltar.href = "perfis.html";
    }
}


async function renderizarTomas() {
    const lista = document.getElementById("lista-tomas");
    const estadoVazio = document.getElementById("estado-vazio");
    if (!lista || !estadoVazio) {
        return;
    }
    try {
        const resultado = await api.listarTomasMedicamento(idMedicamentoAtual);
        tomasAtuais = Array.isArray(resultado) ? resultado : [];

        lista.querySelectorAll(".toma-card").forEach(function(cartao) {
            cartao.remove();
        });

        if (tomasAtuais.length === 0) {
            estadoVazio.hidden = false;
            lista.classList.remove("tem-tomas");
            return;
        }
        estadoVazio.hidden = true;
        lista.classList.add("tem-tomas");

        tomasAtuais.sort(function(a, b) {
            return new Date(a.dataHora) - new Date(b.dataHora);
        });

        tomasAtuais.forEach(function(toma) {
            const estado = atualizarEstadoToma(toma);
            const linha = document.createElement("article");

            linha.className = "toma-card toma-" + estado.toLowerCase();

            const informacoes = document.createElement("div");
            informacoes.className = "toma-informacoes";

            const detalheData = document.createElement("div");
            detalheData.className = "toma-detalhe";

            const rotuloData = document.createElement("span");
            rotuloData.className = "toma-rotulo";
            rotuloData.textContent = obterTextoTomas("data_hora");

            const valorData = document.createElement("strong");
            valorData.className = "toma-data-hora";
            valorData.textContent = formatarDataHora(toma.dataHora);
            detalheData.appendChild(rotuloData);
            detalheData.appendChild(valorData);

            const detalheQuantidade = document.createElement("div");
            detalheQuantidade.className = "toma-detalhe";

            const rotuloQuantidade = document.createElement("span");
            rotuloQuantidade.className = "toma-rotulo";
            rotuloQuantidade.textContent = obterTextoTomas("quantidade");

            const valorQuantidade = document.createElement("strong");
            valorQuantidade.className = "toma-quantidade";
            valorQuantidade.textContent = toma.quantidadeTomada ?? "-";
            detalheQuantidade.appendChild(rotuloQuantidade);
            detalheQuantidade.appendChild(valorQuantidade);

            const detalheEstado = document.createElement("div");
            detalheEstado.className = "toma-detalhe";

            const rotuloEstado = document.createElement("span");
            rotuloEstado.className = "toma-rotulo";
            rotuloEstado.textContent = obterTextoTomas("estado");

            const valorEstado = document.createElement("span");
            valorEstado.className = "badge-estado " + obterClasseEstado(estado);
            valorEstado.textContent = obterTextoEstado(estado);
            detalheEstado.appendChild(rotuloEstado);
            detalheEstado.appendChild(valorEstado);

            informacoes.appendChild(detalheData);
            informacoes.appendChild(detalheQuantidade);
            informacoes.appendChild(detalheEstado);

            const acoes = document.createElement("div");
            acoes.className = "toma-acoes";

            const botaoVer = document.createElement("button");
            botaoVer.type = "button";
            botaoVer.className = "btn btn-secondary";
            botaoVer.textContent = obterTextoTomas("ver");
            botaoVer.addEventListener("click", function() {
                abrirModalVerToma(toma);
            });
            acoes.appendChild(botaoVer);

            if (estado !== "Tomada") {
                if (window.Higia?.podeRegistarToma?.(toma.dataHora)) {
                    const botaoRegistar = document.createElement("button");
                    botaoRegistar.type = "button";
                    botaoRegistar.className = "btn btn-success";
                    botaoRegistar.textContent = obterTextoTomas("registar");
                    botaoRegistar.addEventListener("click", function() {
                        abrirConfirmacaoRegisto(toma.idToma);
                    });
                    acoes.appendChild(botaoRegistar);
                }

                const botaoEditar = document.createElement("button");
                botaoEditar.type = "button";
                botaoEditar.className = "btn btn-primary";
                botaoEditar.textContent = obterTextoTomas("editar");
                botaoEditar.addEventListener("click", function() {
                    abrirModalEditarToma(toma);
                });
                acoes.appendChild(botaoEditar);
            }

            const botaoEliminar = document.createElement("button");
            botaoEliminar.type = "button";
            botaoEliminar.className = "btn btn-danger";
            botaoEliminar.textContent = obterTextoTomas("eliminar");
            botaoEliminar.addEventListener("click", function() {
                abrirConfirmacaoEliminacao(toma.idToma);
            });
            acoes.appendChild(botaoEliminar);
            linha.appendChild(informacoes);
            linha.appendChild(acoes);
            lista.appendChild(linha);
        });
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoTomas("erro_carregar_tomas"), "erro"
        );
    }
}


function abrirModalCriarToma() {
    idTomaEmEdicao = null;

    const formulario = document.getElementById("form-toma");
    formulario?.reset();

    document.getElementById("modal-toma-titulo").textContent = obterTextoTomas("criar_toma_titulo");
    document.getElementById("botao-guardar-toma").textContent = obterTextoTomas("criar_toma");
    document.getElementById("botao-eliminar-toma").style.display = "none";

    const quantidade = document.getElementById("toma-quantidade");
    if (quantidade) quantidade.value = "1";

    esconderAlerta(document.getElementById("toma-alerta"));
    abrirModal("modal-toma");
}

function abrirModalEditarToma(toma) {
    idTomaEmEdicao = toma.idToma;

    const data = new Date(toma.dataHora);
    if (Number.isNaN(data.getTime())) {
        mostrarToast(obterTextoTomas("data_toma_invalida"), "erro");
        return;
    }

    document.getElementById("toma-data").value = obterDataLocal(data);
    document.getElementById("toma-hora").value = obterHoraLocal(data);
    document.getElementById("toma-quantidade").value = toma.quantidadeTomada ?? 1;
    document.getElementById("modal-toma-titulo").textContent = obterTextoTomas("editar_toma_titulo");
    document.getElementById("botao-guardar-toma").textContent = obterTextoTomas("guardar");
    document.getElementById("botao-eliminar-toma").style.display = "inline-flex";

    esconderAlerta(document.getElementById("toma-alerta"));
    fecharModal("modal-ver-toma");
    abrirModal("modal-toma");
}

function fecharModalToma() {
    fecharModal("modal-toma");
    idTomaEmEdicao = null;
    esconderAlerta(document.getElementById("toma-alerta"));
}

function abrirModalVerToma(toma) {
    tomaSelecionada = toma;

    const corpo = document.getElementById("ver-toma-corpo");
    const estado = atualizarEstadoToma(toma);
    corpo.replaceChildren();

    const linhaData = document.createElement("div");
    linhaData.className = "ver-toma-linha";

    const tituloData = document.createElement("strong");
    tituloData.textContent = obterTextoTomas("data_hora");

    const valorData = document.createElement("span");
    valorData.textContent = formatarDataHora(toma.dataHora);
    linhaData.appendChild(tituloData);
    linhaData.appendChild(valorData);

    const linhaQuantidade = document.createElement("div");
    linhaQuantidade.className = "ver-toma-linha";

    const tituloQuantidade = document.createElement("strong");
    tituloQuantidade.textContent = obterTextoTomas("quantidade");

    const valorQuantidade = document.createElement("span");
    valorQuantidade.textContent = toma.quantidadeTomada ?? "-";
    linhaQuantidade.appendChild(tituloQuantidade);
    linhaQuantidade.appendChild(valorQuantidade);

    const linhaEstado = document.createElement("div");
    linhaEstado.className = "ver-toma-linha";

    const tituloEstado = document.createElement("strong");
    tituloEstado.textContent = obterTextoTomas("estado");

    const valorEstado = document.createElement("span");
    valorEstado.className = "badge-estado " + obterClasseEstado(estado);
    valorEstado.textContent = obterTextoEstado(estado);
    linhaEstado.appendChild(tituloEstado);
    linhaEstado.appendChild(valorEstado);

    corpo.appendChild(linhaData);
    corpo.appendChild(linhaQuantidade);
    corpo.appendChild(linhaEstado);
    abrirModal("modal-ver-toma");
}


async function submeterFormularioToma(evento) {
    evento.preventDefault();

    const data = document.getElementById("toma-data").value;
    const hora = document.getElementById("toma-hora").value;
    const quantidadeTexto = document.getElementById("toma-quantidade").value;
    const quantidade = Number(quantidadeTexto);
    const alerta = document.getElementById("toma-alerta");

    esconderAlerta(alerta);

    if (!data) {
        mostrarAlerta(alerta, obterTextoTomas("data_toma_obrigatoria"));
        return;
    }

    if (!hora) {
        mostrarAlerta(alerta, obterTextoTomas("hora_toma_obrigatoria"));
        return;
    }

    if (quantidadeTexto.trim() === "" || !Number.isFinite(quantidade) || !Number.isInteger(quantidade) || quantidade <= 0) {
        mostrarAlerta(alerta, obterTextoTomas("quantidade_toma_invalida"));
        return;
    }

    const [ano, mes, dia] = data.split("-").map(Number);
    const [horas, minutos] = hora.split(":").map(Number);
    const dataHoraLocal = new Date(ano, mes - 1, dia, horas, minutos, 0, 0);
    if (Number.isNaN(dataHoraLocal.getTime())) {
        mostrarAlerta(alerta, obterTextoTomas("data_toma_invalida"));
        return;
    }

    if (idTomaEmEdicao === null && dataHoraLocal.getTime() <= Date.now()) {
        mostrarAlerta(alerta, obterTextoTomas("data_toma_invalida"));
        return;
    }

    const botaoGuardar = document.getElementById("botao-guardar-toma");
    botaoGuardar.disabled = true;
    try {
        const toma = {
            dataHora: `${data}T${hora}:00`,
            quantidadeTomada: quantidade,
            idMedicamento: Number(idMedicamentoAtual)
        };

        if (idTomaEmEdicao === null) {
            toma.estado = "Pendente";
            await api.criarToma(toma);
            fecharModalToma();
            await renderizarTomas();
            mostrarToast(obterTextoTomas("toma_criada"));
        } else {
            toma.idToma = Number(idTomaEmEdicao);
            const tomaOriginal = tomasAtuais.find(tomaEncontrada => Number(tomaEncontrada.idToma) === Number(idTomaEmEdicao));
            toma.estado = tomaOriginal?.estado || "Pendente";
            await api.editarToma(toma);
            fecharModalToma();
            await renderizarTomas();
            mostrarToast(obterTextoTomas("toma_atualizada"));
        }
    } catch (erro) {
        console.error(erro);
        mostrarAlerta(alerta, erro.message || obterTextoTomas("erro_guardar_toma"));
    } finally {
        botaoGuardar.disabled = false;
    }
}


function abrirConfirmacaoRegisto(idToma) {
    const toma = tomasAtuais.find(
        tomaEncontrada => Number(tomaEncontrada.idToma) === Number(idToma)
    );

    const instantePrevisto = toma ? new Date(toma.dataHora).getTime() : NaN;
    if (!toma || !Number.isFinite(instantePrevisto) || Date.now() < instantePrevisto) {
        mostrarToast(obterTextoTomas("hora_toma_nao_chegou"), "erro");
        return;
    }
    idTomaParaRegistar = idToma;
    document.getElementById("texto-confirmar-registo-toma").textContent = obterTextoTomas("confirmar_registo_toma_texto");
    abrirModal("modal-confirmar-registo-toma");
}

async function confirmarRegistoToma() {
    if (idTomaParaRegistar === null) return;

    const tomaSelecionada = tomasAtuais.find(tomaEncontrada => Number(tomaEncontrada.idToma) === Number(idTomaParaRegistar));
    if (!tomaSelecionada || !Number.isFinite(new Date(tomaSelecionada.dataHora).getTime()) || Date.now() < new Date(tomaSelecionada.dataHora).getTime()) {
        mostrarToast("Ainda não chegou a hora prevista para esta toma.", "erro");
        fecharModal("modal-confirmar-registo-toma");
        idTomaParaRegistar = null;
        return;
    }

    const botao = document.getElementById("botao-confirmar-registo-toma");
    botao.disabled = true;

    try {
        await api.registarToma(idTomaParaRegistar);
        fecharModal("modal-confirmar-registo-toma");
        idTomaParaRegistar = null;
        await renderizarTomas();
        mostrarToast(obterTextoTomas("toma_registada"));
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoTomas("erro_registar_toma"), "erro");
    } finally {
        botao.disabled = false;
    }
}


function abrirConfirmacaoEliminacao(idToma) {
    idTomaParaEliminar = idToma;
    document.getElementById("texto-confirmar-eliminacao-toma").textContent = obterTextoTomas("confirmar_eliminar_toma_texto");
    abrirModal("modal-confirmar-eliminacao-toma");
}

async function confirmarEliminacaoToma() {
    if (idTomaParaEliminar === null) return;

    const botao = document.getElementById("botao-confirmar-eliminacao-toma");
    botao.disabled = true;
    try {
        await api.eliminarToma(idTomaParaEliminar);

        fecharModal("modal-confirmar-eliminacao-toma");
        fecharModal("modal-toma");
        fecharModal("modal-ver-toma");

        idTomaParaEliminar = null;
        idTomaEmEdicao = null;
        tomaSelecionada = null;
        await renderizarTomas();
        mostrarToast(obterTextoTomas("toma_eliminada"));
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoTomas("erro_eliminar_toma"), "erro");
    } finally {
        botao.disabled = false;
    }
}


function configurarPaginaTomas() {
    idMedicamentoAtual = obterIdMedicamentoDaUrl();
    if (!idMedicamentoAtual || !Number.isFinite(Number(idMedicamentoAtual))) {
        window.location.href = "perfis.html";
        return false;
    }

    document.getElementById("botao-criar-toma") ?.addEventListener("click", abrirModalCriarToma);
    document.getElementById("form-toma") ?.addEventListener("submit", submeterFormularioToma);
    document.getElementById("botao-confirmar-eliminacao-toma") ?.addEventListener("click", confirmarEliminacaoToma);
    document.getElementById("botao-confirmar-registo-toma") ?.addEventListener("click", confirmarRegistoToma);
    document.getElementById("botao-ver-editar-toma") ?.addEventListener("click", () => {
        if (tomaSelecionada) abrirModalEditarToma(tomaSelecionada);
    });
    document.getElementById("botao-eliminar-toma") ?.addEventListener("click", () => { 
        if (idTomaEmEdicao !== null) {
            abrirConfirmacaoEliminacao(idTomaEmEdicao);
        }
    });
    document.getElementById("botao-fechar-modal-toma") ?.addEventListener("click", fecharModalToma);
    document.getElementById("botao-cancelar-toma") ?.addEventListener("click", fecharModalToma);
    document.getElementById("botao-fechar-ver-toma") ?.addEventListener("click", () => fecharModal("modal-ver-toma"));
    document.getElementById("botao-cancelar-eliminacao-toma") ?.addEventListener("click", () => {
        fecharModal("modal-confirmar-eliminacao-toma");
        idTomaParaEliminar = null;
    });
    document.getElementById("botao-fechar-eliminacao-toma") ?.addEventListener("click", () => {
        fecharModal("modal-confirmar-eliminacao-toma");
        idTomaParaEliminar = null;
    });
    document.getElementById("botao-cancelar-registo-toma") ?.addEventListener("click", () => {
        fecharModal("modal-confirmar-registo-toma");
        idTomaParaRegistar = null;
    });
    document.getElementById("botao-fechar-registo-toma") ?.addEventListener("click", () => {
        fecharModal("modal-confirmar-registo-toma"); 
        idTomaParaRegistar = null;
    });
    configurarLogout();
    return true;
}


window.addEventListener("idiomaAlterado", function (evento) { aplicarTraducoesTomas(evento.detail?.idioma || localStorage.getItem("idioma") || "pt"); });
document.addEventListener("DOMContentLoaded", async () => {
    if (!verificarSessao()) return;

    aplicarTraducoesTomas(localStorage.getItem("idioma") || "pt");
    if (!configurarPaginaTomas()) return;
    try {
        await carregarInformacaoMedicamento();
        await renderizarTomas();
        window.setInterval(async () => {
            if (document.visibilityState === "visible") {
                await renderizarTomas();
            }
        }, 30000);
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoTomas("erro_carregar_tomas"), "erro");
    }
});