var ctx = document.getElementById('horizontalBar');
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['Fiber', 'Kabel', 'Dsl', 'Mobil'],
        datasets: [{
            label: 'Max Download Hastighed (Mbit)',
            data: [120, 190, 30, 50],
            backgroundColor: [
                'rgba(60, 179, 113, 0.4)',
                'rgba(60, 179, 113, 0.4)',
                'rgba(60, 179, 113, 0.4)',
                'rgba(60, 179, 113, 0.4)'
               
            ],
            borderColor: [
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)'
            ],
            borderWidth: 1
        }, {
    
            label: 'Max Upload Hastighed (Mbit)',
            data: [100, 100, 25, 250],
            backgroundColor: [
                'rgba(0, 0, 255, 0.4)',
                'rgba(0, 0, 255, 0.4)',
                'rgba(0, 0, 255, 0.4)',
                'rgba(0, 0, 255, 0.4)'
            ],
             borderColor: [
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)',
                'rgba(189, 180, 180, 0.8)'
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