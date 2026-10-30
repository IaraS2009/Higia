(function () {
    const paginaAtual = (window.location.pathname.split("/").pop() || "").toLowerCase();
    const paginasPublicas = ["intro.html", "login.html", "registo.html", ""];
    if (paginasPublicas.includes(paginaAtual)) return;

    let sessao = null;
    try { sessao = JSON.parse(localStorage.getItem("sessao") || "null"); } catch (erro) { sessao = null; }
    const id = sessao && (sessao.idUtilizador ?? sessao.id);
    if (id === null || id === undefined || String(id).trim() === "") {
        try { localStorage.removeItem("sessao"); } catch (erro) {}
        window.location.replace(new URL("intro.html", window.location.href).href);
    }
})();


window.Higia = window.Higia || {};
window.Higia.podeRegistarToma = function (dataHora) {
    const instante = new Date(dataHora).getTime();
    return Number.isFinite(instante) && Date.now() >= instante;
};
window.Higia.calcularEstadoToma = function (dataHora, estadoAtual) {
    if (String(estadoAtual || "").toLowerCase() === "tomada") return "Tomada";
    const instante = new Date(dataHora).getTime();
    if (!Number.isFinite(instante)) return "A aguardar hora";
    const diferenca = Date.now() - instante;
    if (diferenca < 0) return "A aguardar hora";
    if (diferenca >= 30 * 60 * 1000) return "Atrasada";
    return "Pendente";
};

