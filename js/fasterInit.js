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
          type: "Drupal 8",
          debug: settings.fasterweb.debug,
          urlInclude: settings.fasterweb.urls_include,
          urlExclude: settings.fasterweb.urls_exclude,
          urlDoNotFetch: settings.fasterweb.urls_do_not_prefetch,
          externalScriptObject: externalScriptObject,
          url: {
            "/": {
              pageFunction: function (urlTarget, externalScriptObject) {},
            },
            all: {
              pageFunction: function (urlTarget, externalScriptObject) {
                // if (window.ga) window.ga("send", "pageview", urlTarget);
                if (Drupal) Drupal.attachBehaviors();
              },
            },
          },
        };

        window.faster.init(websiteConfig);
      }
    },
  };
})(jQuery, Drupal);
