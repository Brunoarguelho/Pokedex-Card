
var pageIndex = 1;
var totalPages = 3;

function changePage(direction) {
  pageIndex += direction;
  if (pageIndex < 1) pageIndex = totalPages;
  if (pageIndex > totalPages) pageIndex = 1;
  for (var i = 1; i <= totalPages; i++) {
    document.getElementById('page' + i).classList.remove('active');
  }
  document.getElementById('page' + pageIndex).classList.add('active');
}