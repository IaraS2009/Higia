
import * as api from "./api.js";

const traducoesRegisto = {
    pt: {
        criar_conta: "Criar Conta",
        label_nome: "Nome",
        label_email: "Email",
        label_password: "Palavra-passe",
        label_confirmar_password: "Confirmar palavra-passe",

        placeholder_nome: "Ex: Maria Silva",
        placeholder_email: "exemplo@email.com",
        placeholder_password: "Mínimo 8 caracteres",
        placeholder_confirmar_password: "Repita a palavra-passe",

        btn_registar: "Registar",
        ja_tem_conta: "Já tem conta?",
        link_entrar: "Entrar",

        password_requisitos:
            "Mínimo 8 caracteres, 1 maiúscula, 1 minúscula, 1 número",

        nome_obrigatorio: "Indica o teu nome.",
        email_obrigatorio: "Indica o teu email.",
        email_invalido: "Indica um email válido.",
        password_obrigatoria: "Indica uma palavra-passe.",
        password_curta: "A palavra-passe deve ter pelo menos 8 caracteres.",
        password_requisitos_erro:
            "A palavra-passe deve ter uma maiúscula, uma minúscula e um número.",
        passwords_diferentes: "As palavras-passe não coincidem.",

        conta_criada: "Conta criada com sucesso. A redirecionar para o login...",
        erro_registo: "Ocorreu um erro ao criar a conta."
    },

    en: {
        criar_conta: "Create account",
        label_nome: "Name",
        label_email: "Email",
        label_password: "Password",
        label_confirmar_password: "Confirm password",

        placeholder_nome: "e.g. Maria Silva",
        placeholder_email: "example@email.com",
        placeholder_password: "Minimum 8 characters",
        placeholder_confirmar_password: "Repeat your password",

        btn_registar: "Register",
        ja_tem_conta: "Already have an account?",
        link_entrar: "Login",

        password_requisitos:
            "At least 8 characters, 1 uppercase, 1 lowercase and 1 number",

        nome_obrigatorio: "Enter your name.",
        email_obrigatorio: "Enter your email.",
        email_invalido: "Enter a valid email.",
        password_obrigatoria: "Enter a password.",
        password_curta: "The password must contain at least 8 characters.",
        password_requisitos_erro:
            "The password must contain an uppercase letter, a lowercase letter and a number.",
        passwords_diferentes: "The passwords do not match.",

        conta_criada: "Account created successfully. Redirecting to login...",
        erro_registo: "An error occurred while creating the account."
    },

    es: {
        criar_conta: "Crear cuenta",
        label_nome: "Nombre",
        label_email: "Correo electrónico",
        label_password: "Contraseña",
        label_confirmar_password: "Confirmar contraseña",

        placeholder_nome: "Ej.: María Silva",
        placeholder_email: "ejemplo@email.com",
        placeholder_password: "Mínimo 8 caracteres",
        placeholder_confirmar_password: "Repite la contraseña",

        btn_registar: "Registrarse",
        ja_tem_conta: "¿Ya tienes una cuenta?",
        link_entrar: "Entrar",

        password_requisitos:
            "Mínimo 8 caracteres, 1 mayúscula, 1 minúscula y 1 número",

        nome_obrigatorio: "Introduce tu nombre.",
        email_obrigatorio: "Introduce tu correo electrónico.",
        email_invalido: "Introduce un correo electrónico válido.",
        password_obrigatoria: "Introduce una contraseña.",
        password_curta: "La contraseña debe tener al menos 8 caracteres.",
        password_requisitos_erro:
            "La contraseña debe contener una mayúscula, una minúscula y un número.",
        passwords_diferentes: "Las contraseñas no coinciden.",

        conta_criada: "Cuenta creada correctamente. Redirigiendo al inicio de sesión...",
        erro_registo: "Se produjo un error al crear la cuenta."
    }
};

function obterIdioma() {
    const idioma = localStorage.getItem("idioma") || "pt";
    return traducoesRegisto[idioma] ? idioma : "pt";
}

function obterTextoRegisto(chave) {
    const idioma = obterIdioma();
    return traducoesRegisto[idioma][chave] ||
        traducoesRegisto.pt[chave] ||
        chave;
}

function aplicarTraducoesRegisto(idioma) {
    if (!traducoesRegisto[idioma]) {
        idioma = "pt";
    }

    document.querySelectorAll("[data-i18n]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-i18n");
        const texto = traducoesRegisto[idioma][chave];

        if (texto !== undefined) {
            elemento.textContent = texto;
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-i18n-placeholder");
        const texto = traducoesRegisto[idioma][chave];

        if (texto !== undefined) {
            elemento.placeholder = texto;
        }
    });
}

