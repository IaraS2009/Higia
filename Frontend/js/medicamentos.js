import * as api from "./api.js";


const traducoesMedicamentos = {
    pt: {
        medicamentos_subtitulo: "Medicamentos deste perfil",
        medicamentos_de: "Medicamentos de",
        adicionar_medicamento: "Adicionar medicamento",
        nenhum_medicamento: "Ainda não existem medicamentos.",
        nenhum_medicamento_texto: "Adiciona um medicamento para começares a gerir a medicação deste perfil.",

        medicamento_subtitulo_modal: "Preenche os dados do medicamento.",
        label_nome_medicamento: "Nome *",
        placeholder_nome_medicamento: "Ex: Paracetamol",
        label_tipo_medicamento: "Tipo *",
        placeholder_tipo_medicamento: "Ex: Comprimido",
        label_dosagem: "Dosagem *",
        placeholder_dosagem: "Ex: 500 mg",
        label_quantidade_disponivel: "Quantidade disponível *",
        label_frequencia: "Frequência",
        placeholder_frequencia: "Ex: 2 vezes por dia",
        label_fotografia: "Fotografia",
        label_observacoes: "Observações",
        placeholder_observacoes: "Observações adicionais...",
        guardar: "Guardar",
        cancelar: "Cancelar",

        fechar: "Fechar",
        editar: "Editar",
        detalhes_medicamento: "Detalhes do medicamento",
        eliminar_medicamento: "Eliminar medicamento",
        editar_medicamento: "Editar medicamento",

        nome: "Nome",
        tipo: "Tipo",
        dosagem: "Dosagem",
        quantidade: "Quantidade disponível",
        frequencia: "Frequência",
        observacoes: "Observações",

        ver: "Ver",
        criar_toma_botao: "Tomas",
        stock: "Stock",
        sem_informacao: "Sem informação",

        medicamento_criado: "Medicamento criado com sucesso.",
        medicamento_atualizado: "Medicamento atualizado com sucesso.",
        medicamento_eliminado: "Medicamento eliminado com sucesso.",

        nome_obrigatorio: "Indica o nome do medicamento.",
        tipo_obrigatorio: "Indica o tipo de medicamento.",
        dosagem_obrigatoria: "Indica a dosagem.",
        quantidade_obrigatoria: "Indica a quantidade disponível.",
        quantidade_invalida: "A quantidade disponível tem de ser um número inteiro superior a zero.",
        fotografia_invalida: "Seleciona uma imagem válida com tamanho máximo de 3 MB.",

        erro_guardar: "Ocorreu um erro ao guardar o medicamento.",
        erro_carregar: "Ocorreu um erro ao carregar os medicamentos.",

        confirmar_eliminacao_medicamento: "Eliminar medicamento",
        confirmar_eliminar_medicamento_texto: "Tens a certeza de que pretendes eliminar o medicamento"
    },

    en: {
        medicamentos_subtitulo: "Medications for this profile",
        medicamentos_de: "Medications for",
        adicionar_medicamento: "Add medication",
        nenhum_medicamento: "There are no medications yet.",
        nenhum_medicamento_texto: "Add a medication to start managing this profile's medication.",

        medicamento_subtitulo_modal: "Fill in the medication details.",
        label_nome_medicamento: "Name *",
        placeholder_nome_medicamento: "E.g. Paracetamol",
        label_tipo_medicamento: "Type *",
        placeholder_tipo_medicamento: "E.g. Tablet",
        label_dosagem: "Dosage *",
        placeholder_dosagem: "E.g. 500 mg",
        label_quantidade_disponivel: "Available quantity *",
        label_frequencia: "Frequency",
        placeholder_frequencia: "E.g. Twice a day",
        label_fotografia: "Photo",
        label_observacoes: "Notes",
        placeholder_observacoes: "Additional notes...",
        guardar: "Save",
        cancelar: "Cancel",

        fechar: "Close",
        editar: "Edit",
        detalhes_medicamento: "Medication details",
        eliminar_medicamento: "Delete medication",
        editar_medicamento: "Edit medication",

        nome: "Name",
        tipo: "Type",
        dosagem: "Dosage",
        quantidade: "Available quantity",
        frequencia: "Frequency",
        observacoes: "Notes",

        ver: "View",
        criar_toma_botao: "Doses",
        stock: "Stock",
        sem_informacao: "No information",

        medicamento_criado: "Medication created successfully.",
        medicamento_atualizado: "Medication updated successfully.",
        medicamento_eliminado: "Medication deleted successfully.",
        
        nome_obrigatorio: "Enter the medication name.",
        tipo_obrigatorio: "Enter the medication type.",
        dosagem_obrigatoria: "Enter the dosage.",
        quantidade_obrigatoria: "Enter the available quantity.",
        quantidade_invalida: "Available quantity must be a whole number greater than zero.",
        fotografia_invalida: "Select a valid image with a maximum size of 3 MB.",

        erro_guardar: "An error occurred while saving the medication.",
        erro_carregar: "An error occurred while loading medications.",

        confirmar_eliminacao_medicamento: "Delete medication",
        confirmar_eliminar_medicamento_texto: "Are you sure you want to delete the medication"
    },

    es: {
        medicamentos_subtitulo: "Medicamentos de este perfil",
        medicamentos_de: "Medicamentos de",
        adicionar_medicamento: "Añadir medicamento",
        nenhum_medicamento: "Todavía no hay medicamentos.",
        nenhum_medicamento_texto: "Añade un medicamento para empezar a gestionar la medicación de este perfil.",

        medicamento_subtitulo_modal: "Introduce los datos del medicamento.",
        label_nome_medicamento: "Nombre *",
        placeholder_nome_medicamento: "Ej.: Paracetamol",
        label_tipo_medicamento: "Tipo *",
        placeholder_tipo_medicamento: "Ej.: Comprimido",
        label_dosagem: "Dosis *",
        placeholder_dosagem: "Ej.: 500 mg",
        label_quantidade_disponivel: "Cantidad disponible *",
        label_frequencia: "Frecuencia",
        placeholder_frequencia: "Ej.: 2 veces al día",
        label_fotografia: "Fotografía",
        label_observacoes: "Observaciones",
        placeholder_observacoes: "Observaciones adicionales...",
        guardar: "Guardar",
        cancelar: "Cancelar",

        fechar: "Cerrar",
        editar: "Editar",
        detalhes_medicamento: "Detalles del medicamento",
        eliminar_medicamento: "Eliminar medicamento",
        editar_medicamento: "Editar medicamento",

        nome: "Nombre",
        tipo: "Tipo",
        dosagem: "Dosis",
        quantidade: "Cantidad disponible",
        frequencia: "Frecuencia",
        observacoes: "Observaciones",

        ver: "Ver",
        criar_toma_botao: "Tomas",
        stock: "Stock",
        sem_informacao: "Sin información",

        medicamento_criado: "Medicamento creado correctamente.",
        medicamento_atualizado: "Medicamento actualizado correctamente.",
        medicamento_eliminado: "Medicamento eliminado correctamente.",

        nome_obrigatorio: "Introduce el nombre del medicamento.",
        tipo_obrigatorio: "Introduce el tipo de medicamento.",
        dosagem_obrigatoria: "Introduce la dosis.",
        quantidade_obrigatoria: "Introduce la cantidad disponible.",
        quantidade_invalida: "La cantidad disponible debe ser un número entero superior a cero.",
        fotografia_invalida: "Selecciona una imagen válida de un máximo de 3 MB.",

        erro_guardar: "Se ha producido un error al guardar el medicamento.",
        erro_carregar: "Se ha producido un error al cargar los medicamentos.",

        confirmar_eliminacao_medicamento: "Eliminar medicamento",
        confirmar_eliminar_medicamento_texto: "¿Seguro que quieres eliminar el medicamento"
    }
};