const traducoes = {
    pt: {
        idioma: "Idioma",
        ajuda: "Ajuda",
        precisa_ajuda: "Precisa de ajuda?",
        ajuda_1: "O Hígia foi criado para ajudar a organizar a medicação de forma simples, prática e segura. Qualquer informação aqui presente deve ser confirmada com o seu médico ou farmacêutico.",
        ajuda_2: "Para questões específicas, contacte-nos através do email:",

        registar: "Registar",
        entrar: "Entrar",

        termos: "Termos",
        termos_condicoes: "Termos e Condições",
        termos_intro: "Ao utilizar o Hígia, o utilizador concorda com os seguintes termos:",
        termo_1: "O Hígia é um sistema de apoio à gestão de medicação, não substituindo médicos, farmacêuticos ou outros profissionais de saúde.",
        termo_2: "Toda a informação inserida é da exclusiva responsabilidade do utilizador.",
        termo_3: "Os dados pessoais são tratados de acordo com a legislação aplicável (RGPD) e não são partilhados com terceiros sem consentimento.",
        termo_4: "O utilizador compromete-se a utilizar o sistema apenas para fins legítimos e respeitando a privacidade de terceiros.",
        termo_5: "O Hígia não se responsabiliza por danos decorrentes do uso incorreto das informações ou da falha na toma de medicamentos.",
        termos_final: "Ao continuar a utilizar o Hígia, o utilizador aceita estes termos na íntegra.",

        contactos: "Contactos",
        email_label: "Email:",
        telefone_label: "Telefone:",
        morada_label: "Morada: ",
        morada: "Rua Vice-Almirante Augusto de Castro Guedes, 51, 1800-343 Lisboa, Portugal",
        horario_label: "Horário de atendimento: ",
        horario: "Segunda a sexta-feira, das 09:00 às 18:00",

        direitos: "© 2026 Hígia - Todos os direitos reservados",
        fechar: "Fechar",

        inicio: "Início",
        perfis: "Perfis",
        consultas: "Consultas",
        configuracoes: "Configurações",
        terminar_sessao: "Terminar sessão",
        confirmar_saida_titulo: "Terminar sessão",
        confirmar_saida_texto: "Tens a certeza de que queres terminar a sessão?",
        cancelar: "Cancelar",
        confirmar_saida: "Sim, terminar sessão",
        fotografia: "Fotografia",
        escolher_fotografia: "Escolher fotografia",
        escolher_ficheiro: "Escolher ficheiro",
        nenhum_ficheiro: "Nenhum ficheiro selecionado",
        nome: "Nome",
        email: "Email",
        palavra_passe: "Palavra-passe",
        erro_email: "Introduz um email válido.",
    },


    en: {
        idioma: "Language",
        ajuda: "Help",
        precisa_ajuda: "Need help?",
        ajuda_1: "Hígia was created to help organize medication in a simple, practical and safe way. Any information provided here should be confirmed with your doctor or pharmacist.",
        ajuda_2: "For specific questions, contact us by email:",

        registar: "Register",
        entrar: "Log in",

        termos: "Terms",
        termos_condicoes: "Terms and Conditions",
        termos_intro: "By using Hígia, the user agrees to the following terms:",
        termo_1: "Hígia is a medication management support system and does not replace doctors, pharmacists or other healthcare professionals.",
        termo_2: "All information entered is the sole responsibility of the user.",
        termo_3: "Personal data is processed in accordance with applicable legislation (GDPR) and is not shared with third parties without consent.",
        termo_4: "The user agrees to use the system only for legitimate purposes and to respect the privacy of others.",
        termo_5: "Hígia is not responsible for damages resulting from incorrect use of the information or failure to take medication.",
        termos_final: "By continuing to use Hígia, the user accepts these terms in full.",

        contactos: "Contacts",
        email_label: "Email:",
        telefone_label: "Phone:",
        morada_label: "Address: ",
        morada: "Rua Vice-Almirante Augusto de Castro Guedes, 51, 1800-343 Lisbon, Portugal",
        horario_label: "Opening hours:",
        horario: "Monday to Friday, from 09:00 to 18:00",

        direitos: "© 2026 Hígia - All rights reserved",
        fechar: "Close",

        inicio: "Home",
        perfis: "Profiles",
        consultas: "Consultations",
        configuracoes: "Settings",
        terminar_sessao: "Log out",
        confirmar_saida_titulo: "Log out",
        confirmar_saida_texto: "Are you sure you want to log out?",
        cancelar: "Cancel",
        confirmar_saida: "Yes, log out",
        fotografia: "Photo",
        escolher_fotografia: "Choose photo",
        escolher_ficheiro: "Choose file",
        nenhum_ficheiro: "No file selected",
        nome: "Name",
        email: "Email",
        palavra_passe: "Password",
        erro_email: "Enter a valid email.",
    },


    es: {
        idioma: "Idioma",
        ajuda: "Ayuda",
        precisa_ajuda: "¿Necesita ayuda?",
        ajuda_1: "Hígia fue creado para ayudar a organizar la medicación de forma sencilla, práctica y segura. Cualquier información proporcionada aquí debe ser confirmada con su médico o farmacéutico.",
        ajuda_2: "Para preguntas específicas, contáctenos por email:",

        registar: "Registrarse",
        entrar: "Iniciar sesión",

        termos: "Términos",
        termos_condicoes: "Términos y condiciones",
        termos_intro: "Al utilizar Hígia, el usuario acepta los siguientes términos:",
        termo_1: "Hígia es un sistema de apoyo para la gestión de medicamentos y no sustituye a médicos, farmacéuticos u otros profesionales de la salud.",
        termo_2: "Toda la información introducida es responsabilidad exclusiva del usuario.",
        termo_3: "Los datos personales se tratan de acuerdo con la legislación aplicable (RGPD) y no se comparten con terceros sin consentimiento.",
        termo_4: "El usuario se compromete a utilizar el sistema únicamente para fines legítimos y respetando la privacidad de terceros.",
        termo_5: "Hígia no se responsabiliza de los daños derivados del uso incorrecto de la información o del incumplimiento de la toma de medicamentos.",
        termos_final: "Al continuar utilizando Hígia, el usuario acepta estos términos en su totalidad.",

        contactos: "Contactos",
        email_label: "Correo electrónico:",
        telefone_label: "Teléfono:",
        morada_label: "Dirección: ",
        morada: "Rua Vice-Almirante Augusto de Castro Guedes, 51, 1800-343 Lisboa, Portugal",
        horario_label: "Horario de atención: ",
        horario: "De lunes a viernes, de 09:00 a 18:00",

        direitos: "© 2026 Hígia - Todos los derechos reservados",
        fechar: "Cerrar",

        inicio: "Inicio",
        perfis: "Perfiles",
        consultas: "Consultas",
        configuracoes: "Configuración",
        terminar_sessao: "Cerrar sesión",
        confirmar_saida_titulo: "Cerrar sesión",
        confirmar_saida_texto: "¿Seguro que quieres cerrar la sesión?",
        cancelar: "Cancelar",
        confirmar_saida: "Sí, cerrar sesión",
        fotografia: "Fotografía",
        escolher_fotografia: "Elegir fotografía",
        escolher_ficheiro: "Elegir archivo",
        nenhum_ficheiro: "Ningún archivo seleccionado",
        nome: "Nombre",
        email: "Correo electrónico",
        palavra_passe: "Contraseña",
        erro_email: "Introduce un email válido.",
    }
};


