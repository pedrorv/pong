$("h3.one-player").on("click", function() {
  $(this).toggleClass("selected");
  $("h3.two-players").removeClass("selected");
  $("div.controller-options").toggleClass("hidden");
  if (!$("div.two-players-controllers").hasClass("hidden")) {
    $("div.two-players-controllers").addClass("hidden");
  }
  pong.multiPlayer = false;
  pong.singlePlayer = true;
});

$("h3.two-players").on("click", function() {
  $(this).toggleClass("selected");
  if (!$("div.keyboard").hasClass("hidden")) {
    $("h3.keyboard-selector").removeClass("selected");
    $("div.keyboard").addClass("hidden");
    $("div.controller-options").addClass("hidden");
  }
  if (!$("div.mouse").hasClass("hidden")) {
    $("h3.mouse-selector").removeClass("selected");
    $("div.mouse").addClass("hidden");
    $("div.controller-options").addClass("hidden");
  }
  $("h3.one-player").removeClass("selected");
  $("div.two-players-controllers").toggleClass("hidden");
  $("div.start").removeClass("hidden");
  pong.multiPlayer = true;
  pong.singlePlayer = false;
});

$("h3.keyboard-selector").on("click", function() {
  $(this).toggleClass("selected");
  if ($("h3.mouse-selector").hasClass("selected")) {
    $("h3.mouse-selector").removeClass("selected");
  }
  if (!$("div.mouse").hasClass("hidden")) {
    $("div.mouse").addClass("hidden");
  }
  $("div.keyboard").toggleClass("hidden");
  $("div.start").removeClass("hidden");
});

$("h3.mouse-selector").on("click", function() {
  $(this).toggleClass("selected");
  if ($("h3.keyboard-selector").hasClass("selected")) {
    $("h3.keyboard-selector").removeClass("selected");
  }
  if (!$("div.keyboard").hasClass("hidden")) {
    $("div.keyboard").addClass("hidden");
  }
  $("div.mouse").toggleClass("hidden");
  $("div.start").removeClass("hidden");
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
