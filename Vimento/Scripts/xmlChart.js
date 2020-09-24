var navne = [];
var antalKunder = [];
var hastigheder = [];
var ctx = document.getElementById('xmlChart');

$.ajax({
    url: "/XMLdata/Teleselskaber.xml",
    dataType: "xml",
    success: function (data) {
        $(data).find("teleselskaber selskab").each(function () {

            var navn = $(this).find("selskab navn").text();
            var kunder = $(this).find("selskab kunder").text();
            var hastighed = $(this).find("selskab hastighed").text();

            navne.push(navn);
            antalKunder.push(kunder);
            hastigheder.push(hastighed);
            
            
        });
        //**********************
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: navne,
                datasets: [{
                    label: 'Antal kunder fordelt på Teleselskaber',
                    data: antalKunder,
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
                }, {

                    label: 'Gennemsnitlig hastighed Mbit',
                    data: hastigheder,
                    backgroundColor: [
                        'rgba(255, 255, 132, 0.2)',
                        'rgba(54, 150, 235, 0.2)',
                        'rgba(255, 35, 86, 0.2)',
                        'rgba(75, 100, 192, 0.2)',
                        'rgba(153, 50, 255, 0.2)',
                        'rgba(255, 100, 64, 0.2)'
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
        //************************
    },
    error: function () {
        alert("Fejl!")
    }
    
});




