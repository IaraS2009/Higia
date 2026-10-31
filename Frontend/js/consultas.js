import * as api from "./api.js";


const traducoesConsultas = {
    pt: {
        consultas_titulo: "Consultas",
        consultas_subtitulo: "Consulta os registos existentes no Hígia.",

        tipo_registo: "Tipo",
        todos: "Todos",
        medicamentos: "Medicamentos",
        tomas: "Tomas",
        perfil: "Perfil",
        todos_os_perfis: "Todos os perfis",
        estado: "Estado",
        todos_os_estados: "Todos os estados",

        aplicar: "Aplicar",
        limpar: "Limpar",

        registos: "Registos",
        registos_encontrados: "registos encontrados",

        pagina_de: "Página {atual} de {total}",
        paginacao_registos: "Paginação dos registos",
        anterior: "Anterior",
        seguinte: "Seguinte",

        sem_registos: "Não existem registos.",
        sem_registos_texto: "Os registos que criares irão aparecer aqui.",

        nome: "Nome",
        data: "Data",
        hora: "Hora",
        tipo: "Tipo",
        detalhes: "Detalhes",
        acoes: "Ações",
        ver: "Ver",
        editar: "Editar",
        eliminar: "Eliminar",

        stock: "Stock",
        stock_ok: "Stock OK",
        stock_baixo: "Stock baixo",
        pendente: "Pendente",
        atrasada: "Atrasada",
        tomada: "Tomada",
        quantidade: "Quantidade",
        dosagem: "Dosagem",
        frequencia: "Frequência",
        observacoes: "Observações",
        fechar: "Fechar",
        
        perfil_associado: "Perfil associado",
        medicamento: "Medicamento",
        registo: "Registo",
        alergias: "Alergias",
        problemas_saude: "Problemas de saúde",

        erro_carregar: "Não foi possível carregar os registos.",
        erro_sessao: "A sessão expirou. Inicia sessão novamente.",

        guardar: "Guardar alterações",
        cancelar: "Cancelar",
        confirmar_eliminar: "Confirmar eliminação",
        confirmar_eliminar_texto: "Tens a certeza de que pretendes eliminar este registo? Esta ação não pode ser anulada.",

        eliminado: "Registo eliminado com sucesso.",
        atualizado: "Registo atualizado com sucesso.",

        erro_operacao: "Não foi possível concluir a operação.",
        campo_obrigatorio: "Preenche todos os campos obrigatórios.",
        quantidade_invalida: "A quantidade tem de ser um número inteiro válido.",
        data_invalida: "Introduz uma data válida.",

        editar_perfil: "Editar perfil",
        editar_medicamento: "Editar medicamento",
        editar_toma: "Editar toma",

        stock_atual: "Quantidade disponível",
        tipo_medicamento: "Tipo de medicamento",
        confirmar: "Confirmar",

        sem_perfil: "Perfil não encontrado.",
        sem_medicamento: "Medicamento não encontrado.",
        sem_toma: "Toma não encontrada.",

        selecione_perfil: "Seleciona um perfil",
        data_nascimento: "Data de nascimento",
        estado_registo: "Estado",
        fotografia: "Fotografia",
        alterar_fotografia: "Alterar fotografia",
        manter_fotografia: "A fotografia atual será mantida se não escolheres outra.",
        sem_fotografia: "Sem fotografia",
        selecionar_fotografia: "Selecionar fotografia",
        fotografia_invalida: "Seleciona uma imagem válida.",
        fotografia_grande: "A imagem não pode ultrapassar 5 MB.",
        fotografia_selecionada: "Nova fotografia selecionada",
        filtrar_registos: "Filtrar registos",
        selecionar_criterios: "Seleciona os critérios que pretendes consultar.",
        informacao_registo: "Informação do registo selecionado.",
        perfis: "Perfis"
    },

    en: {
        consultas_titulo: "Consultations",
        consultas_subtitulo: "View the records available in Hígia.",

        tipo_registo: "Type",
        todos: "All",
        medicamentos: "Medications",
        tomas: "Intakes",
        perfil: "Profile",
        todos_os_perfis: "All profiles",
        estado: "Status",
        todos_os_estados: "All statuses",

        aplicar: "Apply",
        limpar: "Clear",

        registos: "Records",
        registos_encontrados: "records found",

        pagina_de: "Page {atual} of {total}",
        paginacao_registos: "Records pagination",
        anterior: "Previous",
        seguinte: "Next",

        sem_registos: "No records found.",
        sem_registos_texto: "The records you create will appear here.",

        nome: "Name",
        data: "Date",
        hora: "Time",
        tipo: "Type",
        detalhes: "Details",
        acoes: "Actions",
        ver: "View",
        editar: "Edit",
        eliminar: "Delete",

        stock: "Stock",
        stock_ok: "Stock OK",
        stock_baixo: "Low stock",
        pendente: "Pending",
        atrasada: "Late",
        tomada: "Taken",
        quantidade: "Quantity",
        dosagem: "Dosage",
        frequencia: "Frequency",
        observacoes: "Notes",

        fechar: "Close",
        perfil_associado: "Associated profile",
        medicamento: "Medication",
        registo: "Record",
        alergias: "Allergies",
        problemas_saude: "Health problems",

        erro_carregar: "Unable to load the records.",
        erro_sessao: "Your session has expired. Please log in again.",

        guardar: "Save changes",
        cancelar: "Cancel",
        confirmar_eliminar: "Confirm deletion",
        confirmar_eliminar_texto: "Are you sure you want to delete this record? This action cannot be undone.",

        eliminado: "Record deleted successfully.",
        atualizado: "Record updated successfully.",

        erro_operacao: "The operation could not be completed.",
        campo_obrigatorio: "Complete all required fields.",
        quantidade_invalida: "The quantity must be a valid whole number.",
        data_invalida: "Enter a valid date.",

        editar_perfil: "Edit profile",
        editar_medicamento: "Edit medication",
        editar_toma: "Edit intake",

        stock_atual: "Available quantity",
        tipo_medicamento: "Medication type",
        confirmar: "Confirm",

        sem_perfil: "Profile not found.",
        sem_medicamento: "Medication not found.",
        sem_toma: "Intake not found.",

        selecione_perfil: "Select a profile",
        data_nascimento: "Date of birth",
        estado_registo: "Status",
        fotografia: "Photo",
        alterar_fotografia: "Change photo",
        manter_fotografia: "The current photo will be kept unless you choose another.",
        sem_fotografia: "No photo",
        selecionar_fotografia: "Choose photo",
        fotografia_invalida: "Choose a valid image.",
        fotografia_grande: "The image cannot exceed 5 MB.",
        fotografia_selecionada: "New photo selected",
        filtrar_registos: "Filter records",
        selecionar_criterios: "Select the criteria you want to view.",
        informacao_registo: "Information about the selected record.",
        perfis: "Profiles"
    },

    es: {
        consultas_titulo: "Consultas",
        consultas_subtitulo: "Consulta los registros existentes en Hígia.",

        tipo_registo: "Tipo",
        todos: "Todos",
        medicamentos: "Medicamentos",
        tomas: "Tomas",
        perfil: "Perfil",
        todos_os_perfis: "Todos los perfiles",
        estado: "Estado",
        todos_os_estados: "Todos los estados",
        aplicar: "Aplicar",
        limpar: "Limpiar",

        registos: "Registros",
        registos_encontrados: "registros encontrados",

        pagina_de: "Página {atual} de {total}",
        paginacao_registos: "Paginación de los registros",
        anterior: "Anterior",
        seguinte: "Siguiente",
    
        sem_registos: "No existen registros.",
        sem_registos_texto: "Los registros que crees aparecerán aquí.",

        nome: "Nombre",
        data: "Fecha",
        hora: "Hora",
        tipo: "Tipo",
        detalhes: "Detalles",
        acoes: "Acciones",
        ver: "Ver",
        editar: "Editar",
        eliminar: "Eliminar",

        stock: "Stock",
        stock_ok: "Stock correcto",
        stock_baixo: "Stock bajo",
        pendente: "Pendiente",
        atrasada: "Atrasada",
        tomada: "Tomada",
        quantidade: "Cantidad",
        dosagem: "Dosis",
        frequencia: "Frecuencia",
        observacoes: "Observaciones",
        fechar: "Cerrar",

        perfil_associado: "Perfil asociado",
        medicamento: "Medicamento",
        registo: "Registro",
        alergias: "Alergias",
        problemas_saude: "Problemas de salud",

        erro_carregar: "No se pudieron cargar los registros.",
        erro_sessao: "La sesión ha caducado. Inicia sesión de nuevo.",

        guardar: "Guardar cambios",
        cancelar: "Cancelar",
        confirmar_eliminar: "Confirmar eliminación",
        confirmar_eliminar_texto: "¿Seguro que deseas eliminar este registro? Esta acción no se puede deshacer.",

        eliminado: "Registro eliminado correctamente.",
        atualizado: "Registro actualizado correctamente.",

        erro_operacao: "No se pudo completar la operación.",
        campo_obrigatorio: "Completa todos los campos obligatorios.",
        quantidade_invalida: "La cantidad debe ser un número entero válido.",
        data_invalida: "Introduce una fecha válida.",

        editar_perfil: "Editar perfil",
        editar_medicamento: "Editar medicamento",
        editar_toma: "Editar toma",

        stock_atual: "Cantidad disponible",
        tipo_medicamento: "Tipo de medicamento",
        confirmar: "Confirmar",

        sem_perfil: "Perfil no encontrado.",
        sem_medicamento: "Medicamento no encontrado.",
        sem_toma: "Toma no encontrada.",

        selecione_perfil: "Selecciona un perfil",
        data_nascimento: "Fecha de nacimiento",
        estado_registo: "Estado",
        fotografia: "Fotografía",
        alterar_fotografia: "Cambiar fotografía",
        manter_fotografia: "La fotografía actual se conservará si no eliges otra.",
        sem_fotografia: "Sin fotografía",
        selecionar_fotografia: "Seleccionar fotografía",
        fotografia_invalida: "Selecciona una imagen válida.",
        fotografia_grande: "La imagen no puede superar los 5 MB.",
        fotografia_selecionada: "Nueva fotografía seleccionada",
        filtrar_registos: "Filtrar registros",
        selecionar_criterios: "Selecciona los criterios que quieres consultar.",
        informacao_registo: "Información del registro seleccionado.",
        perfis: "Perfiles"
    }
};


