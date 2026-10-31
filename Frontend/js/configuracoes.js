import * as api from "./api.js";


const traducoesConfiguracoes = {
    pt: {
        configuracoes_titulo: "Configurações",
        configuracoes_subtitulo: "Personaliza a tua conta e a aparência do Hígia.",

        dados_conta: "Dados da conta",
        fotografia: "Fotografia",
        escolher_fotografia: "Escolher fotografia",
        escolher_ficheiro: "Escolher ficheiro",
        nenhum_ficheiro: "Nenhum ficheiro selecionado",
        fotografia_opcional: "A fotografia é opcional. Máximo: 3 MB.",
        nova_palavra_passe: "Nova palavra-passe",
        confirmar_palavra_passe: "Confirmar palavra-passe",
        deixar_vazio: "Deixa vazio se não quiseres alterar.",

        aparencia: "Aparência",
        modo: "Modo",
        modo_claro: "Claro",
        modo_escuro: "Escuro",
        cor_principal: "Cor principal",
        verde: "Verde",
        azul: "Azul",
        vermelho: "Vermelho",
        roxo: "Roxo",
        laranja: "Laranja",
        rosa: "Rosa",

        guardar_alteracoes: "Guardar alterações",
        alteracoes_guardadas: "As alterações foram guardadas com sucesso.",

        erro_nome: "O nome é obrigatório.",
        erro_email: "Introduz um email válido.",
        erro_email_existente: "Este email já está associado a outra conta.",
        erro_palavras_passe: "As palavras-passe não coincidem.",
        erro_palavra_passe_curta: "A palavra-passe deve ter pelo menos 8 caracteres.",
        erro_palavra_passe_segura: "A palavra-passe deve conter uma letra maiúscula, uma letra minúscula e um número",
        erro_sessao: "Não foi possível encontrar a sessão atual.",
        erro_fotografia: "O ficheiro selecionado não é uma imagem.",
        fotografia_grande: "A fotografia original deve ter, no máximo, 3 MB.",
        erro_carregar: "Não foi possível carregar os dados da conta.",
        erro_guardar: "Não foi possível guardar as alterações.",

        a_guardar: "A guardar..."
    },

    en: {
        configuracoes_titulo: "Settings",
        configuracoes_subtitulo: "Customize your account and the appearance of Hígia.",

        dados_conta: "Account details",
        fotografia: "Photo",
        escolher_fotografia: "Choose photo",
        escolher_ficheiro: "Choose file",
        nenhum_ficheiro: "No file selected",
        fotografia_opcional: "Photo is optional. Maximum: 3 MB.",
        nova_palavra_passe: "New password",
        confirmar_palavra_passe: "Confirm password",
        deixar_vazio: "Leave empty if you do not want to change it.",

        aparencia: "Appearance",
        modo: "Mode",
        modo_claro: "Light",
        modo_escuro: "Dark",
        cor_principal: "Main color",
        verde: "Green",
        azul: "Blue",
        vermelho: "Red",
        roxo: "Purple",
        laranja: "Orange",
        rosa: "Pink",

        guardar_alteracoes: "Save changes",
        alteracoes_guardadas: "Changes saved successfully.",

        erro_nome: "Enter your name.",
        erro_email: "Enter a valid email.",
        erro_email_existente: "This email is already associated with another account.",
        erro_palavras_passe: "The passwords do not match.",
        erro_palavra_passe_curta: "The password must contain at least 8 characters.",
        erro_palavra_passe_segura: "The password must contain an uppercase letter, a lowercase letter and a number.",
        erro_sessao: "The current session could not be found.",
        erro_fotografia: "The selected file is not an image.",
        fotografia_grande: "The original photo must be no larger than 3 MB.",
        erro_carregar: "Could not load the account details.",
        erro_guardar: "Could not save the changes.",

        a_guardar: "Saving..."
    },

    es: {
        configuracoes_titulo: "Configuración",
        configuracoes_subtitulo: "Personaliza tu cuenta y la apariencia de Hígia.",

        dados_conta: "Datos de la cuenta",
        fotografia: "Fotografía",
        escolher_fotografia: "Elegir fotografía",
        escolher_ficheiro: "Elegir archivo",
        nenhum_ficheiro: "Ningún archivo seleccionado",
        fotografia_opcional: "La fotografía es opcional. Máximo: 3 MB.",
        nova_palavra_passe: "Nueva contraseña",
        confirmar_palavra_passe: "Confirmar contraseña",
        deixar_vazio: "Déjalo vacío si no quieres cambiarla.",

        aparencia: "Apariencia",
        modo: "Modo",
        modo_claro: "Claro",
        modo_escuro: "Oscuro",
        cor_principal: "Color principal",
        verde: "Verde",
        azul: "Azul",
        vermelho: "Rojo",
        roxo: "Morado",
        laranja: "Naranja",
        rosa: "Rosa",

        guardar_alteracoes: "Guardar cambios",
        alteracoes_guardadas: "Los cambios se han guardado correctamente.",

        erro_nome: "Introduce tu nombre.",
        erro_email: "Introduce un email válido.",
        erro_email_existente: "Este email ya está asociado a otra cuenta.",
        erro_palavras_passe: "Las contraseñas no coinciden.",
        erro_palavra_passe_curta: "La contraseña debe tener al menos 8 caracteres.",
        erro_palavra_passe_segura: "La contraseña debe contener una letra mayúscula, una minúscula y un número.",
        erro_sessao: "No se ha encontrado la sesión actual.",
        erro_fotografia: "El archivo seleccionado no es una imagen.",
        fotografia_grande: "La fotografía original no puede superar los 3 MB.",
        erro_carregar: "No se pudieron cargar los datos de la cuenta.",
        erro_guardar: "No se pudieron guardar los cambios.",

        a_guardar: "Guardando..."
    }
};


