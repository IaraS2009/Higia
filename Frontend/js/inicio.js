import * as api from "./api.js";


const traducoesInicio = {
    pt: {
        bem_vindo: "Bem-vindo ao Hígia",
        resumo_dia: "Aqui estão as tuas tomas previstas para hoje.",
        tomas_hoje: "Tomas hoje",
        pendentes: "Pendentes",
        atrasadas: "Atrasadas",
        tomas_previstas: "Tomas previstas para hoje",
        nenhuma_toma: "Nenhuma toma prevista para hoje.",
        nenhuma_toma_texto: "As tomas que criares irão aparecer aqui.",
        registar: "Registar",
        detalhes: "Detalhes",
        pendente: "Pendente",
        aguardar_hora: "A aguardar hora",
        atrasada: "Atrasada",
        stock_baixo: "Stock baixo",
        unidades: "unidades",
        atualizar: "Atualizar",
        toma_prevista: "Toma prevista para",
        erro_stock: "Não existe quantidade suficiente de medicamento para registar esta toma.",
        toma_registada: "Toma registada com sucesso.",
        medicamento_nao_encontrado: "Não foi possível encontrar o medicamento.",
        alertas: "Avisos",
        alertas_subtitulo: "Informações importantes sobre a tua medicação.",
        termos: "Termos",
        contactos: "Contactos",
        direitos: "© 2026 Hígia - Todos os direitos reservados",
        termos_condicoes: "Termos e Condições",
        termos_intro: "Ao utilizar o Hígia, deves ter em conta que:",
        termo_1: "A informação introduzida é da responsabilidade do utilizador.",
        termo_2: "O Hígia ajuda a organizar a medicação.",
        termo_3: "O sistema não substitui aconselhamento médico ou farmacêutico.",
        termo_4: "Confirma sempre a informação da tua medicação.",
        termo_5: "Mantém os teus dados de acesso seguros.",
        termos_final: "Em caso de dúvida sobre a medicação, contacta um profissional de saúde.",
        fechar: "Fechar",
        email_label: "Email:",
        telefone_label: "Telefone:",
        morada_label: "Morada:",
        morada: "Lisboa, Portugal",
        horario_label: "Horário de atendimento:",
        horario: "Dias úteis, das 9h às 18h",
        erro_carregar: "Não foi possível carregar os dados. Verifica se a API está em funcionamento.",
        erro_registar: "Não foi possível registar a toma.",
        stock: "Stock"
    },

    en: {
        bem_vindo: "Welcome to Hígia",
        resumo_dia: "Here are your scheduled intakes for today.",
        tomas_hoje: "Today's intakes",
        pendentes: "Pending",
        atrasadas: "Late",
        tomas_previstas: "Intakes scheduled for today",
        nenhuma_toma: "No intake is scheduled for today.",
        nenhuma_toma_texto: "The intakes you create will appear here.",
        registar: "Register",
        detalhes: "Details",
        pendente: "Pending",
        aguardar_hora: "Waiting for scheduled time",
        atrasada: "Late",
        stock_baixo: "Low stock",
        unidades: "units",
        atualizar: "Update",
        toma_prevista: "Scheduled for",
        erro_stock: "There is not enough medication to register this intake.",
        toma_registada: "Intake registered successfully.",
        medicamento_nao_encontrado: "The medication could not be found.",
        alertas: "Alerts",
        alertas_subtitulo: "Important information about your medication.",
        termos: "Terms",
        contactos: "Contact",
        direitos: "© 2026 Hígia - All rights reserved",
        termos_condicoes: "Terms and Conditions",
        termos_intro: "When using Hígia, please keep in mind that:",
        termo_1: "Users are responsible for the information they enter.",
        termo_2: "Hígia helps organise medication.",
        termo_3: "The system does not replace medical or pharmaceutical advice.",
        termo_4: "Always check your medication information.",
        termo_5: "Keep your login details secure.",
        termos_final: "If you have questions about medication, contact a healthcare professional.",
        fechar: "Close",
        email_label: "Email:",
        telefone_label: "Phone:",
        morada_label: "Address:",
        morada: "Lisbon, Portugal",
        horario_label: "Opening hours:",
        horario: "Weekdays, 9 am to 6 pm",
        erro_carregar: "Could not load the data. Check that the API is running.",
        erro_registar: "Could not register the intake.",
        stock: "Stock"
    },

    es: {
        bem_vindo: "Bienvenido a Hígia",
        resumo_dia: "Aquí están tus tomas previstas para hoy.",
        tomas_hoje: "Tomas de hoy",
        pendentes: "Pendientes",
        atrasadas: "Atrasadas",
        tomas_previstas: "Tomas previstas para hoy",
        nenhuma_toma: "No hay ninguna toma prevista para hoy.",
        nenhuma_toma_texto: "Las tomas que crees aparecerán aquí.",
        registar: "Registrar",
        detalhes: "Detalles",
        pendente: "Pendiente",
        aguardar_hora: "Esperando la hora prevista",
        atrasada: "Atrasada",
        stock_baixo: "Stock bajo",
        unidades: "unidades",
        atualizar: "Actualizar",
        toma_prevista: "Toma prevista para",
        erro_stock: "No hay suficiente medicamento para registrar esta toma.",
        toma_registada: "Toma registrada correctamente.",
        medicamento_nao_encontrado: "No se ha encontrado el medicamento.",
        alertas: "Avisos",
        alertas_subtitulo: "Información importante sobre tu medicación.",
        termos: "Términos",
        contactos: "Contacto",
        direitos: "© 2026 Hígia - Todos los derechos reservados",
        termos_condicoes: "Términos y condiciones",
        termos_intro: "Al utilizar Hígia, debes tener en cuenta que:",
        termo_1: "El usuario es responsable de la información que introduce.",
        termo_2: "Hígia ayuda a organizar la medicación.",
        termo_3: "El sistema no sustituye el consejo médico o farmacéutico.",
        termo_4: "Comprueba siempre la información de tu medicación.",
        termo_5: "Mantén seguros tus datos de acceso.",
        termos_final: "Si tienes dudas sobre la medicación, contacta con un profesional sanitario.",
        fechar: "Cerrar",
        email_label: "Correo electrónico:",
        telefone_label: "Teléfono:",
        morada_label: "Dirección:",
        morada: "Lisboa, Portugal",
        horario_label: "Horario de atención:",
        horario: "Días laborables, de 9:00 a 18:00",
        erro_carregar: "No se pudieron cargar los datos. Comprueba que la API esté funcionando.",
        erro_registar: "No se pudo registrar la toma.",
        stock: "Stock"
    }
};


