var ctx = document.getElementById('polarArea');
var myChart = new Chart(ctx, {
    type: 'polarArea',
    data: {
        labels: ['Yousee', 'Telia', '3', 'CBB', 'Oister', 'Duka'],
        datasets: [{
            label: 'Antal kunder fordelt på Teleselskaber',
            data: [120000, 190000, 30000, 50000, 20000, 30000],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});