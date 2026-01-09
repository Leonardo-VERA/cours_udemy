function displayInfoPanel() {
  console.log(this);
}

function hideInfoPanel() {
  console.log(this);
}

$(function () {
  $('.menu-item > a').on('mouseover', displayInfoPanel);
  $('.menu-item > a').on('mouseout', hideInfoPanel);
});
