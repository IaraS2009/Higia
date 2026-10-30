import * as api from "./api.js";


const traducoesLogin = {

    pt: {
        titulo_login: "Entrar",
        subtitulo_login: "Aceda à sua conta para gerir a sua medicação",
        label_email: "Email",
        placeholder_email: "Ex.: nome@email.com",
        label_password: "Palavra-passe",
        placeholder_password_login: "A sua palavra-passe",
        btn_entrar: "Entrar",
        nao_tem_conta: "Não tem conta?",
        link_registar: "Registar-se",
        erro_email_vazio: "Introduza o seu email.",
        erro_email_invalido: "Introduza um email válido.",
        erro_password_vazia: "Introduza a sua palavra-passe.",
        erro_credenciais_invalidas: "Email ou palavra-passe incorretos.",
        login_sucesso: "Sessão iniciada com sucesso! A redirecionar..."
    },

    en: {
        titulo_login: "Log in",
        subtitulo_login: "Access your account to manage your medication",
        label_email: "Email",
        placeholder_email: "E.g.: name@email.com",
        label_password: "Password",
        placeholder_password_login: "Your password",
        btn_entrar: "Log in",
        nao_tem_conta: "Don't have an account?",
        link_registar: "Register",
        erro_email_vazio: "Enter your email.",
        erro_email_invalido: "Enter a valid email.",
        erro_password_vazia: "Enter your password.",
        erro_credenciais_invalidas: "Incorrect email or password.",
        login_sucesso: "Signed in successfully! Redirecting..."
    },

    es: {
        titulo_login: "Iniciar sesión",
        subtitulo_login: "Acceda a su cuenta para gestionar su medicación",
        label_email: "Correo electrónico",
        placeholder_email: "Ej.: nombre@email.com",
        label_password: "Contraseña",
        placeholder_password_login: "Su contraseña",
        btn_entrar: "Iniciar sesión",
        nao_tem_conta: "¿No tiene una cuenta?",
        link_registar: "Registrarse",
        erro_email_vazio: "Introduzca su correo electrónico.",
        erro_email_invalido: "Introduzca un correo electrónico válido.",
        erro_password_vazia: "Introduzca su contraseña.",
        erro_credenciais_invalidas: "Correo electrónico o contraseña incorrectos.",
        login_sucesso: "¡Sesión iniciada correctamente! Redirigiendo..."
    }
};


function obterTexto(chave) {

    const idioma = obterIdioma();

    if (
        traducoesLogin[idioma] &&
        traducoesLogin[idioma][chave] !== undefined
    ) {
        return traducoesLogin[idioma][chave];
    }

    return traducoesLogin.pt[chave] || "";
}


function aplicarTraducoesLogin(idioma) {

    if (!traducoesLogin[idioma]) {
        idioma = "pt";
    }

    const elementos = document.querySelectorAll("[data-i18n]");

    elementos.forEach(function (elemento) {

        const chave = elemento.getAttribute("data-i18n");

        if (traducoesLogin[idioma][chave] !== undefined) {
            elemento.textContent = traducoesLogin[idioma][chave];
        }

    });


    const placeholders =
        document.querySelectorAll("[data-i18n-placeholder]");

    placeholders.forEach(function (elemento) {

        const chave =
            elemento.getAttribute("data-i18n-placeholder");

        if (traducoesLogin[idioma][chave] !== undefined) {
            elemento.placeholder =
                traducoesLogin[idioma][chave];
        }

    });

}


function configurarIdiomaLogin() {

    const botoesIdioma =
        document.querySelectorAll("#menu-idioma button");

    botoesIdioma.forEach(function (botao) {

        botao.addEventListener("click", function () {

            setTimeout(function () {

                aplicarTraducoesLogin(
                    obterIdioma()
                );

            }, 0);

        });

    });

}


function mostrarAlerta(mensagem, sucesso) {

    const alerta =
        document.getElementById("login-alerta");

    if (!alerta) {
        return;
    }

    alerta.textContent = mensagem;
    alerta.classList.add("visivel");

    if (sucesso) {
        alerta.classList.add("alerta-sucesso");
    } else {
        alerta.classList.remove("alerta-sucesso");
    }

}


function esconderAlerta() {

    const alerta =
        document.getElementById("login-alerta");

    if (!alerta) {
        return;
    }

    alerta.textContent = "";

    alerta.classList.remove("visivel");
    alerta.classList.remove("alerta-sucesso");

}


