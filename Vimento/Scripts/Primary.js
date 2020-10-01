$.ajax({
    url: "/XMLdata/Test.xml",
    dataType: "xml",
    success: function (data) {
        $(data).find("huse hus").each(function () {

            var husid = $(this).find("id").text();
            var farvensNavn = $(this).find("farve navn").text();

            $(".Test ul").append(
                $("<li />", {
                    text: "(" + husid + ")" + farvensNavn
                })
            );
        });
    },
    error: function () {

    }
});

