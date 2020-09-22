d3.csv('https://raw.githubusercontent.com/kjaer77/Vimento/master/tele2.csv')
    .then(makeChart);


function makeChart(players) {
    var navn = players.map(function (d) { return d.Navn });
    var antalKunder = players.map(function (d) { return d.Kunder });

    var chart = new Chart(ctx, {
        type: 'pie',
        options: {
            title: {
                display: true,
                text: 'Antal kunder fordelt på Teleselskaber'
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
                    fillcolor: ['rgb(255, 99, 132)', 'navy', 'orange'],
                    borderColor: 'rgb(96, 96, 96)',
                    borderWidth: '1',
                    hoverBackgroundColor: 'rgb(255, 228, 138)'

                }
            ]
        }
    });

}