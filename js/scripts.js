(function (jQuery, Drupal) {
  /* This code must NOT be in Drupal.behaviours because we call Drupal.attachBehaviors()
    that calls all Drupal.behaviours and we do not want to call recursively the code below.
  */

  var externalScriptObject = new Object({
    Drupal,
    jQuery,
  });

  var getDrupalSettings = function () {
    var settingsElement = document.querySelector(
      'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]'
    );

    window.drupalSettings = {};
    if (settingsElement !== null) {
      window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
  };

  var websiteConfig = {
    debug: true,
    urlInclude: [],
    urlExclude: ["*logout*", "/admin_menu*", "*admin/*"],
    doNotFetch: ["*logout*"],
    elementSelector: null,
    externalScriptObject: externalScriptObject,
    url: {
      "/": {
        pageFunction: function (urlTarget, externalScriptObject) {},
      },
      all: {
        pageFunction: function (urlTarget, externalScriptObject) {
          // demo - example with (non-standard) Superfish menu
          // var jQuery = externalScriptObject.jQuery;
          // jQuery("ul.sf-menu").superfish({
          //   autoArrows: false,
          //   dropShadows: false,
          //   speed: "fast",
          // });

          if (window.ga) {
            window.ga("set", "dimension1", "faster");
            window.ga("send", "pageview", urlTarget);
          }

          var Drupal = externalScriptObject.Drupal;
          getDrupalSettings();
          if (Drupal) {
            // We pass parameters to ensure AJAX functionality works
            Drupal.attachBehaviors(
              jQuery(document.body),
              window.drupalSettings
            );
          }
        },
      },
    },
  };

  window.addEventListener("load", function () {
    window.faster(websiteConfig);
  });
})(jQuery, Drupal);
