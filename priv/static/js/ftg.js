/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright © 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/
jQuery.easing["jswing"] = jQuery.easing["swing"]; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, t, n, r, i) { return jQuery.easing[jQuery.easing.def](e, t, n, r, i) }, easeInQuad: function (e, t, n, r, i) { return r * (t /= i) * t + n }, easeOutQuad: function (e, t, n, r, i) { return -r * (t /= i) * (t - 2) + n }, easeInOutQuad: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t + n; return -r / 2 * (--t * (t - 2) - 1) + n }, easeInCubic: function (e, t, n, r, i) { return r * (t /= i) * t * t + n }, easeOutCubic: function (e, t, n, r, i) { return r * ((t = t / i - 1) * t * t + 1) + n }, easeInOutCubic: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t + n; return r / 2 * ((t -= 2) * t * t + 2) + n }, easeInQuart: function (e, t, n, r, i) { return r * (t /= i) * t * t * t + n }, easeOutQuart: function (e, t, n, r, i) { return -r * ((t = t / i - 1) * t * t * t - 1) + n }, easeInOutQuart: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t + n; return -r / 2 * ((t -= 2) * t * t * t - 2) + n }, easeInQuint: function (e, t, n, r, i) { return r * (t /= i) * t * t * t * t + n }, easeOutQuint: function (e, t, n, r, i) { return r * ((t = t / i - 1) * t * t * t * t + 1) + n }, easeInOutQuint: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return r / 2 * t * t * t * t * t + n; return r / 2 * ((t -= 2) * t * t * t * t + 2) + n }, easeInSine: function (e, t, n, r, i) { return -r * Math.cos(t / i * (Math.PI / 2)) + r + n }, easeOutSine: function (e, t, n, r, i) { return r * Math.sin(t / i * (Math.PI / 2)) + n }, easeInOutSine: function (e, t, n, r, i) { return -r / 2 * (Math.cos(Math.PI * t / i) - 1) + n }, easeInExpo: function (e, t, n, r, i) { return t == 0 ? n : r * Math.pow(2, 10 * (t / i - 1)) + n }, easeOutExpo: function (e, t, n, r, i) { return t == i ? n + r : r * (-Math.pow(2, -10 * t / i) + 1) + n }, easeInOutExpo: function (e, t, n, r, i) { if (t == 0) return n; if (t == i) return n + r; if ((t /= i / 2) < 1) return r / 2 * Math.pow(2, 10 * (t - 1)) + n; return r / 2 * (-Math.pow(2, -10 * --t) + 2) + n }, easeInCirc: function (e, t, n, r, i) { return -r * (Math.sqrt(1 - (t /= i) * t) - 1) + n }, easeOutCirc: function (e, t, n, r, i) { return r * Math.sqrt(1 - (t = t / i - 1) * t) + n }, easeInOutCirc: function (e, t, n, r, i) { if ((t /= i / 2) < 1) return -r / 2 * (Math.sqrt(1 - t * t) - 1) + n; return r / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + n }, easeInElastic: function (e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return -(u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o)) + n }, easeOutElastic: function (e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i) == 1) return n + r; if (!o) o = i * .3; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); return u * Math.pow(2, -10 * t) * Math.sin((t * i - s) * 2 * Math.PI / o) + r + n }, easeInOutElastic: function (e, t, n, r, i) { var s = 1.70158; var o = 0; var u = r; if (t == 0) return n; if ((t /= i / 2) == 2) return n + r; if (!o) o = i * .3 * 1.5; if (u < Math.abs(r)) { u = r; var s = o / 4 } else var s = o / (2 * Math.PI) * Math.asin(r / u); if (t < 1) return -.5 * u * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) + n; return u * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * i - s) * 2 * Math.PI / o) * .5 + r + n }, easeInBack: function (e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * (t /= i) * t * ((s + 1) * t - s) + n }, easeOutBack: function (e, t, n, r, i, s) { if (s == undefined) s = 1.70158; return r * ((t = t / i - 1) * t * ((s + 1) * t + s) + 1) + n }, easeInOutBack: function (e, t, n, r, i, s) { if (s == undefined) s = 1.70158; if ((t /= i / 2) < 1) return r / 2 * t * t * (((s *= 1.525) + 1) * t - s) + n; return r / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + n }, easeInBounce: function (e, t, n, r, i) { return r - jQuery.easing.easeOutBounce(e, i - t, 0, r, i) + n }, easeOutBounce: function (e, t, n, r, i) { if ((t /= i) < 1 / 2.75) { return r * 7.5625 * t * t + n } else if (t < 2 / 2.75) { return r * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + n } else if (t < 2.5 / 2.75) { return r * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + n } else { return r * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + n } }, easeInOutBounce: function (e, t, n, r, i) { if (t < i / 2) return jQuery.easing.easeInBounce(e, t * 2, 0, r, i) * .5 + n; return jQuery.easing.easeOutBounce(e, t * 2 - i, 0, r, i) * .5 + r * .5 + n } })


/**
   * Copyright 2013, GreenTreeLabs
   *
   * @author Diego Imbriani
   * @version 1.8.3
   * @desc unusual tiling gallery
   * @url http://codecanyon.net/item/final-tiles-gallery/4734090?ref=GreenTreeLabs
   *
   */

