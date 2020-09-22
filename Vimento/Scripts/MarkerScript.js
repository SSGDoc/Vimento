$.ajax({
    url: "/XMLdata/Adresser.xml",
    dataType: "xml",
    success: function (data) {
        $(data).find("destinations point").each(function () {

            var lat = $(this).find("point lat").text();
            var long = $(this).find("point long").text();


        });
    },
    error: function () {

    }
});