"use strict";

var visibility = false;

var toggleShow = function toggleShow() {
  visibility = !visibility;
  renderToggle();
};

var renderToggle = function renderToggle() {
  var templateText = React.createElement(
    "div",
    null,
    React.createElement(
      "h1",
      null,
      "Title"
    ),
    React.createElement(
      "button",
      { onClick: toggleShow },
      visibility ? "Hide details" : "Show details"
    ),
    visibility && React.createElement(
      "div",
      null,
      React.createElement(
        "p",
        null,
        "Every step matter. With the time value. Step by step."
      )
    )
  );
  ReactDOM.render(templateText, document.getElementById("app"));
};

renderToggle();
