function hideAllPortofolioSection() {
    for (var i = 0; i <= 9; i++) {
        $("#ps-" + i).hide();
    }
}

function showPortofolioSection(section) {
    hideAllPortofolioSection();
    $("#ps-" + section).fadeIn();
}
showPortofolioSection(0);