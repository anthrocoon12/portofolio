function hideModals() {
    $("#addModal").hide();
    $("#searchModal").hide();
}

function showAddModal() {
    hideModals();
    $("#addModal").fadeIn();
}

function showSearchModal() {
    hideModals();
    $("#searchModal").fadeIn();
}