let perfisConsulta = [];
let medicamentosConsulta = [];
let tomasConsulta = [];
let tipoEdicaoAtual = null;
let registoEdicaoAtual = null;
let registoEliminacaoAtual = null;
let fotografiaSelecionada = null;

function obterIdiomaConsulta() {
    const idioma = localStorage.getItem("idioma") || "pt";
    return traducoesConsultas[idioma] ? idioma : "pt";
}


function textoConsulta(chave) {
    return traducoesConsultas[obterIdiomaConsulta()][chave] ??
        traducoesConsultas.pt[chave] ?? chave;
}


function obterSessaoConsulta() {
    try {
        return JSON.parse(localStorage.getItem("sessao"));
    } catch {
        return null;
    }
}


function idPerfil(perfil) {
    return perfil?.idPerfil ?? perfil?.id;
}

function idMedicamento(medicamento) {
    return medicamento?.idMedicamento ?? medicamento?.id;
}

function idToma(toma) {
    return toma?.idToma ?? toma?.id;
}


function obterLocalidade() {
    const idioma = obterIdiomaConsulta();
    if (idioma === "en") return "en-GB";
    if (idioma === "es") return "es-ES";
    return "pt-PT";
}


function formatarDataConsulta(valor) {
    if (!valor) return "-";
    const data = new Date(valor);
    if (Number.isNaN(data.getTime())) return "-";
    return data.toLocaleDateString(obterLocalidade());
}

function formatarHoraConsulta(valor) {
    if (!valor) return "-";
    const data = new Date(valor);
    if (Number.isNaN(data.getTime())) return "-";
    return data.toLocaleTimeString(obterLocalidade(), {
        hour: "2-digit",
        minute: "2-digit"
    });
}

function formatarDataInput(valor) {
    if (!valor) return "";
    const data = new Date(valor);
    if (Number.isNaN(data.getTime())) return "";
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    return `${ano}-${mes}-${dia}`;
}

function formatarDataHoraInput(valor) {
    if (!valor) return "";
    const data = new Date(valor);
    if (Number.isNaN(data.getTime())) return "";
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const dia = String(data.getDate()).padStart(2, "0");
    const hora = String(data.getHours()).padStart(2, "0");
    const minuto = String(data.getMinutes()).padStart(2, "0");
    return `${ano}-${mes}-${dia}T${hora}:${minuto}`;
}


function procurarPerfilConsulta(id) {
    return perfisConsulta.find(perfil => String(idPerfil(perfil)) === String(id));
}

function procurarMedicamentoConsulta(id) {
    return medicamentosConsulta.find(medicamento => String(idMedicamento(medicamento)) === String(id));
}

function procurarTomaConsulta(id) {
    return tomasConsulta.find(toma => String(idToma(toma)) === String(id));
}


function obterEstadoTomaConsulta(toma) {
    if (String(toma.estado ?? "").toLowerCase() === "tomada") {
        return "Tomada";
    }

    const data = new Date(toma.dataHora);
    if (Number.isNaN(data.getTime())) {
        return "Pendente";
    }
    return Date.now() - data.getTime() > 30 * 60 * 1000 ? "Atrasada" : "Pendente";
}


function obterFotografia(registo) {
    return registo?.fotografia || registo?.foto || registo?.imagem || registo?.caminhoFotografia || registo?.urlFotografia || registo?.fotografiaUrl || registo?.imagemUrl || "";
}

function obterFotografiaPerfil(perfil) {
    return obterFotografia(perfil);
}

function atualizarCampoFotografia(registo, fotografia) {
    const atualizado = { ...registo };
    if ("fotografia" in registo) {
        atualizado.fotografia = fotografia;
    } else if ("foto" in registo) {
        atualizado.foto = fotografia;
    } else if ("imagem" in registo) {
        atualizado.imagem = fotografia;
    } else if ("caminhoFotografia" in registo) {
        atualizado.caminhoFotografia = fotografia;
    } else if ("urlFotografia" in registo) {
        atualizado.urlFotografia = fotografia;
    } else if ("fotografiaUrl" in registo) {
        atualizado.fotografiaUrl = fotografia;
    } else if ("imagemUrl" in registo) {
        atualizado.imagemUrl = fotografia;
    } else {
        atualizado.fotografia = fotografia;
    }
    return atualizado;
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
        toast.remove();
        if (!contentor.children.length) {
            contentor.remove();
        }
    }, 3500);
}


function abrirModalConsulta(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("ativo");
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
}

function fecharModalConsulta(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("ativo");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
}


