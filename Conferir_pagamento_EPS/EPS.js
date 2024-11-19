document.addEventListener("DOMContentLoaded", () => {
    let saldo = 0;
    const historicoPagamentos = [];
    const saldoElement = document.getElementById("saldo");
    const pagamentosLista = document.getElementById("pagamentos-lista");
    const pagamentoForm = document.getElementById("pagamento-form");

    // Função para atualizar a exibição do saldo e histórico
    function atualizarInterface() {
        saldoElement.textContent = saldo.toFixed(2);
        pagamentosLista.innerHTML = ""; // Limpa a lista de pagamentos

        // Exibe cada pagamento no histórico
        historicoPagamentos.forEach(pagamento => {
            const listItem = document.createElement("li");
            listItem.textContent = `R$ ${pagamento.valor.toFixed(2)} - ${pagamento.data}`;
            pagamentosLista.appendChild(listItem);
        });
    }

    // Evento de submissão do formulário de pagamento
    pagamentoForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Pega o valor do pagamento
        const valor = parseFloat(document.getElementById("valor").value);
        if (isNaN(valor) || valor <= 0) {
            alert("Por favor, insira um valor válido.");
            return;
        }

        // Atualiza saldo e histórico de pagamentos
        saldo += valor;
        historicoPagamentos.push({ valor, data: new Date().toLocaleString() });

        // Atualiza a interface com o novo saldo e histórico
        atualizarInterface();

        // Limpa o formulário
        pagamentoForm.reset();
    });

    // Atualiza a interface ao carregar a página
    atualizarInterface();
});