let idPerfilAtual = null;
let idMedicamentoEmEdicao = null;
let idMedicamentoAVer = null;
let idMedicamentoParaEliminar = null;
let fotografiaAtual = null;


function obterTextoMedicamentos(chave) {
    const idioma = localStorage.getItem("idioma") || "pt";
    return traducoesMedicamentos[idioma]?.[chave] || traducoesMedicamentos.pt[chave] || chave;
}


function aplicarTraducoesMedicamentos(idioma) {
    if (!traducoesMedicamentos[idioma]) {
        idioma = "pt";
    }

    document.querySelectorAll("[data-i18n]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-i18n");
        const texto = traducoesMedicamentos[idioma][chave];
        if (texto !== undefined) {
            elemento.textContent = texto;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-i18n-placeholder");
        const texto = traducoesMedicamentos[idioma][chave];
        if (texto !== undefined) {
            elemento.placeholder = texto;
        }
    });
}


function obterSessao() {
    try {
        return JSON.parse(localStorage.getItem("sessao") || "null");
    } catch {
        return null;
    }
}

function verificarSessao() {
    if (!obterSessao()) {
        window.location.replace("intro.html");
        return false;
    }
    return true;
}

function configurarLogout() {
    document.getElementById("botao-logout")?.addEventListener("click", function(evento) {
        evento.preventDefault();
        localStorage.removeItem("sessao");
        window.location.href = "intro.html";
    });
}