let perfisInicio = [];
let medicamentosInicio = [];
let tomasInicio = [];
let medicamentoStockSelecionado = null;


function obterIdiomaInicio() {
    const idioma = localStorage.getItem("idioma") || "pt";
    return traducoesInicio[idioma] ? idioma : "pt";
}


function textoInicio(chave) {
    const idioma = obterIdiomaInicio();
    return traducoesInicio[idioma][chave] || traducoesInicio.pt[chave] || chave;
}


function aplicarTraducoesInicio() {
    const idioma = obterIdiomaInicio();
    document.documentElement.lang = idioma;
    document.querySelectorAll("[data-i18n]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-i18n");
        const texto = traducoesInicio[idioma][chave];
        if (texto !== undefined) {
            elemento.textContent = texto;
        }
    });
}


function obterSessaoInicio() {
    try {
        const sessao = localStorage.getItem("sessao");
        return sessao ? JSON.parse(sessao) : null;
    } catch (erro) {
        return null;
    }
}


function verificarSessaoInicio() {
    const sessao = obterSessaoInicio();
    const idUtilizador = sessao && (sessao.idUtilizador ?? sessao.id);
    if (idUtilizador === null || idUtilizador === undefined || String(idUtilizador).trim() === "") {
        try { localStorage.removeItem("sessao"); } catch (erro) {}
        const destino = new URL("intro.html", window.location.href);
        window.location.replace(destino.href);
        return null;
    }
    return sessao;
}


