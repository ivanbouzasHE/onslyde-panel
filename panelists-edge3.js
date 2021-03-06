function getPanelists(sessionID) {
  var allpanels =
  {"components": {"panelists": [
    {"Surname": "Appelquist", "FirstName": "Dan", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/dan-appelquist.jpg", "twitter": "@torgo", "org": "Telefonica"},
    {"Surname": "Hunt", "FirstName": "Pete", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/pete-hunt.jpg", "twitter": "@floydophone", "org": "Instagram"},
    {"Surname": "Gasston", "FirstName": "Peter", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/peter-gasston.jpg", "twitter": "@stopsatgreen", "org": "Rehabstudio"},
    {"Surname": "Komoroske", "FirstName": "Alex", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/alex-komoroske.jpg", "twitter": "@jkomoros", "org": "Google"},
    {"Surname": "Penades", "FirstName": "Soledad", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/soledad-penades.jpg", "twitter": "@supersole", "org": "Mozilla"},
    {"Surname": "Sullivan", "FirstName": "Nicole", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/nicole-sullivan.jpg", "twitter": "@stubbornella", "org": "Pivotal Labs"}
  ], "questions": ["We\u2019re all aiming towards better page-load times. HTML imports can include other imports, es6 modules can include other modules, to what extent does compotentisation break web performance by breaking parallelism?", "How do components help or hinder responsive design? Given that media queries are orthogonal to components, how can components play well with responsive design approaches?", "How will components work with content security policy? Polymer and other initial components require eval or use inline scripts. Will components become another vector for snowden-esque attacks? What\u2019s the security story for components?", "Do you think Web Components open the door for developers to abandon semantics? Will we end up with a million different home-grown select widgets? And if so, how can developers choose between them?", "What is the internationalization story for web components? Is every component supposed to have hooks for i18n? Or can user of component somehow swap or inject translated strings?", "How can web components be used to enhance accessibility? Can shared standards for interaction be developed and agreed upon for common components?", "Until web components are more widely supported, in what use cases would you consider polyfills like Polymer or X-Tags over alternative component frameworks. To what extent do the existence of polyfills hinder \/ slow the implementation of web components?"]}, "developer_tooling": {"panelists": [
    {"Surname": "Archibald", "FirstName": "Jake", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/jake-archibald.jpg", "twitter": "@jaffathecake", "org": "Google"},
    {"Surname": "Auchenberg", "FirstName": "Kenneth", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/kenneth-auchenberg.jpg", "twitter": "@auchenberg", "org": "Podio"},
    {"Surname": "Irish", "FirstName": "Paul", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/paul-irish.jpg", "twitter": "@paul_irish", "org": "Google"},
    {"Surname": "Bergius", "FirstName": "Henri", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/henri-bergius.jpg", "twitter": "@bergie", "org": "The Grid"},
    {"Surname": "Jaramillo", "FirstName": "Narciso", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/narciso-jaramillo.jpg", "twitter": "@notwebsafe", "org": "Adobe"},
    {"Surname": "Walker", "FirstName": "Joe", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/joe-walker.jpg", "twitter": "@joewalker", "org": "Mozilla"}
  ], "questions": ["In future, can we expect to do all of our development within the browser? Will browser devtools become our full IDE, or should browsers concentrate on interfacing better with IDEs?", "Currently features launch before they have devtools support, eg promises, SSE, web audio. Is this fair to developers? Shouldn't we ensure we're deploying features that are inherently debuggable?", "There are lots of deprecated APIs & bad practices that browsers could detect and warn about. How can tools guide developers towards good code without needing to run the right profiler & manually interpret the results?", "Initiatives like RemoteDebug look to unify developer tools. Is this a good thing, or could it hurt the diversity of tooling?", "What's stopping every browser providing headless access and automation ala phantomjs, for testing and processing? ", "I'd like to see contributing to developer tools made easier. Not just adding tabs\/panels, but tweaking current functionality. How can I get involved?", "Why do I need to connect my phone\/tablet to my laptop to debug the web, can't I do this on the phone directly? Can we make a UI that works?"]}, "build_process": {"panelists": [
    {"Surname": "Vinegar", "FirstName": "Ben", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/ben-vinegar.jpg", "twitter": "@bentlegen", "org": "Disqus"},
    {"Surname": "Simpson", "FirstName": "Kyle", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/kyle-simpson.jpg", "twitter": "@getify", "org": "Getify Solutions, Inc."},
    {"Surname": "Osmani", "FirstName": "Addy", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/addy-osmani.jpg", "twitter": "@addyosmani", "org": "Google"},
    {"Surname": "Golasch", "FirstName": "Sebastian", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/sebastian-golasch.jpg", "twitter": "@asciidisco", "org": "Deutsche Telekom"},
    {"Surname": "Fisher", "FirstName": "Nick", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/nick-fisher.jpg", "twitter": "@spadgos", "org": "Soundcloud"},
    {"Surname": "Rushgrove", "FirstName": "Gareth", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/gareth-rushgrove.jpg", "twitter": "@garethr", "org": "Government Digital Service"}
  ], "questions": ["Is eliminating the need for a build process a goal of web standards? For example, should CSS adopt features of CSS preprocessors or avoid duplicating them?", "Much of the new tools for build processes are growing within the node.js community and depend on the node stack and npm. Do you think this dependency might be limiting in the long term?", "There's a mini \"browser wars\" going on right now between grunt, gulp, & several other would-be contenders, as if there is \"one right build tool to rule them all\". Is this realistic or idealistic? Is it harmful fragmentation or useful experimentation?", "As build processes become more and more complex, our source code gets further away from the fundamental building blocks of the web: JavaScript, CSS, and HTML. How does this affect future maintainability? Is this a good thing?", "Most build scripts, including those generated by scaffolding, are a chain of several discrete steps.  Do we need the complexity of having control of every step? Should we instead have an opionated build chain that just gets us there?", "Most of the pain in build process occurs at dev iteration. Would it make sense to implement things like Sass and CoffeeScript as plugins for developers, removing the need for repetitive build processes. Or even in the browser itself.", "Do you think build process should evolve to incorporate content optimisations?\n\nEg: Spellchecking pages, auto-submitting content for i10n, verifying outbound hyperlinks are valid etc."]}, "page_load_performance": {"panelists": [
    {"Surname": "Thair", "FirstName": "Steve", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/steve-thair.jpg", "twitter": "@TheOpsMgr", "org": "DevOpsGuys"},
    {"Surname": "Blaney", "FirstName": "Luke", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/luke-blaney.jpg", "twitter": "@lucas42", "org": "Financial Times"},
    {"Surname": "Davies", "FirstName": "Andy", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/andy-davies.jpg", "twitter": "@AndyDavies", "org": "NCC Group"},
    {"Surname": "Hales", "FirstName": "Wesley", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/wesley-hales.jpg", "twitter": "@wesleyhales", "org": "Shape Security"},
    {"Surname": "Meenan", "FirstName": "Pat", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/pat-meenan.jpg", "twitter": "@patmeenan", "org": "Google"},
    {"Surname": "Hedenskog", "FirstName": "Peter", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/peter-hedenskog.jpg", "twitter": "@soulislove", "org": "Cybercom Group"}
  ], "questions": ["Using branched-loading, The Guardian have made their new website responsive, yet 42% smaller on mobile than on desktop. Does this end the performance arguments against responsive web design? Are there still cases when a separate mobile site is best?", "Do concatenation and spriting become anti-patterns with the advent of HTTP2?  If so, when is the tipping point?", "As Steve Souders said last year \"We need to move past the onload\" metric. What is the new golden metric?", "We are now very well equipped to measure initial page load performance, yet we are seeing a rise in large-scale long-living single page applications - do we need new tools, mew metrics, new visualisations", "What role will automated FEO (front end optimisation) tools play in our increasingly complex world? Do they add yet another complicated layer of abstraction or will they become a necessity?", "How should teams balance branding and personality against performance? Benefit of Branding versus Benefit of Speed?", "What one thing would you like browser to do to improve page load performance?", "How do I know when my content is \"fast enough\"?"]}, "pointers_and_interactions": {"panelists": [
    {"Surname": "Beeby", "FirstName": "Martin", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/martin-beeby.jpg", "twitter": "@thebeebs", "org": "Microsoft"},
    {"Surname": "Workman", "FirstName": "Steve", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/steve-workman.jpg", "twitter": "@steveworkman", "org": "Hibu"},
    {"Surname": "Lauke", "FirstName": "Patrick", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/patrick-lauke.jpg", "twitter": "@patrick_h_lauke", "org": "The Paciello Group"},
    {"Surname": "Byers", "FirstName": "Rick", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/rick-byers.jpg", "twitter": "@RickByers", "org": "Google"},
    {"Surname": "Tangelder", "FirstName": "Jorik", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/jorik-tangelder.jpg", "twitter": "@jorikdelaporik", "org": "Eight Media"},
    {"Surname": "Smart", "FirstName": "Peter", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/peter-smart.jpg", "twitter": "@petewsmart", "org": "Vizicities"}
  ], "questions": ["Web apps that use touch gestures can have problems with iframes swallowing touch events.  Is the web developer hamstrung by their inability to extert complete control over user interaction", "Is there a case for 'custom' gestures that users would be unfamiliar with, rather than standardising a set of gestures that are semantically well understood?", "Browsing the web on devices like Google Glass is a very different experience. As they do not have the traditional methods of input, how do we develop\/adapt web pages to better support such devices? Would a device information API be a good idea?", "Touch events are a very simple mechanism for touch, whereas pointer events are a far more detailed abstraction. Should a browser vendor ideally implement one or the other, offer both separately, or some kind of combined model?", "Are pointer events overcomplicating touch interactions?", "D-Pads, TV screens and multiple users interacting on a single screen, are all scenarios we currently consider non-traditional.  Which of these will become mainstream most quickly and why?", "As \"The Internet of Things\" moves from its infancy, opportunities for interaction are no longer limited to traditional devices. How might new forms of interaction be applied to existing appliances and tools? From fridges to surgical equipment."]}, "accessibility": {"panelists": [
    {"Surname": "Heilmann", "FirstName": "Chris", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/chris-heilmann.jpg", "twitter": "@codepo8", "org": "Mozilla"},
    {"Surname": "Lewthwaite", "FirstName": "Sarah", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/sarah-lewthwaite.jpg", "twitter": "@slewth", "org": "King's College London"},
    {"Surname": "Ronksley", "FirstName": "Andrew", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/andrew-ronksley.jpg", "twitter": "@andrewronksley", "org": "RNIB"},
    {"Surname": "Featherstone", "FirstName": "Derek", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/derek-featherstone.jpg", "twitter": "@feather", "org": "Simply Accessible"},
    {"Surname": "Boxhall", "FirstName": "Alice", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/alice-boxhall.jpg", "twitter": "@alice_boxhall", "org": "Google"},
    {"Surname": "Atkinson", "FirstName": "Matthew Tylee", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/matthew-tylee-atkinson.jpg", "twitter": "@matatk", "org": "The Paciello Group"}
  ], "questions": ["What are the main offenders of \"modern websites\" in terms of accessibility? What can be done to fix that?\n", "Accessibility expectations and requirements are vastly different depending on the user's world region. What more could be done to align them? Example: Most EU rules say don't autoplay media. However most US media will autoplay.", "Are the WCAG guidelines redundant in a world of smartphones and tablets? Are accessibility laws trying to fix an outdated world?", "As an industry developers often think accessibility is just about making a site work for screen readers, what other accessibility concerns should we be thinking about when developing sites?", "Many people promote ARIA as the magic bullet to make everything accessible no matter what HTML you write. In a world of \"write less, achieve more\" ARIA seems very verbose and \"old school\". Can ARIA be redundant when components are accessible to all user agents out-of-the-box?", "How do you prioritise accessibility in your workflow? Right now it seems reactive and something you \"need to do\". What can we do to make it just the thing to do?", "Writing keyboard accessible widgets is a mine-field across browsers and form factors. There is a keyboard spec in the W3C Level 3 Events spec but no browser implements it fully. Why is that and would it solve all our problems?\n"]}, "future_web": {"panelists": [
    {"Surname": "Rabin", "FirstName": "Jo", "mod": true, "pic": "http:\/\/edgeconf.com\/images\/heads\/jo-rabin.jpg", "twitter": "@jorabin", "org": "Sponge Mobile"},
    {"Surname": "Ashworth", "FirstName": "Tom", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/tom-ashworth.jpg", "twitter": null, "org": "Twitter"},
    {"Surname": "Bartlett", "FirstName": "Alice", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/alice-bartlett.jpg", "twitter": "@alicebartlett", "org": "Government Digital Service"},
    {"Surname": "Jenson", "FirstName": "Scott", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/scott-jenson.jpg", "twitter": "@scottjenson", "org": "Google"},
    {"Surname": "Tennison", "FirstName": "Jeni", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/jeni-tennison.jpg", "twitter": "@JeniT", "org": "Open Data Institute"},
    {"Surname": "Spooner", "FirstName": "Andrew", "mod": false, "pic": "http:\/\/edgeconf.com\/images\/heads\/andrew-spooner.jpg", "twitter": "@andspo", "org": "Microsoft"}
  ], "questions": ["What is the role of the web in the world of wearables with no screen?", "The future of the web will see a rising importance in optimising sites for use in China and working with their national firewall. Many popular embeddable services such as YouTube are blocked. How do we accommodate different national attitudes to privacy, sensitive content, inappropriate content and so on?", "Does the \"future of the web\" hinge more on us converging and consolidating functionality on pre-agreed standards, or - as is suggested by the Extensible Web Manifesto -  on empowering developers at a lower-level to do whatever they want and effectively create their own de-facto standards? Will it increase the trend of the Web \"incrementing itself to death\"?", "In its march toward increasing sophistication is the Web losing touch with being easy to learn and therefore accessible to a very broad authorship community?", "Historically the Web had a publisher vs consumer model. With WebRTC and to choose Snapschat as a product example, is the future of the Web peer-to-peer publishing and consumption?", "Is the web going to grow into all-encompassing platform for all future computing? Is there any area which will be spared? By contrast, Is the future of the web just providing APIs for native applications to be built?", "Web developers and even corporations that are outside the browser vendor community have the feeling of being a prisoner to decisions others make, with often limited means to address certain problems. Who should be determining the future of the Web and how?"]}
  };

  var selectedPanel,
  panelTitle = document.getElementById('panel-title'),
  shortUrl = (document.getElementById('short-url') || {});
  switch (parseInt(sessionID, 10)) {
    case 578:
      selectedPanel = allpanels.components;
      panelTitle.innerHTML = "Components";
      shortUrl.innerHTML = "goo.gl/v3E8Wt";
      break;
    case 579:
      selectedPanel = allpanels.developer_tooling;
      panelTitle.innerHTML = "Developer Tooling";
      shortUrl.innerHTML = "goo.gl/jrGNll";
      break;
    case 580:
      selectedPanel = allpanels.build_process;
      panelTitle.innerHTML = "Build Process";
      shortUrl.innerHTML = "goo.gl/Zaf7BI";
      break;
    case 581:
      selectedPanel = allpanels.page_load_performance;
      panelTitle.innerHTML = "Page Load Performance";
      shortUrl.innerHTML = "goo.gl/vGkdl7";
      break;
    case 582:
      selectedPanel = allpanels.pointers_and_interactions;
      panelTitle.innerHTML = "Pointers and Interactions";
      shortUrl.innerHTML = "goo.gl/dERgy6";
      break;
    case 583:
      selectedPanel = allpanels.accessibility;
      panelTitle.innerHTML = "Accessibility";
      shortUrl.innerHTML = "goo.gl/YmcYuX";
      break;
    case 584:
      selectedPanel = allpanels.future_web;
      panelTitle.innerHTML = "Future Web";
      shortUrl.innerHTML = "goo.gl/4VBLdK";
      break;
  }
  return selectedPanel;
}