$(() => {

    $(".btn").click(function() {
        $.ajax({
            url: "https://restcountries.com/v3.1/name/france",
            success: function(france) {
                console.log(france[0].name.common)
                console.log(france[0].capital[0])

            },
        })
    })
});