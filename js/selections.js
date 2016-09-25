$("h3.one-player").on("click", function() {
  $("h3").removeClass("selected");

  $(this).toggleClass("selected");
  $("div.controller-options").toggleClass("hidden");

  $("div.two-players-controllers").addClass("hidden");
  $("div.start").addClass("hidden");
  pong.multiPlayer = false;
  pong.singlePlayer = true;
});

$("h3.two-players").on("click", function() {
  $("h3").removeClass("selected");

  $(this).toggleClass("selected");

  $("div.keyboard").addClass("hidden");
  $("div.controller-options").addClass("hidden");
  $("div.mouse").addClass("hidden");

  $("div.two-players-controllers").toggleClass("hidden");
  if ($("div.start").hasClass("hidden")) {
    $("div.start").toggleClass("hidden");
  }
  pong.multiPlayer = true;
  pong.singlePlayer = false;
});

$("h3.keyboard-selector").on("click", function() {
  $("div.controller-options h3").removeClass("selected");
  $("div.keyboard").addClass("hidden");
  $("div.mouse").addClass("hidden");
  $(this).toggleClass("selected");

  $("div.keyboard").toggleClass("hidden");

  if ($("div.start").hasClass("hidden")) {
    $("div.start").toggleClass("hidden");
  }
  pong.keyboardMode = true;
  pong.mouseMode = false;
});

$("h3.mouse-selector").on("click", function() {
  $("div.controller-options h3").removeClass("selected");
  $("div.keyboard").addClass("hidden");
  $("div.mouse").addClass("hidden");
  $(this).toggleClass("selected");

  $("div.mouse").toggleClass("hidden");

  if ($("div.start").hasClass("hidden")) {
    $("div.start").toggleClass("hidden");
  }
  pong.keyboardMode = false;
  pong.mouseMode = true;
});

$("h3.start-game").on("click", function() {
  $("div.mouse").addClass("hidden").removeClass("selected");
  $("div.keyboard").addClass("hidden").removeClass("selected");
  $("div.two-players-controllers").addClass("hidden");
  $("h3.one-player").removeClass("selected");
  $("h3.two-players").removeClass("selected");
  $("div.container").addClass("hidden");
  pong.startCondition = true;
});