async function carregarDadosInicio() {
    const sessao = obterSessaoInicio();
    if (!sessao) {
        return;
    }
    const idUtilizador = sessao.idUtilizador || sessao.id;
    
    const [perfis, medicamentos, tomas] = await Promise.all([api.listarPerfisUtilizador(idUtilizador), api.listarMedicamentos(), api.listarTomas()]);
    
    perfisInicio = Array.isArray(perfis) ? perfis : [];
    const idsPerfis = perfisInicio.map(function(perfil) {
        return String(perfil.idPerfil);
    });

    medicamentosInicio = (Array.isArray(medicamentos) ? medicamentos : []).filter(function(medicamento) {
            return idsPerfis.includes(String(medicamento.idPerfil));
        });
        
    const idsMedicamentos = medicamentosInicio.map(function(medicamento) {
        return String(medicamento.idMedicamento);
    });

    tomasInicio = (Array.isArray(tomas) ? tomas : []).filter(function(toma) {
            return idsMedicamentos.includes(String(toma.idMedicamento));
        });
}


function eHojeInicio(dataHora) {
    const data = new Date(dataHora);
    if (Number.isNaN(data.getTime())) {
        return false;
    }
    const hoje = new Date();
    return data.getFullYear() === hoje.getFullYear() && data.getMonth() === hoje.getMonth() && data.getDate() === hoje.getDate();
}


function calcularEstadoTomaInicio(toma) {
    return window.Higia.calcularEstadoToma(toma.dataHora, toma.estado);
}


function formatarHoraInicio(dataHora) {
    return new Date(dataHora).toLocaleTimeString(
        obterIdiomaInicio() === "en" ? "en-GB" : "pt-PT",
        {
            hour: "2-digit",
            minute: "2-digit"
        }
    );
}


function formatarDataInicio(dataHora) {
    const idioma = obterIdiomaInicio();
    const localidade = idioma === "en" ? "en-GB" : idioma === "es" ? "es-ES" : "pt-PT";
    return new Date(dataHora).toLocaleDateString(localidade);
}


function encontrarMedicamentoInicio(idMedicamento) {
    return medicamentosInicio.find(function(medicamento) {
        return String(medicamento.idMedicamento) === String(idMedicamento);
    });
}


function encontrarPerfilInicio(idPerfil) {
    return perfisInicio.find(function(perfil) {
        return String(perfil.idPerfil) === String(idPerfil);
    });
}


async function atualizarDadosUtilizador() {
    const sessao = obterSessaoInicio();
    const nomeElemento = document.getElementById("nome-utilizador");
    const fotoElemento = document.getElementById("foto-utilizador");
    const totalPerfis = document.getElementById("total-perfis");
    
    if (!sessao) return;
    let utilizador = sessao;
    try {
        const id = sessao.idUtilizador ?? sessao.id;
        if (id) {
            utilizador = await api.obterUtilizador(id);
            const sessaoAtualizada = {
                ...sessao,
                idUtilizador: id,
                nome: utilizador.nome || "",
                email: utilizador.email || "",
                fotografia: utilizador.fotografia || ""
            };
            delete sessaoAtualizada.palavraPasse;
            delete sessaoAtualizada.password;
            localStorage.setItem("sessao", JSON.stringify(sessaoAtualizada));
        }
    } catch (erro) {
        console.error("Não foi possível atualizar os dados do utilizador:", erro);
    }

    if (nomeElemento) {
        nomeElemento.textContent = utilizador.nome || "Utilizador";
    }

    if (fotoElemento) {
        fotoElemento.replaceChildren();
        if (utilizador.fotografia) {
            const imagem = document.createElement("img");
            imagem.src = utilizador.fotografia;
            imagem.alt = "Fotografia do utilizador";
            fotoElemento.appendChild(imagem);
        } else {
            fotoElemento.innerHTML = `
                <div class="avatar-padrao">
                    <div class="avatar-cabeca"></div>
                    <div class="avatar-corpo"></div>
                </div>
            `;
        }
    }

    if (totalPerfis) {
        totalPerfis.textContent = perfisInicio.length;
    }
}


