window.onscroll = function () { 
  stickySidebarToogle();
  stickyHeaderToogle();
};

function stickySidebarToogle() {
  var sidebar = document.getElementById("sidebar-column");
  var mainColumn = document.getElementById("main-column");
  var offset = sidebar.offsetTop + 5;
  if (window.pageYOffset >= offset) {
    sidebar.classList.add("sticky-sidebar");
    mainColumn.classList.add("sticky-offset-main-column");
  } else {
    sidebar.classList.remove("sticky-sidebar");
    mainColumn.classList.remove("sticky-offset-main-column");
  }
}

function stickyHeaderToogle() {
  var sidebar = document.getElementById("sidebar-column");
  var header = document.getElementById("main-header");
  var offset = header.offsetTop + 5;
  if (window.pageYOffset >= offset) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
}