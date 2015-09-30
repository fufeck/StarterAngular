angular.module("starter").run(["$templateCache", function($templateCache) {$templateCache.put("home.view.html","\n<div id=\"back\"></div>\n<div class=\"view-home show-mobile\">\n  <div class=\"view-welcome\">\n    <div class=\"container welcome\"></div>\n  </div>\n</div>\n<div scrolly class=\"view-home hide-mobile\">\n  <div class=\"header\">\n    <div id=\"back-header\"></div><a href=\"../img/cvFabienTafforeau2015.pdf\" target=\"_blank\" class=\"link-cv\">Mon CV</a>\n    <div class=\"links\">\n      <div ng-click=\"goTo(\'about-me\')\" class=\"link\">A Propos de moi</div>\n      <div ng-click=\"goTo(\'techno\')\" class=\"link\">Mon expertise</div>\n      <div ng-click=\"goTo(\'project\')\" class=\"link\">Mon portfolio</div>\n    </div>\n  </div>\n  <div class=\"view-welcome\">\n    <div class=\"container-welcome\">\n      <div ng-class=\"{fadeIn : animeWording == true, fadeOut : animeWording == false}\" class=\"wording\">{{ welcomeWording[wordingSelected] }}</div>\n    </div>\n  </div>\n  <div id=\"about-me\" class=\"view-about-me\">\n    <div class=\"container-about-me\">\n      <div class=\"title-about-me\">A propos de moi</div>\n      <div class=\"wording-about-me\">Actuellement étudiant de 23ans en 2 ème année de l\'école 42, je suis un jeune passionné, développeur d\'applications web et mobile qui habite à Saclay. Etant quelqu\'un d\'acharné avec le mental d\'un sportif, je n\'ai pas peur de relever des défis. Grâce à Epitech et maintenant 42, j\'ai pu développer une adaptation à toute épreuve ainsi qu\'une capacité d\'auto-formation rapide et efficace.</div>\n    </div>\n  </div>\n  <div id=\"techno\" class=\"view-techno\">\n    <div class=\"title-technos\">Mon expertise</div>\n    <div class=\"container-techno\">\n      <div ng-mouseenter=\"showTechnoOne = true\" ng-mouseleave=\"showTechnoOne = false\" class=\"container-trio\"><img src=\"../img/web.png\">\n        <div class=\"title-techno\">Developpeur Web</div>\n        <div ng-show=\"!showTechnoOne\" class=\"desc-show\">Je créer des sites vitrines, site de d\'e-commerce, site dynamiques et blogs au design responsive.</div>\n        <div ng-show=\"showTechnoOne\" class=\"desc-hide\">HTML5, CSS3, javascript - jQuery <br/> PHP - orientée objet, Zend <br/> Prestashop et Magento <br/> Gestion des SEO</div>\n      </div>\n      <div ng-mouseenter=\"showTechnoTwo = true\" ng-mouseleave=\"showTechnoTwo = false\" class=\"container-trio\"><img src=\"../img/applimobile.png\">\n        <div class=\"title-techno\">Developpeur Mobile</div>\n        <div ng-show=\"!showTechnoTwo\" class=\"desc-show\">Je réalise de application mobile hybride <br/> Android et iOS.</div>\n        <div ng-show=\"showTechnoTwo\" class=\"desc-hide\">Cordova - Ionic <br/>AngularJs, coffeeScprit, less et jade <br/> Node Js - Express, Strongloop</div>\n      </div>\n      <div ng-mouseenter=\"showTechnoTree = true\" ng-mouseleave=\"showTechnoTree = false\" class=\"container-trio\"><img src=\"../img/profile5.png\">\n        <div class=\"title-techno\">Gestion de projet</div>\n        <div ng-show=\"!showTechnoTree\" class=\"desc-show\">Je suis autonome et sais travailler en groupe <br/>avec des logiciel adapté </div>\n        <div ng-show=\"showTechnoTree\" class=\"desc-hide\">Logiciel de versionning - Git <br/> L\'environnement - Vagrant / Docker <br/> La gestion avec Trello et méthode Scrum</div>\n      </div>\n    </div>\n  </div>\n  <div id=\"project\" class=\"view-project\">\n    <div class=\"title-projects\">Mon portfolio</div>\n    <div class=\"container-projects\"><img ng-src=\"../img/logo.png\" class=\"ia-pulse\"><img ng-src=\"../img/logo_looky.png\" class=\"looky\"><img ng-src=\"../img/sma.png\" class=\"sma\"><img ng-src=\"../img/share3.png\" class=\"noon\"><img ng-src=\"../img/logo_white.png\" class=\"subvitamine\"></div>\n  </div>\n  <div id=\"contact\" class=\"view-contact\">\n    <div class=\"reseau\"> \n      <div class=\"title-reseau\">Réseaux socieaux</div>\n      <div class=\"reseau-link\"><a href=\"https://fr.linkedin.com/pub/fabien-tafforeau/b3/b47/a98\" target=\"_blank\"><img src=\"../img/linkedin.png\">linkedin</a></div>\n      <div class=\"reseau-link\"><a href=\"https://github.com/fufeck\" target=\"_blank\"><img src=\"../img/github.png\">github</a></div>\n    </div>\n    <div class=\"contact\">\n      <div class=\"title-contact\">Me contactez</div>\n      <div class=\"contact-link\">0783963184</div>\n      <div class=\"contact-link\">fabien.tafforeau@gmail.com</div>\n    </div>\n  </div>\n</div>");}]);