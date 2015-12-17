var randomize = function() {
  $('.radial-progress').attr('data-progress', Math.floor(Math.random() * 100));
}
setTimeout(randomize(), 200);
$(document).on('ready page:load', function() {
  randomize();
});