window.traducoesConfiguracoes = traducoesConfiguracoes;


function textoConfiguracoes(chave) {
    const idioma = preferencias.idioma || "pt";
    return traducoesConfiguracoes[idioma]?.[chave] || traducoesConfiguracoes.pt[chave] || chave;
}


let utilizadorAtual = null;
let fotografiaSelecionada = null;
let preferencias = {
    tema: "azul",
    modo: "claro",
    idioma: "pt"
};


function obterSessao() {
    try {
        return JSON.parse(localStorage.getItem("sessao") || "null");
    } catch {
        return null;
    }
}


function obterIdUtilizador() {
    const sessao = obterSessao();
    return sessao?.idUtilizador ?? sessao?.id ?? null;
}


function obterChavePreferencias() {
    const id = obterIdUtilizador();
    return id === null ? null : `preferencias_${id}`;
}


function lerPreferenciasGuardadas() {
    const chave = obterChavePreferencias();
    try {
        return chave ? JSON.parse(localStorage.getItem(chave) || "null") : null;
    } catch {
        return null;
    }
}

function carregarPreferencias() {
    const guardadas = lerPreferenciasGuardadas();
    preferencias = {
        tema: guardadas?.tema || "azul",
        modo: guardadas?.modo || "claro",
        idioma: localStorage.getItem("idioma") || guardadas?.idioma || "pt"
    };

    const tema = document.querySelector(`input[name="tema"][value="${preferencias.tema}"]`);
    const modo = document.querySelector(`input[name="modo"][value="${preferencias.modo}"]`);
    const idioma = document.getElementById("idioma");
    if (tema) tema.checked = true;
    if (modo) modo.checked = true;
    if (idioma) idioma.value = preferencias.idioma;
    aplicarPreVisualizacao(preferencias.tema, preferencias.modo);
    aplicarIdiomaTemporario(preferencias.idioma);
}


function guardarPreferencias() {
    const chave = obterChavePreferencias();
    if (chave) {
        localStorage.setItem(chave, JSON.stringify(preferencias));
    }
    localStorage.setItem("idioma", preferencias.idioma);
}

function aplicarPreVisualizacao(tema, modo) {
    const temas = ["verde", "azul", "roxo", "laranja", "rosa", "vermelho"];
    if (!temas.includes(tema)) tema = "azul";
    if (!["claro", "escuro"].includes(modo)) modo = "claro";

    document.body.classList.remove("tema-verde", "tema-azul", "tema-roxo", "tema-laranja", "tema-rosa", "tema-vermelho", "modo-escuro");
    document.body.classList.add("tema-" + tema);
    if (modo === "escuro") {
        document.body.classList.add("modo-escuro");
    }
}


function configurarPreVisualizacao() {
    document.querySelectorAll('input[name="tema"]').forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                aplicarPreVisualizacao(radio.value, obterModoSelecionado());
            }
        });
    });

    document.querySelectorAll('input[name="modo"]').forEach(radio => {
        radio.addEventListener("change", () => {
            if (radio.checked) {
                aplicarPreVisualizacao(obterTemaSelecionado(), radio.value);
            }
        });
    });
}


function aplicarIdiomaTemporario(idioma) {
    if (!["pt", "en", "es"].includes(idioma)) {
        idioma = "pt";
    }
    preferencias.idioma = idioma;
    if (typeof window.aplicarIdioma === "function") {
        window.aplicarIdioma(idioma);
    } else {
        localStorage.setItem("idioma", idioma);
        document.documentElement.lang = idioma;
    }
}

function configurarPreVisualizacaoIdioma() {
    const seletor = document.getElementById("idioma");
    if (!seletor) return;
    seletor.addEventListener("change", () => {
        aplicarIdiomaTemporario(seletor.value);
    });
}


