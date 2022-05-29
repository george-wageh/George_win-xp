function pop_menu() {

    var dd = $('.start_menu').css('display');
    if (dd == "none")
        document.getElementsByClassName("start_menu")[0].style.display = "block";
    else
        document.getElementsByClassName("start_menu")[0].style.display = "none";

}

function handleKeyPressed(event) {

    event.preventDefault();

    mousePosition = {

        x : event.clientX,
        y : event.clientY

    };

    div.style.left = mousePosition.x;
    div.style.top = mousePosition.y;


}
