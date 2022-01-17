$(() => {
    const inputValue = $("input").val();


    console.log(inputValue)
    $(".btn").click(function() {
        $.ajax({
            url: "https://restcountries.com/v3.1/name/" + inputValue,
            success: function(inputCountry) {

                $("#country").append(
                    `<p>${inputCountry[0].name.common}</p>`);

                $("#capital").append(
                    `<p>${inputCountry[0].capital[0]}</p>`);

            },
        })
    })
});