/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

// Google Maps Scripts
// When the window has finished loading create our google map below


/**
 * map
 */
var mapOpts = {
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scaleControl: false,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false
}
var map = new google.maps.Map(document.getElementById("map"), mapOpts);
//  We set zoom and center later by fitBounds()



/**
 * makeMarker() ver 0.2
 * creates Marker and InfoWindow on a Map() named 'map'
 * creates sidebar row in a DIV 'sidebar'
 * saves marker to markerArray and markerBounds
 * @param options object for Marker, InfoWindow and SidebarItem
 * @author Esa 2009
 */

var infoWindow = new google.maps.InfoWindow();
var markerBounds = new google.maps.LatLngBounds();
var markerArray = [];

function makeMarker(options) {
    var pushPin = new google.maps.Marker({
        map: map
    });
    pushPin.setOptions(options);
    google.maps.event.addListener(pushPin, "click", function() {
        infoWindow.setOptions(options);
        infoWindow.open(map, pushPin);
        if (this.sidebarButton) this.sidebarButton.button.focus();
    });
    var idleIcon = pushPin.getIcon();
    if (options.sidebarItem) {
        pushPin.sidebarButton = new SidebarItem(pushPin, options);
        pushPin.sidebarButton.addIn("sidebar");
    }
    markerBounds.extend(options.position);
    markerArray.push(pushPin);
    return pushPin;
}

google.maps.event.addListener(map, "click", function() {
    infoWindow.close();
});


/**
 * Creates an sidebar item
 * @constructor
 * @author Esa 2009
 * @param marker
 * @param options object Supported properties: sidebarItem, sidebarItemClassName, sidebarItemWidth,
 */
function SidebarItem(marker, opts) {
    var tag = opts.sidebarItemType || "button";
    var row = document.createElement(tag);
    row.innerHTML = opts.sidebarItem;
    row.className = opts.sidebarItemClassName || "sidebar_item";
    row.style.display = "block";
    row.style.width = opts.sidebarItemWidth || "160px";
    row.onclick = function() {
        google.maps.event.trigger(marker, 'click');
    }
    row.onmouseover = function() {
        google.maps.event.trigger(marker, 'mouseover');
    }
    row.onmouseout = function() {
        google.maps.event.trigger(marker, 'mouseout');
    }
    this.button = row;
}
// adds a sidebar item to a <div>
SidebarItem.prototype.addIn = function(block) {
    if (block && block.nodeType == 1) this.div = block;
    else
        this.div = document.getElementById(block) || document.getElementById("sidebar") || document.getElementsByTagName("body")[0];
    this.div.appendChild(this.button);
}
// deletes a sidebar item
SidebarItem.prototype.remove = function() {
    if (!this.div) return false;
    this.div.removeChild(this.button);
    return true;
}