function criarModalSeNecessario(id, titulo) {
    let modal = document.getElementById(id);
    if (modal) return modal;
    modal = document.createElement("div");
    modal.className = "modal";
    modal.id = id;
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");

    const conteudo = document.createElement("div");
    conteudo.className = "modal-conteudo";

    const botaoFechar = document.createElement("button");
    botaoFechar.type = "button";
    botaoFechar.className = "modal-fechar";
    botaoFechar.setAttribute("data-fechar-modal", "");
    botaoFechar.setAttribute("aria-label", textoConsulta("fechar"));
    botaoFechar.textContent = "×";

    const tituloModal = document.createElement("h2");
    tituloModal.textContent = titulo;

    const corpo = document.createElement("div");
    corpo.className = "modal-corpo-dinamico";

    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(tituloModal);
    conteudo.appendChild(corpo);
    modal.appendChild(conteudo);
    document.body.appendChild(modal);
    modal.addEventListener("click", evento => {
        if (evento.target === modal ||
            evento.target.closest("[data-fechar-modal]")) {
            fecharModalConsulta(id);
        }
    });
    return modal;
}


async function carregarDadosConsulta() {
    const sessao = obterSessaoConsulta();
    const utilizadorId = sessao?.idUtilizador ?? sessao?.id;
    if (!utilizadorId) {
        localStorage.removeItem("sessao");
        window.location.replace("intro.html");
        return false;
    }

    const [perfis, medicamentos, tomas] = await Promise.all([api.listarPerfisUtilizador(utilizadorId), api.listarMedicamentos(), api.listarTomas()]);

    perfisConsulta = Array.isArray(perfis) ? perfis : [];
    const idsPerfis = new Set(perfisConsulta.map(perfil => String(idPerfil(perfil))));

    medicamentosConsulta = (Array.isArray(medicamentos) ? medicamentos : []).filter(medicamento => idsPerfis.has(String(medicamento.idPerfil)));

    const idsMedicamentos = new Set(medicamentosConsulta.map(medicamento => String(idMedicamento(medicamento))));
    tomasConsulta = (Array.isArray(tomas) ? tomas : []).filter(toma => idsMedicamentos.has(String(toma.idMedicamento)));
    
    return true;
}


function preencherFiltroPerfil() {
    const select = document.getElementById("filtro-perfil");
    if (!select) return;

    const valorAtual = select.value;
    select.replaceChildren();

    const opcaoTodos = document.createElement("option");
    opcaoTodos.value = "";
    opcaoTodos.textContent = textoConsulta("todos_os_perfis");
    select.appendChild(opcaoTodos);

    perfisConsulta.forEach(perfil => {
        const opcao = document.createElement("option");
        opcao.value = idPerfil(perfil);
        opcao.textContent = perfil.nome || "-";
        select.appendChild(opcao);
    });

    if ([...select.options].some(opcao => opcao.value === valorAtual)) {
        select.value = valorAtual;
    }
}


function adicionarOpcaoEstado(select, valor, texto) {
    const opcao = document.createElement("option");
    opcao.value = valor;
    opcao.textContent = texto;
    select.appendChild(opcao);
}


function preencherFiltroEstado(tipo) {
    const select = document.getElementById("filtro-estado");
    if (!select) return;

    const valorAtual = select.value;
    select.replaceChildren();

    const opcaoTodos = document.createElement("option");
    opcaoTodos.value = "";
    opcaoTodos.textContent = textoConsulta("todos_os_estados");
    select.appendChild(opcaoTodos);

    if (tipo === "medicamentos") {
        adicionarOpcaoEstado(select, "Stock OK", textoConsulta("stock_ok"));
        adicionarOpcaoEstado(select, "Stock baixo", textoConsulta("stock_baixo"));
    }

    if (tipo === "tomas") {
        adicionarOpcaoEstado(select, "Pendente", textoConsulta("pendente"));
        adicionarOpcaoEstado(select, "Atrasada", textoConsulta("atrasada"));
        adicionarOpcaoEstado(select, "Tomada", textoConsulta("tomada"));
    }

    if ([...select.options].some(opcao => opcao.value === valorAtual)) {
        select.value = valorAtual;
    }
}


function atualizarFiltros() {
    paginaConsultaAtual = 1;

    const tipo = document.getElementById("filtro-tipo")?.value || "todos";
    document.getElementById("campo-filtro-perfil") ?.classList.toggle("visivel", tipo === "medicamentos" || tipo === "tomas");
    document.getElementById("campo-filtro-estado") ?.classList.toggle("visivel", tipo === "medicamentos" || tipo === "tomas");
    preencherFiltroEstado(tipo);
}


let paginaConsultaAtual = 1;
const registosPorPaginaConsulta = 6;

function obterRegistosConsulta() {
    return [
        ...perfisConsulta.map(dados => ({
            tipo: "perfil",
            id: idPerfil(dados),
            dados
        })),

        ...medicamentosConsulta.map(dados => ({
            tipo: "medicamento",
            id: idMedicamento(dados),
            dados
        })),

        ...tomasConsulta.map(dados => ({
            tipo: "toma",
            id: idToma(dados),
            dados
        }))
    ];
}

function obterRegistosFiltrados() {
    const tipo = document.getElementById("filtro-tipo").value;
    const perfilSelecionado = document.getElementById("filtro-perfil").value;
    const estado = document.getElementById("filtro-estado").value;
    let registos = obterRegistosConsulta();

    if (tipo !== "todos") {
        const tipos = {
            perfis: "perfil",
            medicamentos: "medicamento",
            tomas: "toma"
        };
        registos = registos.filter(registo => registo.tipo === tipos[tipo]);
    }

    if (perfilSelecionado !== "") {
        registos = registos.filter(registo => {
            if (registo.tipo === "perfil") {
                return String(idPerfil(registo.dados)) === String(perfilSelecionado);
            }
            if (registo.tipo === "medicamento") {
                return String(registo.dados.idPerfil) === String(perfilSelecionado);
            }
            const medicamento = procurarMedicamentoConsulta(registo.dados.idMedicamento);
            return medicamento && String(medicamento.idPerfil) === String(perfilSelecionado);
        });
    }

    if (estado !== "") {
        registos = registos.filter(registo => {
            if (registo.tipo === "medicamento") {
                const quantidadeStock = Number(registo.dados.quantidadeDisponivel) || 0;
                return estado === "Stock baixo" ? quantidadeStock <= 5 : estado === "Stock OK" && quantidadeStock > 5;
            }
            if (registo.tipo === "toma") {
                return obterEstadoTomaConsulta(registo.dados) === estado;
            }
            return false;
        });
    }

    registos.sort((a, b) => {
        const dataPrimeiroRegisto = a.tipo === "toma" ? new Date(a.dados.dataHora).getTime() || 0 : Number(a.id) || 0;
        const dataSegundoRegisto = b.tipo === "toma" ? new Date(b.dados.dataHora).getTime() || 0 : Number(b.id) || 0;
        return dataSegundoRegisto - dataPrimeiroRegisto;
    });
    return registos;
}


function criarEstado(estado) {
    const classes = {
        Tomada: "estado-tomada",
        Atrasada: "estado-atrasada",
        Pendente: "estado-pendente", "Stock baixo": "estado-stock-baixo", "Stock OK": "estado-stock-ok"
    };

    const chaves = {
        Tomada: "tomada",
        Atrasada: "atrasada",
        Pendente: "pendente", "Stock baixo": "stock_baixo", "Stock OK": "stock_ok"
    };

    const elemento = document.createElement("span");
    elemento.className = "estado-registo " + (classes[estado] || "");
    elemento.textContent = textoConsulta(chaves[estado] || estado);
    return elemento;
}


