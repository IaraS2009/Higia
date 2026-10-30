
import * as api from "./api.js";

/* ==========================================
   TRADUÇÕES
========================================== */

const traducoesPerfis = {
    pt: {

        titulo: "Perfis",
        subtitulo: "Gere os perfis e a medicação de cada pessoa.",
        adicionar_perfil: "Adicionar perfil",
        nenhum_perfil: "Ainda não existem perfis.",
        nenhum_perfil_texto: "Cria um perfil para começares a gerir a medicação.",

        criar_perfil: "Criar perfil",
        editar_perfil: "Editar perfil",
        detalhes_perfil: "Detalhes do perfil",

        nome: "Nome *",
        data_nascimento: "Data de nascimento *",
        fotografia: "Fotografia",
        alergias: "Alergias",
        problemas_saude: "Problemas de saúde",
        observacoes: "Observações",

        placeholder_nome: "Ex.: Maria Silva",
        placeholder_alergias: "Indica as alergias...",
        placeholder_problemas: "Indica os problemas de saúde...",
        placeholder_observacoes: "Observações adicionais...",

        guardar: "Guardar",
        cancelar: "Cancelar",
        fechar: "Fechar",
        editar: "Editar",
        eliminar: "Eliminar",
        medicamentos: "Medicamentos",
        ver_perfil: "Ver perfil",

        perfil_criado: "Perfil criado com sucesso.",
        perfil_atualizado: "Perfil atualizado com sucesso.",
        perfil_eliminado: "Perfil eliminado com sucesso.",

        nome_obrigatorio: "Indica o nome do perfil.",
        data_obrigatoria: "A data de nascimento é obrigatória.",
        data_invalida: "A data deve estar entre 01/01/1900 e a data atual.",
        fotografia_invalida: "Seleciona uma imagem válida.",
        fotografia_grande: "A fotografia não pode ultrapassar 3 MB.",

        eliminar_perfil: "Eliminar perfil",
        confirmar_eliminar: "Tem a certeza de que pretende eliminar o perfil",
        erro_carregar: "Não foi possível carregar os perfis.",
        erro_guardar: "Não foi possível guardar o perfil.",
        erro_eliminar: "Não foi possível eliminar o perfil.",
        data_detalhe: "Data de nascimento",
        sem_fotografia: "Sem fotografia",
        sem_dados: "Não indicado",
        erro_sessao: "A sessão terminou. Inicia sessão novamente."
    },

    en: {

        titulo: "Profiles",
        subtitulo: "Manage the profiles and medication of each person.",
        adicionar_perfil: "Add profile",
        nenhum_perfil: "There are no profiles yet.",
        nenhum_perfil_texto: "Create a profile to start managing medication.",

        criar_perfil: "Create profile",
        editar_perfil: "Edit profile",
        detalhes_perfil: "Profile details",

        nome: "Name *",
        data_nascimento: "Date of birth *",
        fotografia: "Photo",
        alergias: "Allergies",
        problemas_saude: "Health problems",
        observacoes: "Notes",

        placeholder_nome: "E.g.: Maria Silva",
        placeholder_alergias: "Enter allergies...",
        placeholder_problemas: "Enter health problems...",
        placeholder_observacoes: "Additional notes...",

        guardar: "Save",
        cancelar: "Cancel",
        fechar: "Close",
        editar: "Edit",
        eliminar: "Delete",
        medicamentos: "Medications",
        ver_perfil: "View profile",

        perfil_criado: "Profile created successfully.",
        perfil_atualizado: "Profile updated successfully.",
        perfil_eliminado: "Profile deleted successfully.",

        nome_obrigatorio: "Enter the profile name.",
        data_obrigatoria: "Date of birth is required.",
        data_invalida: "The date must be between 01/01/1900 and today.",
        fotografia_invalida: "Select a valid image.",
        fotografia_grande: "The photo cannot exceed 3 MB.",

        eliminar_perfil: "Delete profile",
        confirmar_eliminar: "Are you sure you want to delete the profile",
        erro_carregar: "Could not load the profiles.",
        erro_guardar: "Could not save the profile.",
        erro_eliminar: "Could not delete the profile.",
        data_detalhe: "Date of birth",
        sem_fotografia: "No photo",
        sem_dados: "Not provided",
        erro_sessao: "Your session has ended. Please log in again."
    },

    es: {

        titulo: "Perfiles",
        subtitulo: "Gestiona los perfiles y la medicación de cada persona.",
        adicionar_perfil: "Añadir perfil",
        nenhum_perfil: "Todavía no hay perfiles.",
        nenhum_perfil_texto: "Crea un perfil para empezar a gestionar la medicación.",

        criar_perfil: "Crear perfil",
        editar_perfil: "Editar perfil",
        detalhes_perfil: "Detalles del perfil",

        nome: "Nombre *",
        data_nascimento: "Fecha de nacimiento *",
        fotografia: "Fotografía",
        alergias: "Alergias",
        problemas_saude: "Problemas de salud",
        observacoes: "Observaciones",

        placeholder_nome: "Ej.: María Silva",
        placeholder_alergias: "Introduce las alergias...",
        placeholder_problemas: "Introduce los problemas de salud...",
        placeholder_observacoes: "Observaciones adicionales...",

        guardar: "Guardar",
        cancelar: "Cancelar",
        fechar: "Cerrar",
        editar: "Editar",
        eliminar: "Eliminar",
        medicamentos: "Medicamentos",
        ver_perfil: "Ver perfil",

        perfil_criado: "Perfil creado correctamente.",
        perfil_atualizado: "Perfil actualizado correctamente.",
        perfil_eliminado: "Perfil eliminado correctamente.",

        nome_obrigatorio: "Introduce el nombre del perfil.",
        data_obrigatoria: "La fecha de nacimiento es obligatoria.",
        data_invalida: "La fecha debe estar entre el 01/01/1900 y hoy.",
        fotografia_invalida: "Selecciona una imagen válida.",
        fotografia_grande: "La fotografía no puede superar los 3 MB.",

        eliminar_perfil: "Eliminar perfil",
        confirmar_eliminar: "¿Seguro que quieres eliminar el perfil",
        erro_carregar: "No se pudieron cargar los perfiles.",
        erro_guardar: "No se pudo guardar el perfil.",
        erro_eliminar: "No se pudo eliminar el perfil.",
        data_detalhe: "Fecha de nacimiento",
        sem_fotografia: "Sin fotografía",
        sem_dados: "No indicado",
        erro_sessao: "La sesión ha terminado. Inicia sesión de nuevo."
    }
};

