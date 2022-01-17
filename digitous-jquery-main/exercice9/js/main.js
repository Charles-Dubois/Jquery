function showMytext() {
    $("#text").css("display", 'block');
}


$(() => {

    $(".btn").click(() => {
        showMytext();
    })
})