function criarCabecalhoTabela(tipo) {
    const cabecalho = document.getElementById("cabecalho-tabela");
    const colunas = {
        perfis: ["nome", "data_nascimento", "detalhes", "acoes"],
        medicamentos: ["nome", "perfil", "stock", "estado", "acoes"],
        tomas: ["medicamento", "hora", "data", "perfil", "estado", "acoes"],
        todos: ["tipo", "nome", "perfil", "estado", "acoes"]
    };
    cabecalho.replaceChildren();

    const linha = document.createElement("tr");
    const colunasAtuais = colunas[tipo] || colunas.todos;
    colunasAtuais.forEach(chave => {
        const coluna = document.createElement("th");
        coluna.textContent = textoConsulta(chave);
        linha.appendChild(coluna);
    });
    cabecalho.appendChild(linha);
}


function criarBotoesAcoes() {
    const container = document.createElement("div");
    container.className = "acoes-registo";

    const botaoVer = document.createElement("button");
    botaoVer.type = "button";
    botaoVer.className = "btn btn-secondary btn-small";
    botaoVer.setAttribute("data-acao", "ver");
    botaoVer.textContent = textoConsulta("ver");

    const botaoEditar = document.createElement("button");
    botaoEditar.type = "button";
    botaoEditar.className = "btn btn-primary btn-small";
    botaoEditar.setAttribute("data-acao", "editar");
    botaoEditar.textContent = textoConsulta("editar");

    const botaoEliminar = document.createElement("button");
    botaoEliminar.type = "button";
    botaoEliminar.className = "btn btn-danger btn-small";
    botaoEliminar.setAttribute("data-acao", "eliminar");
    botaoEliminar.textContent = textoConsulta("eliminar");

    container.appendChild(botaoVer);
    container.appendChild(botaoEditar);
    container.appendChild(botaoEliminar);
    return container;
}

function ligarBotoesAcoes(linha, registo) {
    linha.querySelector('[data-acao="ver"]') ?.addEventListener("click", () => {
        mostrarDetalhesRegisto(registo);
    });
    linha.querySelector('[data-acao="editar"]') ?.addEventListener("click", () => {
        abrirEdicaoRegisto(registo);
    });
    linha.querySelector('[data-acao="eliminar"]') ?.addEventListener("click", () => {
        abrirConfirmacaoEliminacao(registo);
    });
}


function criarCelula(conteudo) {
    const celula = document.createElement("td");
    if (conteudo instanceof Node) {
        celula.appendChild(conteudo);
    } else {
        celula.textContent = conteudo ?? "-";
    }
    return celula;
}


function criarBlocoNome(nome, fotografia, icone = "👤", tipo = "") {
    const container = document.createElement("div");
    container.className = "nome-registo-com-foto";

    if (fotografia) {
        const imagem = document.createElement("img");
        imagem.className = "foto-perfil-tabela";
        imagem.src = fotografia;
        imagem.alt = nome || "";
        container.appendChild(imagem);
    } else {
        const imagemVazia = document.createElement("span");
        imagemVazia.className = "foto-perfil-tabela foto-perfil-vazia";
        imagemVazia.setAttribute("aria-hidden", "true");
        imagemVazia.textContent = icone;
        container.appendChild(imagemVazia);
    }

    const blocoTexto = document.createElement("div");
    const nomeElemento = document.createElement("span");
    nomeElemento.className = "nome-registo";
    nomeElemento.textContent = nome || "-";
    blocoTexto.appendChild(nomeElemento);

    if (tipo) {
        const informacao = document.createElement("span");
        informacao.className = "informacao-secundaria";
        informacao.textContent = tipo;
        blocoTexto.appendChild(informacao);
    }
    container.appendChild(blocoTexto);
    return container;
}


function criarLinhaPerfil(linha, registo) {
    const perfil = registo.dados;
    const fotografia = obterFotografiaPerfil(perfil);

    linha.appendChild(criarCelula(criarBlocoNome(perfil.nome || "-", fotografia, "👤")));
    linha.appendChild(criarCelula(formatarDataConsulta(perfil.dataNascimento)));

    const detalhes = document.createElement("span");
    detalhes.className = "detalhe-registo";
    detalhes.textContent = perfil.observacoes || "-";
    linha.appendChild(criarCelula(detalhes));
    linha.appendChild(criarCelula(criarBotoesAcoes()));
    ligarBotoesAcoes(linha, registo);
}

function criarLinhaMedicamento(linha, registo) {
    const medicamento = registo.dados;
    const perfil = procurarPerfilConsulta(medicamento.idPerfil);
    const quantidadeStock = Number(medicamento.quantidadeDisponivel) || 0;
    const fotografia = obterFotografia(medicamento);

    linha.appendChild(criarCelula(criarBlocoNome(medicamento.nome || "-", fotografia,  "💊", medicamento.tipo || "-")));
    linha.appendChild(criarCelula(perfil?.nome || "-"));
    linha.appendChild(criarCelula(String(quantidadeStock)));
    linha.appendChild(criarCelula(criarEstado(quantidadeStock <= 5 ? "Stock baixo" : "Stock OK")));
    linha.appendChild(criarCelula(criarBotoesAcoes()));
    ligarBotoesAcoes(linha, registo);
}

function criarLinhaToma(linha, registo) {
    const toma = registo.dados;
    const medicamento = procurarMedicamentoConsulta(toma.idMedicamento);
    const perfil = medicamento ? procurarPerfilConsulta(medicamento.idPerfil) : null;

    const nomeMedicamento = document.createElement("span");
    nomeMedicamento.className = "nome-registo";
    nomeMedicamento.textContent = medicamento?.nome || "-";

    const quantidade = document.createElement("span");
    quantidade.className = "informacao-secundaria";
    quantidade.textContent = `${toma.quantidadeTomada ?? "-"} ${textoConsulta("quantidade").toLowerCase()}`;

    const blocoMedicamento = document.createElement("div");
    blocoMedicamento.appendChild(nomeMedicamento);
    blocoMedicamento.appendChild(quantidade);

    linha.appendChild(criarCelula(blocoMedicamento));
    linha.appendChild(criarCelula(formatarHoraConsulta(toma.dataHora)));
    linha.appendChild(criarCelula(formatarDataConsulta(toma.dataHora)));
    linha.appendChild(criarCelula(perfil?.nome || "-"));
    linha.appendChild(criarCelula(criarEstado(obterEstadoTomaConsulta(toma))));
    linha.appendChild(criarCelula(criarBotoesAcoes()));
    ligarBotoesAcoes(linha, registo);
}

function criarLinhaTodos(linha, registo) {
    const dados = registo.dados;
    let tipo = "";
    let nome = "";
    let perfilNome = "-";
    let estado = null;

    if (registo.tipo === "perfil") {
        tipo = textoConsulta("perfis");
        nome = dados.nome || "-";
    }
    if (registo.tipo === "medicamento") {
        tipo = textoConsulta("medicamentos");
        nome = dados.nome || "-";
        perfilNome = procurarPerfilConsulta(dados.idPerfil)?.nome || "-";
        const quantidadeStock = Number(dados.quantidadeDisponivel) || 0;
        estado = criarEstado(quantidadeStock <= 5 ? "Stock baixo" : "Stock OK");
    }
    if (registo.tipo === "toma") {
        tipo = textoConsulta("tomas");
        const medicamento = procurarMedicamentoConsulta(dados.idMedicamento);
        nome = medicamento?.nome || "-";
        perfilNome = medicamento ? procurarPerfilConsulta(medicamento.idPerfil)?.nome || "-" : "-";
        estado = criarEstado(obterEstadoTomaConsulta(dados));
    }
    linha.appendChild(criarCelula(tipo));

    const nomeElemento = document.createElement("span");
    nomeElemento.className = "nome-registo";
    nomeElemento.textContent = nome;
    linha.appendChild(criarCelula(nomeElemento));
    linha.appendChild(criarCelula(perfilNome));
    linha.appendChild(criarCelula(estado || "-"));
    linha.appendChild(criarCelula(criarBotoesAcoes()));
    ligarBotoesAcoes(linha, registo);
}


