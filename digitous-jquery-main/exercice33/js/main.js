$(() => {

    $(".btn").click(function() {
        $.ajax({
            url: "https://restcountries.com/v3.1/name/france",
            success: function(france) {

                $("#country").append(
                    `<p>${france[0].name.common}</p>`);

                $("#capital").append(
                    `<p>${france[0].capital[0]}</p>`);

            },
        })
    })
});