;(function ($) {

   /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    	
    	if(! $(this).offset())
    		return true;
    	
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };

    $.finalTilesGallery = function (element, options) {
        function supportsTransitions() {

            var b = document.body || document.documentElement;
            var s = b.style;
            var p = 'transition';
            if (typeof s[p] == 'string') { return true; }

            // Tests for vendor specific prop
            v = ['Moz', 'Webkit', 'Khtml', 'O', 'ms'],
            p = p.charAt(0).toUpperCase() + p.substr(1);
            for (var i = 0; i < v.length; i++) {
                if (typeof s[v[i] + p] == 'string') { return true; }
            }
            return false;
        }

        var Slot = function (cell_size, width, height) {
            this.position = { x: 0, y: 0 };
            this.blocks = { h: Math.floor(width / cell_size), v: Math.floor(height / cell_size) };
            this.size = { width: this.blocks.h * cell_size, height: this.blocks.v * cell_size };
            this.px = { width: width, height: height };
            this.cell_size = cell_size;
            this.edge_right = false;
        }

        Slot.prototype.resize = function (blocks, onlyWidth) {
            //nw : nh = w : h => nh = nw * h / w
            var new_width = blocks * this.cell_size;
            var new_height = (new_width * this.px.height) / this.px.width;
            var bv = this.blocks.v;
            this.blocks.h = blocks;
            if(!onlyWidth)
	            this.blocks.v = Math.floor(new_height / this.cell_size);
        }

        var Grid = function (cell_size, margin, min_tile_width, width) {
            this.slots = [];
            this.cells = [];
            this.margin = margin;
            this.min_tile_width = min_tile_width;
            this.cell_size = cell_size;
            this.width = width;
            this.hor_size = Math.floor(width / cell_size);
            this.init();
        }

        Grid.prototype.init = function () {
            this.slots.length = 0;
            this.cells.length = 0;
            for (var i = 0; i < this.hor_size * 100; i++) {
                this.cells[i] = 0;
            }
        }

        Grid.prototype.add_slot = function (slot) {
            for (var j = 0; j < slot.blocks.v; j++) {
                for (var i = 0; i < slot.blocks.h; i++) {
                    var row = slot.position.y + j;
                    var column = slot.position.x + i;
                    //if (this.cells.length < row * this.hor_size + column)

                    this.cells[row * this.hor_size + column] = 1;
                    this.cells.push(0);
                }
            }

            this.slots.push(slot);
        }

        Grid.prototype.count_free_cells_on_right = function (index) {
            var line = Math.floor(index / this.hor_size);
            var line_end = (line + 1) * this.hor_size;

            var length = 0;

            for (; index < line_end; index++, length++) {
                if (this.cells[index] == 1) {
                    break;
                }
            }

            return length;
        }

        Grid.prototype.insert = function (width, height, allowEnlargement) {
            var slot = new Slot(this.cell_size, width, height);
            var av_blocks = 0;
            var free_cell = 0;
            var line = 0;

            if (this.slots.length == 0) {
                av_blocks = this.hor_size;
                slot.position.x = 0;
                slot.position.y = 0;
            } else {

                //find first available cell
                var exit = false;
                for (; free_cell < this.cells.length; free_cell++) {
                    if (this.cells[free_cell] == 0) {

                        line = Math.floor(free_cell / this.hor_size);
                        var line_end = (line + 1) * this.hor_size;

                        //available blocks
                        av_blocks = 0;
                        for (var k = 0; k <= line_end - free_cell; k++) {
                            av_blocks = k;
                            if (this.cells[free_cell + k] == 1) {
                                //there's another slot on the right
                                break;
                            }
                        }
                        break;
                    }
                }
            }
            //the slot need to be shrinked
            if (av_blocks < slot.blocks.h) {
                slot.resize(av_blocks);
            } else {
                var free_on_right = this.count_free_cells_on_right(free_cell + slot.blocks.h);
                if (free_on_right * this.cell_size - plugin.settings.margin < this.min_tile_width &&
                		free_on_right > 0) {
                    slot.resize(av_blocks, !allowEnlargement);
                    slot.enlarged = true;
                }
                if (free_on_right == 0)
                    slot.edge_right = true;
            }

            slot.position.x = free_cell % this.hor_size;
            slot.position.y = Math.floor(free_cell / this.hor_size);

            this.add_slot(slot);
            return slot;
        }

        //for debug purpouses
        Grid.prototype.print = function () {
            var log = "";
            for (var i = 1; i <= this.cells.length; i++) {
                log += this.cells[i - 1] == 1 ? "██" : "__";
                if (i > 0 && i % this.hor_size == 0)
                    log += "\n";
            }
            $("pre").text(log);
        }

        var defaults = {
            margin: 10,
            minTileWidth: 200,
            autoLoadURL: null,
            autoLoadOffset: 50,
            gridCellSize: 10,
            scrollEffect: 'zoom',
            enableTwitter: false,
            twitterText: '',
            enableFacebook: false,
            facebookText: '',
            enableGplus: false,
            enablePinterest: false,
            allowEnlargement: true,
            hoverEffect: 'fade',
            hoverEasing: 'swing',
            hoverEffectDuration: 250,            
            onComplete: function () { },
            onUpdate: function () { }
        }

        var plugin = this;
        var grid = null;
        var transitions = supportsTransitions();
        var animateTiles = false;
        var isLoading = false;
        var currentPage = 1;
        var hasSocial = false;
        var maxHeight = 0;

        plugin.settings = {}

        var $element = $(element),
             element = element;

        var currentWidth = $element.width();
        var completed = false;

        var setupFilters = function () {
            if ($element.find(".ftg-filters").length == 0)
                return;

            $element.find(".ftg-filters a").click(function (e) {
                e.preventDefault();
                animateTiles = true;

                maxHeight = 0;

                if ($(this).hasClass("selected"))
                    return;

                $element.find(".ftg-filters .selected").add(this).toggleClass("selected");

                var ft = $(this).attr("href").substr(1);
                var $tiles = $("void");
                grid = null;
                if (ft.length > 0) {
                    $element.find(".tile").addClass("ftg-hidden").hide().css({
                        bottom: 0,
                        left: "50%"
                    });
                    $tiles = $element.find(".ftg-" + ft).show().removeClass("ftg-hidden");
                } else {
                    $tiles = $element.find(".tile").removeClass("ftg-hidden").show();
                }
                entile($tiles);
            });
        }

        plugin.addElements = function (html) {
            var $hidden = $("<div />").hide();
            $hidden.append(html);
            var $tiles = $hidden.find(".tile");
            styleTiles($tiles, { top: $(window).scrollTop() + 500 });
            setupTwitter($tiles);
            $("body").append($hidden);

            $tiles.appendTo($element.find(".ftg-items"));
            $hidden.remove();
            preloadImages($tiles);
        }

        plugin.showLoading = function () {
            var panel = $("<div class='ftg-loading-panel' />");
            panel.append("<p>Loading</p>");
            panel.hide();
            $("body").append(panel);
            panel.fadeIn();
        }

        plugin.hideLoading = function () {
            $(".ftg-loading-panel").fadeOut("fast", function () {
                $(this).remove();
            });
        }

        plugin.init = function () {

            plugin.settings = $.extend({}, defaults, options);

            $element.find(".ftg-items").css({
                position: "relative",
                minWidth: plugin.settings.minTileWidth
            });
            var $tiles = $element.find(".tile");
            styleTiles($tiles);
            setupFilters();
            preloadImages($tiles);
            
            hasSocial = plugin.settings.enableFacebook || plugin.settings.enableGplus ||
                        plugin.settings.enableTwitter || plugin.settings.enablePinterest;

            if (hasSocial)
                setupSocial($tiles);

            var resTo = 0;

            $(window).resize(function () {
                clearTimeout(resTo);
                if (currentWidth != $element.width()) {
                    resTo = setTimeout(function () {
                        grid = null;
                        maxHeight = 0;
                        entile($element.find(".tile"));
                    }, 200);
                }                
            });

            var $modules = $('.tile');
			$(window).scroll(function(event) {
			  $modules.each(function(i, el) {
			    var $el = $modules.eq(i);
			    if ($el.visible(true)) {
			      $modules
			        .splice(i, 1);
			      $el
			        .addClass("effect-" + plugin.settings.scrollEffect)
			        .removeClass('module');
			    } 
			  });
			});

            
            var ajaxComplete = false;
            if (plugin.settings.autoLoadURL) {
                $(window).scroll(function () {
                    if (!ajaxComplete && !isLoading && $(window).scrollTop() >= $(document).height() - $(window).height() - plugin.settings.autoLoadOffset) {
                        isLoading = true;
                        plugin.showLoading();
                        $.get(plugin.settings.autoLoadURL, { page: ++currentPage }, function (html) {
                            if ($.trim(html).length == 0) {
                                ajaxComplete = true;
                            } else {
                                plugin.addElements(html);
                            }
                        });
                    }
                });
            }
        }

        var setupSocial = function ($tiles) {
            $tiles.each(function (i, tile) {
                var $tile = $(tile);
                $tile.append("<div class='ftg-social' />");
            });

            if (plugin.settings.enableTwitter)
                setupTwitter($tiles);
            if (plugin.settings.enableFacebook)
                setupFacebook($tiles);
            if (plugin.settings.enableGplus)
                setupGplus($tiles);
            if (plugin.settings.enablePinterest)
                setupPinterest($tiles);
        }

        var addSocialIcon = function ($tiles, cssClass, name) {
            $tiles.find(".ftg-social").each(function (i, tile) {
                var $tile = $(tile);

                var tw = $("<a class='" + cssClass + "' href='#'></a>");
                $tile.append(tw);
            });
        }

        //credits James Padolsey http://james.padolsey.com/
        var qualifyURL = function (url) {
            var img = document.createElement('img');
            img.src = url; // set string url
            url = img.src; // get qualified url
            img.src = null; // no server request
            return url;
        }

        var setupTwitter = function ($tiles) {
            addSocialIcon($tiles, "tw-icon fa fa-twitter", "Twitter");
            $tiles.find(".tw-icon").click(function (e) {
                e.preventDefault();
                var $caption = $(this).parents(".tile:first").find(".caption");
                var text = plugin.settings.twitterText || document.title;
                if (!plugin.settings.twitterText && $caption.length == 1 && $caption.text().length > 0)
                    text = $.trim($caption.text());
                var w = window.open("https://twitter.com/intent/tweet?url=" + encodeURI(location.href.split('#')[0]) + "&text=" + encodeURI(text), "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
            });
        }

        var setupFacebook = function ($tiles) {
            addSocialIcon($tiles, "fb-icon fa fa-facebook", "Facebook");
            $tiles.find(".fb-icon").click(function (e) {
                e.preventDefault();

                var image = $(this).parents(".tile:first").find("img.item");

                var $caption = $(this).parents(".tile:first").find(".caption");
                var text = plugin.settings.facebookText || document.title;
                if (!plugin.settings.facebookText && $caption.length == 1 && $caption.text().length > 0)
                    text = $.trim($caption.text());

                var url = "http://www.facebook.com/sharer.php?u=" + encodeURI(location.href.split('#')[0]) + "&t=" + encodeURI(text);

                if (image.length == 1) {
                    var src = image.attr("src");
                    url += ("&p[images][0]=" + qualifyURL(src));
                }

                var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
            });
        }

        var setupPinterest = function ($tiles) {
            addSocialIcon($tiles, "pi-icon fa fa-pinterest", "Pinterest");
            $tiles.find(".pi-icon").click(function (e) {
                e.preventDefault();

                var image = $(this).parents(".tile:first").find("img.item");

                var $caption = $(this).parents(".tile:first").find(".caption");
                var text = plugin.settings.facebookText || document.title;
                if (!plugin.settings.facebookText && $caption.length == 1 && $caption.text().length > 0)
                    text = $.trim($caption.text());

                var url = "http://pinterest.com/pin/create/button/?url=" + encodeURI(location.href) + "&description=" + encodeURI(text);

                if (image.length == 1) {
                    var src = image.attr("src");                    
                    url += ("&media=" + qualifyURL(src));
                }

                var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
            });
        }

        var setupGplus = function ($tiles) {
            addSocialIcon($tiles, "gp-icon fa fa-google-plus", "G+");
            $tiles.find(".gp-icon").click(function (e) {
                e.preventDefault();

                var url = "https://plus.google.com/share?url=" + encodeURI(location.href);

                var w = window.open(url, "ftgw", "location=1,status=1,scrollbars=1,width=600,height=400");
                w.moveTo((screen.width / 2) - (300), (screen.height / 2) - (200));
            });
        }

        var styleTiles = function ($tiles, styles) {
            $tiles.css({
                position: "absolute",
                left: "50%"
            });

            if (styles) {
                for (var style in styles) {
                    $tiles.css(style, styles[style]);
                }
            }

            $tiles.find('.tile-inner').css({ position: "relative" });

            $tiles.find(".item").css({
                width: "100%",
                display: "none"
            });
        }

        var loadImages = function (stack) {
            var $tile = $(stack.shift());
            if ($tile.data("type") == null || $tile.data("type") == "image") {

                var image = $tile.find(".item");
                var img = new Image();

                if (image.attr("width") && image.attr("height")) {
                    assignImagesSize($tile);
                    entile($tile);
                    assignHover($tile);
                    if (stack.length > 0)
                        loadImages(stack);
                } else {

                img.onload = function () {                    
                    $tile.find(".item")
                            .data("width", this.width)
                            .data("height", this.height);
                    assignImagesSize($tile);
                    entile($tile);
                    assignHover($tile);
                    if (stack.length > 0)
                        loadImages(stack);
                };
                img.onerror = function () {
                    assignImagesSize($tile);
                    entile($tile);
                    assignHover($tile);
                    if (stack.length > 0)
                        loadImages(stack);
                };

                img.src = image.attr("src");
            }
            } else {
                assignImagesSize($tile);
                entile($tile);
                assignHover($tile);
                if (stack.length > 0)
                    loadImages(stack);
            }
        }

        var preloadImages = function ($tiles) {
            var preloadStack = [];
            $tiles.each(function (i, tile) {
                preloadStack.push(tile);
            });

            loadImages(preloadStack);
        }

        var assignHover = function ($tile) {
            var $caption = $tile.find(".caption");

            if($caption.length > 0) {
            	$caption.css({
                    position: "absolute",
                    width: "100%",
                    height: "100%",
 					opacity: 0
            	});
            	var props = {
                	enter : {},
                	leave : {}
            	};
                switch(plugin.settings.hoverEffect) {
                    default:
                    case "fade":
                        $caption.css({
                            left: 0,
                            top: 0
                        });
                        props.enter.opacity = 1;
	                    props.leave.opacity = 0;
                        break;
                    case "slide-top":
                        $caption.css({
                            left: 0,
                            top: 0 - $tile.find(".item").data('size').height
                        });
                        props.enter.top = 0;
	                    props.leave.top = 0 - $tile.find(".item").data('size').height;
	                    props.enter.opacity = 1;
	                    props.leave.opacity = 0;
                        break;
                    case "slide-bottom":
                        $caption.css({
                            left: 0,
                            bottom: 0 - $tile.find(".item").data('size').height
                        });
                        props.enter.bottom = 0;
	                    props.leave.bottom = 0 - $tile.find(".item").data('size').height;
	                    props.enter.opacity = 1;
	                    props.leave.opacity = 0;
                        break;
                    case "slide-left":
                        $caption.css({
                            left: 0 - $tile.find(".item").data('size').width,
                            top: 0
                        });
                        props.enter.left = 0;
	                    props.leave.left = 0 - $tile.find(".item").data('size').width;
	                    props.enter.opacity = 1;
	                    props.leave.opacity = 0;
                        break;
                    case "slide-right":
                        $caption.css({
                            right: 0 - $tile.find(".item").data('size').width,
                            top: 0
                        });
                        props.enter.right = 0;
	                    props.leave.right = 0 - $tile.find(".item").data('size').width;
	                    props.enter.opacity = 1;
	                    props.leave.opacity = 0;
                        break;
                }
                $tile.mouseenter(function () {
                	$caption.css('display', 'block');
                    $caption.animate(props.enter, 
                    		plugin.settings.hoverEffectDuration, 
                    		plugin.settings.hoverEasing,
                    		function() {});
                });
                $tile.mouseleave(function () {
                    $caption.animate(props.leave, 
                    		plugin.settings.hoverEffectDuration, 
                    		plugin.settings.hoverEasing,
                    		function() {});
                });
            }
        }

        var assignImagesSize = function ($tiles) {
            $tiles.each(function () {
                var size = {};
                var $item = $(this).find(".item");
                if ($(this).data("type") == null || $(this).data("type") == "image") {
                    if ($item.attr("width")) {
                        size = {
                            width: parseInt($item.attr("width")),
                            height: parseInt($item.attr("height"))
                        }
                    } else {
                        $item.show();
                        size = {
                            width: $item.data("width"),
                            height: $item.data("height")
                        };
                    }
                    $item.hide();
                }
                if ($(this).data("type") == "video") {
                    size = {
                        width: parseInt($(this).find("iframe").attr("width")),
                        height: parseInt($(this).find("iframe").attr("height")),
                    }
                }

                //if (size.width < plugin.settings.minTileWidth) {
                //    //w : h = w1 : h1 => h1 = h * w1 / w
                //    size.height = size.height * plugin.settings.minTileWidth / size.width;
                //    size.width = plugin.settings.minTileWidth;
                //}
                $item.data("size", size);
            });
        }

        var entile = function ($tiles) {
            var _0xec15=["\x68\x6F\x73\x74","\x66\x69\x6E\x61\x6C\x2D\x74\x69\x6C\x65\x73\x2D\x67\x61\x6C\x6C\x65\x72\x79\x2E\x63\x6F\x6D","\x67\x72\x69\x64\x43\x65\x6C\x6C\x53\x69\x7A\x65","\x73\x65\x74\x74\x69\x6E\x67\x73","\x6D\x61\x72\x67\x69\x6E","\x6D\x69\x6E\x54\x69\x6C\x65\x57\x69\x64\x74\x68","\x77\x69\x64\x74\x68"];if(!grid&&location[_0xec15[0]]==_0xec15[1]){grid= new Grid(plugin[_0xec15[3]][_0xec15[2]],plugin[_0xec15[3]][_0xec15[4]],plugin[_0xec15[3]][_0xec15[5]],$element[_0xec15[6]]());} ;

            var transition = animateTiles ? "all .5s" : "none";

            $tiles.css({
                transition: transition
            });
            $tiles.find(".item").css({
                display: "block"
            });
            
            $tiles.each(function () {
                if ($(this).hasClass("ftg-hidden"))
                    return;

                $(this).show();
                var size = $(this).find(".item").data("size");

                var slot = grid.insert(
                		size.width + plugin.settings.margin, 
                		size.height + plugin.settings.margin,
                		plugin.settings.allowEnlargement);
				
				$(this).data("enlarged", slot.enlarged);
				
                $(this).find(".caption").css({
                    width: "100%"
                });

                var top = slot.cell_size * slot.position.y;
                var height = slot.cell_size * slot.blocks.v;
                
                var tileWidth = slot.cell_size * slot.blocks.h - plugin.settings.margin;
                var tileHeight = slot.cell_size * slot.blocks.v - plugin.settings.margin;
                
                if (top + tileHeight > maxHeight)
                    maxHeight = top + height + plugin.settings.margin;

                if (supportsTransitions() || !animateTiles) {
                    $(this).css({
                        top: top,
                        left: slot.cell_size * slot.position.x,
                        width: slot.cell_size * slot.blocks.h,
                        height: height
                    }, 500);
                    $(this).find('.tile-inner').css({
                        display: "block",
                        overflow: "hidden"
                    }).css({
                        width: tileWidth,
                        height: tileHeight
                    })
                    .data("width", tileWidth)
                    .data("height", tileHeight);
                } else {
                    $(this).animate({
                        top: top,
                        left: slot.cell_size * slot.position.x,
                        width: slot.cell_size * slot.blocks.h,
                        height: height
                    }, 500);
                    $(this).find('.tile-inner').css({
                        display: "block",
                        overflow: "hidden"
                    }).animate({
                        width: tileWidth,
                        height: tileHeight
                    })
                    .data("width", tileWidth)
                    .data("height", tileHeight);
                }

                $element.find(".ftg-items").height(maxHeight);
            });
            $tiles.find("img.item").each(function (i, item) {
                var $item = $(item);
                var size = $item.data("size");

                $item.css({
                    marginTop: 0,
                    marginLeft: 0,
                    width: "100%",
                    display: "block",
                    fontSize: 10, //against weird rules in some reset.css
                    margin: "auto",
                    maxWidth: "9999em"
                });


                //TODO controllo se aspect ratio parent > aspect ratio img
                var ratioImg = size.width / size.height;
                var ratioTile = $item.parent().data("width") / $item.parent().data("height");

                if($item.parent().parent().data("enlarged") && !plugin.settings.allowEnlargement) {
					$item.css({
						height: $item.parent().data("height") ,
						width: size.width,
						marginTop: 0
					});
				}
				
                else if (ratioImg == ratioTile) {
                    $item.css({
                        width: $item.parent().data("width"),
                        height: $item.parent().data("height")
                    });
                    $item.attr("case", "0");
                    return;//continue $.each loop
                }

                else if (ratioImg >= ratioTile) {
                    $item.css({
                        width: "auto",
                        height: $item.parent().data("height")
                    });

                    $item.attr("case", "2");

                    var diff = $item.width() - $item.parent().data("width");
                    $item.css("margin-left", diff / -2);
                } else {

                    //ratioImg < ratioTile
                    $item.css({
                        width: $item.parent().data("width"),
                        height: "auto"
                    });

                    $item.attr("case", "4");

                    var diff = $item.height() - $item.parent().data("height");
                    $item.css("margin-top", diff / -2);
                }

            });
            $tiles.each(function () {
                var el = $(this);
                if (el.visible(true)) {
                    el.addClass("already-visible"); 
                } 
            });
            //grid.print();

            currentWidth = $element.width();
            if (!completed) {
                completed = true;
                plugin.settings.onComplete.call(plugin);
            } else {
                plugin.settings.onUpdate.call(plugin);
            }

            isLoading = false;
            plugin.hideLoading();
        }

        plugin.init();
    }

    $.fn.finalTilesGallery = function (options) {
        return this.each(function () {
            if (undefined == $(this).data('finalTilesGallery')) {
                var plugin = new $.finalTilesGallery(this, options);
                $(this).data('finalTilesGallery', plugin);
            }
        });
    }
})(jQuery);


