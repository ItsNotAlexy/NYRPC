// Show/Hide a div class from name

function showHideDiv(divName) {
    var div = document.getElementById(divName);
    if (div.style.display == 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }
}