function renderizarTomasInicio() {
    const lista = document.getElementById("lista-tomas");
    const contador = document.getElementById("contador-tomas");
    const totalTomas = document.getElementById("total-tomas");
    const totalPendentes = document.getElementById("total-pendentes");
    const totalAtrasadas = document.getElementById("total-atrasadas");

    if (!lista) {
        return;
    }

    const tomas = tomasInicio.filter(function(toma) {
            return eHojeInicio(toma.dataHora) && calcularEstadoTomaInicio(toma) !== "Tomada";
        }).sort(function(a, b) {
            return new Date(a.dataHora) - new Date(b.dataHora);
        });

    const pendentes = tomas.filter(function(toma) {
        const estado = calcularEstadoTomaInicio(toma);
        return estado === "Pendente" || estado === "A aguardar hora";
    }).length;

    const atrasadas = tomas.filter(function(toma) {
        return calcularEstadoTomaInicio(toma) === "Atrasada";
    }).length;

    totalTomas.textContent = tomas.length;
    totalPendentes.textContent = pendentes;
    totalAtrasadas.textContent = atrasadas;
    contador.textContent = tomas.length;
    
    if (tomas.length === 0) {
        lista.innerHTML = `
            <div class="estado-vazio">
                <div class="estado-vazio-icone">📋</div>
                <h3>${textoInicio("nenhuma_toma")}</h3>
                <p>${textoInicio("nenhuma_toma_texto")}</p>
            </div>
        `;
        return;
    }

    lista.innerHTML = "";
    tomas.forEach(function(toma) {
        const medicamento = encontrarMedicamentoInicio(toma.idMedicamento);
        if (!medicamento) {
            return;
        }
        const perfil = encontrarPerfilInicio(medicamento.idPerfil);
        const estado = calcularEstadoTomaInicio(toma);
        const cartao = document.createElement("article");
        cartao.className = "toma-inicio-card";
        cartao.classList.add(estado === "Atrasada" ? "toma-atrasada" : "toma-pendente");
        if (estado === "A aguardar hora") {
            cartao.classList.add("toma-a-aguardar-hora");
        }

        const informacao = document.createElement("div");
        informacao.className = "toma-inicio-info";

        const nomeMedicamento = document.createElement("div");
        nomeMedicamento.className = "toma-inicio-nome";
        nomeMedicamento.textContent = medicamento.nome || "";

        const nomePerfil = document.createElement("div");
        nomePerfil.className = "toma-inicio-perfil";
        nomePerfil.textContent = perfil ? perfil.nome : "";

        informacao.append(nomeMedicamento, nomePerfil);

        const hora = document.createElement("div");
        hora.className = "toma-inicio-hora";
        hora.textContent = formatarHoraInicio(toma.dataHora);

        const data = document.createElement("div");
        data.className = "toma-inicio-data";
        data.textContent = formatarDataInicio(toma.dataHora);

        const estadoElemento = document.createElement("div");
        estadoElemento.className = "toma-inicio-estado";
        estadoElemento.classList.add(
            estado === "Atrasada" ? "estado-atrasada" : "estado-pendente"
        );
        if (estado === "A aguardar hora") {
            estadoElemento.classList.add("estado-a-aguardar-hora");
        }
        const chaveEstado = estado === "Atrasada" ? "atrasada" : (estado === "A aguardar hora" ? "aguardar_hora" : "pendente");
        estadoElemento.textContent = textoInicio(chaveEstado);

        const quantidade = document.createElement("div");
        quantidade.className = "toma-inicio-quantidade";
        quantidade.textContent = `Stock: ${Number(medicamento.quantidadeDisponivel) || 0} ${textoInicio("unidades")}`;

        const acoes = document.createElement("div");
        acoes.className = "toma-inicio-acoes";

        const instantePrevisto = new Date(toma.dataHora).getTime();
        const podeRegistar = Number.isFinite(instantePrevisto) && Date.now() >= instantePrevisto && String(toma.estado || "").toLowerCase() !== "tomada";

        if (podeRegistar) {
            const botaoRegistar = document.createElement("button");
            botaoRegistar.type = "button";
            botaoRegistar.className = "btn btn-success btn-small";
            botaoRegistar.textContent = textoInicio("registar");
            botaoRegistar.addEventListener("click", function() {
                registarTomaInicio(toma);
            });
            acoes.appendChild(botaoRegistar);
        }

        const botaoDetalhes = document.createElement("button");
        botaoDetalhes.type = "button";
        botaoDetalhes.className = "btn btn-secondary btn-small";
        botaoDetalhes.textContent = textoInicio("detalhes");
        botaoDetalhes.addEventListener("click", function() {
            abrirDetalhesTomaInicio(toma, medicamento, perfil);
        });

        acoes.appendChild(botaoDetalhes);
        cartao.append(informacao, hora, data, estadoElemento, quantidade, acoes);
        lista.appendChild(cartao);
    });
}


