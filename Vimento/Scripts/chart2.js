d3.csv('https://raw.githubusercontent.com/kjaer77/Vimento/master/atp_wta.csv')
    .then(makeChart);

function makeChart(players) {
    var playerLabels = players.map(function (d) { return d.Name });
    var weeksData = players.map(function (d) { return d.Weeks });

    var chart = new Chart('chart', {
        type: 'horizontalBar',
        data: {
            labels: playerLabels,
            datasets: [
                {
                    data: weeksData
                }
            ]
        }
    });
}