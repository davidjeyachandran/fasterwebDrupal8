(function ($, Drupal, drupalSettings) {
  /* This code must NOT be in Drupal.behaviours because we call Drupal.attachBehaviors()
    that calls all Drupal.behaviours and we do not want to call recursively the code below.
  */

  ga = null;

  const externalScriptObject = new Object({
    Drupal,
    jQuery,
    ga,
  });

  const getDrupalSettings = function () {
    var settingsElement = document.querySelector(
      'head > script[type="application/json"][data-drupal-selector="drupal-settings-json"], body > script[type="application/json"][data-drupal-selector="drupal-settings-json"]'
    );

    window.drupalSettings = {};

    if (settingsElement !== null) {
      window.drupalSettings = JSON.parse(settingsElement.textContent);
    }
  };

  const websiteConfig = {
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
          console.log("All url callback: " + window.location.pathname);

          const { Drupal, jQuery, ga } = externalScriptObject;
          if (ga) {
            ga("set", "dimension1", "faster");
            ga("send", "pageview", urlTarget, {
              location: window.location.href,
            });
          }

          getDrupalSettings();
          if (Drupal)
            Drupal.attachBehaviors(
              jQuery(document.body),
              window.drupalSettings
            );
        },
      },
    },
  };

  // @TODO - add config so this can be run only for Anonymous users
  window.addEventListener("load", function () {
    // console.log(websiteConfig);
    window.faster(websiteConfig);
  });
})(jQuery, Drupal, drupalSettings);
