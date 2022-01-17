$(() => {
    const inputValue = $("input").val();


    console.log(inputValue)
    $(".btn").click(function() {
        $.ajax({
            url: "https://restcountries.com/v3.1/name/" + inputValue,
            success: function(inputCountry) {

                $("#country").html(
                    `<p>${inputCountry[0].name.common}</p>`);

                $("#capital").html(
                    `<p>${inputCountry[0].capital[0]}</p>`);

            },
        })
    })
});