function limparErros() {

    const campos =
        document.querySelectorAll(".campo-grupo input");

    campos.forEach(function (campo) {

        campo.classList.remove("campo-invalido");

    });

}


function marcarCampoInvalido(campo) {

    if (campo) {
        campo.classList.add("campo-invalido");
    }

}


function validarFormatoEmail(email) {

    const formatoEmail =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return formatoEmail.test(email);

}


function validarEmailLogin(email) {
    const campo = document.getElementById("login-email");
    if (email.trim() === "") {
        marcarCampoInvalido(campo);
        return obterTexto("erro_email_vazio");
    }

    if (!validarFormatoEmail(email.trim())) {
        marcarCampoInvalido(campo);
        return obterTexto("erro_email_invalido");
    }
    return "";
}


function validarPalavraPasseLogin(palavraPasse) {

    const campo =
        document.getElementById("login-password");

    if (palavraPasse === "") {

        marcarCampoInvalido(campo);

        return obterTexto("erro_password_vazia");
    }

    return "";

}


function configurarMostrarPalavraPasse() {

    const botoes =
        document.querySelectorAll(".botao-mostrar-password");

    botoes.forEach(function (botao) {

        botao.addEventListener("click", function () {

            const idCampo =
                botao.getAttribute("data-target");

            const campo =
                document.getElementById(idCampo);

            if (!campo) {
                return;
            }

            if (campo.type === "password") {

                campo.type = "text";

                botao.textContent = "◉";

                botao.classList.add("password-visivel");

                botao.setAttribute(
                    "aria-label",
                    "Ocultar palavra-passe"
                );

            } else {

                campo.type = "password";

                botao.textContent = "👁";

                botao.classList.remove("password-visivel");

                botao.setAttribute(
                    "aria-label",
                    "Mostrar palavra-passe"
                );

            }

        });

    });

}


/* ==========================================
   LOGIN ATRAVÉS DA API
   ========================================== */

async function iniciarSessao() {

    const email =
        document.getElementById("login-email").value.trim();

    const palavraPasse =
        document.getElementById("login-password").value;

    limparErros();
    esconderAlerta();


    // Validar email

    const erroEmail =
        validarEmailLogin(email);

    if (erroEmail !== "") {

        mostrarAlerta(erroEmail, false);

        document.getElementById("login-email").focus();

        return;
    }


    // Validar palavra-passe

    const erroPalavraPasse =
        validarPalavraPasseLogin(palavraPasse);

    if (erroPalavraPasse !== "") {

        mostrarAlerta(erroPalavraPasse, false);

        document.getElementById("login-password").focus();

        return;
    }


    try {
        const utilizador = await api.login(email, palavraPasse);

        const sessao = {
            id: utilizador.idUtilizador,
            idUtilizador: utilizador.idUtilizador,
            nome: utilizador.nome,
            email: utilizador.email
        };
        localStorage.setItem("sessao", JSON.stringify(sessao));
        
        mostrarAlerta(obterTexto("login_sucesso"), true);
        setTimeout(function () {
            window.location.href = "inicio.html";
        }, 1200);

        const botao = document.getElementById("login-submit");

        if (botao) {
            botao.disabled = true;
        }
    } catch (erro) {
        console.error(erro);
        mostrarAlerta(erro.message || obterTexto("erro_credenciais_invalidas"), false);
        marcarCampoInvalido(document.getElementById("login-email"));
        marcarCampoInvalido(document.getElementById("login-password"));
    }
}


function configurarValidacoes() {

    const email =
        document.getElementById("login-email");

    const palavraPasse =
        document.getElementById("login-password");


    if (email) {

        email.addEventListener("input", function () {

            email.classList.remove("campo-invalido");

        });

    }


    if (palavraPasse) {

        palavraPasse.addEventListener("input", function () {

            palavraPasse.classList.remove("campo-invalido");

        });

    }

}


window.addEventListener("idiomaAlterado", function (evento) { aplicarTraducoesLogin(evento.detail?.idioma || obterIdioma()); });

document.addEventListener(
    "DOMContentLoaded",
    function () {

        aplicarTraducoesLogin(
            obterIdioma()
        );

        configurarIdiomaLogin();

        configurarMostrarPalavraPasse();

        configurarValidacoes();


        const formulario =
            document.getElementById("form-login");


        if (formulario) {

            formulario.addEventListener(
                "submit",
                function (evento) {

                    evento.preventDefault();

                    iniciarSessao();

                }
            );

        }

    }
);