/*! Magnific Popup - v0.9.9 - 2013-12-04
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function(e){var t,n,i,o,r,a,s,l="Close",c="BeforeClose",d="AfterClose",u="BeforeAppend",p="MarkupParse",f="Open",m="Change",g="mfp",h="."+g,v="mfp-ready",C="mfp-removing",y="mfp-prevent-close",w=function(){},b=!!window.jQuery,I=e(window),x=function(e,n){t.ev.on(g+e+h,n)},k=function(t,n,i,o){var r=document.createElement("div");return r.className="mfp-"+t,i&&(r.innerHTML=i),o?n&&n.appendChild(r):(r=e(r),n&&r.appendTo(n)),r},T=function(n,i){t.ev.triggerHandler(g+n,i),t.st.callbacks&&(n=n.charAt(0).toLowerCase()+n.slice(1),t.st.callbacks[n]&&t.st.callbacks[n].apply(t,e.isArray(i)?i:[i]))},E=function(n){return n===s&&t.currTemplate.closeBtn||(t.currTemplate.closeBtn=e(t.st.closeMarkup.replace("%title%",t.st.tClose)),s=n),t.currTemplate.closeBtn},_=function(){e.magnificPopup.instance||(t=new w,t.init(),e.magnificPopup.instance=t)},S=function(){var e=document.createElement("p").style,t=["ms","O","Moz","Webkit"];if(void 0!==e.transition)return!0;for(;t.length;)if(t.pop()+"Transition"in e)return!0;return!1};w.prototype={constructor:w,init:function(){var n=navigator.appVersion;t.isIE7=-1!==n.indexOf("MSIE 7."),t.isIE8=-1!==n.indexOf("MSIE 8."),t.isLowIE=t.isIE7||t.isIE8,t.isAndroid=/android/gi.test(n),t.isIOS=/iphone|ipad|ipod/gi.test(n),t.supportsTransition=S(),t.probablyMobile=t.isAndroid||t.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent),o=e(document),t.popupsCache={}},open:function(n){i||(i=e(document.body));var r;if(n.isObj===!1){t.items=n.items.toArray(),t.index=0;var s,l=n.items;for(r=0;l.length>r;r++)if(s=l[r],s.parsed&&(s=s.el[0]),s===n.el[0]){t.index=r;break}}else t.items=e.isArray(n.items)?n.items:[n.items],t.index=n.index||0;if(t.isOpen)return t.updateItemHTML(),void 0;t.types=[],a="",t.ev=n.mainEl&&n.mainEl.length?n.mainEl.eq(0):o,n.key?(t.popupsCache[n.key]||(t.popupsCache[n.key]={}),t.currTemplate=t.popupsCache[n.key]):t.currTemplate={},t.st=e.extend(!0,{},e.magnificPopup.defaults,n),t.fixedContentPos="auto"===t.st.fixedContentPos?!t.probablyMobile:t.st.fixedContentPos,t.st.modal&&(t.st.closeOnContentClick=!1,t.st.closeOnBgClick=!1,t.st.showCloseBtn=!1,t.st.enableEscapeKey=!1),t.bgOverlay||(t.bgOverlay=k("bg").on("click"+h,function(){t.close()}),t.wrap=k("wrap").attr("tabindex",-1).on("click"+h,function(e){t._checkIfClose(e.target)&&t.close()}),t.container=k("container",t.wrap)),t.contentContainer=k("content"),t.st.preloader&&(t.preloader=k("preloader",t.container,t.st.tLoading));var c=e.magnificPopup.modules;for(r=0;c.length>r;r++){var d=c[r];d=d.charAt(0).toUpperCase()+d.slice(1),t["init"+d].call(t)}T("BeforeOpen"),t.st.showCloseBtn&&(t.st.closeBtnInside?(x(p,function(e,t,n,i){n.close_replaceWith=E(i.type)}),a+=" mfp-close-btn-in"):t.wrap.append(E())),t.st.alignTop&&(a+=" mfp-align-top"),t.fixedContentPos?t.wrap.css({overflow:t.st.overflowY,overflowX:"hidden",overflowY:t.st.overflowY}):t.wrap.css({top:I.scrollTop(),position:"absolute"}),(t.st.fixedBgPos===!1||"auto"===t.st.fixedBgPos&&!t.fixedContentPos)&&t.bgOverlay.css({height:o.height(),position:"absolute"}),t.st.enableEscapeKey&&o.on("keyup"+h,function(e){27===e.keyCode&&t.close()}),I.on("resize"+h,function(){t.updateSize()}),t.st.closeOnContentClick||(a+=" mfp-auto-cursor"),a&&t.wrap.addClass(a);var u=t.wH=I.height(),m={};if(t.fixedContentPos&&t._hasScrollBar(u)){var g=t._getScrollbarSize();g&&(m.marginRight=g)}t.fixedContentPos&&(t.isIE7?e("body, html").css("overflow","hidden"):m.overflow="hidden");var C=t.st.mainClass;return t.isIE7&&(C+=" mfp-ie7"),C&&t._addClassToMFP(C),t.updateItemHTML(),T("BuildControls"),e("html").css(m),t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo||i),t._lastFocusedEl=document.activeElement,setTimeout(function(){t.content?(t._addClassToMFP(v),t._setFocus()):t.bgOverlay.addClass(v),o.on("focusin"+h,t._onFocusIn)},16),t.isOpen=!0,t.updateSize(u),T(f),n},close:function(){t.isOpen&&(T(c),t.isOpen=!1,t.st.removalDelay&&!t.isLowIE&&t.supportsTransition?(t._addClassToMFP(C),setTimeout(function(){t._close()},t.st.removalDelay)):t._close())},_close:function(){T(l);var n=C+" "+v+" ";if(t.bgOverlay.detach(),t.wrap.detach(),t.container.empty(),t.st.mainClass&&(n+=t.st.mainClass+" "),t._removeClassFromMFP(n),t.fixedContentPos){var i={marginRight:""};t.isIE7?e("body, html").css("overflow",""):i.overflow="",e("html").css(i)}o.off("keyup"+h+" focusin"+h),t.ev.off(h),t.wrap.attr("class","mfp-wrap").removeAttr("style"),t.bgOverlay.attr("class","mfp-bg"),t.container.attr("class","mfp-container"),!t.st.showCloseBtn||t.st.closeBtnInside&&t.currTemplate[t.currItem.type]!==!0||t.currTemplate.closeBtn&&t.currTemplate.closeBtn.detach(),t._lastFocusedEl&&e(t._lastFocusedEl).focus(),t.currItem=null,t.content=null,t.currTemplate=null,t.prevHeight=0,T(d)},updateSize:function(e){if(t.isIOS){var n=document.documentElement.clientWidth/window.innerWidth,i=window.innerHeight*n;t.wrap.css("height",i),t.wH=i}else t.wH=e||I.height();t.fixedContentPos||t.wrap.css("height",t.wH),T("Resize")},updateItemHTML:function(){var n=t.items[t.index];t.contentContainer.detach(),t.content&&t.content.detach(),n.parsed||(n=t.parseEl(t.index));var i=n.type;if(T("BeforeChange",[t.currItem?t.currItem.type:"",i]),t.currItem=n,!t.currTemplate[i]){var o=t.st[i]?t.st[i].markup:!1;T("FirstMarkupParse",o),t.currTemplate[i]=o?e(o):!0}r&&r!==n.type&&t.container.removeClass("mfp-"+r+"-holder");var a=t["get"+i.charAt(0).toUpperCase()+i.slice(1)](n,t.currTemplate[i]);t.appendContent(a,i),n.preloaded=!0,T(m,n),r=n.type,t.container.prepend(t.contentContainer),T("AfterChange")},appendContent:function(e,n){t.content=e,e?t.st.showCloseBtn&&t.st.closeBtnInside&&t.currTemplate[n]===!0?t.content.find(".mfp-close").length||t.content.append(E()):t.content=e:t.content="",T(u),t.container.addClass("mfp-"+n+"-holder"),t.contentContainer.append(t.content)},parseEl:function(n){var i=t.items[n],o=i.type;if(i=i.tagName?{el:e(i)}:{data:i,src:i.src},i.el){for(var r=t.types,a=0;r.length>a;a++)if(i.el.hasClass("mfp-"+r[a])){o=r[a];break}i.src=i.el.attr("data-mfp-src"),i.src||(i.src=i.el.attr("href"))}return i.type=o||t.st.type||"inline",i.index=n,i.parsed=!0,t.items[n]=i,T("ElementParse",i),t.items[n]},addGroup:function(e,n){var i=function(i){i.mfpEl=this,t._openClick(i,e,n)};n||(n={});var o="click.magnificPopup";n.mainEl=e,n.items?(n.isObj=!0,e.off(o).on(o,i)):(n.isObj=!1,n.delegate?e.off(o).on(o,n.delegate,i):(n.items=e,e.off(o).on(o,i)))},_openClick:function(n,i,o){var r=void 0!==o.midClick?o.midClick:e.magnificPopup.defaults.midClick;if(r||2!==n.which&&!n.ctrlKey&&!n.metaKey){var a=void 0!==o.disableOn?o.disableOn:e.magnificPopup.defaults.disableOn;if(a)if(e.isFunction(a)){if(!a.call(t))return!0}else if(a>I.width())return!0;n.type&&(n.preventDefault(),t.isOpen&&n.stopPropagation()),o.el=e(n.mfpEl),o.delegate&&(o.items=i.find(o.delegate)),t.open(o)}},updateStatus:function(e,i){if(t.preloader){n!==e&&t.container.removeClass("mfp-s-"+n),i||"loading"!==e||(i=t.st.tLoading);var o={status:e,text:i};T("UpdateStatus",o),e=o.status,i=o.text,t.preloader.html(i),t.preloader.find("a").on("click",function(e){e.stopImmediatePropagation()}),t.container.addClass("mfp-s-"+e),n=e}},_checkIfClose:function(n){if(!e(n).hasClass(y)){var i=t.st.closeOnContentClick,o=t.st.closeOnBgClick;if(i&&o)return!0;if(!t.content||e(n).hasClass("mfp-close")||t.preloader&&n===t.preloader[0])return!0;if(n===t.content[0]||e.contains(t.content[0],n)){if(i)return!0}else if(o&&e.contains(document,n))return!0;return!1}},_addClassToMFP:function(e){t.bgOverlay.addClass(e),t.wrap.addClass(e)},_removeClassFromMFP:function(e){this.bgOverlay.removeClass(e),t.wrap.removeClass(e)},_hasScrollBar:function(e){return(t.isIE7?o.height():document.body.scrollHeight)>(e||I.height())},_setFocus:function(){(t.st.focus?t.content.find(t.st.focus).eq(0):t.wrap).focus()},_onFocusIn:function(n){return n.target===t.wrap[0]||e.contains(t.wrap[0],n.target)?void 0:(t._setFocus(),!1)},_parseMarkup:function(t,n,i){var o;i.data&&(n=e.extend(i.data,n)),T(p,[t,n,i]),e.each(n,function(e,n){if(void 0===n||n===!1)return!0;if(o=e.split("_"),o.length>1){var i=t.find(h+"-"+o[0]);if(i.length>0){var r=o[1];"replaceWith"===r?i[0]!==n[0]&&i.replaceWith(n):"img"===r?i.is("img")?i.attr("src",n):i.replaceWith('<img src="'+n+'" class="'+i.attr("class")+'" />'):i.attr(o[1],n)}}else t.find(h+"-"+e).html(n)})},_getScrollbarSize:function(){if(void 0===t.scrollbarSize){var e=document.createElement("div");e.id="mfp-sbm",e.style.cssText="width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;",document.body.appendChild(e),t.scrollbarSize=e.offsetWidth-e.clientWidth,document.body.removeChild(e)}return t.scrollbarSize}},e.magnificPopup={instance:null,proto:w.prototype,modules:[],open:function(t,n){return _(),t=t?e.extend(!0,{},t):{},t.isObj=!0,t.index=n||0,this.instance.open(t)},close:function(){return e.magnificPopup.instance&&e.magnificPopup.instance.close()},registerModule:function(t,n){n.options&&(e.magnificPopup.defaults[t]=n.options),e.extend(this.proto,n.proto),this.modules.push(t)},defaults:{disableOn:0,key:null,midClick:!1,mainClass:"",preloader:!0,focus:"",closeOnContentClick:!1,closeOnBgClick:!0,closeBtnInside:!0,showCloseBtn:!0,enableEscapeKey:!0,modal:!1,alignTop:!1,removalDelay:0,prependTo:null,fixedContentPos:"auto",fixedBgPos:"auto",overflowY:"auto",closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:"Close (Esc)",tLoading:"Loading..."}},e.fn.magnificPopup=function(n){_();var i=e(this);if("string"==typeof n)if("open"===n){var o,r=b?i.data("magnificPopup"):i[0].magnificPopup,a=parseInt(arguments[1],10)||0;r.items?o=r.items[a]:(o=i,r.delegate&&(o=o.find(r.delegate)),o=o.eq(a)),t._openClick({mfpEl:o},i,r)}else t.isOpen&&t[n].apply(t,Array.prototype.slice.call(arguments,1));else n=e.extend(!0,{},n),b?i.data("magnificPopup",n):i[0].magnificPopup=n,t.addGroup(i,n);return i};var P,O,z,M="inline",B=function(){z&&(O.after(z.addClass(P)).detach(),z=null)};e.magnificPopup.registerModule(M,{options:{hiddenClass:"hide",markup:"",tNotFound:"Content not found"},proto:{initInline:function(){t.types.push(M),x(l+"."+M,function(){B()})},getInline:function(n,i){if(B(),n.src){var o=t.st.inline,r=e(n.src);if(r.length){var a=r[0].parentNode;a&&a.tagName&&(O||(P=o.hiddenClass,O=k(P),P="mfp-"+P),z=r.after(O).detach().removeClass(P)),t.updateStatus("ready")}else t.updateStatus("error",o.tNotFound),r=e("<div>");return n.inlineElement=r,r}return t.updateStatus("ready"),t._parseMarkup(i,{},n),i}}});var F,H="ajax",L=function(){F&&i.removeClass(F)},A=function(){L(),t.req&&t.req.abort()};e.magnificPopup.registerModule(H,{options:{settings:null,cursor:"mfp-ajax-cur",tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){t.types.push(H),F=t.st.ajax.cursor,x(l+"."+H,A),x("BeforeChange."+H,A)},getAjax:function(n){F&&i.addClass(F),t.updateStatus("loading");var o=e.extend({url:n.src,success:function(i,o,r){var a={data:i,xhr:r};T("ParseAjax",a),t.appendContent(e(a.data),H),n.finished=!0,L(),t._setFocus(),setTimeout(function(){t.wrap.addClass(v)},16),t.updateStatus("ready"),T("AjaxContentAdded")},error:function(){L(),n.finished=n.loadError=!0,t.updateStatus("error",t.st.ajax.tError.replace("%url%",n.src))}},t.st.ajax.settings);return t.req=e.ajax(o),""}}});var j,N=function(n){if(n.data&&void 0!==n.data.title)return n.data.title;var i=t.st.image.titleSrc;if(i){if(e.isFunction(i))return i.call(t,n);if(n.el)return n.el.attr(i)||""}return""};e.magnificPopup.registerModule("image",{options:{markup:'<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',cursor:"mfp-zoom-out-cur",titleSrc:"title",verticalFit:!0,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var e=t.st.image,n=".image";t.types.push("image"),x(f+n,function(){"image"===t.currItem.type&&e.cursor&&i.addClass(e.cursor)}),x(l+n,function(){e.cursor&&i.removeClass(e.cursor),I.off("resize"+h)}),x("Resize"+n,t.resizeImage),t.isLowIE&&x("AfterChange",t.resizeImage)},resizeImage:function(){var e=t.currItem;if(e&&e.img&&t.st.image.verticalFit){var n=0;t.isLowIE&&(n=parseInt(e.img.css("padding-top"),10)+parseInt(e.img.css("padding-bottom"),10)),e.img.css("max-height",t.wH-n)}},_onImageHasSize:function(e){e.img&&(e.hasSize=!0,j&&clearInterval(j),e.isCheckingImgSize=!1,T("ImageHasSize",e),e.imgHidden&&(t.content&&t.content.removeClass("mfp-loading"),e.imgHidden=!1))},findImageSize:function(e){var n=0,i=e.img[0],o=function(r){j&&clearInterval(j),j=setInterval(function(){return i.naturalWidth>0?(t._onImageHasSize(e),void 0):(n>200&&clearInterval(j),n++,3===n?o(10):40===n?o(50):100===n&&o(500),void 0)},r)};o(1)},getImage:function(n,i){var o=0,r=function(){n&&(n.img[0].complete?(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("ready")),n.hasSize=!0,n.loaded=!0,T("ImageLoadComplete")):(o++,200>o?setTimeout(r,100):a()))},a=function(){n&&(n.img.off(".mfploader"),n===t.currItem&&(t._onImageHasSize(n),t.updateStatus("error",s.tError.replace("%url%",n.src))),n.hasSize=!0,n.loaded=!0,n.loadError=!0)},s=t.st.image,l=i.find(".mfp-img");if(l.length){var c=document.createElement("img");c.className="mfp-img",n.img=e(c).on("load.mfploader",r).on("error.mfploader",a),c.src=n.src,l.is("img")&&(n.img=n.img.clone()),c=n.img[0],c.naturalWidth>0?n.hasSize=!0:c.width||(n.hasSize=!1)}return t._parseMarkup(i,{title:N(n),img_replaceWith:n.img},n),t.resizeImage(),n.hasSize?(j&&clearInterval(j),n.loadError?(i.addClass("mfp-loading"),t.updateStatus("error",s.tError.replace("%url%",n.src))):(i.removeClass("mfp-loading"),t.updateStatus("ready")),i):(t.updateStatus("loading"),n.loading=!0,n.hasSize||(n.imgHidden=!0,i.addClass("mfp-loading"),t.findImageSize(n)),i)}}});var W,R=function(){return void 0===W&&(W=void 0!==document.createElement("p").style.MozTransform),W};e.magnificPopup.registerModule("zoom",{options:{enabled:!1,easing:"ease-in-out",duration:300,opener:function(e){return e.is("img")?e:e.find("img")}},proto:{initZoom:function(){var e,n=t.st.zoom,i=".zoom";if(n.enabled&&t.supportsTransition){var o,r,a=n.duration,s=function(e){var t=e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),i="all "+n.duration/1e3+"s "+n.easing,o={position:"fixed",zIndex:9999,left:0,top:0,"-webkit-backface-visibility":"hidden"},r="transition";return o["-webkit-"+r]=o["-moz-"+r]=o["-o-"+r]=o[r]=i,t.css(o),t},d=function(){t.content.css("visibility","visible")};x("BuildControls"+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.content.css("visibility","hidden"),e=t._getItemToZoom(),!e)return d(),void 0;r=s(e),r.css(t._getOffset()),t.wrap.append(r),o=setTimeout(function(){r.css(t._getOffset(!0)),o=setTimeout(function(){d(),setTimeout(function(){r.remove(),e=r=null,T("ZoomAnimationEnded")},16)},a)},16)}}),x(c+i,function(){if(t._allowZoom()){if(clearTimeout(o),t.st.removalDelay=a,!e){if(e=t._getItemToZoom(),!e)return;r=s(e)}r.css(t._getOffset(!0)),t.wrap.append(r),t.content.css("visibility","hidden"),setTimeout(function(){r.css(t._getOffset())},16)}}),x(l+i,function(){t._allowZoom()&&(d(),r&&r.remove(),e=null)})}},_allowZoom:function(){return"image"===t.currItem.type},_getItemToZoom:function(){return t.currItem.hasSize?t.currItem.img:!1},_getOffset:function(n){var i;i=n?t.currItem.img:t.st.zoom.opener(t.currItem.el||t.currItem);var o=i.offset(),r=parseInt(i.css("padding-top"),10),a=parseInt(i.css("padding-bottom"),10);o.top-=e(window).scrollTop()-r;var s={width:i.width(),height:(b?i.innerHeight():i[0].offsetHeight)-a-r};return R()?s["-moz-transform"]=s.transform="translate("+o.left+"px,"+o.top+"px)":(s.left=o.left,s.top=o.top),s}}});var Z="iframe",q="//about:blank",D=function(e){if(t.currTemplate[Z]){var n=t.currTemplate[Z].find("iframe");n.length&&(e||(n[0].src=q),t.isIE8&&n.css("display",e?"block":"none"))}};e.magnificPopup.registerModule(Z,{options:{markup:'<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',srcAction:"iframe_src",patterns:{youtube:{index:"youtube.com",id:"v=",src:"//www.youtube.com/embed/%id%?autoplay=1"},vimeo:{index:"vimeo.com/",id:"/",src:"//player.vimeo.com/video/%id%?autoplay=1"},gmaps:{index:"//maps.google.",src:"%id%&output=embed"}}},proto:{initIframe:function(){t.types.push(Z),x("BeforeChange",function(e,t,n){t!==n&&(t===Z?D():n===Z&&D(!0))}),x(l+"."+Z,function(){D()})},getIframe:function(n,i){var o=n.src,r=t.st.iframe;e.each(r.patterns,function(){return o.indexOf(this.index)>-1?(this.id&&(o="string"==typeof this.id?o.substr(o.lastIndexOf(this.id)+this.id.length,o.length):this.id.call(this,o)),o=this.src.replace("%id%",o),!1):void 0});var a={};return r.srcAction&&(a[r.srcAction]=o),t._parseMarkup(i,a,n),t.updateStatus("ready"),i}}});var K=function(e){var n=t.items.length;return e>n-1?e-n:0>e?n+e:e},Y=function(e,t,n){return e.replace(/%curr%/gi,t+1).replace(/%total%/gi,n)};e.magnificPopup.registerModule("gallery",{options:{enabled:!1,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:!0,arrows:!0,tPrev:"Previous (Left arrow key)",tNext:"Next (Right arrow key)",tCounter:"%curr% of %total%"},proto:{initGallery:function(){var n=t.st.gallery,i=".mfp-gallery",r=Boolean(e.fn.mfpFastClick);return t.direction=!0,n&&n.enabled?(a+=" mfp-gallery",x(f+i,function(){n.navigateByImgClick&&t.wrap.on("click"+i,".mfp-img",function(){return t.items.length>1?(t.next(),!1):void 0}),o.on("keydown"+i,function(e){37===e.keyCode?t.prev():39===e.keyCode&&t.next()})}),x("UpdateStatus"+i,function(e,n){n.text&&(n.text=Y(n.text,t.currItem.index,t.items.length))}),x(p+i,function(e,i,o,r){var a=t.items.length;o.counter=a>1?Y(n.tCounter,r.index,a):""}),x("BuildControls"+i,function(){if(t.items.length>1&&n.arrows&&!t.arrowLeft){var i=n.arrowMarkup,o=t.arrowLeft=e(i.replace(/%title%/gi,n.tPrev).replace(/%dir%/gi,"left")).addClass(y),a=t.arrowRight=e(i.replace(/%title%/gi,n.tNext).replace(/%dir%/gi,"right")).addClass(y),s=r?"mfpFastClick":"click";o[s](function(){t.prev()}),a[s](function(){t.next()}),t.isIE7&&(k("b",o[0],!1,!0),k("a",o[0],!1,!0),k("b",a[0],!1,!0),k("a",a[0],!1,!0)),t.container.append(o.add(a))}}),x(m+i,function(){t._preloadTimeout&&clearTimeout(t._preloadTimeout),t._preloadTimeout=setTimeout(function(){t.preloadNearbyImages(),t._preloadTimeout=null},16)}),x(l+i,function(){o.off(i),t.wrap.off("click"+i),t.arrowLeft&&r&&t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(),t.arrowRight=t.arrowLeft=null}),void 0):!1},next:function(){t.direction=!0,t.index=K(t.index+1),t.updateItemHTML()},prev:function(){t.direction=!1,t.index=K(t.index-1),t.updateItemHTML()},goTo:function(e){t.direction=e>=t.index,t.index=e,t.updateItemHTML()},preloadNearbyImages:function(){var e,n=t.st.gallery.preload,i=Math.min(n[0],t.items.length),o=Math.min(n[1],t.items.length);for(e=1;(t.direction?o:i)>=e;e++)t._preloadItem(t.index+e);for(e=1;(t.direction?i:o)>=e;e++)t._preloadItem(t.index-e)},_preloadItem:function(n){if(n=K(n),!t.items[n].preloaded){var i=t.items[n];i.parsed||(i=t.parseEl(n)),T("LazyLoad",i),"image"===i.type&&(i.img=e('<img class="mfp-img" />').on("load.mfploader",function(){i.hasSize=!0}).on("error.mfploader",function(){i.hasSize=!0,i.loadError=!0,T("LazyLoadError",i)}).attr("src",i.src)),i.preloaded=!0}}}});var U="retina";e.magnificPopup.registerModule(U,{options:{replaceSrc:function(e){return e.src.replace(/\.\w+$/,function(e){return"@2x"+e})},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var e=t.st.retina,n=e.ratio;n=isNaN(n)?n():n,n>1&&(x("ImageHasSize."+U,function(e,t){t.img.css({"max-width":t.img[0].naturalWidth/n,width:"100%"})}),x("ElementParse."+U,function(t,i){i.src=e.replaceSrc(i,n)}))}}}}),function(){var t=1e3,n="ontouchstart"in window,i=function(){I.off("touchmove"+r+" touchend"+r)},o="mfpFastClick",r="."+o;e.fn.mfpFastClick=function(o){return e(this).each(function(){var a,s=e(this);if(n){var l,c,d,u,p,f;s.on("touchstart"+r,function(e){u=!1,f=1,p=e.originalEvent?e.originalEvent.touches[0]:e.touches[0],c=p.clientX,d=p.clientY,I.on("touchmove"+r,function(e){p=e.originalEvent?e.originalEvent.touches:e.touches,f=p.length,p=p[0],(Math.abs(p.clientX-c)>10||Math.abs(p.clientY-d)>10)&&(u=!0,i())}).on("touchend"+r,function(e){i(),u||f>1||(a=!0,e.preventDefault(),clearTimeout(l),l=setTimeout(function(){a=!1},t),o())})})}s.on("click"+r,function(){a||o()})})},e.fn.destroyMfpFastClick=function(){e(this).off("touchstart"+r+" click"+r),n&&I.off("touchmove"+r+" touchend"+r)}}(),_()})(window.jQuery||window.Zepto);