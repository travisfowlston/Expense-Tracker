$(document).ready(function() {
    $('.modal').modal();
    $('.parallax').parallax();
});
function toggleModal() {
    var instance = M.Modal.getInstance($('#modal1'));
    instance.open();
}