function renderizarConsultas() {
    const tipo = document.getElementById("filtro-tipo").value;
    const registos = obterRegistosFiltrados();
    const corpo = document.getElementById("corpo-tabela");
    const tabela = document.querySelector(".tabela-consultas");
    const vazio = document.getElementById("estado-vazio");

    let paginacao = document.getElementById("paginacao-consultas");
    if (!paginacao) {
        paginacao = document.createElement("nav");
        paginacao.id = "paginacao-consultas";
        paginacao.className = "paginacao-consultas";
        paginacao.setAttribute("aria-label", textoConsulta("paginacao_registos"));
        tabela.parentElement.appendChild(paginacao);
    }

    document.getElementById("contador-registos").textContent = registos.length;
    document.getElementById("texto-resultados").textContent = `${registos.length} ${textoConsulta("registos_encontrados")}`;
    
    criarCabecalhoTabela(tipo);
    corpo.replaceChildren();

    if (registos.length === 0) {
        tabela.style.display = "none";
        vazio.classList.add("visivel");
        paginacao.replaceChildren();
        paginaConsultaAtual = 1;
        return;
    }

    tabela.style.display = "table";
    vazio.classList.remove("visivel");

    const totalPaginas = Math.max(1, Math.ceil(registos.length / registosPorPaginaConsulta));
    paginaConsultaAtual = Math.min(paginaConsultaAtual, totalPaginas);
    const inicioPagina = (paginaConsultaAtual - 1) * registosPorPaginaConsulta;
    const registosPagina = registos.slice(inicioPagina, inicioPagina + registosPorPaginaConsulta);

    registosPagina.forEach(registo => {
        const linha = document.createElement("tr");
        if (tipo === "perfis") {
            criarLinhaPerfil(linha, registo);
        } else if (tipo === "medicamentos") {
            criarLinhaMedicamento(linha, registo);
        } else if (tipo === "tomas") {
            criarLinhaToma(linha, registo);
        } else {
            criarLinhaTodos(linha, registo);
        }
        corpo.appendChild(linha);
    });
    paginacao.replaceChildren();

    if (totalPaginas > 1) {
        const resumoPaginacao = document.createElement("span");
        resumoPaginacao.className = "paginacao-resumo";
        resumoPaginacao.textContent = textoConsulta("pagina_de").replace("{atual}", paginaConsultaAtual).replace("{total}", totalPaginas);

        paginacao.appendChild(resumoPaginacao);

        const grupoBotoes = document.createElement("div");
        grupoBotoes.className = "paginacao-botoes";

        const adicionarBotao = (texto, destino, desativado = false, atual = false) => {
            const botao = document.createElement("button");
            botao.type = "button";
            botao.textContent = texto;
            botao.disabled = desativado;
            if (atual) {
                botao.setAttribute("aria-current", "page");
            }

            botao.addEventListener("click", () => {
                paginaConsultaAtual = destino;
                renderizarConsultas();
            });
            grupoBotoes.appendChild(botao);
        };
        adicionarBotao(textoConsulta("anterior"), paginaConsultaAtual - 1, paginaConsultaAtual === 1);

        for (let pagina = 1; pagina <= totalPaginas; pagina++) {
            adicionarBotao(String(pagina), pagina, false, pagina === paginaConsultaAtual);
        }
        adicionarBotao(textoConsulta("seguinte"), paginaConsultaAtual + 1, paginaConsultaAtual === totalPaginas);
        paginacao.appendChild(grupoBotoes);
    }
}


function adicionarLinhaDetalhe(rotulo, valor) {
    const linha = document.createElement("div");
    linha.className = "modal-detalhes-linha";

    const titulo = document.createElement("strong");
    titulo.textContent = rotulo;

    const texto = document.createElement("span");
    texto.textContent = valor ?? "-";

    linha.appendChild(titulo);
    linha.appendChild(texto);
    return linha;
}


function criarBlocoFotografiaDetalhes(fotografia, nome, icone) {
    const container = document.createElement("div");
    container.className = "detalhes-fotografia";

    if (fotografia) {
        const imagem = document.createElement("img");
        imagem.src = fotografia;
        imagem.alt = nome || "";
        container.appendChild(imagem);
    } else {
        const vazio = document.createElement("div");
        vazio.className = "detalhes-fotografia-vazia";
        vazio.textContent = icone;
        container.appendChild(vazio);
    }
    return container;
}


function mostrarDetalhesRegisto(registo) {
    const dados = registo.dados;
    let titulo = "";

    const conteudo = document.createElement("div");
    conteudo.className = "detalhes-corpo";

    if (registo.tipo === "perfil") {
        const fotografia = obterFotografiaPerfil(dados);
        titulo = dados.nome || textoConsulta("perfis");
        conteudo.appendChild(criarBlocoFotografiaDetalhes(fotografia, dados.nome, "👤"));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("nome"), dados.nome));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("data_nascimento"), formatarDataConsulta(dados.dataNascimento)));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("alergias"), dados.alergias));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("problemas_saude"), dados.problemasSaude));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("observacoes"), dados.observacoes));
    }
    if (registo.tipo === "medicamento") {
        const perfil = procurarPerfilConsulta(dados.idPerfil);
        const fotografia = obterFotografia(dados);
        titulo = dados.nome || textoConsulta("medicamento");
        conteudo.appendChild(criarBlocoFotografiaDetalhes(fotografia, dados.nome, "💊"));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("nome"), dados.nome));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("perfil_associado"), perfil?.nome || "-"));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("tipo"), dados.tipo));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("dosagem"), dados.dosagem));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("stock"),dados.quantidadeDisponivel));
        conteudo.appendChild( adicionarLinhaDetalhe(textoConsulta("frequencia"), dados.frequencia));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("observacoes"), dados.observacoes));
    }
    if (registo.tipo === "toma") {
        const medicamento = procurarMedicamentoConsulta(dados.idMedicamento);
        const perfil = medicamento ? procurarPerfilConsulta(medicamento.idPerfil) : null;
        titulo = medicamento?.nome || textoConsulta("tomas");
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("medicamento"), medicamento?.nome || "-"));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("perfil_associado"), perfil?.nome || "-"));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("data"), formatarDataConsulta(dados.dataHora)));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("hora"), formatarHoraConsulta(dados.dataHora)));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("quantidade"), dados.quantidadeTomada));
        conteudo.appendChild(adicionarLinhaDetalhe(textoConsulta("estado"), textoConsulta(obterEstadoTomaConsulta(dados).toLowerCase())));
    }

    const modal = criarModalSeNecessario("modal-detalhes-dinamico", titulo);

    const conteudoModal = modal.querySelector(".modal-conteudo");
    conteudoModal.replaceChildren();

    const botaoFechar = document.createElement("button");
    botaoFechar.type = "button";
    botaoFechar.className = "modal-fechar";
    botaoFechar.setAttribute("data-fechar-modal", "");
    botaoFechar.setAttribute("aria-label", textoConsulta("fechar"));
    botaoFechar.textContent = "×";

    const tituloModal = document.createElement("h2");
    tituloModal.textContent = titulo;

    const acoes = document.createElement("div");
    acoes.className = "modal-acoes";

    const botaoFecharFinal = document.createElement("button");
    botaoFecharFinal.type = "button";
    botaoFecharFinal.className = "btn btn-primary";
    botaoFecharFinal.setAttribute("data-fechar-modal", "");
    botaoFecharFinal.textContent = textoConsulta("fechar");

    acoes.appendChild(botaoFecharFinal);
    conteudoModal.appendChild(botaoFechar);
    conteudoModal.appendChild(tituloModal);
    conteudoModal.appendChild(conteudo);
    conteudoModal.appendChild(acoes);

    botaoFechar.addEventListener("click", () => {
        fecharModalConsulta("modal-detalhes-dinamico");
    });
    botaoFecharFinal.addEventListener("click", () => {
        fecharModalConsulta("modal-detalhes-dinamico");
    });
    abrirModalConsulta("modal-detalhes-dinamico");
}


