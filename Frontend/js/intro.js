const traducoesIntro = {
    pt: {
        hero_titulo: "Organize a sua medicação",
        hero_subtitulo: "de forma simples, prática e segura.",
        saber_mais: "Saber mais",
        sobre_higia: "Sobre o Hígia",
        sobre_1: "O Hígia é uma plataforma criada para ajudar na organização e gestão da medicação.",
        sobre_2: "Permite consultar informações importantes e manter os dados da medicação organizados.",
        sobre_3: "O objetivo é tornar a gestão da medicação mais simples, prática e segura.",
        publico_alvo: "Público-alvo:",
        sobre_4: "O sistema destina-se a pessoas que pretendam organizar a sua medicação e aos seus cuidadores.",
        limitacoes: "Limitações: ",
        sobre_5: "O Hígia não substitui o acompanhamento de médicos, farmacêuticos ou outros profissionais de saúde.",

        gestao_medicamentos: "Gestão de Medicamentos",
        descricao_medicamentos: "Mantenha a medicação organizada num só lugar. Associe cada medicamento ao perfil correto, registe a dosagem, a frequência e os horários previstos, acompanhe a quantidade disponível e consulte as observações sempre que precisar. Assim, fica mais fácil perceber que medicamentos pertencem a cada pessoa e acompanhar a rotina, sem substituir as indicações do médico ou farmacêutico.",

        gestao_perfis: "Gestão de Perfis",
        descricao_perfis: "Crie um perfil para cada pessoa cuja medicação pretende acompanhar. Pode guardar o nome, a data de nascimento, uma fotografia e notas importantes, como alergias, problemas de saúde e observações. Depois, associe os medicamentos ao perfil correspondente para manter a informação de cada pessoa separada e organizada, mesmo quando gere a medicação de vários familiares.",

        consulta_registos: "Consulta de Registos",
        descricao_registos: "Consulte num único espaço os perfis, os medicamentos e o histórico das tomas. Utilize os filtros para encontrar rapidamente o tipo de registo pretendido e, quando aplicável, escolha o perfil e o estado, por exemplo, stock baixo, toma pendente, tomada ou atrasada. Os resultados mais recentes aparecem primeiro e a paginação ajuda a percorrer listas maiores sem sobrecarregar a página."

    },

    en: {
        hero_titulo: "Organize your medication",
        hero_subtitulo: "in a simple, practical and safe way.",
        saber_mais: "Learn more",
        sobre_higia: "About Hígia",
        sobre_1: "Hígia is a platform created to help with the organization and management of medication.",
        sobre_2: "It allows users to consult important information and keep medication data organized.",
        sobre_3: "The goal is to make medication management simpler, more practical and safer.",
        publico_alvo: "Target audience:",
        sobre_4: "The system is intended for people who want to organize their medication and their caregivers.",
        limitacoes: "Limitations:",
        sobre_5: "Hígia does not replace the guidance of doctors, pharmacists or other healthcare professionals.",

        gestao_medicamentos: "Medication Management",
        descricao_medicamentos: "Keep medication information in one place. Associate each medicine with the correct profile, record dosage, frequency and scheduled times, monitor available quantity and consult notes whenever needed. This makes it easier to understand which medicines belong to each person, without replacing medical or pharmaceutical advice.",

        gestao_perfis: "Profile Management",
        descricao_perfis: "Create a profile for each person whose medication you want to track. Save their name, date of birth, photo and important notes such as allergies, health problems and observations. Then associate medicines with the right profile to keep everyone’s information organised.",

        consulta_registos: "View Records",
        descricao_registos: "View profiles, medicines and intake history in one place. Use filters to find records by type, profile and status, such as low stock, pending, taken or late. The newest records appear first, and pagination makes longer lists easier to browse."

    },

    es: {
        hero_titulo: "Organice su medicación",
        hero_subtitulo: "de forma sencilla, práctica y segura.",
        saber_mais: "Saber más",
        sobre_higia: "Sobre Hígia",
        sobre_1: "Hígia es una plataforma creada para ayudar en la organización y gestión de la medicación.",
        sobre_2: "Permite consultar información importante y mantener organizados los datos de la medicación.",
        sobre_3: "El objetivo es hacer que la gestión de la medicación sea más sencilla, práctica y segura.",
        publico_alvo: "Público objetivo:",
        sobre_4: "El sistema está destinado a personas que desean organizar su medicación y a sus cuidadores.",
        limitacoes: "Limitaciones:",
        sobre_5: "Hígia no sustituye el seguimiento de médicos, farmacéuticos u otros profesionales de la salud.",

        gestao_medicamentos: "Gestión de Medicamentos",
        descricao_medicamentos: "Mantenga la información de los medicamentos en un solo lugar. Asocie cada medicamento al perfil correcto, indique la dosis, frecuencia y horarios, controle la cantidad disponible y consulte las observaciones cuando lo necesite. El sistema ayuda a organizar la rutina, pero no sustituye las indicaciones de profesionales sanitarios.",

        gestao_perfis: "Gestión de Perfiles",
        descricao_perfis: "Cree un perfil para cada persona cuya medicación quiera controlar. Guarde el nombre, la fecha de nacimiento, una fotografía y notas importantes, como alergias, problemas de salud y observaciones. Después, asocie los medicamentos al perfil correspondiente.",

        consulta_registos: "Consulta de Registros",
        descricao_registos: "Consulte perfiles, medicamentos e historial de tomas en un solo lugar. Utilice filtros por tipo, perfil y estado, como stock bajo, pendiente, tomada o atrasada. Los registros más recientes aparecen primero y la paginación facilita la consulta de listas largas."
    }
};


function aplicarTraducoesIntro(idioma) {
    if (!traducoesIntro[idioma]) {
        idioma = "pt";
    }
    const elementos = document.querySelectorAll("[data-i18n]");
    elementos.forEach(function (elemento) {
        const chave = elemento.getAttribute("data-i18n");
        if (traducoesIntro[idioma][chave] !== undefined) {
            elemento.textContent = traducoesIntro[idioma][chave];
        }
    });
}