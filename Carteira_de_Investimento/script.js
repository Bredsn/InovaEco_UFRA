document.addEventListener('DOMContentLoaded', () => {
    let balance = 0; // Saldo disponível para investir
    const assets = [
        { name: 'Reciclagem Urbana Sustentável', value: 0, totalInvested: 0 },
        { name: 'Educação Ambiental', value: 0, totalInvested: 0 },
        { name: 'Energia Solar Comunitária', value: 0, totalInvested: 0 },
        { name: 'Agricultura Regenerativa', value: 0, totalInvested: 0 },
    ];

    // Função para atualizar o saldo total
    function updateTotalBalance() {
        document.getElementById('balance-amount').innerText = balance.toFixed(2);
    }

    // Função para preencher a lista de ativos
    function populateAssetsList() {
        const assetsList = document.getElementById('assets-list');
        assetsList.innerHTML = '';
        assets.forEach(asset => {
            const li = document.createElement('li');
            li.innerHTML = `${asset.name}: R$ ${asset.value.toFixed(2)} (Investido: R$ ${asset.totalInvested.toFixed(2)})`;
            assetsList.appendChild(li);
        });
    }

    // Função para preencher o select com os ativos
    function populateAssetSelect() {
        const assetSelect = document.getElementById('asset-select');
        assetSelect.innerHTML = '';
        assets.forEach((asset, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.text = asset.name;
            assetSelect.appendChild(option);
        });
    }

    const ctx = document.getElementById('myPieChart').getContext('2d');

    const myPieChart = new Chart(ctx, {
      type: 'pie', // Define o tipo de gráfico como pizza
      data: {
        labels: ['Energia Solar Comunitária', 'Reciclagem Urbana Sustentável', 'Agricultura Regenerativa', 'Educação Ambiental'], // Legendas
        datasets: [{
          label: 'Distribuição de Linguagens',
          data: [30, 25, 30, 15], // Valores para cada segmento
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)', // Cor para HTML
            'rgba(54, 162, 235, 0.6)', // Cor para CSS
            'rgba(255, 206, 86, 0.6)',  // Cor para JavaScript
            'rgba(0, 255, 255)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(0, 255, 255)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top', // Posição da legenda
          },
          tooltip: {
            enabled: true // Ativa o tooltip ao passar o mouse
          }
        }
      }
    });
    

    // Evento para adicionar dinheiro ao saldo
    document.getElementById('add-balance-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const balanceInput = parseFloat(document.getElementById('balance-amount-input').value);

        if (!isNaN(balanceInput) && balanceInput > 0) {
            balance += balanceInput;
            updateTotalBalance();
        }

        document.getElementById('balance-amount-input').value = '';
    });

    // Evento para adicionar investimento
    document.getElementById('add-investment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const assetIndex = parseInt(document.getElementById('asset-select').value);
        const investmentAmount = parseFloat(document.getElementById('investment-amount').value);

        if (!isNaN(investmentAmount) && investmentAmount > 0 && investmentAmount <= balance) {
            assets[assetIndex].value += investmentAmount;
            assets[assetIndex].totalInvested += investmentAmount;
            balance -= investmentAmount;

            updateTotalBalance();
            populateAssetsList();
            renderChart();
        }

        document.getElementById('investment-amount').value = '';
    });

    // Inicializa a carteira
    updateTotalBalance();
    populateAssetsList();
    populateAssetSelect();
    renderChart();
});