function adicionarLinhaDetalhe(conteudo, etiqueta, valor) {
    const linha = document.createElement("p");
    linha.className = "linha-detalhe-toma";
    const forte = document.createElement("strong");
    forte.textContent = etiqueta + ": ";
    const texto = document.createElement("span");
    texto.textContent = valor === null || valor === undefined || valor === "" ? "—" : String(valor);
    linha.append(forte, texto);
    conteudo.appendChild(linha);
}

function abrirDetalhesTomaInicio(toma, medicamento, perfil) {
    const conteudo = document.getElementById("detalhes-toma-conteudo");
    if (!conteudo) return;
    conteudo.replaceChildren();
    const estado = calcularEstadoTomaInicio(toma);
    adicionarLinhaDetalhe(conteudo, "Medicamento", medicamento.nome);
    adicionarLinhaDetalhe(conteudo, "Perfil", perfil ? perfil.nome : "");
    adicionarLinhaDetalhe(conteudo, "Data", formatarDataInicio(toma.dataHora));
    adicionarLinhaDetalhe(conteudo, "Hora prevista", formatarHoraInicio(toma.dataHora));
    adicionarLinhaDetalhe(conteudo, "Estado", estado);
    adicionarLinhaDetalhe(conteudo, "Quantidade da toma", `${toma.quantidadeTomada ?? 0} ${textoInicio("unidades")}`);
    adicionarLinhaDetalhe(conteudo, "Stock disponível", `${Number(medicamento.quantidadeDisponivel) || 0} ${textoInicio("unidades")}`);
    adicionarLinhaDetalhe(conteudo, "Tipo", medicamento.tipo || "");
    adicionarLinhaDetalhe(conteudo, "Dosagem", medicamento.dosagem || "");
    adicionarLinhaDetalhe(conteudo, "Frequência", medicamento.frequencia || "");
    adicionarLinhaDetalhe(conteudo, "Observações", medicamento.observacoes || "");
    window.abrirModal("modal-detalhes-toma");
}


function abrirAtualizarStockInicio(medicamento) {
    medicamentoStockSelecionado = medicamento;
    const nome = document.getElementById("nome-medicamento-stock");
    const campo = document.getElementById("nova-quantidade-stock");
    const stockAtual = document.getElementById("stock-atual-modal");
    if (!nome || !campo || !stockAtual) return;
    nome.textContent = medicamento.nome || "Medicamento";
    campo.value = Number(medicamento.quantidadeDisponivel) || 0;
    stockAtual.textContent = campo.value;
    campo.disabled = false;
    window.abrirModal("modal-atualizar-stock");
    campo.focus();
    campo.select();
}