function escaparHtml(texto) {
    const div = document.createElement("div");
    div.textContent = texto ?? "";
    return div.innerHTML;
}


function obterIdPerfilDaUrl() {
    return new URLSearchParams(window.location.search).get("perfil");
}

async function obterPerfilAtual() {
    const sessao = obterSessao();
    if (!sessao) {
        return null;
    }

    const idUtilizador = sessao.idUtilizador || sessao.id;
    const perfis = await api.listarPerfisUtilizador(idUtilizador);
    return (perfis || []).find(function(perfil) {
        return String(perfil.idPerfil) === String(idPerfilAtual);
    }) || null;
}

async function carregarInformacaoPerfil() {
    const perfil = await obterPerfilAtual();
    if (!perfil) {
        return;
    }
    document.getElementById("titulo-perfil").textContent = obterTextoMedicamentos("medicamentos_de") + " " + perfil.nome;
    document.getElementById("subtitulo-perfil").textContent = obterTextoMedicamentos("medicamentos_subtitulo");
}


function obterClasseStock(quantidade) {
    if (quantidade <= 0) {
        return "stock-esgotado";
    }
    if (quantidade <= 5) {
        return "stock-baixo";
    }
    return "stock-normal";
}


function mostrarToast(mensagem, tipo = "sucesso") {
    let contentor = document.getElementById("toast-contentor");
    if (!contentor) {
        contentor = document.createElement("div");
        contentor.id = "toast-contentor";
        document.body.appendChild(contentor);
    }

    const toast = document.createElement("div");
    toast.className = "toast toast-" + tipo;
    toast.textContent = mensagem;
    contentor.appendChild(toast);

    setTimeout(function() {
        toast.classList.add("toast-sair");
        setTimeout(function() {
            toast.remove();
        }, 300);
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


async function obterMedicamentosDoPerfil() {
    const medicamentos = await api.listarMedicamentosPerfil(idPerfilAtual);
    return Array.isArray(medicamentos) ? medicamentos : [];
}

async function renderizarMedicamentos() {
    const lista = document.getElementById("lista-medicamentos");
    if (!lista) {
        return;
    }

    const estadoVazio = document.getElementById("estado-vazio-medicamentos");
    try {
        const medicamentos = await obterMedicamentosDoPerfil();

        lista.querySelectorAll(".medicamento-card").forEach(function(card) {
            card.remove();
        });

        if (medicamentos.length === 0) {
            if (estadoVazio) {
                estadoVazio.hidden = false;
            }
            return;
        }

        if (estadoVazio) {
            estadoVazio.hidden = true;
        }

        medicamentos.forEach(function(medicamento) {
            const quantidade = Number(medicamento.quantidadeDisponivel) || 0;
            const classeStock = obterClasseStock(quantidade);

            const card = document.createElement("article");
            card.className = "medicamento-card";

            const cabecalho = document.createElement("div");
            cabecalho.className = "medicamento-cabecalho";

            const avatar = document.createElement("div");
            avatar.className = "medicamento-avatar";

            if (medicamento.fotografia) {
                const imagem = document.createElement("img");
                imagem.src = medicamento.fotografia;
                imagem.alt = medicamento.nome;
                avatar.appendChild(imagem);
            } else {
                avatar.textContent = "💊";
            }

            const identificacao = document.createElement("div");

            const nome = document.createElement("div");
            nome.className = "medicamento-nome";
            nome.textContent = medicamento.nome;

            const tipo = document.createElement("div");
            tipo.className = "medicamento-tipo";
            tipo.textContent = medicamento.tipo || obterTextoMedicamentos("sem_informacao");

            identificacao.appendChild(nome);
            identificacao.appendChild(tipo);
            cabecalho.appendChild(avatar);
            cabecalho.appendChild(identificacao);

            const informacoes = document.createElement("div");
            informacoes.className = "medicamento-informacoes";

            const informacaoDosagem = document.createElement("div");
            informacaoDosagem.className = "medicamento-informacao";

            const tituloDosagem = document.createElement("strong");
            tituloDosagem.textContent = obterTextoMedicamentos("dosagem");

            const valorDosagem = document.createElement("span");
            valorDosagem.textContent = medicamento.dosagem || obterTextoMedicamentos("sem_informacao");
            informacaoDosagem.appendChild(tituloDosagem);
            informacaoDosagem.appendChild(valorDosagem);

            const informacaoStock = document.createElement("div");
            informacaoStock.className = "medicamento-informacao";

            const tituloStock = document.createElement("strong");
            tituloStock.textContent = obterTextoMedicamentos("stock");

            const valorStock = document.createElement("span");
            valorStock.className = classeStock;
            valorStock.textContent = quantidade;
            informacaoStock.appendChild(tituloStock);
            informacaoStock.appendChild(valorStock);

            const informacaoFrequencia = document.createElement("div");
            informacaoFrequencia.className = "medicamento-informacao";

            const tituloFrequencia = document.createElement("strong");
            tituloFrequencia.textContent = obterTextoMedicamentos("frequencia");

            const valorFrequencia = document.createElement("span");
            valorFrequencia.textContent = medicamento.frequencia || obterTextoMedicamentos("sem_informacao");
            informacaoFrequencia.appendChild(tituloFrequencia);
            informacaoFrequencia.appendChild(valorFrequencia);
            informacoes.appendChild(informacaoDosagem);
            informacoes.appendChild(informacaoStock);
            informacoes.appendChild(informacaoFrequencia);

            const acoes = document.createElement("div");
            acoes.className = "medicamento-acoes";

            const botaoVer = document.createElement("button");
            botaoVer.type = "button";
            botaoVer.className = "btn btn-secondary";
            botaoVer.textContent = obterTextoMedicamentos("ver");

            const botaoEditar = document.createElement("button");
            botaoEditar.type = "button";
            botaoEditar.className = "btn btn-primary";
            botaoEditar.textContent = obterTextoMedicamentos("editar");

            const botaoCriarToma = document.createElement("button");
            botaoCriarToma.type = "button";
            botaoCriarToma.className = "btn btn-success";
            botaoCriarToma.textContent = obterTextoMedicamentos("criar_toma_botao");

            botaoVer.addEventListener("click", function() {
                abrirModalVerMedicamento(medicamento.idMedicamento);
            });
            botaoEditar.addEventListener("click", function() {
                abrirModalEditarMedicamento(medicamento.idMedicamento);
            });
            botaoCriarToma.addEventListener("click", function() {
                irParaTomas(medicamento.idMedicamento);
            });

            acoes.appendChild(botaoVer);
            acoes.appendChild(botaoEditar);
            acoes.appendChild(botaoCriarToma);
            card.appendChild(cabecalho);
            card.appendChild(informacoes);
            card.appendChild(acoes);
            lista.appendChild(card);
        });
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoMedicamentos("erro_carregar"), "erro"
        );
    }
}

function abrirModalAdicionarMedicamento() {
    idMedicamentoEmEdicao = null;
    fotografiaAtual = null;

    document.getElementById("form-medicamento")?.reset();
    document.getElementById("modal-medicamento-titulo").textContent = obterTextoMedicamentos("adicionar_medicamento");

    const botaoEliminar = document.getElementById("botao-eliminar-medicamento");
    if (botaoEliminar) {
        botaoEliminar.style.display = "none";
    }

    esconderAlerta(document.getElementById("medicamento-alerta"));
    window.abrirModal("modal-medicamento");
}

async function abrirModalEditarMedicamento(idMedicamento) {
    try {
        const medicamentos = await obterMedicamentosDoPerfil();
        const medicamento = medicamentos.find(function(medicamentoEncontrado) {
            return String(medicamentoEncontrado.idMedicamento) === String(idMedicamento);
        });

        if (!medicamento) {
            mostrarToast(obterTextoMedicamentos("erro_carregar"), "erro");
            return;
        }

        idMedicamentoEmEdicao = medicamento.idMedicamento;
        fotografiaAtual = medicamento.fotografia || null;

        document.getElementById("medicamento-nome").value = medicamento.nome || "";
        document.getElementById("medicamento-tipo").value = medicamento.tipo || "";
        document.getElementById("medicamento-dosagem").value = medicamento.dosagem || "";
        document.getElementById("medicamento-quantidade").value = medicamento.quantidadeDisponivel ?? "";
        document.getElementById("medicamento-frequencia").value = medicamento.frequencia || "";
        document.getElementById("medicamento-observacoes").value = medicamento.observacoes || "";
        document.getElementById("medicamento-fotografia").value = "";
        document.getElementById("modal-medicamento-titulo").textContent = obterTextoMedicamentos("editar_medicamento");
        document.getElementById("botao-eliminar-medicamento").style.display = "inline-flex";
        esconderAlerta(document.getElementById("medicamento-alerta"));
        window.abrirModal("modal-medicamento");
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoMedicamentos("erro_carregar"), "erro");
    }
}

function fecharModalMedicamento() {
    window.fecharModal("modal-medicamento");
    document.getElementById("form-medicamento")?.reset();
    esconderAlerta(document.getElementById("medicamento-alerta"));
    idMedicamentoEmEdicao = null;
    fotografiaAtual = null;
}


function lerFotografiaMedicamento() {
    return new Promise(function(resolve, reject) {
        const campoEntrada = document.getElementById("medicamento-fotografia");
        const ficheiro = campoEntrada?.files?.[0];
        if (!ficheiro) {
            resolve(fotografiaAtual);
            return;
        }
        if (!ficheiro.type.startsWith("image/") || ficheiro.size > 3 * 1024 * 1024) {
            reject(new Error(obterTextoMedicamentos("fotografia_invalida")));
            return;
        }

        const leitor = new FileReader();
        leitor.onload = function(evento) {
            resolve(evento.target.result);
        };
        leitor.onerror = function() {
            reject(new Error(obterTextoMedicamentos("fotografia_invalida")));
        };
        leitor.readAsDataURL(ficheiro);
    });
}


async function submeterFormularioMedicamento(evento) {
    evento.preventDefault();

    const nome = document.getElementById("medicamento-nome").value.trim();
    const tipo = document.getElementById("medicamento-tipo").value.trim();
    const dosagem = document.getElementById("medicamento-dosagem").value.trim();
    const campoQuantidade = document.getElementById("medicamento-quantidade");
    const valorQuantidade = campoQuantidade.value.trim();
    const quantidade = Number(valorQuantidade);
    const frequencia = document.getElementById("medicamento-frequencia").value.trim();
    const observacoes = document.getElementById("medicamento-observacoes").value.trim();
    const alerta = document.getElementById("medicamento-alerta");

    if (!nome) {
        mostrarAlerta(alerta, obterTextoMedicamentos("nome_obrigatorio"));
        document.getElementById("medicamento-nome").focus();
        return;
    }

    if (!tipo) {
        mostrarAlerta(alerta, obterTextoMedicamentos("tipo_obrigatorio"));
        document.getElementById("medicamento-tipo").focus();
        return;
    }

    if (!dosagem) {
        mostrarAlerta(alerta, obterTextoMedicamentos("dosagem_obrigatoria"));
        document.getElementById("medicamento-dosagem").focus();
        return;
    }

    if (valorQuantidade === "") {
        mostrarAlerta(alerta, obterTextoMedicamentos("quantidade_obrigatoria"));
        campoQuantidade.focus();
        return;
    }

    if (!Number.isInteger(quantidade) || quantidade <= 0) {
        mostrarAlerta(alerta, obterTextoMedicamentos("quantidade_invalida"));
        campoQuantidade.focus();
        return;
    }
    try {
        const fotografia = await lerFotografiaMedicamento();

        const medicamento = {
            nome: nome,
            tipo: tipo,
            dosagem: dosagem,
            quantidadeDisponivel: quantidade,
            frequencia: frequencia,
            fotografia: fotografia,
            observacoes: observacoes,
            idPerfil: Number(idPerfilAtual)
        };

        if (idMedicamentoEmEdicao === null) {
            await api.criarMedicamento(medicamento);
            fecharModalMedicamento();
            await renderizarMedicamentos();
            mostrarToast(obterTextoMedicamentos("medicamento_criado"), "sucesso");
        } else {
            medicamento.idMedicamento = Number(idMedicamentoEmEdicao);
            await api.editarMedicamento(medicamento);
            fecharModalMedicamento();
            await renderizarMedicamentos();
            mostrarToast(obterTextoMedicamentos("medicamento_atualizado"), "sucesso");
        }
    } catch (erro) {
        console.error(erro);

        mostrarAlerta(
            alerta,
            erro.message || obterTextoMedicamentos("erro_guardar")
        );
    }
}


async function abrirModalVerMedicamento(idMedicamento) {
    try {
        const medicamentos = await obterMedicamentosDoPerfil();
        const medicamento = medicamentos.find(function(medicamentoEncontrado) {
            return String(medicamentoEncontrado.idMedicamento) === String(idMedicamento);
        });

        if (!medicamento) {
            return;
        }

        idMedicamentoAVer = medicamento.idMedicamento;

        const quantidade = Number(medicamento.quantidadeDisponivel) || 0;
        const classeStock = obterClasseStock(quantidade);
        const fotografia = document.getElementById("ver-medicamento-fotografia");
        const nome = document.getElementById("ver-medicamento-nome");
        const tipo = document.getElementById("ver-medicamento-tipo");
        const dosagem = document.getElementById("ver-medicamento-dosagem");
        const quantidadeElemento = document.getElementById("ver-medicamento-quantidade");
        const frequencia = document.getElementById("ver-medicamento-frequencia");
        const observacoes = document.getElementById("ver-medicamento-observacoes");

        fotografia.replaceChildren();
        if (medicamento.fotografia) {
            const imagem = document.createElement("img");
            imagem.src = medicamento.fotografia;
            imagem.alt = medicamento.nome;
            fotografia.appendChild(imagem);
        } else {
            fotografia.textContent = "💊";
        }

        nome.textContent = medicamento.nome;
        tipo.textContent = medicamento.tipo || obterTextoMedicamentos("sem_informacao");
        dosagem.textContent = medicamento.dosagem || obterTextoMedicamentos("sem_informacao");
        quantidadeElemento.textContent = quantidade;
        quantidadeElemento.className = classeStock;
        frequencia.textContent = medicamento.frequencia || obterTextoMedicamentos("sem_informacao");
        observacoes.textContent = medicamento.observacoes || obterTextoMedicamentos("sem_informacao");
        
        window.abrirModal("modal-ver-medicamento");
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoMedicamentos("erro_carregar"), "erro");
    }
}


