// Mock API for fetching financial data
async function fetchFinancialData() {
    return {
        revenue: 50000,
        expenses: 30000,
        monthlyData: [
            { month: "January", revenue: 10000, expenses: 6000 },
            { month: "February", revenue: 12000, expenses: 8000 },
            { month: "March", revenue: 15000, expenses: 5000 },
            { month: "April", revenue: 13000, expenses: 7000 },
        ],
    };
}

// Populate summary section
function updateSummary(data) {
    const totalRevenue = data.revenue;
    const totalExpenses = data.expenses;
    const profitLoss = totalRevenue - totalExpenses;

    document.getElementById("total-revenue").textContent = `$${totalRevenue}`;
    document.getElementById("total-expenses").textContent = `$${totalExpenses}`;
    document.getElementById("profit-loss").textContent = `$${profitLoss}`;
}

// Render chart using Chart.js
function renderChart(monthlyData) {
    const ctx = document.getElementById("chart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: monthlyData.map((data) => data.month),
            datasets: [
                {
                    label: "Revenue",
                    data: monthlyData.map((data) => data.revenue),
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                },
                {
                    label: "Expenses",
                    data: monthlyData.map((data) => data.expenses),
                    backgroundColor: "rgba(255, 99, 132, 0.6)",
                },
            ],
        },
        options: {
            responsive: true,
            plugins: {
                legend: { position: "top" },
            },
        },
    });
}

// Main function
(async function initializeDashboard() {
    const data = await fetchFinancialData();
    updateSummary(data);
    renderChart(data.monthlyData);
})();
s