async function carregarDadosUtilizador() {
    const id = obterIdUtilizador();
    if (id === null) {
        window.location.replace("intro.html");
        return;
    }
    try {
        utilizadorAtual = await api.obterUtilizador(id);
        document.getElementById("nome").value = utilizadorAtual.nome || "";
        document.getElementById("email").value = utilizadorAtual.email || "";
        if (utilizadorAtual.fotografia) {
            mostrarFotografia(utilizadorAtual.fotografia);
        } else {
            mostrarAvatar();
        }
    } catch (erro) {
        console.error(erro);
        mostrarMensagemTexto(textoConfiguracoes("erro_carregar"), true);
    }
}


function mostrarFotografia(fotografia) {
    const preVisualizacao = document.getElementById("fotografia-preview");
    if (!preVisualizacao) return;
    preVisualizacao.replaceChildren();

    const imagem = document.createElement("img");
    imagem.src = fotografia;
    imagem.alt = "Fotografia do utilizador";
    preVisualizacao.classList.remove("sem-fotografia");
    preVisualizacao.appendChild(imagem);
}


function mostrarAvatar() {
    const preVisualizacao = document.getElementById("fotografia-preview");
    if (!preVisualizacao) return;
    preVisualizacao.replaceChildren();
    preVisualizacao.classList.add("sem-fotografia");
}


function comprimirFotografia(ficheiro) {
    return new Promise((resolve, reject) => {
        const leitor = new FileReader();
        leitor.onerror = () => {
            reject(new Error("Não foi possível ler a fotografia."));
        };
        leitor.onload = () => {
            const imagemCarregada = new Image();
            imagemCarregada.onerror = () => {
                reject(new Error("Não foi possível abrir a imagem."));
            };
            imagemCarregada.onload = () => {
                const tamanhoMaximo = 400;
                const escala = Math.min(1, tamanhoMaximo / Math.max(imagemCarregada.width, imagemCarregada.height));
                const elementoCanvas = document.createElement("canvas");
                elementoCanvas.width = Math.max(1, Math.round(imagemCarregada.width * escala));
                elementoCanvas.height = Math.max(1, Math.round(imagemCarregada.height * escala));

                const contexto = elementoCanvas.getContext("2d");
                if (!contexto) {
                    reject(new Error("Não foi possível processar a imagem."));
                    return;
                }
                contexto.drawImage(imagemCarregada, 0, 0, elementoCanvas.width, elementoCanvas.height);
                resolve(elementoCanvas.toDataURL("image/jpeg", 0.65));
            };
            imagemCarregada.src = leitor.result;
        };
        leitor.readAsDataURL(ficheiro);
    });
}

function configurarFotografia() {
    const campoFicheiro = document.getElementById("fotografia");
    if (!campoFicheiro) return;
    campoFicheiro.addEventListener("change", async () => {
        const ficheiro = campoFicheiro.files[0];
        if (!ficheiro) return;
        if (!ficheiro.type.startsWith("image/")) {
            mostrarMensagemTexto(textoConfiguracoes("erro_fotografia"), true);
            campoFicheiro.value = "";
            return;
        }
        if (ficheiro.size > 3 * 1024 * 1024) {
            mostrarMensagemTexto(textoConfiguracoes("fotografia_grande"), true);
            campoFicheiro.value = "";
            return;
        }
        try {
            fotografiaSelecionada = await comprimirFotografia(ficheiro);
            mostrarFotografia(fotografiaSelecionada);
            mostrarMensagemTexto("");
        } catch (erro) {
            console.error(erro);
            fotografiaSelecionada = null;
            campoFicheiro.value = "";
            mostrarMensagemTexto(erro.message || "Não foi possível processar a fotografia.", true);
        }
    });
}


function obterTemaSelecionado() {
    return document.querySelector('input[name="tema"]:checked')?.value || "azul";
}


function obterModoSelecionado() {
    return document.querySelector('input[name="modo"]:checked')?.value || "claro";
}


function obterIdiomaSelecionado() {
    return document.getElementById("idioma")?.value || "pt";
}