function irParaTomas(idMedicamento) {
    window.location.href = "tomas.html?medicamento=" + encodeURIComponent(idMedicamento);
}


function abrirConfirmacaoEliminacaoMedicamento() {
    if (idMedicamentoEmEdicao === null) return;
    idMedicamentoParaEliminar = idMedicamentoEmEdicao;

    const nome = document.getElementById("medicamento-nome").value.trim();
    const texto = document.getElementById("texto-confirmar-eliminacao-medicamento");
    if (texto) {
        texto.textContent = obterTextoMedicamentos("confirmar_eliminar_medicamento_texto") + " " + nome + "?";
    }
    window.abrirModal("modal-confirmar-eliminacao-medicamento");
}

async function confirmarEliminacaoMedicamento() {
    if (idMedicamentoParaEliminar === null) return;

    const botao = document.getElementById("botao-confirmar-eliminacao-medicamento");
    botao.disabled = true;
    try {
        await api.eliminarMedicamento(idMedicamentoParaEliminar);
        window.fecharModal("modal-confirmar-eliminacao-medicamento");
        window.fecharModal("modal-medicamento");
        document.getElementById("form-medicamento")?.reset();

        idMedicamentoEmEdicao = null;
        idMedicamentoParaEliminar = null;
        fotografiaAtual = null;

        await renderizarMedicamentos();
        mostrarToast(obterTextoMedicamentos("medicamento_eliminado"), "sucesso");
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoMedicamentos("erro_guardar"), "erro");
    } finally {
        botao.disabled = false;
    }
}


