$.ajax({
    url: "/XMLdata/Teleselskaber.xml",
    dataType: "xml",
    success: function (data) {
        // LOOPET DER SÆTTER MARKERS PÅ KORTET VED BRUG AF JQUERY
        // Destinations indeholder point, og et point indeholder lat og long
        $(data).find("teleselskaber selskab").each(function () {

            var navn = $(this).find("selskab").attr("navn");
            var kunder = $(this).find("selskab").attr("kunder");
            var hastighed = $(this).find("selskab").attr("hastighed")

            var lbl1 = [];
            var label2 = [];
            var arr = [];

            lbl1.push(navn);
            label2.push(kunder);
            arr.push(hastighed);  
        });
    },
    error: function () {
        alert("Didnt load the data")
    }
});


var ctx = document.getElementById('bar');

var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: lbl1,
        datasets: [{
            label: 'Antal kunder fordelt på Teleselskaber',
            data: label2,
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
            data: arr,
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