//Creates the barchart with labels, colors ect.
var ctx = document.getElementById('bar');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Fiber', 'Kabel', 'Dsl', 'Mobil'],
        datasets: [{
            label: 'Max Download Hastighed (Mbit)',
            minBarLength: 10,
            data: [],
            backgroundColor: [
                'rgba(78, 115, 223, 1)',
                'rgba(78, 115, 223, 1)',
                'rgba(78, 115, 223, 1)',
                'rgba(78, 115, 223, 1)'
            ],
            borderColor: [
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)'
            ],
            borderWidth: 1,

        }, {

            label: 'Max Upload Hastighed (Mbit)',
            minBarLength: 10,
            data: [],
            backgroundColor: [
                'rgba(28, 200, 138, 1)',
                'rgba(28, 200, 138, 1)',
                'rgba(28, 200, 138, 1)',
                'rgba(28, 200, 138, 1)'
            ],
            borderColor: [
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)'
            ],
            borderWidth: 1,

        }]
    },
    options: {
        maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

//Inserts fiber download speed to the chart
function addDataDownFiber(data) {
    myChart.data.datasets[0].data[0] = data;
}
//Inserts fiber upload speed to the chart
function addDataUpFiber(data) {
    myChart.data.datasets[1].data[0] = data;
}
//Inserts kabel download speed to the chart
function addDataDownKabel(data) {
    myChart.data.datasets[0].data[1] = data;
}
//Inserts kabel upload speed to the chart
function addDataUpKabel(data) {
    myChart.data.datasets[1].data[1] = data;
}
//Inserts dsl download speed to the chart
function addDataDownDsl(data) {
    myChart.data.datasets[0].data[2] = data;
}
//Inserts dsl upload speed to the chart
function addDataUpDsl(data) {
    myChart.data.datasets[1].data[2] = data;
}
//Inserts mobil download speed to the chart
function addDataMobil(data) {
    myChart.data.datasets[0].data[3] = data;
}