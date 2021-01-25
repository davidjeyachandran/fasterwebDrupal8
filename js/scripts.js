(function ($, Drupal) {
  Drupal.behaviors.fasterweb = {
    attach: function (context, settings) {
      // Ensure that we run this code only once
      if (!settings.fasterweb.isRunAlready) {
        settings.fasterweb.isRunAlready = true;

        var externalScriptObject = new Object({
          Drupal,
          jQuery,
        });

        var websiteConfig = {
          debug: settings.fasterweb.debug,
          urlInclude: [],
          urlExclude: ["*logout*", "/admin_menu*", "*admin/*"],
          urlDoNotFetch: ["*logout*", "*/node/*/edit", "*/node/add"],
          elementSelector: null,
          externalScriptObject: externalScriptObject,
          url: {
            "/": {
              pageFunction: function (urlTarget, externalScriptObject) {},
            },
            all: {
              pageFunction: function (urlTarget, externalScriptObject) {
                if (window.ga) {
                  window.ga("set", "dimension1", "faster");
                  window.ga("send", "pageview", urlTarget);
                }

                if (Drupal) Drupal.attachBehaviors();
              },
            },
          },
        };

        window.addEventListener("load", function () {
          window.faster(websiteConfig);
        });
      }
    },
  };
})(jQuery, Drupal);