function criarCampoEdicao(rotulo, id, nome, valor, tipo = "text") {
    const campo = document.createElement("div");
    campo.className = "campo-modal";

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = rotulo;

    const input = document.createElement(tipo === "textarea" ? "textarea" : "input");

    if (tipo !== "textarea") {
        input.type = tipo;
    }

    input.id = id;
    input.name = nome;

    if (valor !== null && valor !== undefined) {
        input.value = valor;
    }

    campo.appendChild(label);
    campo.appendChild(input);
    return campo;
}


function criarBlocoFotografiaEdicao(dados, icone) {
    const fotografia = obterFotografia(dados);

    const container = document.createElement("div");
    container.className = "edicao-fotografia";

    const previewContainer = document.createElement("div");
    previewContainer.className = "edicao-fotografia-preview";

    const imagem = document.createElement("img");
    imagem.id = "edicao-preview-fotografia";
    imagem.alt = dados.nome || textoConsulta("fotografia");
    imagem.hidden = !fotografia;

    if (fotografia) {
        imagem.src = fotografia;
    }

    const vazio = document.createElement("div");
    vazio.id = "edicao-sem-fotografia";
    vazio.className = "edicao-sem-fotografia";
    vazio.hidden = Boolean(fotografia);

    const iconeElemento = document.createElement("span");
    iconeElemento.setAttribute("aria-hidden", "true");
    iconeElemento.textContent = icone;

    const textoVazio = document.createElement("span");
    textoVazio.textContent = textoConsulta("sem_fotografia");
    vazio.appendChild(iconeElemento);
    vazio.appendChild(textoVazio);

    previewContainer.appendChild(imagem);
    previewContainer.appendChild(vazio);

    const controlos = document.createElement("div");
    controlos.className = "edicao-fotografia-controlos";

    const label = document.createElement("label");
    label.htmlFor = "edicao-fotografia";
    label.textContent = textoConsulta("fotografia");

    const input = document.createElement("input");
    input.type = "file";
    input.id = "edicao-fotografia";
    input.name = "fotografia";
    input.accept = "image/*";

    const informacao = document.createElement("small");
    informacao.textContent = textoConsulta("manter_fotografia");

    const estado = document.createElement("p");
    estado.id = "estado-fotografia-edicao";
    estado.setAttribute("aria-live", "polite");

    controlos.appendChild(label);
    controlos.appendChild(input);
    controlos.appendChild(informacao);
    controlos.appendChild(estado);
    container.appendChild(previewContainer);
    container.appendChild(controlos);
    return container;
}


function criarCamposEdicao(registo) {
    const dados = registo.dados;
    const campos = document.createDocumentFragment();

    if (registo.tipo === "perfil") {
        campos.appendChild(criarBlocoFotografiaEdicao(dados, "👤"));
        const nome = criarCampoEdicao(`${textoConsulta("nome")} *`, "edicao-nome", "nome", dados.nome || "");
        nome.querySelector("input").required = true;
        nome.querySelector("input").maxLength = 150;
        campos.appendChild(nome);
        campos.appendChild(criarCampoEdicao(textoConsulta("data_nascimento"), "edicao-data-nascimento", "dataNascimento", formatarDataInput(dados.dataNascimento), "date"));
        campos.appendChild(criarCampoEdicao(textoConsulta("alergias"), "edicao-alergias", "alergias", dados.alergias || "", "textarea"));
        campos.appendChild(criarCampoEdicao(textoConsulta("problemas_saude"), "edicao-problemas-saude", "problemasSaude", dados.problemasSaude || "", "textarea"));
        campos.appendChild(criarCampoEdicao(textoConsulta("observacoes"), "edicao-observacoes", "observacoes", dados.observacoes || "", "textarea"));
    }

    if (registo.tipo === "medicamento") {
        campos.appendChild(criarBlocoFotografiaEdicao(dados, "💊"));

        const nome = criarCampoEdicao(`${textoConsulta("nome")} *`, "edicao-nome", "nome", dados.nome || "");
        nome.querySelector("input").required = true;
        nome.querySelector("input").maxLength = 150;
        campos.appendChild(nome);

        const campoPerfil = document.createElement("div");
        campoPerfil.className = "campo-modal";

        const labelPerfil = document.createElement("label");
        labelPerfil.htmlFor = "edicao-perfil";
        labelPerfil.textContent = `${textoConsulta("perfil")} *`;

        const selectPerfil = document.createElement("select");
        selectPerfil.id = "edicao-perfil";
        selectPerfil.name = "idPerfil";
        selectPerfil.required = true;

        const opcaoInicial = document.createElement("option");
        opcaoInicial.value = "";
        opcaoInicial.textContent = textoConsulta("selecione_perfil");
        selectPerfil.appendChild(opcaoInicial);

        perfisConsulta.forEach(perfil => {
            const opcao = document.createElement("option");
            opcao.value = idPerfil(perfil);
            opcao.textContent = perfil.nome || "-";
            if (String(idPerfil(perfil)) === String(dados.idPerfil)) {
                opcao.selected = true;
            }
            selectPerfil.appendChild(opcao);
        });

        campoPerfil.appendChild(labelPerfil);
        campoPerfil.appendChild(selectPerfil);
        campos.appendChild(campoPerfil);
        campos.appendChild(criarCampoEdicao(textoConsulta("tipo_medicamento"), "edicao-tipo", "tipo", dados.tipo || ""));
        campos.appendChild(criarCampoEdicao(textoConsulta("dosagem"), "edicao-dosagem", "dosagem", dados.dosagem || ""));

        const stock = criarCampoEdicao(`${textoConsulta("stock_atual")} *`, "edicao-stock", "quantidadeDisponivel", Number(dados.quantidadeDisponivel) || 0, "number");

        const inputStock = stock.querySelector("input");
        inputStock.min = "0";
        inputStock.step = "1";
        inputStock.required = true;

        campos.appendChild(stock);
        campos.appendChild(criarCampoEdicao(textoConsulta("frequencia"), "edicao-frequencia", "frequencia", dados.frequencia || ""));
        campos.appendChild(criarCampoEdicao(textoConsulta("observacoes"), "edicao-observacoes","observacoes", dados.observacoes || "", "textarea"));
    }

    if (registo.tipo === "toma") {
        const dataHora = criarCampoEdicao(`${textoConsulta("data")} e ${textoConsulta("hora")} *`, "edicao-data-hora", "dataHora", formatarDataHoraInput(dados.dataHora), "datetime-local");
        dataHora.querySelector("input").required = true;
        campos.appendChild(dataHora);

        const quantidade = criarCampoEdicao(`${textoConsulta("quantidade")} *`, "edicao-quantidade", "quantidadeTomada", Number(dados.quantidadeTomada) || 1, "number");

        const inputQuantidade = quantidade.querySelector("input");
        inputQuantidade.min = "1";
        inputQuantidade.step = "1";
        inputQuantidade.required = true;

        campos.appendChild(quantidade);
    }
    return campos;
}