function configurarPaginaMedicamentos() {
    idPerfilAtual = obterIdPerfilDaUrl();
    if (!idPerfilAtual || !Number.isInteger(Number(idPerfilAtual)) || Number(idPerfilAtual) <= 0) {
        window.location.href = "perfis.html";
        return false;
    }

    document.getElementById("botao-adicionar-medicamento") ?.addEventListener("click", abrirModalAdicionarMedicamento);
    document.getElementById("form-medicamento") ?.addEventListener("submit", submeterFormularioMedicamento);
    document.getElementById("botao-fechar-modal-medicamento") ?.addEventListener("click", fecharModalMedicamento);
    document.getElementById("botao-cancelar-medicamento") ?.addEventListener("click", fecharModalMedicamento);
    document.getElementById("botao-eliminar-medicamento") ?.addEventListener("click", abrirConfirmacaoEliminacaoMedicamento);
    document.getElementById("botao-confirmar-eliminacao-medicamento") ?.addEventListener("click", confirmarEliminacaoMedicamento);
    document.getElementById("botao-ver-editar-medicamento") ?.addEventListener("click", function() {
        if (idMedicamentoAVer === null) return;
        window.fecharModal("modal-ver-medicamento");
        abrirModalEditarMedicamento(idMedicamentoAVer);
    });
    configurarLogout();
    return true;
}

window.addEventListener("idiomaAlterado", function (evento) { aplicarTraducoesMedicamentos(evento.detail?.idioma || localStorage.getItem("idioma") || "pt"); });
document.addEventListener("DOMContentLoaded", async function() {
    if (!verificarSessao()) return;
    aplicarTraducoesMedicamentos(localStorage.getItem("idioma") || "pt");
    if (!configurarPaginaMedicamentos()) return;
    try {
        const perfil = await obterPerfilAtual();
        if (!perfil) {
            window.location.href = "perfis.html";
            return;
        }
        await carregarInformacaoPerfil();
        await renderizarMedicamentos();
    } catch (erro) {
        console.error(erro);
        mostrarToast(erro.message || obterTextoMedicamentos("erro_carregar"), "erro");
    }
});