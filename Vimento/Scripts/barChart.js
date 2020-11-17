//Creates the barchart with labels, colors etc. 
var ctx = document.getElementById('bar');
var myBarChart = new Chart(ctx, {
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

//Insert fiber download speed to chart
function addDataDownFiber(data) {
    myBarChart.data.datasets[0].data[0] = data;
}
//Insert fiber upload speed to chart
function addDataUpFiber(data) {
    myBarChart.data.datasets[1].data[0] = data;
}
//Insert kabel download speed to chart
function addDataDownKabel(data) {
    myBarChart.data.datasets[0].data[1] = data;
}
//Insert kabel upload speed to chart
function addDataUpKabel(data) {
    myBarChart.data.datasets[1].data[1] = data;
}
//Insert dsl download speed to chart
function addDataDownDsl(data) {
    myBarChart.data.datasets[0].data[2] = data;
}
//Insert dsl upload speed to chart
function addDataUpDsl(data) {
    myBarChart.data.datasets[1].data[2] = data;
}
//Insert mobil download speed to chart
function addDataMobil(data) {
    myBarChart.data.datasets[0].data[3] = data;
}