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
        termos: "Termos",
        contactos: "Contactos",
        direitos: "© 2026 Hígia - Todos os direitos reservados",
        termos_condicoes: "Termos e Condições",
        termos_intro: "Ao utilizar o Hígia, o utilizador aceita as seguintes condições:",
        termo_1: "O Hígia permite organizar informações sobre medicamentos e tomas.",
        termo_2: "Os dados introduzidos são da responsabilidade do utilizador.",
        termo_3: "As informações devem ser mantidas atualizadas.",
        termo_4: "O Hígia não substitui o aconselhamento de médicos ou farmacêuticos.",
        termo_5: "O utilizador deve confirmar sempre a medicação prescrita.",
        termos_final: "Em caso de dúvida, contacta um profissional de saúde.",
        email_label: "Email:",
        telefone_label: "Telefone:",
        morada_label: "Morada:",
        morada: "Portugal",
        horario_label: "Horário de atendimento:",
        horario: "A definir",
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
        termos: "Terms",
        contactos: "Contacts",
        direitos: "© 2026 Hígia - All rights reserved",
        termos_condicoes: "Terms and Conditions",
        termos_intro: "By using Hígia, the user accepts the following conditions:",
        termo_1: "Hígia helps organise medication and intake information.",
        termo_2: "Users are responsible for the information they enter.",
        termo_3: "Information should be kept up to date.",
        termo_4: "Hígia does not replace advice from doctors or pharmacists.",
        termo_5: "Always confirm the prescribed medication.",
        termos_final: "If in doubt, contact a healthcare professional.",
        email_label: "Email:",
        telefone_label: "Phone:",
        morada_label: "Address:",
        morada: "Portugal",
        horario_label: "Opening hours:",
        horario: "To be defined",
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
        termos: "Términos",
        contactos: "Contactos",
        direitos: "© 2026 Hígia - Todos los derechos reservados",
        termos_condicoes: "Términos y condiciones",
        termos_intro: "Al utilizar Hígia, el usuario acepta las siguientes condiciones:",
        termo_1: "Hígia ayuda a organizar información sobre medicamentos y tomas.",
        termo_2: "El usuario es responsable de los datos que introduce.",
        termo_3: "La información debe mantenerse actualizada.",
        termo_4: "Hígia no sustituye el consejo de médicos o farmacéuticos.",
        termo_5: "Confirma siempre la medicación prescrita.",
        termos_final: "En caso de duda, contacta con un profesional sanitario.",
        email_label: "Correo:",
        telefone_label: "Teléfono:",
        morada_label: "Dirección:",
        morada: "Portugal",
        horario_label: "Horario de atención:",
        horario: "Por definir",
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
    return traducoesConsultas[obterIdiomaConsulta()][chave] ?? traducoesConsultas.pt[chave] ?? chave;
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