function obterIdioma() {
    return localStorage.getItem("idioma") || "pt";
}

function aplicarIdioma(idioma) {
    if (!traducoes[idioma]) {
        idioma = "pt";
    }

    document.querySelectorAll("[data-i18n]").forEach(function (elemento) {
        const chave = elemento.getAttribute("data-i18n");
        const textoConfiguracao = window.traducoesConfiguracoes?.[idioma]?.[chave];
        if (traducoes[idioma][chave] !== undefined) {
            elemento.textContent = traducoes[idioma][chave];
        } else if (textoConfiguracao !== undefined) {
            elemento.textContent = textoConfiguracao;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (elemento) {
            const chave = elemento.getAttribute("data-i18n-placeholder");
            const textoConfiguracao = window.traducoesConfiguracoes?.[idioma]?.[chave];
            if (traducoes[idioma][chave] !== undefined) {
                elemento.placeholder = traducoes[idioma][chave];
            } else if (textoConfiguracao !== undefined) {
                elemento.placeholder = textoConfiguracao;
            }
        }
    );
    document.documentElement.lang = idioma;
    localStorage.setItem("idioma", idioma);

    if (typeof aplicarTraducoesIntro === "function") {
        aplicarTraducoesIntro(idioma);
    }

    if (typeof aplicarTraducoesRegisto === "function") {
        aplicarTraducoesRegisto(idioma);
    }

    window.dispatchEvent(new CustomEvent("idiomaAlterado", {
        detail: { idioma: idioma }
    }));
}

function obterTextoGeral(chave) {
    const idioma = obterIdioma();
    return traducoes[idioma]?.[chave] ?? window.traducoesConfiguracoes?.[idioma]?.[chave] ?? traducoes.pt[chave] ?? window.traducoesConfiguracoes?.pt?.[chave] ?? chave;
}

function alterarIdioma(idioma) {
    aplicarIdioma(idioma);
    const menu = document.getElementById("menu-idioma");
    if (menu) {
        menu.classList.remove("aberto");
    }
}

function configurarMenuIdioma() {
    const botao = document.getElementById("botao-idioma");
    const menu = document.getElementById("menu-idioma");
    if (!botao || !menu) return;

    botao.addEventListener("click", function (evento) {
        evento.stopPropagation();
        menu.classList.toggle("aberto");
    });

    document.addEventListener("click", function () {
        menu.classList.remove("aberto");
    });
}


function obterNomePagina() {
    const partes = window.location.pathname.split("/");
    return (partes.pop() || "intro.html").toLowerCase();
}

function paginaPublica() {
    const paginas = ["intro.html", "login.html", "registo.html"];
    return paginas.includes(obterNomePagina());
}

function obterSessaoGeral() {
    try {
        return JSON.parse(localStorage.getItem("sessao") || "null");
    } catch {
        return null;
    }
}

function obterChavePreferenciasGeral() {
    const sessao = obterSessaoGeral();
    const id = sessao?.idUtilizador ?? sessao?.id;
    return id === undefined || id === null ? null : `preferencias_${id}`;
}


function alterarTema(tema) {
    const temas = ["verde", "azul", "roxo", "laranja", "rosa", "vermelho"];
    if (!temas.includes(tema)) {
        tema = "azul";
    }
    document.body.classList.remove("tema-verde", "tema-azul", "tema-roxo", "tema-laranja", "tema-rosa", "tema-vermelho");
    document.body.classList.add("tema-" + tema);
}


function alterarModo(modo) {
    if (modo === "escuro") {
        document.body.classList.add("modo-escuro");
    } else {
        modo = "claro";
        document.body.classList.remove("modo-escuro");
    }
}


function carregarPreferencias() {
    let tema = "azul";
    let modo = "claro";

    if (!paginaPublica()) {
        const chave = obterChavePreferenciasGeral();
        if (chave) {
            try {
                const guardadas = JSON.parse(localStorage.getItem(chave) || "null");
                tema = guardadas?.tema || "azul";
                modo = guardadas?.modo || "claro";
            } catch {
                tema = "azul";
                modo = "claro";
            }
        }
    }

    alterarTema(tema);
    alterarModo(modo);
}


async function carregarDadosCabecalho() {
    if (paginaPublica()) return;
    const sessao = obterSessaoGeral();
    const id = sessao?.idUtilizador ?? sessao?.id;
    if (!id) return;

    function atualizarElementos(utilizador) {
        const nome = utilizador?.nome || "";
        const fotografia = utilizador?.fotografia || "";
        document.querySelectorAll("[data-utilizador-nome], #nome-utilizador, .utilizador-nome").forEach(function (elemento) {
            elemento.textContent = nome;
        });
        document.querySelectorAll("[data-utilizador-fotografia], #fotografia-utilizador, .utilizador-fotografia").forEach(function (elemento) {
            if (elemento.tagName === "IMG") {
                if (fotografia) {
                    elemento.src = fotografia;
                    elemento.alt = nome ? "Fotografia de " + nome : "Fotografia do utilizador";
                    elemento.hidden = false;
                } else {
                    elemento.removeAttribute("src");
                    elemento.alt = "Sem fotografia";
                }
            }
        });
    }

    atualizarElementos(sessao);
    try {
        const { obterUtilizador } = await import("./api.js");
        const utilizador = await obterUtilizador(id);
        atualizarElementos(utilizador);
        const sessaoAtualizada = {
            ...sessao,
            nome: utilizador.nome || "",
            email: utilizador.email || "",
            fotografia: utilizador.fotografia || ""
        };
        delete sessaoAtualizada.palavraPasse;
        delete sessaoAtualizada.password;
        localStorage.setItem("sessao", JSON.stringify(sessaoAtualizada));
    } catch (erro) {
        console.error("Não foi possível atualizar os dados do utilizador:", erro);
    }
}


function abrirModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.add("aberto");
    document.body.style.overflow = "hidden";
}

function fecharModal(id) {
    const modal = document.getElementById(id);
    if (!modal) return;
    modal.classList.remove("aberto");
    if (!document.querySelector(".modal.aberto")) {
        document.body.style.overflow = "";
    }
}

function configurarModais() {
    document.querySelectorAll(".modal").forEach(function (modal) {
        modal.addEventListener("click", function (evento) {
            if (evento.target === modal) {
                fecharModal(modal.id);
            }
        });
    });
}

function configurarTeclaEsc() {
    document.addEventListener("keydown", function (evento) {
        if (evento.key === "Escape") {
            document.querySelectorAll(".modal.aberto").forEach(function (modal) {
                fecharModal(modal.id);
            });
        }
    });
}


function configurarCamposFicheiro(raiz = document) {
    raiz.querySelectorAll('input[type="file"]').forEach(function (input) {
        if (input.id === "fotografia" || input.dataset.controloFicheiro === "true") return;
        input.dataset.controloFicheiro = "true";
        input.classList.add("input-ficheiro-nativo");

        const controlos = document.createElement("div");
        controlos.className = "controlos-ficheiro";

        const botao = document.createElement("button");
        botao.type = "button";
        botao.className = "botao-escolher-ficheiro";
        botao.dataset.i18n = "escolher_ficheiro";
        botao.textContent = obterTextoGeral("escolher_ficheiro");
        botao.addEventListener("click", function () { input.click(); });

        const nome = document.createElement("span");
        nome.className = "nome-ficheiro-selecionado";
        nome.dataset.i18n = "nenhum_ficheiro";
        nome.textContent = obterTextoGeral("nenhum_ficheiro");
        nome.setAttribute("aria-live", "polite");

        input.addEventListener("change", function () {
            if (input.files && input.files.length > 0) {
                nome.removeAttribute("data-i18n");
                nome.textContent = input.files[0].name;
            } else {
                nome.dataset.i18n = "nenhum_ficheiro";
                nome.textContent = obterTextoGeral("nenhum_ficheiro");
            }
        });

        controlos.append(botao, nome);
        input.insertAdjacentElement("afterend", controlos);
    });
}

function observarCamposFicheiro() {
    configurarCamposFicheiro();
    const observador = new MutationObserver(function (alteracoes) {
        alteracoes.forEach(function (alteracao) {
            alteracao.addedNodes.forEach(function (no) {
                if (no.nodeType !== Node.ELEMENT_NODE) return;
                if (no.matches?.('input[type="file"]')) {
                    configurarCamposFicheiro(no.parentElement || document);
                } else if (no.querySelectorAll) {
                    configurarCamposFicheiro(no);
                }
            });
        });
    });
    observador.observe(document.body, { childList: true, subtree: true });
}


function configurarConfirmacaoTerminarSessao() {
    document.addEventListener("click", function (evento) {
        const botaoSair = evento.target.closest("#botao-logout");
        if (botaoSair) {
            evento.preventDefault();
            evento.stopImmediatePropagation();
            abrirModal("modal-confirmar-sair");
            return;
        }

        const confirmarSair = evento.target.closest("#botao-confirmar-sair");
        if (confirmarSair) {
            evento.preventDefault();
            evento.stopImmediatePropagation();
            localStorage.removeItem("sessao");
            window.location.href = "intro.html";
            return;
        }

        const cancelarSair = evento.target.closest("#botao-cancelar-sair");
        if (cancelarSair) {
            evento.preventDefault();
            evento.stopImmediatePropagation();
            fecharModal("modal-confirmar-sair");
        }
    }, true);
}

function configurarAcoesComuns() {
    document.addEventListener("click", function (evento) {
        const abrir = evento.target.closest("[data-abrir-modal]");
        if (abrir) {
            abrirModal(abrir.dataset.abrirModal);
            return;
        }
        const fechar = evento.target.closest("[data-fechar-modal]");
        if (fechar) {
            fecharModal(fechar.dataset.fecharModal);
            return;
        }
        const idioma = evento.target.closest("[data-alterar-idioma]");
        if (idioma) {
            alterarIdioma(idioma.dataset.alterarIdioma);
        }
    });
}


document.addEventListener("DOMContentLoaded", function () {
    carregarPreferencias();
    aplicarIdioma(obterIdioma());
    configurarMenuIdioma();
    configurarModais();
    configurarAcoesComuns();
    configurarConfirmacaoTerminarSessao();
    configurarTeclaEsc();
    observarCamposFicheiro();
    carregarDadosCabecalho();
});