async function guardarStockInicio() {
    if (!medicamentoStockSelecionado) return;
    const campo = document.getElementById("nova-quantidade-stock");
    const botao = document.getElementById("botao-guardar-stock");
    const novaQuantidade = Number(campo.value);

    if (campo.value.trim() === "" || !Number.isInteger(novaQuantidade) || novaQuantidade < 0) {
        mostrarToastInicio(obterIdiomaInicio() === "en" ? "Enter a valid stock quantity." : obterIdiomaInicio() === "es" ? "Introduce una cantidad de stock válida." : "Introduz uma quantidade de stock válida.", "erro");
        campo.focus();
        return;
    }

    botao.disabled = true;
    campo.disabled = true;

    try {
        const medicamentoAtualizado = {
            ...medicamentoStockSelecionado,
            quantidadeDisponivel: novaQuantidade
        };
        await api.editarMedicamento(medicamentoAtualizado);
        window.fecharModal("modal-atualizar-stock");
        await carregarDadosInicio();
        renderizarTomasInicio();
        renderizarAlertasInicio();
        mostrarToastInicio(obterIdiomaInicio() === "en" ? "Stock updated successfully." : obterIdiomaInicio() === "es" ? "Stock actualizado correctamente." : "Stock atualizado com sucesso.", "sucesso");
    } catch (erro) {
        console.error("Erro ao atualizar o stock:", erro);
        mostrarToastInicio(erro.message || textoInicio("erro_carregar"), "erro");
    } finally {
        botao.disabled = false;
        campo.disabled = false;
        medicamentoStockSelecionado = null;
    }
}


let resolverConfirmacaoTomaInicio = null;