function mostrarAlerta(mensagem, tipo = "erro") {
    const alerta = document.getElementById("registo-alerta");

    if (!alerta) {
        window.alert(mensagem);
        return;
    }

    alerta.textContent = mensagem;
    alerta.className = "alerta " + tipo;
    alerta.classList.add("visivel");
}

function esconderAlerta() {
    const alerta = document.getElementById("registo-alerta");

    if (!alerta) {
        return;
    }

    alerta.textContent = "";
    alerta.className = "alerta";
}

function validarEmail(email) {
    const formatoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formatoEmail.test(email);
}

function configurarMostrarPalavraPasse() {
    const botoes = document.querySelectorAll("[data-target]");

    botoes.forEach(function(botao) {
        botao.addEventListener("click", function() {
            const idCampo = botao.getAttribute("data-target");
            const campo = document.getElementById(idCampo);

            if (!campo) {
                return;
            }

            if (campo.type === "password") {
                campo.type = "text";
                botao.textContent = "◉";
            } else {
                campo.type = "password";
                botao.textContent = "👁";
            }
        });
    });
}

async function registarUtilizador(evento) {
    evento.preventDefault();
    esconderAlerta();

    const nomeCampo = document.getElementById("registo-nome");
    const emailCampo = document.getElementById("registo-email");
    const campoPalavraPasse = document.getElementById("registo-password");
    const confirmarCampo = document.getElementById("registo-confirmar-password");
    const botaoRegistar = document.getElementById("registo-submit");

    if (!nomeCampo || !emailCampo || !campoPalavraPasse || !confirmarCampo) {
        mostrarAlerta("Não foi possível encontrar todos os campos do formulário.");
        console.error("Confirma os IDs dos campos no registo.html.");
        return;
    }

    const nome = nomeCampo.value.trim();
    const email = emailCampo.value.trim().toLowerCase();
    const palavraPasse = campoPalavraPasse.value;
    const confirmarPalavraPasse = confirmarCampo.value;

    if (!nome) {
        mostrarAlerta(obterTextoRegisto("nome_obrigatorio"));
        nomeCampo.focus();
        return;
    }

    if (!email) {
        mostrarAlerta(obterTextoRegisto("email_obrigatorio"));
        emailCampo.focus();
        return;
    }

    if (!validarEmail(email)) {
        mostrarAlerta(obterTextoRegisto("email_invalido"));
        emailCampo.focus();
        return;
    }

    if (!palavraPasse) {
        mostrarAlerta(obterTextoRegisto("password_obrigatoria"));
        campoPalavraPasse.focus();
        return;
    }

    if (palavraPasse.length < 8) {
        mostrarAlerta(obterTextoRegisto("password_curta"));
        campoPalavraPasse.focus();
        return;
    }

    const palavraPasseValida =
        /[A-Z]/.test(palavraPasse) &&
        /[a-z]/.test(palavraPasse) &&
        /[0-9]/.test(palavraPasse);

    if (!palavraPasseValida) {
        mostrarAlerta(obterTextoRegisto("password_requisitos_erro"));
        campoPalavraPasse.focus();
        return;
    }

    try {
        if (botaoRegistar) {
            botaoRegistar.disabled = true;
            botaoRegistar.textContent = "A registar...";
        }

        const novoUtilizador = {
            nome: nome,
            email: email,
            palavraPasse: palavraPasse,
            fotografia: null
        };

        await api.criarUtilizador(novoUtilizador);
        mostrarAlerta(obterTextoRegisto("conta_criada"), "sucesso");
        document.getElementById("form-registo").reset();

        setTimeout(function() {
            window.location.href = "login.html";
        }, 1200);

    } catch (erro) {
        console.error("Erro ao registar utilizador:", erro);
        mostrarAlerta(erro.message || obterTextoRegisto("erro_registo"));

    } finally {
        if (botaoRegistar) {
            botaoRegistar.disabled = false;
            botaoRegistar.textContent = obterTextoRegisto("btn_registar");
        }
    }
}

function configurarFormulario() {
    const formulario = document.getElementById("form-registo");

    if (!formulario) {
        console.error("Não foi encontrado o formulário form-registo.");
        return;
    }

    formulario.addEventListener("submit", registarUtilizador);
}

window.addEventListener("idiomaAlterado", function (evento) { aplicarTraducoesRegisto(evento.detail?.idioma || obterIdioma()); });

document.addEventListener("DOMContentLoaded", function() {
    aplicarTraducoesRegisto(obterIdioma());
    configurarFormulario();
    configurarMostrarPalavraPasse();
});
