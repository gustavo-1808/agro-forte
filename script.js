document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Funcionalidade para revelar dados de impacto ecológico
    const btnAlerta = document.getElementById("btn-alerta");
    const textoImpacto = document.getElementById("texto-impacto");

    btnAlerta.addEventListener("click", () => {
        // Alterna a visibilidade do texto informativo
        if (textoImpacto.classList.contains("hidden")) {
            textoImpacto.classList.remove("hidden");
            btnAlerta.textContent = "Ocultar Estatística";
        } else {
            textoImpacto.classList.add("hidden");
            btnAlerta.textContent = "Ver Estatística de Impacto";
        }
    });

    // 2. Validação e Feedback do Formulário de Contato
    const form = document.getElementById("form-contato");

    form.addEventListener("submit", (e) => {
        e.preventDefault(); // Impede a página de recarregar

        // Pega os valores preenchidos pelo usuário
        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;

        // Cria uma mensagem de sucesso elegante (simulada)
        alert(`Obrigado pelo contato, ${nome}! 🌱\nNossa equipe sustentável enviará uma resposta para o e-mail: ${email} em breve.`);
        
        // Limpa o formulário
        form.reset();
    });
});
