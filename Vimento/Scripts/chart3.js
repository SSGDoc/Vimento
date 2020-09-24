d3.csv('https://raw.githubusercontent.com/kjaer77/Vimento/master/tele2.csv')
    .then(makeChart);


function makeChart(teleselskaber) {
    var navn = teleselskaber.map(function (d) { return d.Navn });
    var antalKunder = teleselskaber.map(function (d) { return d.Kunder });

    var chart = new Chart('chart', {
        type: 'bar',
        options: {
            title: {
                display: true,
                text: 'Antal kunder fordelt på Teleselskaber - CSV fil'
            },
            maintainAspectRatio: true,
            legend: {
                display: false
            },

        },
        data: {
            labels: navn,
            datasets: [
                {
                    data: antalKunder,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)'

                    ],
                    borderColor: 'rgb(96, 96, 96)',
                    borderWidth: '1',
                    hoverBackgroundColor: 'rgb(255, 228, 138)'

                }
            ]
        }
    });

}