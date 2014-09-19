function getPanelists(sessionID) {
  var allpanels =
  {"installable_apps_and_permissions": {"panelists": [
    {"Surname": "Fidler", "FirstName": "Eli", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/eli-fidler.jpg", "twitter": "efidler", "org": "BlackBerry"},
    {"Surname": "Caceres", "FirstName": "Marcos", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/marcos-caceres.jpg", "twitter": "marcosc", "org": "Mozilla"},
    {"Surname": "Archibald", "FirstName": "Jake", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/jake-archibald.jpg", "twitter": "@jaffathecake", "org": "Google"},
    {"Surname": "Andrews", "FirstName": "Matt", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/matt-andrews.jpg", "twitter": "andrewsmatt", "org": "Financial Times"},
    {"Surname": "Wilson", "FirstName": "Chris", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/chris-wilson.jpg", "twitter": "cwilso", "org": "Google"},
    {"Surname": "LeRoux", "FirstName": "Brian", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/brian-leroux.jpg", "twitter": "brianleroux", "org": "Adobe"}
  ], "questions": ["We\u2019re all aiming towards better page-load times. HTML imports can include other imports, es6 modules can include other modules, to what extent does compotentisation break web performance by breaking parallelism?", "How do components help or hinder responsive design? Given that media queries are orthogonal to components, how can components play well with responsive design approaches?", "How will components work with content security policy? Polymer and other initial components require eval or use inline scripts. Will components become another vector for snowden-esque attacks? What\u2019s the security story for components?", "Do you think Web Components open the door for developers to abandon semantics? Will we end up with a million different home-grown select widgets? And if so, how can developers choose between them?", "What is the internationalization story for web components? Is every component supposed to have hooks for i18n? Or can user of component somehow swap or inject translated strings?", "How can web components be used to enhance accessibility? Can shared standards for interaction be developed and agreed upon for common components?", "Until web components are more widely supported, in what use cases would you consider polyfills like Polymer or X-Tags over alternative component frameworks. To what extent do the existence of polyfills hinder \/ slow the implementation of web components?"]}, "layout_performance": {"panelists": [
    {"Surname": "Lewis", "FirstName": "Paul", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/paul-lewis.jpg", "twitter": "aerotwist", "org": "Google"},
    {"Surname": "Page", "FirstName": "Wilson", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/wilson-page.jpg", "twitter": "wilsonpage", "org": "Mozilla"},
    {"Surname": "Chedeau", "FirstName": "Christopher", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/christopher-chedeau.jpg", "twitter": "vjeux", "org": "Facebook"},
    {"Surname": "Baron", "FirstName": "David", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/david-baron.jpg", "twitter": "davidbaron", "org": "Mozilla"},
    {"Surname": "Ying", "FirstName": "Charles", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/charles-ying.jpg", "twitter": "charlietuna", "org": "Flipboard"},
    {"Surname": "Shaver", "FirstName": "Mike", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/mike-shaver.jpg", "twitter": "shaver", "org": "Facebook"}
  ], "questions": ["A Question for layout perf","A Question for layout perf2"]}, "security_and_identity": {"panelists": [
    {"Surname": "Rooney", "FirstName": "Natasha", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/natasha-rooney.jpg", "twitter": "thisnatasha", "org": "GSMA"},
    {"Surname": "Nottingham", "FirstName": "Mark", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/mark-nottingham.jpg", "twitter": "mnot", "org": "Akamai"},
    {"Surname": "Zhu", "FirstName": "Yan", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/yan-zhu.jpg", "twitter": "bcrypt", "org": "Yahoo!"},
    {"Surname": "Messina", "FirstName": "Chris", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/chris-messina.jpg", "twitter": "chrismessina", "org": "Agent of free will"},
    {"Surname": "West", "FirstName": "Mike", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/mike-west.jpg", "twitter": "mikewest", "org": "Google"},
    {"Surname": "Coates", "FirstName": "Michael", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/michael-coates.jpg", "twitter": "_mwc", "org": "Shape Security"}
  ], "questions": ["A Question for security_and_identity 1","A Question for security_and_identity 2"]}, "package_management": {"panelists": [
    {"Surname": "Simpson", "FirstName": "Kyle", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/kyle-simpson.jpg", "twitter": "@getify", "org": "Getify Solutions, Inc."},
    {"Surname": "Peek", "FirstName": "Joshua", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/joshua-peek.jpg", "twitter": "joshpeek", "org": "GitHub"},
    {"Surname": "Voss", "FirstName": "Laurie", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/laurie-voss.jpg", "twitter": "seldo", "org": "NPM, Inc"},
    {"Surname": "Beck", "FirstName": "David", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/david-beck.jpg", "twitter": "davegbeck", "org": "Rotunda Software"},
    {"Surname": "Denicola", "FirstName": "Domenic", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/domenic-denicola.jpg", "twitter": "domenic", "org": "Google"},
    {"Surname": "Mueller", "FirstName": "Matthew", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/matthew-mueller.jpg", "twitter": "mattmueller", "org": "Lapwing Labs"}
  ], "questions": ["A Question for package_management 1","A Question for package_management 2"]}, "image_formats": {"panelists": [
    {"Surname": "Robson", "FirstName": "Ann", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/ann-robson.jpg", "twitter": "arobson", "org": "Yammer"},
    {"Surname": "Podjarny", "FirstName": "Guy", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/guy-podjarny.jpg", "twitter": "guypod", "org": "Akamai"},
    {"Surname": "Weiss", "FirstName": "Yoav", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/yoav-weiss.jpg", "twitter": "yoavweiss", "org": "WL Square"},
    {"Surname": "Lesinski", "FirstName": "Kornel", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/kornel-lesinski.jpg", "twitter": "pornel", "org": "Financial Times"},
    {"Surname": "Grigorik", "FirstName": "Ilya", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/ilya-grigorik.jpg", "twitter": "igrigorik", "org": "Google"}
  ], "questions": ["A Question for image_formats 1","A Question for image_formats 2"]}, "standards_and_the_extensible_web_manifesto": {"panelists": [
    {"Surname": "Russell", "FirstName": "Alex", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/alex-russell.jpg", "twitter": "slightlylate", "org": "Google"},
    {"Surname": "Manian", "FirstName": "Divya", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/divya-manian.jpg", "twitter": "divya", "org": "Adobe"},
    {"Surname": "Danger Gardner", "FirstName": "Lyza", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/lyza-danger-gardner.jpg", "twitter": "lyzadanger", "org": "Cloud Four"},
    {"Surname": "Bateman", "FirstName": "Adrian", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/adrian-bateman.jpg", "twitter": "adrianba", "org": "Microsoft"},
    {"Surname": "Kardell", "FirstName": "Brian", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/brian-kardell.jpg", "twitter": "briankardell", "org": "Apollo Group"},
    {"Surname": "Christiansen", "FirstName": "Kenneth", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/kenneth-christiansen.jpg", "twitter": "kennethrohde", "org": "Intel"}
  ], "questions": ["A Question for standards_and_the_extensible_web_manifesto 1","A Question for standards_and_the_extensible_web_manifesto 2"]}
  };

  function sortByMod(list){
    var byMod = list.slice(0);
    byMod.sort(function(a,b) {
      return b.mod - a.mod;
    });
    return byMod;
  }

  var selectedPanel = {},
      panelTitle = document.querySelector('#panel-title > div');
  switch (parseInt(sessionID, 10)) {
    case 619:
      selectedPanel = allpanels.installable_apps_and_permissions;
      selectedPanel.panelists = sortByMod(allpanels.installable_apps_and_permissions.panelists);
      panelTitle.innerHTML = "Test Panel";
      break;
    case 637:
      selectedPanel = allpanels.installable_apps_and_permissions;
      selectedPanel.panelists = sortByMod(allpanels.installable_apps_and_permissions.panelists);
      panelTitle.innerHTML = "Installable Apps and Permissions";
      break;
    case 638:
      selectedPanel = allpanels.layout_performance;
      selectedPanel.panelists = sortByMod(allpanels.layout_performance.panelists);
      panelTitle.innerHTML = "Layout Performance";
      break;
    case 639:
      selectedPanel = allpanels.security_and_identity;
      selectedPanel.panelists = sortByMod(allpanels.security_and_identity.panelists);
      panelTitle.innerHTML = "Security and Identity";
      break;
    case 640:
      selectedPanel = allpanels.package_management;
      selectedPanel.panelists = sortByMod(allpanels.package_management.panelists);
      panelTitle.innerHTML = "Package Management";
      break;
    case 641:
      selectedPanel = allpanels.image_formats;
      selectedPanel.panelists = sortByMod(allpanels.image_formats.panelists);
      panelTitle.innerHTML = "Image Formats";
      break;
    case 642:
      selectedPanel = allpanels.standards_and_the_extensible_web_manifesto;
      selectedPanel.panelists = sortByMod(allpanels.standards_and_the_extensible_web_manifesto.panelists);
      panelTitle.innerHTML = "Standards and the Extensible Web Manifesto";
      break;
  }
  return selectedPanel;
}