/* ==========================================
   VARIÁVEIS
========================================== */

let idPerfilEmEdicao = null;
let idPerfilParaEliminar = null;
let idPerfilParaEditarDepoisDeVer = null;

/* ==========================================
   IDIOMA
========================================== */

function obterIdioma() {
    const idioma = localStorage.getItem("idioma") || "pt";

    return traducoesPerfis[idioma] ? idioma : "pt";
}

function obterTextoPerfis(chave) {
    const idioma = obterIdioma();

    return traducoesPerfis[idioma][chave]
        ?? traducoesPerfis.pt[chave]
        ?? chave;
}

function aplicarTraducoesPerfis() {
    const idioma = obterIdioma();
    const textos = traducoesPerfis[idioma];

    document.querySelectorAll("[data-i18n]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-i18n");

        if (textos[chave] !== undefined) {
            elemento.textContent = textos[chave];
        }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function(elemento) {
        const chave = elemento.getAttribute("data-i18n-placeholder");

        if (textos[chave] !== undefined) {
            elemento.placeholder = textos[chave];
        }
    });
}

/* ==========================================
   SESSÃO
========================================== */

function obterSessao() {
    try {
        return JSON.parse(localStorage.getItem("sessao") || "null");
    } catch (erro) {
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

function terminarSessao(evento) {
    evento.preventDefault();

    localStorage.removeItem("sessao");
    window.location.href = "intro.html";
}

function configurarLogout() {
    document.getElementById("botao-logout")
        ?.addEventListener("click", terminarSessao);
}

/* ==========================================
   MENSAGENS
========================================== */

function escaparHtml(texto) {
    const elemento = document.createElement("div");
    elemento.textContent = texto ?? "";

    return elemento.innerHTML;
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
    if (!elemento) {
        return;
    }

    elemento.textContent = mensagem;
    elemento.classList.add("visivel");
}

function esconderAlerta(elemento) {
    if (!elemento) {
        return;
    }

    elemento.textContent = "";
    elemento.classList.remove("visivel");
}

/* ==========================================
   DATAS
========================================== */

function obterDataAtual() {
    const hoje = new Date();

    const ano = hoje.getFullYear();
    const mes = String(hoje.getMonth() + 1).padStart(2, "0");
    const dia = String(hoje.getDate()).padStart(2, "0");

    return `${ano}-${mes}-${dia}`;
}

function configurarDataNascimento() {
    const campo = document.getElementById("perfil-data-nascimento");

    if (!campo) {
        return;
    }

    campo.min = "1900-01-01";
    campo.max = obterDataAtual();
    campo.required = true;

    document.getElementById("perfil-nome").required = true;
}

function validarDataNascimento(valor) {
    if (!valor || !/^\d{4}-\d{2}-\d{2}$/.test(valor)) {
        return false;
    }

    const [ano, mes, dia] = valor.split("-").map(Number);

    if (ano < 1900) {
        return false;
    }

    const data = new Date(ano, mes - 1, dia);

    // Impede datas impossíveis, como 31 de fevereiro.
    if (
        data.getFullYear() !== ano ||
        data.getMonth() !== mes - 1 ||
        data.getDate() !== dia
    ) {
        return false;
    }

    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    data.setHours(0, 0, 0, 0);

    return data >= new Date(1900, 0, 1) && data <= hoje;
}

function formatarData(valor) {
    if (!valor) {
        return obterTextoPerfis("sem_dados");
    }

    const partes = String(valor).substring(0, 10).split("-");

    if (partes.length !== 3) {
        return obterTextoPerfis("sem_dados");
    }

    return `${partes[2]}/${partes[1]}/${partes[0]}`;
}

/* ==========================================
   FOTOGRAFIA
========================================== */

function lerFotografia() {
    return new Promise(function(resolve, reject) {
        const campoEntrada = document.getElementById("perfil-fotografia");
        const ficheiro = campoEntrada.files?.[0];

        if (!ficheiro) {
            resolve(null);
            return;
        }

        if (!ficheiro.type.startsWith("image/")) {
            reject(new Error(obterTextoPerfis("fotografia_invalida")));
            return;
        }

        if (ficheiro.size > 3 * 1024 * 1024) {
            reject(new Error(obterTextoPerfis("fotografia_grande")));
            return;
        }

        const leitor = new FileReader();

        leitor.onload = function() {
            resolve(leitor.result);
        };

        leitor.onerror = function() {
            reject(new Error(obterTextoPerfis("fotografia_invalida")));
        };

        leitor.readAsDataURL(ficheiro);
    });
}


async function obterPerfisDoUtilizador() {
    const sessao = obterSessao();
    if (!sessao) {
        window.location.replace("intro.html");
        return [];
    }

    const idUtilizador = sessao.idUtilizador || sessao.id;
    if (!idUtilizador) {
        throw new Error(obterTextoPerfis("erro_carregar"));
    }

    const resposta = await api.listarPerfisUtilizador(idUtilizador);
    if (Array.isArray(resposta)) {
        return resposta;
    }

    if (Array.isArray(resposta?.data)) {
        return resposta.data;
    }
    return [];
}

/* ==========================================
   MOSTRAR PERFIS
========================================== */

async function renderizarPerfis() {
    const lista = document.getElementById("lista-perfis");

    if (!lista) {
        return;
    }

    try {
        const perfis = await obterPerfisDoUtilizador();

        lista.innerHTML = "";

        if (perfis.length === 0) {
            lista.innerHTML = `
                <div class="estado-vazio">
                    <div class="estado-vazio-icone">👤</div>
                    <h3>${escaparHtml(obterTextoPerfis("nenhum_perfil"))}</h3>
                    <p>${escaparHtml(obterTextoPerfis("nenhum_perfil_texto"))}</p>
                </div>
            `;

            return;
        }

        perfis.forEach(function(perfil) {
            const card = document.createElement("article");
            card.className = "perfil-card";

            const fotografia = perfil.fotografia
                ? `<img src="${escaparHtml(perfil.fotografia)}" alt="${escaparHtml(perfil.nome)}">`
                : "👤";

            card.innerHTML = `
                <div class="perfil-cabecalho">
                    <div class="perfil-avatar">
                        ${fotografia}
                    </div>

                    <div>
                        <h3>${escaparHtml(perfil.nome)}</h3>
                        <p>${escaparHtml(formatarData(perfil.dataNascimento))}</p>
                    </div>
                </div>

                <div class="perfil-acoes">
                    <button type="button" class="btn btn-secondary" data-acao="editar">
                        ${escaparHtml(obterTextoPerfis("editar"))}
                    </button>

                    <button type="button" class="btn btn-primary" data-acao="medicamentos">
                        ${escaparHtml(obterTextoPerfis("medicamentos"))}
                    </button>

                    <button type="button" class="btn btn-secondary" data-acao="ver">
                        ${escaparHtml(obterTextoPerfis("ver_perfil"))}
                    </button>
                </div>
            `;

            card.querySelector('[data-acao="medicamentos"]')
                .addEventListener("click", function() {
                    window.location.href =
                        "medicamentos.html?perfil=" + encodeURIComponent(perfil.idPerfil);
                });

            card.querySelector('[data-acao="ver"]')
                .addEventListener("click", function() {
                    abrirModalVerPerfil(perfil.idPerfil);
                });

            card.querySelector('[data-acao="editar"]')
                .addEventListener("click", function() {
                    abrirModalEditarPerfil(perfil.idPerfil);
                });


            lista.appendChild(card);
        });
    } catch (erro) {
        console.error(erro);

        mostrarToast(
            erro.message || obterTextoPerfis("erro_carregar"),
            "erro"
        );
    }
}

/* ==========================================
   ABRIR MODAL DE CRIAÇÃO
========================================== */

function abrirModalAdicionarPerfil() {
    idPerfilEmEdicao = null;

    const formulario = document.getElementById("form-perfil");
    formulario.reset();

    document.getElementById("modal-perfil-titulo").textContent =
        obterTextoPerfis("criar_perfil");

    document.getElementById("botao-eliminar-perfil").style.display = "none";
    document.getElementById("botao-guardar-perfil").disabled = false;

    esconderAlerta(document.getElementById("perfil-alerta"));
    configurarDataNascimento();

    abrirModal("modal-perfil");
}

/* ==========================================
   ABRIR MODAL DE EDIÇÃO
========================================== */

async function abrirModalEditarPerfil(idPerfil) {
    try {
        const perfis = await obterPerfisDoUtilizador();

        const perfil = perfis.find(function(perfilEncontrado) {
            return String(perfilEncontrado.idPerfil) === String(idPerfil);
        });

        if (!perfil) {
            mostrarToast(obterTextoPerfis("erro_carregar"), "erro");
            return;
        }

        idPerfilEmEdicao = perfil.idPerfil;

        document.getElementById("form-perfil").reset();

        document.getElementById("perfil-nome").value = perfil.nome || "";

        document.getElementById("perfil-data-nascimento").value =
            perfil.dataNascimento
                ? String(perfil.dataNascimento).substring(0, 10)
                : "";

        document.getElementById("perfil-alergias").value = perfil.alergias || "";
        document.getElementById("perfil-problemas-saude").value =
            perfil.problemasSaude || "";
        document.getElementById("perfil-observacoes").value =
            perfil.observacoes || "";

        document.getElementById("modal-perfil-titulo").textContent =
            obterTextoPerfis("editar_perfil");

        document.getElementById("botao-eliminar-perfil").style.display = "inline-flex";

        esconderAlerta(document.getElementById("perfil-alerta"));
        configurarDataNascimento();

        abrirModal("modal-perfil");
    } catch (erro) {
        console.error(erro);

        mostrarToast(
            erro.message || obterTextoPerfis("erro_carregar"),
            "erro"
        );
    }
}

/* ==========================================
   FECHAR MODAL DE PERFIL
========================================== */

function fecharModalPerfil() {
    fecharModal("modal-perfil");

    document.getElementById("form-perfil").reset();

    esconderAlerta(document.getElementById("perfil-alerta"));

    idPerfilEmEdicao = null;
}


async function submeterFormularioPerfil(evento) {
    evento.preventDefault();

    const nome = document.getElementById("perfil-nome").value.trim();
    const dataNascimento = document.getElementById("perfil-data-nascimento").value;
    const alerta = document.getElementById("perfil-alerta");

    esconderAlerta(alerta);

    if (!nome) {
        mostrarAlerta(alerta, obterTextoPerfis("nome_obrigatorio"));
        document.getElementById("perfil-nome").focus();
        return;
    }

    if (!dataNascimento) {
        mostrarAlerta(alerta, obterTextoPerfis("data_obrigatoria"));
        document.getElementById("perfil-data-nascimento").focus();
        return;
    }

    if (!validarDataNascimento(dataNascimento)) {
        mostrarAlerta(alerta, obterTextoPerfis("data_invalida"));
        document.getElementById("perfil-data-nascimento").focus();
        return;
    }

    const botaoGuardar = document.getElementById("botao-guardar-perfil");
    botaoGuardar.disabled = true;

    try {
        const sessao = obterSessao();

        if (!sessao) {
            window.location.replace("intro.html");
            return;
        }

        const idUtilizador = Number(sessao.idUtilizador || sessao.id);

        if (!idUtilizador) {
            throw new Error(obterTextoPerfis("erro_sessao"));
        }

        let fotografia = await lerFotografia();

        // Se não foi escolhida uma nova imagem durante a edição,
        // mantém a fotografia que já estava guardada.
        if (idPerfilEmEdicao !== null && fotografia === null) {
            const perfis = await obterPerfisDoUtilizador();

            const perfilOriginal = perfis.find(function(perfilEncontrado) {
                return String(perfilEncontrado.idPerfil) === String(idPerfilEmEdicao);
            });

            fotografia = perfilOriginal?.fotografia || null;
        }

        const perfil = {
            nome: nome,
            dataNascimento: dataNascimento,
            fotografia: fotografia,
            alergias: document.getElementById("perfil-alergias").value.trim(),
            problemasSaude: document.getElementById("perfil-problemas-saude").value.trim(),
            observacoes: document.getElementById("perfil-observacoes").value.trim(),
            idUtilizador: idUtilizador
        };

        if (idPerfilEmEdicao === null) {
            await api.criarPerfil(perfil);
            fecharModalPerfil();
            await renderizarPerfis();
            mostrarToast(obterTextoPerfis("perfil_criado"), "sucesso");
        } else {
            perfil.idPerfil = Number(idPerfilEmEdicao);
            await api.editarPerfil(perfil);
            fecharModalPerfil();
            await renderizarPerfis();
            mostrarToast(obterTextoPerfis("perfil_atualizado"), "sucesso");
        }
    } catch (erro) {
        console.error(erro);

        mostrarAlerta(
            alerta,
            erro.message || obterTextoPerfis("erro_guardar")
        );
    } finally {
        botaoGuardar.disabled = false;
    }
}

/* ==========================================
   VER DETALHES DO PERFIL
========================================== */

async function abrirModalVerPerfil(idPerfil) {
    try {
        const perfis = await obterPerfisDoUtilizador();

        const perfil = perfis.find(function(perfilEncontrado) {
            return String(perfilEncontrado.idPerfil) === String(idPerfil);
        });

        if (!perfil) {
            return;
        }

        idPerfilParaEditarDepoisDeVer = perfil.idPerfil;

        const fotografia = perfil.fotografia
            ? `<img src="${escaparHtml(perfil.fotografia)}" alt="${escaparHtml(perfil.nome)}">`
            : `<div class="perfil-avatar">👤</div>`;

        document.getElementById("ver-perfil-corpo").innerHTML = `
            <div class="perfil-detalhes">
                ${fotografia}
                <h3>${escaparHtml(perfil.nome)}</h3>

                <p>
                    <strong>${escaparHtml(obterTextoPerfis("data_detalhe"))}:</strong>
                    ${escaparHtml(formatarData(perfil.dataNascimento))}
                </p>

                <p>
                    <strong>${escaparHtml(obterTextoPerfis("alergias"))}:</strong>
                    ${escaparHtml(perfil.alergias || obterTextoPerfis("sem_dados"))}
                </p>

                <p>
                    <strong>${escaparHtml(obterTextoPerfis("problemas_saude"))}:</strong>
                    ${escaparHtml(perfil.problemasSaude || obterTextoPerfis("sem_dados"))}
                </p>

                <p>
                    <strong>${escaparHtml(obterTextoPerfis("observacoes"))}:</strong>
                    ${escaparHtml(perfil.observacoes || obterTextoPerfis("sem_dados"))}
                </p>
            </div>
        `;

        abrirModal("modal-ver-perfil");
    } catch (erro) {
        console.error(erro);

        mostrarToast(
            erro.message || obterTextoPerfis("erro_carregar"),
            "erro"
        );
    }
}

function editarPerfilDepoisDeVer() {
    if (idPerfilParaEditarDepoisDeVer === null) {
        return;
    }

    const idPerfil = idPerfilParaEditarDepoisDeVer;

    fecharModal("modal-ver-perfil");

    abrirModalEditarPerfil(idPerfil);
}

/* ==========================================
   CONFIRMAR ELIMINAÇÃO
========================================== */

async function abrirConfirmacaoEliminacao(idPerfil) {
    try {
        const perfis = await obterPerfisDoUtilizador();

        const perfil = perfis.find(function(perfilEncontrado) {
            return String(perfilEncontrado.idPerfil) === String(idPerfil);
        });

        if (!perfil) {
            mostrarToast(obterTextoPerfis("erro_carregar"), "erro");
            return;
        }

        idPerfilParaEliminar = perfil.idPerfil;

        document.getElementById("texto-confirmar-eliminacao").textContent =
            obterTextoPerfis("confirmar_eliminar") + " " + perfil.nome + "?";

        abrirModal("modal-confirmar-eliminacao");
    } catch (erro) {
        console.error(erro);

        mostrarToast(
            erro.message || obterTextoPerfis("erro_eliminar"),
            "erro"
        );
    }
}

function cancelarEliminacaoPerfil() {
    fecharModal("modal-confirmar-eliminacao");
    idPerfilParaEliminar = null;
}

async function confirmarEliminacaoPerfil() {
    if (idPerfilParaEliminar === null) {
        return;
    }

    const botao = document.getElementById("botao-confirmar-eliminacao");
    botao.disabled = true;

    try {
        await api.eliminarPerfil(idPerfilParaEliminar);

        fecharModal("modal-confirmar-eliminacao");
        idPerfilParaEliminar = null;

        await renderizarPerfis();

        mostrarToast(obterTextoPerfis("perfil_eliminado"), "sucesso");
    } catch (erro) {
        console.error(erro);

        mostrarToast(
            erro.message || obterTextoPerfis("erro_eliminar"),
            "erro"
        );
    } finally {
        botao.disabled = false;
    }
}

/* ==========================================
   EVENTOS DOS BOTÕES
========================================== */

function configurarPaginaPerfis() {
    document.getElementById("botao-criar-perfil")
        ?.addEventListener("click", abrirModalAdicionarPerfil);

    document.getElementById("form-perfil")
        ?.addEventListener("submit", submeterFormularioPerfil);

    document.getElementById("botao-fechar-perfil")
        ?.addEventListener("click", fecharModalPerfil);

    document.getElementById("botao-cancelar-perfil")
        ?.addEventListener("click", fecharModalPerfil);

    document.getElementById("botao-eliminar-perfil")
        ?.addEventListener("click", function() {
            if (idPerfilEmEdicao !== null) {
                const idPerfil = idPerfilEmEdicao;

                fecharModalPerfil();
                abrirConfirmacaoEliminacao(idPerfil);
            }
        });

    document.getElementById("botao-fechar-ver-perfil")
        ?.addEventListener("click", function() {
            fecharModal("modal-ver-perfil");
        });

    document.getElementById("botao-cancelar-ver-perfil")
        ?.addEventListener("click", function() {
            fecharModal("modal-ver-perfil");
        });

    document.getElementById("botao-ver-editar")
        ?.addEventListener("click", editarPerfilDepoisDeVer);

    document.getElementById("botao-fechar-confirmacao")
        ?.addEventListener("click", cancelarEliminacaoPerfil);

    document.getElementById("botao-cancelar-eliminacao")
        ?.addEventListener("click", cancelarEliminacaoPerfil);

    document.getElementById("botao-confirmar-eliminacao")
        ?.addEventListener("click", confirmarEliminacaoPerfil);

    configurarLogout();
}

/* ==========================================
   INICIALIZAÇÃO
========================================== */

window.addEventListener("idiomaAlterado", function (evento) { aplicarTraducoesPerfis(); });

document.addEventListener("DOMContentLoaded", async function() {
    if (!verificarSessao()) {
        return;
    }

    aplicarTraducoesPerfis();
    configurarDataNascimento();
    configurarPaginaPerfis();

    await renderizarPerfis();
});