function escaparHTML(valor) {
    return String(valor ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
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
    modal.innerHTML = `
        <div class="modal-conteudo">
            <button type="button" class="modal-fechar" data-fechar-modal aria-label="${escaparHTML(textoConsulta("fechar"))}">×</button>
            <h2>${escaparHTML(titulo)}</h2>
            <div class="modal-corpo-dinamico"></div>
        </div>
    `;

    document.body.appendChild(modal);
    modal.addEventListener("click", evento => {
        if (evento.target === modal) {
            fecharModalConsulta(id);
        }

        if (evento.target.closest("[data-fechar-modal]")) {
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
    select.innerHTML = "";

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
    select.innerHTML = "";

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
        ...perfisConsulta.map(dados => ({tipo: "perfil", id: idPerfil(dados), dados})), 
        ...medicamentosConsulta.map(dados => ({tipo: "medicamento", id: idMedicamento(dados), dados})),
        ...tomasConsulta.map(dados => ({tipo: "toma", id: idToma(dados), dados}))
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
        Pendente: "estado-pendente",
        "Stock baixo": "estado-stock-baixo",
        "Stock OK": "estado-stock-ok"
    };

    const chaves = {
        Tomada: "tomada",
        Atrasada: "atrasada",
        Pendente: "pendente",
        "Stock baixo": "stock_baixo",
        "Stock OK": "stock_ok"
    };

    return `<span class="estado-registo ${classes[estado] || ""}">${escaparHTML(textoConsulta(chaves[estado] || estado))}</span>`;
}

function criarCabecalhoTabela(tipo) {
    const cabecalho = document.getElementById("cabecalho-tabela");

    const colunas = {
        perfis: ["nome", "data_nascimento", "detalhes", "acoes"],
        medicamentos: ["nome", "perfil", "stock", "estado", "acoes"],
        tomas: ["medicamento", "hora", "data", "perfil", "estado", "acoes"],
        todos: ["tipo", "nome", "perfil", "estado", "acoes"]
    };

    cabecalho.innerHTML = `
        <tr>
            ${(colunas[tipo] || colunas.todos)
                .map(chave => `<th>${escaparHTML(textoConsulta(chave))}</th>`)
                .join("")}
        </tr>
    `;
}

function criarBotoesAcoes() {
    return `
        <div class="acoes-registo">
            <button type="button" class="btn btn-secondary btn-small" data-acao="ver">${textoConsulta("ver")}</button>
            <button type="button" class="btn btn-primary btn-small" data-acao="editar">${textoConsulta("editar")}</button>
            <button type="button" class="btn btn-danger btn-small" data-acao="eliminar">${textoConsulta("eliminar")}</button>
        </div>
    `;
}

function ligarBotoesAcoes(linha, registo) {
    linha.querySelector('[data-acao="ver"]')?.addEventListener("click", () => {
        mostrarDetalhesRegisto(registo);
    });

    linha.querySelector('[data-acao="editar"]')?.addEventListener("click", () => {
        abrirEdicaoRegisto(registo);
    });

    linha.querySelector('[data-acao="eliminar"]')?.addEventListener("click", () => {
        abrirConfirmacaoEliminacao(registo);
    });
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
        tabela.parentElement.insertAdjacentElement("afterend", paginacao);
    }

    document.getElementById("contador-registos").textContent = registos.length;
    document.getElementById("texto-resultados").textContent = `${registos.length} ${textoConsulta("registos_encontrados")}`;

    criarCabecalhoTabela(tipo);
    corpo.innerHTML = "";

    if (registos.length === 0) {
        tabela.style.display = "none";
        vazio.classList.add("visivel");
        paginacao.innerHTML = "";
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

    paginacao.innerHTML = "";
    if (totalPaginas > 1) {
        const resumoPaginacao = document.createElement("span");
        resumoPaginacao.className = "paginacao-resumo";
        resumoPaginacao.textContent = textoConsulta("pagina_de").replace("{atual}", paginaConsultaAtual).replace("{total}", totalPaginas);
        paginacao.appendChild(resumoPaginacao);
        const grupoBotoes = document.createElement("div");
        grupoBotoes.className = "paginacao-botoes";
        const adicionarBotao = (texto, destino, desativado = false, atual = false) => {
            const botao = document.createElement("button");
            botao.type = "button"; botao.textContent = texto; botao.disabled = desativado;
            if (atual) botao.setAttribute("aria-current", "page");
            botao.addEventListener("click", () => { paginaConsultaAtual = destino; renderizarConsultas(); });
            grupoBotoes.appendChild(botao);
        };
        adicionarBotao(textoConsulta("anterior"), paginaConsultaAtual - 1, paginaConsultaAtual === 1);
        for (let pagina = 1; pagina <= totalPaginas; pagina++) adicionarBotao(String(pagina), pagina, false, pagina === paginaConsultaAtual);
        adicionarBotao(textoConsulta("seguinte"), paginaConsultaAtual + 1, paginaConsultaAtual === totalPaginas);
        paginacao.appendChild(grupoBotoes);
    }
}

function criarLinhaPerfil(linha, registo) {
    const perfil = registo.dados;
    const fotografia = obterFotografiaPerfil(perfil);

    linha.innerHTML = `
        <td>
            <div class="nome-registo-com-foto">
                ${fotografia
                    ? `<img class="foto-perfil-tabela"
                            src="${escaparHTML(fotografia)}"
                            alt="">`
                    : `<span class="foto-perfil-tabela foto-perfil-vazia"
                              aria-hidden="true">👤</span>`
                }
                <span class="nome-registo">
                    ${escaparHTML(perfil.nome || "-")}
                </span>
            </div>
        </td>

        <td>
            ${escaparHTML(formatarDataConsulta(perfil.dataNascimento))}
        </td>

        <td>
            <span class="detalhe-registo">
                ${escaparHTML(perfil.observacoes || "-")}
            </span>
        </td>

        <td>
            ${criarBotoesAcoes(registo)}
        </td>
    `;

    ligarBotoesAcoes(linha, registo);
}

function criarLinhaMedicamento(linha, registo) {
    const medicamento = registo.dados;
    const perfil = procurarPerfilConsulta(medicamento.idPerfil);
    const quantidadeStock = Number(medicamento.quantidadeDisponivel) || 0;
    const fotografia = obterFotografia(medicamento);

    linha.innerHTML = `
        <td>
            <div class="nome-registo-com-foto">

                ${
                    fotografia
                        ? `
                            <img
                                class="foto-perfil-tabela"
                                src="${escaparHTML(fotografia)}"
                                alt="${escaparHTML(medicamento.nome || "")}"
                            >
                        `
                        : `
                            <span
                                class="foto-perfil-tabela foto-perfil-vazia"
                                aria-hidden="true">
                                💊
                            </span>
                        `
                }

                <div>
                    <span class="nome-registo">
                        ${escaparHTML(medicamento.nome || "-")}
                    </span>

                    <span class="informacao-secundaria">
                        ${escaparHTML(medicamento.tipo || "-")}
                    </span>
                </div>

            </div>
        </td>

        <td>${escaparHTML(perfil?.nome || "-")}</td>

        <td>${quantidadeStock}</td>

        <td>
            ${criarEstado(quantidadeStock <= 5 ? "Stock baixo" : "Stock OK")}
        </td>

        <td>${criarBotoesAcoes(registo)}</td>
    `;

    ligarBotoesAcoes(linha, registo);
}

function criarLinhaToma(linha, registo) {
    const toma = registo.dados;
    const medicamento = procurarMedicamentoConsulta(toma.idMedicamento);
    const perfil = medicamento
        ? procurarPerfilConsulta(medicamento.idPerfil)
        : null;

    linha.innerHTML = `
        <td>
            <span class="nome-registo">
                ${escaparHTML(medicamento?.nome || "-")}
            </span>
            <span class="informacao-secundaria">
                ${escaparHTML(toma.quantidadeTomada ?? "-")}
                ${escaparHTML(textoConsulta("quantidade").toLowerCase())}
            </span>
        </td>
        <td>${formatarHoraConsulta(toma.dataHora)}</td>
        <td>${formatarDataConsulta(toma.dataHora)}</td>
        <td>${escaparHTML(perfil?.nome || "-")}</td>
        <td>${criarEstado(obterEstadoTomaConsulta(toma))}</td>
        <td>${criarBotoesAcoes(registo)}</td>
    `;

    ligarBotoesAcoes(linha, registo);
}

function criarLinhaTodos(linha, registo) {
    const dados = registo.dados;

    let tipo = "";
    let nome = "";
    let perfilNome = "-";
    let estadoHTML = "-";

    if (registo.tipo === "perfil") {
        tipo = textoConsulta("perfis");
        nome = dados.nome || "-";
    }

    if (registo.tipo === "medicamento") {
        tipo = textoConsulta("medicamentos");
        nome = dados.nome || "-";
        perfilNome = procurarPerfilConsulta(dados.idPerfil)?.nome || "-";

        const quantidadeStock = Number(dados.quantidadeDisponivel) || 0;
        estadoHTML = criarEstado(quantidadeStock <= 5 ? "Stock baixo" : "Stock OK");
    }

    if (registo.tipo === "toma") {
        tipo = textoConsulta("tomas");

        const medicamento = procurarMedicamentoConsulta(dados.idMedicamento);
        nome = medicamento?.nome || "-";
        perfilNome = medicamento
            ? procurarPerfilConsulta(medicamento.idPerfil)?.nome || "-"
            : "-";

        estadoHTML = criarEstado(obterEstadoTomaConsulta(dados));
    }

    linha.innerHTML = `
        <td>${escaparHTML(tipo)}</td>
        <td><span class="nome-registo">${escaparHTML(nome)}</span></td>
        <td>${escaparHTML(perfilNome)}</td>
        <td>${estadoHTML}</td>
        <td>${criarBotoesAcoes(registo)}</td>
    `;

    ligarBotoesAcoes(linha, registo);
}


function adicionarLinhaDetalhe(rotulo, valor) {
    return `
        <div class="modal-detalhes-linha">
            <strong>${escaparHTML(rotulo)}</strong>
            <span>${escaparHTML(valor ?? "-")}</span>
        </div>
    `;
}

function mostrarDetalhesRegisto(registo) {
    const dados = registo.dados;

    let titulo = "";
    let conteudo = "";

    if (registo.tipo === "perfil") {
        const fotografia = obterFotografia(dados);

        titulo = dados.nome || textoConsulta("perfis");

        conteudo += `
            <div class="detalhes-fotografia">
                ${
                    fotografia
                        ? `
                            <img
                                src="${escaparHTML(fotografia)}"
                                alt="${escaparHTML(dados.nome || "")}"
                            >
                        `
                        : `
                            <div class="detalhes-fotografia-vazia">
                                👤
                            </div>
                        `
                }
            </div>
        `;

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("nome"),
            dados.nome
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("data_nascimento"),
            formatarDataConsulta(dados.dataNascimento)
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("alergias"),
            dados.alergias
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("problemas_saude"),
            dados.problemasSaude
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("observacoes"),
            dados.observacoes
        );
    }

    if (registo.tipo === "medicamento") {
        const perfil = procurarPerfilConsulta(dados.idPerfil);
        const fotografia = obterFotografia(dados);

        titulo = dados.nome || textoConsulta("medicamento");

        conteudo += `
            <div class="detalhes-fotografia">
                ${
                    fotografia
                        ? `
                            <img
                                src="${escaparHTML(fotografia)}"
                                alt="${escaparHTML(dados.nome || "")}"
                            >
                        `
                        : `
                            <div class="detalhes-fotografia-vazia">
                                💊
                            </div>
                        `
                }
            </div>
        `;

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("nome"),
            dados.nome
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("perfil_associado"),
            perfil?.nome || "-"
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("tipo"),
            dados.tipo
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("dosagem"),
            dados.dosagem
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("stock"),
            dados.quantidadeDisponivel
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("frequencia"),
            dados.frequencia
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("observacoes"),
            dados.observacoes
        );
    }

    if (registo.tipo === "toma") {
        const medicamento = procurarMedicamentoConsulta(
            dados.idMedicamento
        );

        const perfil = medicamento
            ? procurarPerfilConsulta(medicamento.idPerfil)
            : null;

        titulo = medicamento?.nome || textoConsulta("tomas");

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("medicamento"),
            medicamento?.nome || "-"
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("perfil_associado"),
            perfil?.nome || "-"
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("data"),
            formatarDataConsulta(dados.dataHora)
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("hora"),
            formatarHoraConsulta(dados.dataHora)
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("quantidade"),
            dados.quantidadeTomada
        );

        conteudo += adicionarLinhaDetalhe(
            textoConsulta("estado"),
            textoConsulta(
                obterEstadoTomaConsulta(dados).toLowerCase()
            )
        );
    }

    const modal = criarModalSeNecessario(
        "modal-detalhes-dinamico",
        titulo
    );

    modal.querySelector(".modal-conteudo").innerHTML = `
        <button
            type="button"
            class="modal-fechar"
            data-fechar-modal
            aria-label="${escaparHTML(textoConsulta("fechar"))}">
            ×
        </button>

        <h2>${escaparHTML(titulo)}</h2>

        <div class="detalhes-corpo">
            ${conteudo}
        </div>

        <div class="modal-acoes">
            <button
                type="button"
                class="btn btn-primary"
                data-fechar-modal>
                ${textoConsulta("fechar")}
            </button>
        </div>
    `;

    abrirModalConsulta("modal-detalhes-dinamico");
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

    const modal = criarModalSeNecessario(
        "modal-edicao-consulta",
        titulos[registo.tipo]
    );

    modal.querySelector(".modal-conteudo").innerHTML = `
        <button type="button"
                class="modal-fechar"
                data-fechar-modal
                aria-label="${escaparHTML(textoConsulta("fechar"))}">×</button>

        <div class="modal-cabecalho">
            <span class="modal-etiqueta">HÍGIA</span>
            <h2>${escaparHTML(titulos[registo.tipo])}</h2>
        </div>

        <form id="form-edicao-consulta" class="modal-formulario">
            ${criarCamposEdicao(registo)}

            <div id="erro-edicao-consulta"
                 class="erro-formulario"
                 role="alert"
                 hidden></div>

            <div class="modal-acoes">
                <button type="button"
                        class="btn btn-secondary"
                        data-fechar-modal>
                    ${textoConsulta("cancelar")}
                </button>

                <button type="submit"
                        class="btn btn-primary"
                        id="botao-guardar-edicao">
                    ${textoConsulta("guardar")}
                </button>
            </div>
        </form>
    `;

    modal.querySelectorAll("[data-fechar-modal]").forEach(botao => {
        botao.addEventListener("click", () => {
            fecharModalConsulta("modal-edicao-consulta");
            limparEstadoEdicao();
        });
    });

    configurarFotografiaEdicao(modal, registo);

    modal.querySelector("#form-edicao-consulta")
        .addEventListener("submit", guardarEdicaoRegisto);

    abrirModalConsulta("modal-edicao-consulta");
}