function abrirEdicaoRegisto(registo) {
    tipoEdicaoAtual = registo.tipo;
    registoEdicaoAtual = { ...registo.dados };
    fotografiaSelecionada = null;

    const titulos = {
        perfil: textoConsulta("editar_perfil"),
        medicamento: textoConsulta("editar_medicamento"),
        toma: textoConsulta("editar_toma")
    };

    const modal = criarModalSeNecessario("modal-edicao-consulta", titulos[registo.tipo]);

    const conteudo = modal.querySelector(".modal-conteudo");
    conteudo.replaceChildren();

    const botaoFechar = document.createElement("button");
    botaoFechar.type = "button";
    botaoFechar.className = "modal-fechar";
    botaoFechar.setAttribute("data-fechar-modal", "");
    botaoFechar.setAttribute("aria-label", textoConsulta("fechar"));
    botaoFechar.textContent = "×";

    const cabecalho = document.createElement("div");
    cabecalho.className = "modal-cabecalho";

    const etiqueta = document.createElement("span");
    etiqueta.className = "modal-etiqueta";
    etiqueta.textContent = "HÍGIA";

    const titulo = document.createElement("h2");
    titulo.textContent = titulos[registo.tipo];
    cabecalho.appendChild(etiqueta);
    cabecalho.appendChild(titulo);

    const formulario = document.createElement("form");
    formulario.id = "form-edicao-consulta";
    formulario.className = "modal-formulario";
    formulario.appendChild(criarCamposEdicao(registo));

    const erro = document.createElement("div");
    erro.id = "erro-edicao-consulta";
    erro.className = "erro-formulario";
    erro.setAttribute("role", "alert");
    erro.hidden = true;
    formulario.appendChild(erro);

    const acoes = document.createElement("div");
    acoes.className = "modal-acoes";

    const botaoCancelar = document.createElement("button");
    botaoCancelar.type = "button";
    botaoCancelar.className = "btn btn-secondary";
    botaoCancelar.setAttribute("data-fechar-modal", "");
    botaoCancelar.textContent = textoConsulta("cancelar");

    const botaoGuardar = document.createElement("button");
    botaoGuardar.type = "submit";
    botaoGuardar.className = "btn btn-primary";
    botaoGuardar.id = "botao-guardar-edicao";
    botaoGuardar.textContent = textoConsulta("guardar");
    
    acoes.appendChild(botaoCancelar);
    acoes.appendChild(botaoGuardar);
    formulario.appendChild(acoes);
    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(cabecalho);
    conteudo.appendChild(formulario);
    conteudo.querySelectorAll("[data-fechar-modal]").forEach(botao => {
        botao.addEventListener("click", () => {
            fecharModalConsulta("modal-edicao-consulta");
            limparEstadoEdicao();
        });
    });

    configurarFotografiaEdicao(modal, registo);
    formulario.addEventListener("submit", guardarEdicaoRegisto);
    abrirModalConsulta("modal-edicao-consulta");
}


function configurarFotografiaEdicao(modal, registo) {
    if (registo.tipo !== "perfil" && registo.tipo !== "medicamento") {
        return;
    }

    const campoEntrada = modal.querySelector("#edicao-fotografia");
    const preVisualizacao = modal.querySelector("#edicao-preview-fotografia");
    const vazio = modal.querySelector("#edicao-sem-fotografia");
    const estado = modal.querySelector("#estado-fotografia-edicao");
    if (!campoEntrada || !preVisualizacao || !vazio || !estado) {
        return;
    }

    campoEntrada.addEventListener("change", () => {
        const ficheiro = campoEntrada.files?.[0];
        fotografiaSelecionada = null;
        estado.textContent = "";

        if (!ficheiro) {
            const fotografiaAtual = obterFotografia(registo.dados);
            preVisualizacao.src = fotografiaAtual;
            preVisualizacao.hidden = !fotografiaAtual;
            vazio.hidden = Boolean(fotografiaAtual);
            return;
        }

        if (!ficheiro.type.startsWith("image/")) {
            campoEntrada.value = "";
            mostrarErroEdicao(textoConsulta("fotografia_invalida"));
            return;
        }

        if (ficheiro.size > 5 * 1024 * 1024) {
            campoEntrada.value = "";
            mostrarErroEdicao(textoConsulta("fotografia_grande"));
            return;
        }

        const leitor = new FileReader();
        leitor.onload = () => {
            fotografiaSelecionada = leitor.result;
            preVisualizacao.src = fotografiaSelecionada;
            preVisualizacao.hidden = false;
            vazio.hidden = true;
            estado.textContent = textoConsulta("fotografia_selecionada");
        };
        leitor.onerror = () => {
            campoEntrada.value = "";
            fotografiaSelecionada = null;
            mostrarErroEdicao(textoConsulta("fotografia_invalida"));
        };
        leitor.readAsDataURL(ficheiro);
    });
}


function mostrarErroEdicao(mensagem) {
    const erro = document.getElementById("erro-edicao-consulta");
    if (!erro) return;
    erro.textContent = mensagem;
    erro.hidden = false;
}

function limparEstadoEdicao() {
    tipoEdicaoAtual = null;
    registoEdicaoAtual = null;
    fotografiaSelecionada = null;
}


async function guardarEdicaoRegisto(evento) {
    evento.preventDefault();
    if (!registoEdicaoAtual || !tipoEdicaoAtual) return;

    const formulario = evento.currentTarget;
    const botaoGuardar = document.getElementById("botao-guardar-edicao");
    const erroElemento = document.getElementById("erro-edicao-consulta");

    erroElemento.hidden = true;
    erroElemento.textContent = "";

    if (!formulario.reportValidity()) return;
    const dadosFormulario = new FormData(formulario);
    const campos = Object.fromEntries(dadosFormulario.entries());

    try {
        botaoGuardar.disabled = true;
        if (tipoEdicaoAtual === "perfil") {
            const nome = String(campos.nome || "").trim();
            if (!nome) {
                throw new Error(textoConsulta("campo_obrigatorio"));
            }

            let perfilAtualizado = {
                ...registoEdicaoAtual,
                idPerfil: idPerfil(registoEdicaoAtual),
                nome,
                dataNascimento: campos.dataNascimento || null,
                alergias: String(campos.alergias || "").trim(),
                problemasSaude: String(campos.problemasSaude || "").trim(),
                observacoes: String(campos.observacoes || "").trim()
            };

            if (fotografiaSelecionada) {
                perfilAtualizado = atualizarCampoFotografia(perfilAtualizado, fotografiaSelecionada);
            }
            await api.editarPerfil(perfilAtualizado);
        }

        if (tipoEdicaoAtual === "medicamento") {
            const nome = String(campos.nome || "").trim();
            const stock = Number(campos.quantidadeDisponivel);
            if (!nome || !campos.idPerfil) {
                throw new Error(textoConsulta("campo_obrigatorio"));
            }
            if (!Number.isInteger(stock) || stock < 0) {
                throw new Error(textoConsulta("quantidade_invalida"));
            }

            let medicamentoAtualizado = {
                ...registoEdicaoAtual,
                idMedicamento: idMedicamento(registoEdicaoAtual),
                idPerfil: Number(campos.idPerfil),
                nome,
                tipo: String(campos.tipo || "").trim(),
                dosagem: String(campos.dosagem || "").trim(),
                quantidadeDisponivel: stock,
                frequencia: String(campos.frequencia || "").trim(),
                observacoes: String(campos.observacoes || "").trim()
            };

            if (fotografiaSelecionada) {
                medicamentoAtualizado = atualizarCampoFotografia(medicamentoAtualizado, fotografiaSelecionada);
            }
            await api.editarMedicamento(medicamentoAtualizado);
        }

        if (tipoEdicaoAtual === "toma") {
            const data = new Date(campos.dataHora);
            const quantidade = Number(campos.quantidadeTomada);
            if (!campos.dataHora || Number.isNaN(data.getTime())) {
                throw new Error(textoConsulta("data_invalida"));
            }
            if (!Number.isInteger(quantidade) || quantidade < 1) {
                throw new Error(textoConsulta("quantidade_invalida"));
            }

            const tomaAtualizada = {
                ...registoEdicaoAtual,
                idToma: idToma(registoEdicaoAtual),
                idMedicamento: registoEdicaoAtual.idMedicamento,
                dataHora: data.toISOString(),
                quantidadeTomada: quantidade
            };
            await api.editarToma(tomaAtualizada);
        }

        fecharModalConsulta("modal-edicao-consulta");
        limparEstadoEdicao();
        await recarregarEAtualizarTabela();
        mostrarToast(textoConsulta("atualizado"));
    } catch (erro) {
        console.error("Erro ao editar registo:", erro);
        erroElemento.textContent = erro.message || textoConsulta("erro_operacao");
        erroElemento.hidden = false;
    } finally {
        if (botaoGuardar) {
            botaoGuardar.disabled = false;
        }
    }
}


