# My Front-end Development System

This is a repository mirroring what I currently use for front-end development for Backbone.Marionette-based single-page applications or pages requiring complex data manipulation.

## CSS
Currently I'm using Sass as a css preprocessor, dynamically compiling the files with either Grunt (as here) or "normal" Ruby Sass and Compass. Files are divided up into partials that reflect their particular "responsibility". I typically use Yahoo's PureCss framework [http://purecss.io](http://purecss.io), which can be loaded from their CDN if desired. However, Pure is so small that compiling it into a single css file probably doesn't increase the download speed any more than another http request would. In addition, some of Bootstrap's components may be used to supplement Pure when they made things easier. In both cases, only the modules needed for the particular page/site are being used, so the final css is much smaller than it would be if an entire framework were to be used.

## JavaScript
All JavaScript dependencies are loaded with [Requirejs](http://requirejs.org). This includes (in this case, anyway) [Underscore](http://underscorejs.org), [Backbone](http://backbonejs.org), [Marionette](http://marionettejs.com), plus all page components (Underscore templates, Backbone Models and Collections and the various types of Marionette Views). Additionally, some utilities may also be loaded as well as [Backbone Radio](https://github.com/marionettejs/backbone.radio), which is going to be used in a future release of Marionette to replace the Application.vent() functionality.

jQuery is a special case. There are two things to think about: it's a fairly large library and it's often already being used on by the site. Should browser requirements allow it and it's not already available on the page, a customized version of [Zepto](http://zeptojs.com) might be a better choice. It's significantly smaller, though some plugins need to be added to the core for Ajax and some other functionality. The file "zepto-custom-min.js" (in the Marionette branch only) is an example of this. jQuery is then mapped to Zepto using the file "zepto-decide-min.js", which loads jQuery if needed by the browser. If jQuery is needed and "may" be available, jQuery is then mapped to the existing jQuery using the file jquery-existing.js. If it is not available, it will be loaded from a local source. There is also the ability to entirely skip loading jQuery (again) if you know that it will be available on the page. Just choose the correct jQuery "path".

Final file combination and minimization is done here with the grunt-contrib-require module. It may also be done with the normal requirejs build process using r.js after all development is done.

## File Copying
In addition to the creation of the final assets files, there is another Grunt task that may be used to copy the files to another destination. This is helpful if you wish to keep all the development files outside of another project, for instance a cms theme directory or plugin. In that case, index.html should be a static copy of the html of the file that contains the assets, including all of the JavaScript that will be on the page that might be needed for things to work, ie jQuery.

## Directory Structure
All final front-end assets live in the /assets directory which contains the css, js, fonts (if there are downloaded web fonts used), graphics (for non-semantic, "decoration" images) and photos (not used in this case) directories. /src contains all the css and JavaScript components that are used to build these assets.

## Installation Requirements for this Repository
Should you wish, you may clone or download this repository and install it on your desktop computer or server. You will need to have Node.js (with npm) and Grunt-cli installed. Navigate to the "develop" directory and, on the command line, type `npm init`. The defaults are fine. Then type `npm install` to install all grunt , grunt-sass and grunt-contrib-watch.