function criarCamposEdicao(registo) {
    const dados = registo.dados;

    if (registo.tipo === "perfil") {
        const fotografia = obterFotografia(dados);

        return `
            <div class="edicao-fotografia">

                <div class="edicao-fotografia-preview">

                    <img
                        id="edicao-preview-fotografia"
                        src="${escaparHTML(fotografia)}"
                        alt="${escaparHTML(dados.nome || textoConsulta("fotografia"))}"
                        ${fotografia ? "" : "hidden"}
                    >

                    <div
                        id="edicao-sem-fotografia"
                        class="edicao-sem-fotografia"
                        ${fotografia ? "hidden" : ""}>
                        <span aria-hidden="true">👤</span>
                        <span>${textoConsulta("sem_fotografia")}</span>
                    </div>

                </div>

                <div class="edicao-fotografia-controlos">

                    <label for="edicao-fotografia">
                        ${textoConsulta("fotografia")}
                    </label>

                    <input
                        type="file"
                        id="edicao-fotografia"
                        name="fotografia"
                        accept="image/*"
                    >

                    <small>
                        ${textoConsulta("manter_fotografia")}
                    </small>

                    <p
                        id="estado-fotografia-edicao"
                        aria-live="polite">
                    </p>

                </div>
            </div>

            <div class="campo-modal">
                <label for="edicao-nome">
                    ${textoConsulta("nome")} *
                </label>

                <input
                    id="edicao-nome"
                    name="nome"
                    required
                    maxlength="150"
                    value="${escaparHTML(dados.nome || "")}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-data-nascimento">
                    ${textoConsulta("data_nascimento")}
                </label>

                <input
                    type="date"
                    id="edicao-data-nascimento"
                    name="dataNascimento"
                    value="${formatarDataInput(dados.dataNascimento)}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-alergias">
                    ${textoConsulta("alergias")}
                </label>

                <textarea
                    id="edicao-alergias"
                    name="alergias">${escaparHTML(dados.alergias || "")}</textarea>
            </div>

            <div class="campo-modal">
                <label for="edicao-problemas-saude">
                    ${textoConsulta("problemas_saude")}
                </label>

                <textarea
                    id="edicao-problemas-saude"
                    name="problemasSaude">${escaparHTML(dados.problemasSaude || "")}</textarea>
            </div>

            <div class="campo-modal">
                <label for="edicao-observacoes">
                    ${textoConsulta("observacoes")}
                </label>

                <textarea
                    id="edicao-observacoes"
                    name="observacoes">${escaparHTML(dados.observacoes || "")}</textarea>
            </div>
        `;
    }

    if (registo.tipo === "medicamento") {
        const fotografia = obterFotografia(dados);

        const opcoesPerfis = perfisConsulta.map(perfil => `
            <option
                value="${escaparHTML(idPerfil(perfil))}"
                ${
                    String(idPerfil(perfil)) === String(dados.idPerfil)
                        ? "selected"
                        : ""
                }>
                ${escaparHTML(perfil.nome || "-")}
            </option>
        `).join("");

        return `
            <div class="edicao-fotografia">

                <div class="edicao-fotografia-preview">

                    <img
                        id="edicao-preview-fotografia"
                        src="${escaparHTML(fotografia)}"
                        alt="${escaparHTML(dados.nome || textoConsulta("fotografia"))}"
                        ${fotografia ? "" : "hidden"}
                    >

                    <div
                        id="edicao-sem-fotografia"
                        class="edicao-sem-fotografia"
                        ${fotografia ? "hidden" : ""}>
                        <span aria-hidden="true">💊</span>
                        <span>${textoConsulta("sem_fotografia")}</span>
                    </div>

                </div>

                <div class="edicao-fotografia-controlos">

                    <label for="edicao-fotografia">
                        ${textoConsulta("fotografia")}
                    </label>

                    <input
                        type="file"
                        id="edicao-fotografia"
                        name="fotografia"
                        accept="image/*"
                    >

                    <small>
                        ${textoConsulta("manter_fotografia")}
                    </small>

                    <p
                        id="estado-fotografia-edicao"
                        aria-live="polite">
                    </p>

                </div>
            </div>

            <div class="campo-modal">
                <label for="edicao-nome">
                    ${textoConsulta("nome")} *
                </label>

                <input
                    id="edicao-nome"
                    name="nome"
                    required
                    maxlength="150"
                    value="${escaparHTML(dados.nome || "")}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-perfil">
                    ${textoConsulta("perfil")} *
                </label>

                <select id="edicao-perfil" name="idPerfil" required>
                    <option value="">
                        ${textoConsulta("selecione_perfil")}
                    </option>

                    ${opcoesPerfis}
                </select>
            </div>

            <div class="campo-modal">
                <label for="edicao-tipo">
                    ${textoConsulta("tipo_medicamento")}
                </label>

                <input
                    id="edicao-tipo"
                    name="tipo"
                    value="${escaparHTML(dados.tipo || "")}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-dosagem">
                    ${textoConsulta("dosagem")}
                </label>

                <input
                    id="edicao-dosagem"
                    name="dosagem"
                    value="${escaparHTML(dados.dosagem || "")}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-stock">
                    ${textoConsulta("stock_atual")} *
                </label>

                <input
                    type="number"
                    id="edicao-stock"
                    name="quantidadeDisponivel"
                    min="0"
                    step="1"
                    required
                    value="${Number(dados.quantidadeDisponivel) || 0}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-frequencia">
                    ${textoConsulta("frequencia")}
                </label>

                <input
                    id="edicao-frequencia"
                    name="frequencia"
                    value="${escaparHTML(dados.frequencia || "")}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-observacoes">
                    ${textoConsulta("observacoes")}
                </label>

                <textarea
                    id="edicao-observacoes"
                    name="observacoes">${escaparHTML(dados.observacoes || "")}</textarea>
            </div>
        `;
    }

    if (registo.tipo === "toma") {
        return `
            <div class="campo-modal">
                <label for="edicao-data-hora">
                    ${textoConsulta("data")} e ${textoConsulta("hora")} *
                </label>

                <input
                    type="datetime-local"
                    id="edicao-data-hora"
                    name="dataHora"
                    required
                    value="${formatarDataHoraInput(dados.dataHora)}"
                >
            </div>

            <div class="campo-modal">
                <label for="edicao-quantidade">
                    ${textoConsulta("quantidade")} *
                </label>

                <input
                    type="number"
                    id="edicao-quantidade"
                    name="quantidadeTomada"
                    min="1"
                    step="1"
                    required
                    value="${Number(dados.quantidadeTomada) || 1}"
                >
            </div>
        `;
    }

    return "";
}