function abrirConfirmacaoEliminacao(registo) {
    registoEliminacaoAtual = registo;
    const nome = registo.tipo === "toma" ? procurarMedicamentoConsulta(registo.dados.idMedicamento)?.nome || textoConsulta("tomas") : registo.dados.nome || "-";
    const modal = criarModalSeNecessario("modal-eliminar-consulta", textoConsulta("confirmar_eliminar"));
    
    const conteudo = modal.querySelector(".modal-conteudo");
    conteudo.replaceChildren();

    const botaoFechar = document.createElement("button");
    botaoFechar.type = "button";
    botaoFechar.className = "modal-fechar";
    botaoFechar.setAttribute("data-fechar-modal", "");
    botaoFechar.setAttribute("aria-label", textoConsulta("fechar"));
    botaoFechar.textContent = "×";

    const titulo = document.createElement("h2");
    titulo.textContent = textoConsulta("confirmar_eliminar");

    const texto = document.createElement("p");
    texto.className = "texto-confirmacao";
    texto.textContent = textoConsulta("confirmar_eliminar_texto");

    const nomeElemento = document.createElement("p");
    nomeElemento.className = "nome-registo nome-registo-confirmacao";
    nomeElemento.textContent = nome;

    const erro = document.createElement("div");
    erro.id = "erro-eliminar-consulta";
    erro.className = "erro-formulario";
    erro.setAttribute("role", "alert");
    erro.hidden = true;

    const acoes = document.createElement("div");
    acoes.className = "modal-acoes";

    const botaoCancelar = document.createElement("button");
    botaoCancelar.type = "button";
    botaoCancelar.className = "btn btn-secondary";
    botaoCancelar.setAttribute("data-fechar-modal", "");
    botaoCancelar.textContent = textoConsulta("cancelar");

    const botaoEliminar = document.createElement("button");
    botaoEliminar.type = "button";
    botaoEliminar.className = "btn btn-danger";
    botaoEliminar.id = "botao-confirmar-eliminar-consulta";
    botaoEliminar.textContent = textoConsulta("eliminar");
    
    acoes.appendChild(botaoCancelar);
    acoes.appendChild(botaoEliminar);
    conteudo.appendChild(botaoFechar);
    conteudo.appendChild(titulo);
    conteudo.appendChild(texto);
    conteudo.appendChild(nomeElemento);
    conteudo.appendChild(erro);
    conteudo.appendChild(acoes);
    conteudo.querySelectorAll("[data-fechar-modal]").forEach(botao => {
        botao.addEventListener("click", () => {
            fecharModalConsulta("modal-eliminar-consulta");
            registoEliminacaoAtual = null;
        });
    });

    botaoEliminar.addEventListener("click", eliminarRegistoAtual);

    abrirModalConsulta("modal-eliminar-consulta");
}

async function eliminarRegistoAtual() {
    if (!registoEliminacaoAtual) return;
    const registo = registoEliminacaoAtual;
    const botao = document.getElementById("botao-confirmar-eliminar-consulta");
    const erroElemento = document.getElementById("erro-eliminar-consulta");
    try {
        botao.disabled = true;
        erroElemento.hidden = true;

        if (registo.tipo === "perfil") {
            await api.eliminarPerfil(idPerfil(registo.dados));
        } else if (registo.tipo === "medicamento") {
            await api.eliminarMedicamento(idMedicamento(registo.dados));
        } else if (registo.tipo === "toma") {
            await api.eliminarToma(idToma(registo.dados));
        }

        fecharModalConsulta("modal-eliminar-consulta");
        registoEliminacaoAtual = null;
        await recarregarEAtualizarTabela();
        mostrarToast(textoConsulta("eliminado"));
    } catch (erro) {
        console.error("Erro ao eliminar registo:", erro);
        erroElemento.textContent = erro.message || textoConsulta("erro_operacao");
        erroElemento.hidden = false;
    } finally {
        if (botao) {
            botao.disabled = false;
        }
    }
}


async function recarregarEAtualizarTabela() {
    const carregado = await carregarDadosConsulta();
    if (!carregado) return;
    preencherFiltroPerfil();
    atualizarFiltros();
    renderizarConsultas();
}


function aplicarTraducoesConsultas() {
    const idioma = obterIdiomaConsulta();
    document.querySelectorAll("[data-i18n]").forEach(elemento => {
        const chave = elemento.getAttribute("data-i18n");
        const traducao = traducoesConsultas[idioma][chave];
        if (traducao !== undefined) {
            elemento.textContent = traducao;
        }
    });
}


function configurarLogoutConsultas() {
    const botao = document.getElementById("botao-logout");
    if (!botao) return;
    botao.addEventListener("click", evento => {
        evento.preventDefault();
        localStorage.removeItem("sessao");
        window.location.href = "intro.html";
    });
}


window.addEventListener("idiomaAlterado", function () {
    aplicarTraducoesConsultas();
    if (document.getElementById("corpo-tabela")) {
        preencherFiltroPerfil();
        atualizarFiltros();
        renderizarConsultas();
    }
});

document.addEventListener("DOMContentLoaded", async () => {
    const sessao = obterSessaoConsulta();
    if (!sessao?.idUtilizador && !sessao?.id) {
        window.location.replace("intro.html");
        return;
    }

    aplicarTraducoesConsultas();
    configurarLogoutConsultas();
    try {
        const carregado = await carregarDadosConsulta();
        if (!carregado) return;

        preencherFiltroPerfil();
        atualizarFiltros();
        renderizarConsultas();

        document.getElementById("filtro-tipo") ?.addEventListener("change", () => {
            atualizarFiltros();
            renderizarConsultas();
        });
        document.getElementById("filtro-perfil") ?.addEventListener("change", renderizarConsultas);
        document.getElementById("filtro-estado") ?.addEventListener("change", renderizarConsultas);
        document.getElementById("botao-aplicar") ?.addEventListener("click", renderizarConsultas);
        document.getElementById("botao-limpar") ?.addEventListener("click", () => {
            document.getElementById("filtro-tipo").value = "todos";
            document.getElementById("filtro-perfil").value = "";
            document.getElementById("filtro-estado").value = "";
            atualizarFiltros();
            renderizarConsultas();
        });

        setInterval(renderizarConsultas, 30000);
    } catch (erro) {
        console.error("Erro ao carregar consultas:", erro);

        const tabela = document.querySelector(".tabela-consultas");
        const vazio = document.getElementById("estado-vazio");
        if (tabela) {
            tabela.style.display = "none";
        }
        if (vazio) {
            vazio.classList.add("visivel");
            const titulo = vazio.querySelector("h3");
            const descricao = vazio.querySelector("p");
            if (titulo) {
                titulo.textContent = textoConsulta("erro_carregar");
            }
            if (descricao) {
                descricao.textContent = erro.message || "";
            }
        }
    }
});