/**
 * markers and info window contents
 */
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44605, -91.1566),
    title: "John Guillory",
    sidebarItem: "John Guillory",
    content: "<b style=font-size:18px>John Guillory<br>3118 Wilshire Drive, Baton Rouge, La, 70806<br>Oil and watercolor paintings<br><a href=http://johnguillory.com target=_blank>Website</a><br><br><a href=https://maps.google.com?q=3118+Wilshire+Drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44489, -91.1576),
    title: "Natalie Clay Hutchinson",
    sidebarItem: "Natalie Clay Hutchinson",
    content: "<b style=font-size:18px>Natalie Clay Hutchinson<br>420 bedford drive, Baton Rouge, La, 70806<br>Mixed Media Paintings<br><a href=http://www.natalielaneclay.com target=_blank>Website</a><br><br><a href=https://maps.google.com?q=420+bedford+drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44559, -91.1566),
    title: "Jared Hromadka",
    sidebarItem: "Jared Hromadka",
    content: "<b style=font-size:18px>Jared Hromadka<br>355 Hearthstone Dr, Baton Rouge, La, 70806<br>Pen and Ink drawings<br><a href=https://maps.google.com?q=355+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44509, -91.1566),
    title: "Nathan Logsdon",
    sidebarItem: "Nathan Logsdon",
    content: "<b style=font-size:18px>Nathan Logsdon<br>405 Hearthstone Dr, Baton Rouge, La, 70806<br>Metal Sculpture<br><a href=http://www.themetalsmith.com target=_blank>Website</a><br><br><a href=https://maps.google.com?q=405+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44504, -91.1568),
    title: "Mark Carroll",
    sidebarItem: "Mark Carroll",
    content: "<b style=font-size:18px>Mark Carroll<br>408 Hearthstone Dr, Baton Rouge, La, 70806<br>Raku Pottery<br><a href=https://maps.google.com?q=408+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44565, -91.1568),
    title: "Greenhand Nursery",
    sidebarItem: "Greenhand Nursery",
    content: "<b style=font-size:18px>Greenhand Nursery<br>348 Hearthstone Dr, Baton Rouge, La, 70806<br>Exotic Plants<br><a href=https://www.facebook.com/GreenhandNursery/info target=_blank>Website</a><br><br><a href=https://maps.google.com?q=348+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44565, -91.1568),
    title: "Lisa Samuels",
    sidebarItem: "Lisa Samuels",
    content: "<b style=font-size:18px>Lisa Samuels<br>348 Hearthstone Dr, Baton Rouge, La, 70806<br>Paintings<br><a href=https://maps.google.com?q=348+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44585, -91.1568),
    title: "Canine Slumber",
    sidebarItem: "Canine Slumber",
    content: "<b style=font-size:18px>Canine Slumber<br>328 Hearthstone Dr, Baton Rouge, La, 70806<br>Hand made Dog beds and furniture<br><a href=http://www.canineslumber.com/about-us.html target=_blank>Website</a><br><br><a href=https://maps.google.com?q=328+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44484, -91.1566),
    title: "Andrew Keller",
    sidebarItem: "Andrew Keller",
    content: "<b style=font-size:18px>Andrew Keller<br>429 Hearthstone Dr, Baton Rouge, La, 70806<br>Bier Garten<br><a href=https://maps.google.com?q=429+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44753, -91.1569),
    title: "Rachael Lagarde Bordelon",
    sidebarItem: "Rachael Lagarde Bordelon",
    content: "<b style=font-size:18px>Rachael Lagarde Bordelon<br>168 Hearthstone Dr, Baton Rouge, La, 70806<br>Jewelry<br><a href=http://www.opulentmetals.com/ target=_blank>Website</a><br><br><a href=https://maps.google.com?q=168+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44797, -91.156),
    title: "Betsy Wilks",
    sidebarItem: "Betsy Wilks",
    content: "<b style=font-size:18px>Betsy Wilks<br>120 Beverly Drive, Baton Rouge, La, 70806<br>Culinary Arts<br><a href=https://maps.google.com?q=120+Beverly+Drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44786, -91.1578),
    title: "Adam Szczepkowski",
    sidebarItem: "Adam Szczepkowski",
    content: "<b style=font-size:18px>Adam Szczepkowski<br>126 Bedford Drive, Baton Rouge, La, 70806<br>Showcasing Recording Studio<br><a href=https://maps.google.com?q=126+Bedford+Drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44701, -91.1558),
    title: "The Kids Stop!",
    sidebarItem: "The Kids Stop!",
    content: "<b style=font-size:18px>The Kids Stop!<br>217 Beverly Dr, Baton Rouge, La, 70806<br>Baton Rouge Arts council Kids stop.<br>Enjoy lemonade and cookies and performances<br> by a few surprise guests!<br><a href=https://mail.google.com/mail/u/0/?ui=2&ik=0cd192b1fc&view=att&th=1478e44d827320b1&attid=0.1&disp=safe&realattid=9a8632c1b725905d_0.1&zw target=_blank>Website</a><br><br><a href=https://maps.google.com?q=217+Beverly+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.4462, -91.1575),
    title: "Gallery Bohemia",
    sidebarItem: "Gallery Bohemia",
    content: "<b style=font-size:18px>Gallery Bohemia<br>3017 Wilshire Dr, Baton Rouge, La, 70806<br>paintings jewelry vintage<br><a href=http://www.facebook.com/pages/Gallery-Bohemia target=_blank>Website</a><br><br><a href=https://maps.google.com?q=3017+Wilshire+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44493, -91.1576),
    title: "Nathaniel A. Landry",
    sidebarItem: "Nathaniel A. Landry",
    content: "<b style=font-size:18px>Nathaniel A. Landry<br>416 bedford drive, Baton Rouge, La, 70806<br>paintings drawings illustrations<br><a href=http://slimdaddyfleetwood.blogspot.com target=_blank>Website</a><br><br><a href=https://maps.google.com?q=416+bedford+drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44489, -91.1576),
    title: "Charles Barbier",
    sidebarItem: "Charles Barbier",
    content: "<b style=font-size:18px>Charles Barbier<br>420 bedford drive, Baton Rouge, La, 70806<br>Paintings<br><a href=https://maps.google.com?q=420+bedford+drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44489, -91.1576),
    title: "Paul Neff",
    sidebarItem: "Paul Neff",
    content: "<b style=font-size:18px>Paul Neff<br>420 bedford drive, Baton Rouge, La, 70806<br>Paintings<br><a href=https://maps.google.com?q=420+bedford+drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.4459, -91.1577),
    title: "Jessie Hornbrook MaCarthy",
    sidebarItem: "Jessie Hornbrook MaCarthy",
    content: "<b style=font-size:18px>Jessie Hornbrook MaCarthy<br>320 bedford drive, Baton Rouge, La, 70806<br>printmaker<br><a href=http://www.jessiehornbrook.com target=_blank>Website</a><br><br><a href=https://maps.google.com?q=320+bedford+drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44596, -91.1575),
    title: "fw gallery",
    sidebarItem: "fw gallery",
    content: "<b style=font-size:18px>fw gallery<br>315 Bedford Dr, Baton Rouge, La, 70806<br>prints paintings<br><a href=http://www.fwgallery.net target=_blank>Website</a><br><br><a href=https://maps.google.com?q=315+Bedford+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44489, -91.1576),
    title: "Tj Black",
    sidebarItem: "Tj Black",
    content: "<b style=font-size:18px>Tj Black<br>420 bedford, Baton Rouge, La, 70806<br>Paintings mixed media artists<br><a href=http://www.facebook.com/tj.black.5245 target=_blank>Website</a><br><br><a href=https://maps.google.com?q=420+bedford+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44493, -91.1576),
    title: "Patrick Tiek",
    sidebarItem: "Patrick Tiek",
    content: "<b style=font-size:18px>Patrick Tiek<br>416 bedford drive, Baton Rouge, La, 70806<br>paintings<br><a href=http://www.patricktiekart.com target=_blank>Website</a><br><br><a href=https://maps.google.com?q=416+bedford+drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44596, -91.1577),
    title: "Tiffany Sewell/Jonathan Downing",
    sidebarItem: "Tiffany Sewell/Jonathan Downing",
    content: "<b style=font-size:18px>Tiffany Sewell/Jonathan Downing<br>314 Bedford Dr, Baton Rouge, La, 70806<br>painting & drawings<br><a href=http://www.screamingshihtzu.com target=_blank>Website</a><br><br><a href=https://maps.google.com?q=314+Bedford+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44717, -91.1569),
    title: "BenjaminÂ NorwoodÂ Diller",
    sidebarItem: "BenjaminÂ NorwoodÂ Diller",
    content: "<b style=font-size:18px>BenjaminÂ NorwoodÂ Diller<br>206 Hearthstone Dr, Baton Rouge, La, 70806<br>paintings<br><a href=http://bendillerart.com/ target=_blank>Website</a><br><br><a href=https://maps.google.com?q=206+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44614, -91.1559),
    title: "Cheryl Cloud",
    sidebarItem: "Cheryl Cloud",
    content: "<b style=font-size:18px>Cheryl Cloud<br>302 Beverly Dr, Baton Rouge, La, 70806<br>Painting<br><a href=https://maps.google.com?q=302+Beverly+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44614, -91.1559),
    title: "Lizzi Ward",
    sidebarItem: "Lizzi Ward",
    content: "<b style=font-size:18px>Lizzi Ward<br>302 Beverly Dr, Baton Rouge, La, 70806<br>digital imagery; oil; acrylic; water color; ink<br><a href=http://www.liziward.com/ target=_blank>Website</a><br><br><a href=https://maps.google.com?q=302+Beverly+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44623, -91.1567),
    title: "Mike Carambat",
    sidebarItem: "Mike Carambat",
    content: "<b style=font-size:18px>Mike Carambat<br>3111 Wilshire Drive, Baton Rouge, La, 70806<br>Steampunk Gizmos Graphics and Gadgetry<br><a href=http://www.retroresource.com/ target=_blank>Website</a><br><br><a href=https://maps.google.com?q=3111+Wilshire+Drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44652, -91.1577),
    title: "Pure Delight Coffee",
    sidebarItem: "Pure Delight Coffee",
    content: "<b style=font-size:18px>Pure Delight Coffee<br>262 Bedford Dr, Baton Rouge, La, 70806<br>Pop up shop + bike delivery micro-roaster<br><a href=http://www.puredelightcoffee.com/ target=_blank>Website</a><br><br><a href=https://maps.google.com?q=262+Bedford+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44498, -91.1566),
    title: "Aaron Hussey",
    sidebarItem: "Aaron Hussey",
    content: "<b style=font-size:18px>Aaron Hussey<br>415 Hearthstone Dr, Baton Rouge, La, 70806<br>Metal sculpture<br><a href=https://maps.google.com?q=415+Hearthstone+Dr+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44806, -91.1572),
    title: "Vivian Denmon",
    sidebarItem: "Vivian Denmon",
    content: "<b style=font-size:18px>Vivian Denmon<br>3048 North Blvd., Baton Rouge, La, 70806<br>Art and Antiques<br><a href=https://maps.google.com?q=3048+North+Blvd.+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44563, -91.1559),
    title: "Katie Sweatman",
    sidebarItem: "Katie Sweatman",
    content: "<b style=font-size:18px>Katie Sweatman<br>352 Beverly drive, Baton Rouge, La, 70806<br>paintings<br><a href=https://maps.google.com?q=352+Beverly+drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});
makeMarker({
    icon: 'img/art-museum-2.png',
    position: new google.maps.LatLng(30.44594, -91.1559),
    title: "Barbara Chatlien",
    sidebarItem: "Barbara Chatlien",
    content: "<b style=font-size:18px>Barbara Chatlien<br>322 Beverly Drive, Baton Rouge, La, 70806<br>Quilts needle felted and crochet amigumni animals<br><a href=https://maps.google.com?q=322+Beverly+Drive+Baton+Rouge+La+70806 target=_blank>Directions</a></b>"
});



/**
 *   fit viewport to markers
 */
map.fitBounds(markerBounds);