function garantirModalConfirmacaoTomaInicio() {
    let modal = document.getElementById("modal-confirmar-registo-toma");
    if (modal) {
        return modal;
    }
    modal = document.createElement("div");
    modal.className = "modal";
    modal.id = "modal-confirmar-registo-toma";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-labelledby", "titulo-confirmar-registo-toma");
    modal.innerHTML = `
        <div class="modal-conteudo modal-confirmacao-toma-conteudo">
            <button type="button" class="modal-fechar" id="botao-fechar-confirmacao-toma" aria-label="Fechar">×</button>
            <div class="modal-cabecalho">
                <h2 id="titulo-confirmar-registo-toma">Confirmar toma</h2>
            </div>
            <div class="modal-corpo">
                <p class="confirmacao-toma-texto" id="texto-confirmar-registo-toma"></p>
            </div>
            <div class="modal-acoes">
                <button type="button" class="btn btn-secondary" id="botao-cancelar-confirmacao-toma">Cancelar</button>
                <button type="button" class="btn btn-primary" id="botao-confirmar-registo-toma">Sim, registar toma</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    return modal;
}

function confirmarRegistoTomaInicio(toma) {
    const modal = garantirModalConfirmacaoTomaInicio();
    const texto = document.getElementById("texto-confirmar-registo-toma");
    const botaoConfirmar = document.getElementById("botao-confirmar-registo-toma");
    const botaoCancelar = document.getElementById("botao-cancelar-confirmacao-toma");
    const botaoFechar = document.getElementById("botao-fechar-confirmacao-toma");
    if (!modal || !texto || !botaoConfirmar || !botaoCancelar || !botaoFechar) {
        mostrarToastInicio("Não foi possível abrir a confirmação da toma. Atualiza a página e tenta novamente.", "erro");
        return Promise.resolve(false);
    }

    const idioma = obterIdiomaInicio();
    const horaPrevista = formatarHoraInicio(toma.dataHora);
    texto.textContent = idioma === "en"
        ? `Are you sure you want to register the dose scheduled for ${horaPrevista}? Confirm only if the medicine has already been taken.`
        : idioma === "es"
            ? `¿Seguro que quieres registrar la toma prevista para las ${horaPrevista}? Confirma solo si ya has tomado el medicamento.`
            : `Tem a certeza de que pretende registar a toma prevista para as ${horaPrevista}? Confirme apenas se o medicamento já foi tomado.`;
    modal.classList.add("aberto");
    document.body.style.overflow = "hidden";
    botaoConfirmar.focus();

    return new Promise((resolve) => {
        if (resolverConfirmacaoTomaInicio) {
            resolverConfirmacaoTomaInicio(false);
            resolverConfirmacaoTomaInicio = null;
        }

        resolverConfirmacaoTomaInicio = resolve;
        const terminar = (confirmado) => {
            modal.classList.remove("aberto");
            if (!document.querySelector(".modal.aberto")) {
                document.body.style.overflow = "";
            }
            botaoConfirmar.removeEventListener("click", confirmar);
            botaoCancelar.removeEventListener("click", cancelar);
            botaoFechar.removeEventListener("click", cancelar);
            modal.removeEventListener("click", clicarFundo);
            document.removeEventListener("keydown", teclaEscape);
            const resolver = resolverConfirmacaoTomaInicio;
            resolverConfirmacaoTomaInicio = null;
            if (resolver) resolver(confirmado);
        };

        const confirmar = () => terminar(true);
        const cancelar = () => terminar(false);
        const clicarFundo = (evento) => {
            if (evento.target === modal) cancelar();
        };
        const teclaEscape = (evento) => {
            if (evento.key === "Escape") cancelar();
        };

        botaoConfirmar.addEventListener("click", confirmar);
        botaoCancelar.addEventListener("click", cancelar);
        botaoFechar.addEventListener("click", cancelar);
        modal.addEventListener("click", clicarFundo);
        document.addEventListener("keydown", teclaEscape);
    });
}


async function registarTomaInicio(toma) {
    if (!toma || String(toma.estado || "").toLowerCase() === "tomada") {
        return;
    }
    const instantePrevisto = new Date(toma.dataHora).getTime();
    if (!Number.isFinite(instantePrevisto) || Date.now() < instantePrevisto) {
        mostrarToastInicio("Ainda não chegou a hora prevista para esta toma.", "erro");
        return;
    }

    const confirmarRegisto = await confirmarRegistoTomaInicio(toma);
    if (!confirmarRegisto) {
        return;
    }

    const medicamento = encontrarMedicamentoInicio(toma.idMedicamento);
    if (!medicamento) {
        mostrarToastInicio(textoInicio("medicamento_nao_encontrado"), "erro");
        return;
    }
    
    try {
        await api.registarToma(toma.idToma);
        await carregarDadosInicio();

        atualizarDadosUtilizador();
        renderizarTomasInicio();
        renderizarAlertasInicio();

        mostrarToastInicio(
            textoInicio("toma_registada"),
            "sucesso"
        );
    } catch (erro) {
        console.error("Erro ao registar toma:", erro);

        mostrarToastInicio(
            erro.message || textoInicio("erro_registar"),
            "erro"
        );
    }
}


/* =========================================================
   AVISOS
   ========================================================= */

function renderizarAlertasInicio() {
    const secao = document.getElementById("secao-alertas");
    const lista = document.getElementById("lista-alertas");
    const contador = document.getElementById("contador-alertas");

    if (!secao || !lista || !contador) {
        return;
    }

    const alertas = [];

    medicamentosInicio.forEach(function(medicamento) {
        const quantidadeStock = Number(medicamento.quantidadeDisponivel) || 0;

        if (quantidadeStock <= 5) {
            alertas.push({
                tipo: "stock",
                medicamento: medicamento,
                perfil: encontrarPerfilInicio(medicamento.idPerfil),
                stock: quantidadeStock
            });
        }
    });

    tomasInicio.forEach(function(toma) {
        // Uma toma continua atrasada mesmo que tenha sido prevista num dia anterior.
        if (calcularEstadoTomaInicio(toma) !== "Atrasada") {
            return;
        }

        const medicamento = encontrarMedicamentoInicio(toma.idMedicamento);

        if (medicamento) {
            alertas.push({
                tipo: "atrasada",
                medicamento: medicamento,
                perfil: encontrarPerfilInicio(medicamento.idPerfil),
                toma: toma
            });
        }
    });

    lista.innerHTML = "";
    contador.textContent = String(alertas.length);
    // Mostrar a caixa de avisos apenas quando existem avisos.
    secao.classList.toggle("is-hidden", alertas.length === 0);
    secao.style.display = alertas.length > 0 ? "" : "none";

    const listasInicio = document.getElementById("inicio-listas");
    if (listasInicio) {
        listasInicio.classList.toggle("sem-alertas", alertas.length === 0);
    }

    alertas.forEach(function(alerta) {
        const elemento = document.createElement("div");
        elemento.className = "alerta-inicio";

        const informacao = document.createElement("div");
        informacao.className = "alerta-inicio-info";

        const icone = document.createElement("span");
        icone.className = "alerta-icone";
        icone.textContent = alerta.tipo === "stock" ? "📦" : "⏰";

        const texto = document.createElement("div");
        texto.className = "alerta-inicio-texto";

        const nome = document.createElement("strong");
        nome.textContent = alerta.medicamento.nome || "";

        const perfil = document.createElement("span");
        perfil.textContent = alerta.perfil ? alerta.perfil.nome : "";

        texto.append(nome, perfil);
        informacao.append(icone, texto);
        elemento.appendChild(informacao);

        if (alerta.tipo === "stock") {
            const stockAtual = document.createElement("span");
            stockAtual.className = "alerta-stock";
            stockAtual.textContent = `${alerta.stock} ${textoInicio("unidades")}`;

            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "btn btn-warning btn-small";
            botao.textContent = textoInicio("atualizar");
            botao.addEventListener("click", function() {
                abrirAtualizarStockInicio(alerta.medicamento);
            });

            elemento.append(stockAtual, botao);
        } else {
            const hora = document.createElement("span");
            hora.className = "alerta-toma-texto";
            hora.textContent =
                `${textoInicio("toma_prevista")} ${formatarHoraInicio(alerta.toma.dataHora)}`;

            const botao = document.createElement("button");
            botao.type = "button";
            botao.className = "btn btn-danger btn-small";
            botao.textContent = textoInicio("registar");
            botao.addEventListener("click", function() {
                registarTomaInicio(alerta.toma);
            });

            elemento.append(hora, botao);
        }

        lista.appendChild(elemento);
    });
}


/* =========================================================
   LOGOUT
   ========================================================= */

function configurarLogoutInicio() {
    const botao = document.getElementById("botao-logout");

    if (!botao) {
        return;
    }

    botao.addEventListener("click", function(evento) {
        evento.preventDefault();
        localStorage.removeItem("sessao");
        window.location.href = "intro.html";
    });
}


/* =========================================================
   TOAST
   ========================================================= */

function mostrarToastInicio(mensagem, tipo) {
    let contentor = document.getElementById("toast-contentor");

    if (!contentor) {
        contentor = document.createElement("div");
        contentor.id = "toast-contentor";
        document.body.appendChild(contentor);
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensagem;

    contentor.appendChild(toast);

    setTimeout(function() {
        toast.classList.add("toast-sair");

        setTimeout(function() {
            toast.remove();
        }, 300);
    }, 3000);
}


/* =========================================================
   INICIALIZAÇÃO
   ========================================================= */

window.addEventListener("idiomaAlterado", function (evento) { aplicarTraducoesInicio(); });

document.addEventListener("DOMContentLoaded", async function() {
    const sessao = verificarSessaoInicio();

    if (!sessao) {
        return;
    }

    aplicarTraducoesInicio();
    configurarLogoutInicio();

    const botaoGuardarStock = document.getElementById("botao-guardar-stock");
    if (botaoGuardarStock) {
        botaoGuardarStock.addEventListener("click", guardarStockInicio);
    }

    const campoStockModal = document.getElementById("nova-quantidade-stock");
    if (campoStockModal) {
        campoStockModal.addEventListener("keydown", function(evento) {
            if (evento.key === "Enter") {
                guardarStockInicio();
            }
        });
    }

    try {
        await carregarDadosInicio();

        atualizarDadosUtilizador();
        renderizarTomasInicio();
        renderizarAlertasInicio();
    } catch (erro) {
        console.error("Erro ao carregar a página inicial:", erro);

        mostrarToastInicio(
            textoInicio("erro_carregar"),
            "erro"
        );
    }

    /*
     * Atualiza os estados apresentados a cada 30 segundos.
     * Os dados são novamente consultados à API.
     */
    setInterval(async function() {
        try {
            await carregarDadosInicio();

            atualizarDadosUtilizador();
            renderizarTomasInicio();
            renderizarAlertasInicio();
        } catch (erro) {
            console.error("Erro ao atualizar a página inicial:", erro);
        }
    }, 30000);
});
