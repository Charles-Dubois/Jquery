$(() => {

    $(".btn").click(() => {
        $("#square").animate({
            left: "90%",
            bottom: "0"
        }, "slow");
    })
})