function emailValido(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function palavraPasseValida(palavraPasse) {
    const temMaiuscula = /[A-Z]/.test(palavraPasse);
    const temMinuscula = /[a-z]/.test(palavraPasse);
    const temNumero = /[0-9]/.test(palavraPasse);
    return (palavraPasse.length >= 8 && temMaiuscula && temMinuscula && temNumero);
}


function mostrarMensagemTexto(texto, erro = false) {
    const mensagem = document.getElementById("mensagem-configuracoes");
    if (!mensagem) return;
    mensagem.textContent = texto;
    mensagem.classList.toggle("erro", erro);
}


async function guardarAlteracoes() {
    if (!utilizadorAtual) {
        mostrarMensagemTexto(textoConfiguracoes("erro_sessao"), true);
        return;
    }

    const botaoGuardar = document.getElementById("botao-guardar");
    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const novaPalavraPasse = document.getElementById("nova-palavra-passe").value;
    const confirmarPalavraPasse = document.getElementById("confirmar-palavra-passe").value;

    if (!nome) {
        mostrarMensagemTexto(textoConfiguracoes("erro_nome"), true);
        return;
    }

    if (!emailValido(email)) {
        mostrarMensagemTexto(textoConfiguracoes("erro_email"), true);
        return;
    }

    if (novaPalavraPasse.length > 0) {
        if (novaPalavraPasse.length < 8) {
            mostrarMensagemTexto(textoConfiguracoes("erro_palavra_passe_curta"), true);
            return;
        }
        if (!palavraPasseValida(novaPalavraPasse)) {
            mostrarMensagemTexto(textoConfiguracoes("erro_palavra_passe_segura"), true);
            return;
        }
        if (novaPalavraPasse !== confirmarPalavraPasse) {
            mostrarMensagemTexto(textoConfiguracoes("erro_palavras_passe"), true);
            return;
        }
    }
    if (botaoGuardar) {
        botaoGuardar.disabled = true;
        botaoGuardar.textContent = textoConfiguracoes("a_guardar");
    }
    try {
        const idAtual = utilizadorAtual.idUtilizador ?? utilizadorAtual.id;
        const utilizadores = await api.listarUtilizadores();
        const emailExiste = utilizadores.some(utilizador => {
            const id = utilizador.idUtilizador ?? utilizador.id;
            return (String(id) !== String(idAtual) && String(utilizador.email).toLowerCase() === email.toLowerCase());
        });

        if (emailExiste) {
            mostrarMensagemTexto(textoConfiguracoes("erro_email_existente"), true);
            return;
        }

        const fotografia = fotografiaSelecionada !== null ? fotografiaSelecionada : utilizadorAtual.fotografia || "";
        const dadosAtualizados = {
            ...utilizadorAtual,
            idUtilizador: idAtual,
            nome,
            email,
            fotografia
        };

        if (novaPalavraPasse) {
            dadosAtualizados.palavraPasse = novaPalavraPasse;
        } else {
            delete dadosAtualizados.palavraPasse;
        }
        delete dadosAtualizados.password;

        await api.editarUtilizador(dadosAtualizados);
        preferencias = {
            tema: obterTemaSelecionado(),
            modo: obterModoSelecionado(),
            idioma: obterIdiomaSelecionado()
        };
        guardarPreferencias();

        utilizadorAtual = {
            ...utilizadorAtual,
            nome,
            email,
            fotografia
        };

        const sessao = obterSessao();
        if (sessao) {
            sessao.nome = nome;
            sessao.email = email;
            sessao.fotografia = fotografia;
            delete sessao.palavraPasse;
            delete sessao.password;
            localStorage.setItem("sessao", JSON.stringify(sessao));
        }

        aplicarPreVisualizacao(preferencias.tema, preferencias.modo);

        if (typeof window.aplicarIdioma === "function") {
            window.aplicarIdioma(preferencias.idioma);
        }

        fotografiaSelecionada = null;

        document.getElementById("fotografia").value = "";
        document.getElementById("nova-palavra-passe").value = "";
        document.getElementById("confirmar-palavra-passe").value = "";

        mostrarMensagemTexto(typeof obterTextoGeral === "function" ? obterTextoGeral("alteracoes_guardadas") : textoConfiguracoes("alteracoes_guardadas"));
    } catch (erro) {
        console.error(erro);
        mostrarMensagemTexto(erro.message || textoConfiguracoes("erro_guardar"), true);
    } finally {
        if (botaoGuardar) {
            botaoGuardar.disabled = false;
            botaoGuardar.textContent = textoConfiguracoes("guardar_alteracoes");
        }
    }
}


function configurarLogout() {
    const botaoLogout = document.getElementById("botao-logout");
    if (!botaoLogout) return;
    botaoLogout.addEventListener("click", evento => {
        evento.preventDefault();
        localStorage.removeItem("sessao");
        window.location.replace("intro.html");
    });
}


window.addEventListener("idiomaAlterado", function (evento) {
    const idioma = evento.detail?.idioma || localStorage.getItem("idioma") || "pt";
    preferencias.idioma = idioma;

    const seletor = document.getElementById("idioma");
    if (seletor) {
        seletor.value = idioma;
    }
});


document.addEventListener("DOMContentLoaded", async () => {
    carregarPreferencias();
    configurarPreVisualizacao();
    configurarPreVisualizacaoIdioma();
    configurarFotografia();
    configurarLogout();

    const botaoGuardar = document.getElementById("botao-guardar");
    if (botaoGuardar) {
        botaoGuardar.addEventListener("click", guardarAlteracoes);
    }
    await carregarDadosUtilizador();
});