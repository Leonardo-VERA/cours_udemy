/* we can remove these 2 ones for the toggle version ...
function displayInfoPanel(evt) {
  $(this).siblings('.menu-item-info').addClass('is-visible');
}

function hideInfoPanel(evt) {
  $(this).siblings('.menu-item-info').removeClass('is-visible');
}

*/
function toggleInfoPanel(evt) {
$(this).siblings('.menu-item-info').toggleClass('is-visible');
}

$('.menu-item > a' ).on("mouseover", toggleInfoPanel);
$('.menu-item > a' ).on("mouseout", toggleInfoPanel);
//or:
/*
$('.menu-item > a').mouseover (toggleInfoPanel);
$('.menu-item > a').mouseout(toggleInfoPanel);
*/

//jQuery calls can be chained!
/*
$('.menu-item > a').on("mouseover", toggleInfoPanel)
                  .on("mouseout", toggleInfoPanel);
*/
//you can provide multiple events name in the "on" call!
$('.menu-item > a') .on("mouseover mouseout", toggleInfoPanel);