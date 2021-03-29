# FasterWeb Drupal 8 module

Turn on web performance. Turn your Drupal site into an SPA (Single Page
Application).

> We believe that **anyone**, **anywhere** with **any device** should be able
> to access the information that they need... **instantly**.

Enable the FasterWeb module and your website users will experience webpages that
open instantly, after the first page load.

## How to use it

- `composer require drupal/fasterweb`
- Enable the FasterWeb module
- Open the website in Incognito mode (as an anonymous user)

Initially as you click links, the page load will be slow, as FasterWeb learns
how you use the website. In less than a minute, you'll notice that links open
instantly. Use the Chrome Inspector console to see which links are prefetched.

## How it works?

On page load:

- We intelligently prefech the pages the user is most likely to click on
- We load these pages using AJAX and store the HTML in memory

When the user clicks on a link, if we have the HTML we apply this HTML (using
a DOM tree diff between the current page HTML and the target page HTML)

It works based because we know that:

- human behaviour on a website is generally predictable
- loading HTML via AJAX is fast
- minimising DOM changes using a diff is fast

## Will it work on my site?

The FasterWeb module will work on standard Drupal pages. The module creates a
JS click event that may conflict with your own page's JS functionality -
especially if they haven't been setup using Drupal.behaviours. The module is
not an all or nothing solution. Using the module's configuration you can
exclude pages that cause conflict. It's better that 90% of pages are
accelerated using the FasterWeb module than none. If there is JS code that
hasn't been included using Drupal.behaviours, they can be added to the
FasterWeb configuration eg. run jQuery("#homeslider").bxSlider()

## FasterWeb service (non-Drupal)

The FasterWeb module connects to an external FasterWeb service. Analytics for
every link clicked are sent to the FasterWeb service. We use this information
to intelligently predict where future users are likely to click. We will NEVER
share or sell this information and we do not fingerprint users. This is the
information that is sent:

- sessionKey (random hash)
- country (for statistics)
- current url
- target url
- time to load HTML
- time to apply target page
- Cache Hit?

## Cost

At some point in the future I would like to charge a monthly fee for the
FasterWeb backend service while keeping it free for personal and Drupal
Community sites. Now there is no cost and it will be free forever for those who
use it now - assuming fair usage.

## Components of the solution

- Drupal module + Javascript configuration
- Javascript Library (fasterweb.js)
- Server side for suggesting pages that need to be prefetched

## Why try FasterWeb?

- You can turn on web performance. Enable the module and
- FasterWeb complements other web performance tools/services - Drupal caching,
  CDNs, image and other front-end optimizations

# fasterwebDrupal8