function configurarFotografiaEdicao(modal, registo) {
    if (
        registo.tipo !== "perfil" &&
        registo.tipo !== "medicamento"
    ) {
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

            mostrarErroEdicao(
                textoConsulta("fotografia_invalida")
            );

            return;
        }

        if (ficheiro.size > 5 * 1024 * 1024) {
            campoEntrada.value = "";

            mostrarErroEdicao(
                textoConsulta("fotografia_grande")
            );

            return;
        }

        const leitor = new FileReader();

        leitor.onload = () => {
            fotografiaSelecionada = leitor.result;

            preVisualizacao.src = fotografiaSelecionada;
            preVisualizacao.hidden = false;
            vazio.hidden = true;

            estado.textContent = textoConsulta(
                "fotografia_selecionada"
            );
        };

        leitor.onerror = () => {
            campoEntrada.value = "";
            fotografiaSelecionada = null;

            mostrarErroEdicao(
                textoConsulta("fotografia_invalida")
            );
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
                perfilAtualizado = atualizarCampoFotografia(
                    perfilAtualizado,
                    fotografiaSelecionada
                );
            }

            await api.editarPerfil(perfilAtualizado);
        }

        if (tipoEdicaoAtual === "medicamento") {
            const nome = String(campos.nome || "").trim();
            const stock = Number(campos.quantidadeDisponivel);

            if (!nome || !campos.idPerfil) {
                throw new Error(
                    textoConsulta("campo_obrigatorio")
                );
            }

            if (!Number.isInteger(stock) || stock < 0) {
                throw new Error(
                    textoConsulta("quantidade_invalida")
                );
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

            // Só altera a fotografia se tiver sido escolhida uma nova.
            // Caso contrário, mantém a fotografia existente.
            if (fotografiaSelecionada) {
                medicamentoAtualizado = atualizarCampoFotografia(
                    medicamentoAtualizado,
                    fotografiaSelecionada
                );
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

        erroElemento.textContent =
            erro.message || textoConsulta("erro_operacao");

        erroElemento.hidden = false;
    } finally {
        if (botaoGuardar) botaoGuardar.disabled = false;
    }
}


function abrirConfirmacaoEliminacao(registo) {
    registoEliminacaoAtual = registo;

    const nome = registo.tipo === "toma"
        ? procurarMedicamentoConsulta(registo.dados.idMedicamento)?.nome
            || textoConsulta("tomas")
        : registo.dados.nome || "-";

    const modal = criarModalSeNecessario(
        "modal-eliminar-consulta",
        textoConsulta("confirmar_eliminar")
    );

    modal.querySelector(".modal-conteudo").innerHTML = `
        <button type="button"
                class="modal-fechar"
                data-fechar-modal
                aria-label="${escaparHTML(textoConsulta("fechar"))}">×</button>

        <h2>${textoConsulta("confirmar_eliminar")}</h2>

        <p class="texto-confirmacao">
            ${textoConsulta("confirmar_eliminar_texto")}
        </p>

        <p class="nome-registo nome-registo-confirmacao">
            ${escaparHTML(nome)}
        </p>

        <div id="erro-eliminar-consulta"
             class="erro-formulario"
             role="alert"
             hidden></div>

        <div class="modal-acoes">
            <button type="button"
                    class="btn btn-secondary"
                    data-fechar-modal>
                ${textoConsulta("cancelar")}
            </button>

            <button type="button"
                    class="btn btn-danger"
                    id="botao-confirmar-eliminar-consulta">
                ${textoConsulta("eliminar")}
            </button>
        </div>
    `;

    modal.querySelectorAll("[data-fechar-modal]").forEach(botao => {
        botao.addEventListener("click", () => {
            fecharModalConsulta("modal-eliminar-consulta");
            registoEliminacaoAtual = null;
        });
    });

    modal.querySelector("#botao-confirmar-eliminar-consulta")
        .addEventListener("click", eliminarRegistoAtual);

    abrirModalConsulta("modal-eliminar-consulta");
}

async function eliminarRegistoAtual() {
    if (!registoEliminacaoAtual) return;

    const registo = registoEliminacaoAtual;
    const botao = document.getElementById(
        "botao-confirmar-eliminar-consulta"
    );
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

        erroElemento.textContent =
            erro.message || textoConsulta("erro_operacao");

        erroElemento.hidden = false;
    } finally {
        if (botao) botao.disabled = false;
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


window.addEventListener("idiomaAlterado", function (evento) { aplicarTraducoesConsultas(); });

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

        document.getElementById("filtro-tipo")
            ?.addEventListener("change", () => {
                atualizarFiltros();
                renderizarConsultas();
            });

        document.getElementById("filtro-perfil")
            ?.addEventListener("change", renderizarConsultas);

        document.getElementById("filtro-estado")
            ?.addEventListener("change", renderizarConsultas);

        document.getElementById("botao-aplicar")
            ?.addEventListener("click", renderizarConsultas);

        document.getElementById("botao-limpar")
            ?.addEventListener("click", () => {
                document.getElementById("filtro-tipo").value = "todos";
                document.getElementById("filtro-perfil").value = "";
                document.getElementById("filtro-estado").value = "";

                atualizarFiltros();
                renderizarConsultas();
            });

        // Atualiza os estados das tomas a cada 30 segundos.
        setInterval(renderizarConsultas, 30000);

    } catch (erro) {
        console.error("Erro ao carregar consultas:", erro);

        const tabela = document.querySelector(".tabela-consultas");
        const vazio = document.getElementById("estado-vazio");

        if (tabela) tabela.style.display = "none";

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
