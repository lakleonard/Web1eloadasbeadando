const rows = document.querySelectorAll("#dataTable tr");
const ctx = document.getElementById("myChart").getContext("2d");

const colors = [
    'rgba(54, 162, 235, 1)',   // világoskék
    'rgba(75, 192, 192, 1)',   // türkiz
    'rgba(153, 102, 255, 1)',  // lila
    'rgba(0, 128, 255, 1)',    // élénk kék
    'rgba(0, 204, 204, 1)'     // akvamarin
];

let chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ["1", "2", "3", "4", "5"],
        datasets: [{
            label: 'Kiválasztott sor',
            data: [],
            fill: false,
            borderColor: colors[0],
            tension: 0.2
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

rows.forEach((row, index) => {
    row.addEventListener("click", () => {
        const values = Array.from(row.children).map(td => parseFloat(td.textContent));
        chart.data.datasets[0].data = values;
        chart.data.datasets[0].borderColor = colors[index % colors.length];
        chart.update();
    });
});
