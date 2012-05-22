
// list of allowed global objects
var JSHINT_GLOBALS = {
  //'alert' : true
};

var JSHINT_OPTIONS = {
  // This option prohibits the use of bitwise operators such as ^ (XOR), | (OR) and others.
  // There are two reasons why you would want to enable this option:
  //   1. Since JavaScript doesn't have integers (only doulbe precision floating-point numbers)
  //   the bitwise operators here is very slow.
  //
  //   2. Bitwise operations are very rare in JavaScript programs and very often & is simply a
  //   mistyped &&.
  bitwise : true,

  // This option requires you to always put curly braces around blocks in loops and conditionals.
  curly : true,

  // This options prohibits the use of == and != in favor of === and !==. The former try to
  // coerce values before comparing them which can lead to some unexpected results. The
  // latter don't do any coercion so they are generally safer. If you would like to learn
  // more about type coercion in JavaScript, we recommend Truth, Equality and
  // JavaScript by Angus Croll.
  // Note: even if this option is off, JSHint will check for unsafe comparisons like != null
  // unless option eqnull (see below) is turned on.
  eqeqeq : true,

  // This option requires all for in loops to filter objects' items. The for in statement
  // allows for looping through the names of all of the properties of an object including
  // those inherited throught the prototype chain. This behavior can lead to unexpected
  // items in your object so it is generally safer to always filter inherited properties out
  forin : true,

  // This option prohibits the use of immediate function invocations without wrapping them
  // in parentheses. Wrapping parentheses assists readers of your code in understanding
  // that the expression is the result of a function, and not the function itself.
  immed : true,

  // This option prohibits the use of a variable before it was defined. JavaScript has
  // function scope only and, in addition to that, all variables are always moved—or
  // hoisted— to the top of the function. This behavior can lead to some very nasty
  // bugs and that's why it is safer to always use variable only after they have been
  // explicitly defined.
  latedef : true,

  // This option requires you to capitalize names of constructor functions. Capitalizing
  // functions that are intended to be used with new operator is just a convention that
  // helps programmers to visually distinguish constructor functions from other types of
  // functions to help spot mistakes when using this.
  //
  // Not doing so won't break your code in any browsers or environments but it will be a
  // bit harder to figure out—by reading the code—if the function was supposed to be used
  // with or without new. And this is important because when the function that was intended
  // to be used with new is used without it, this will point to the global object instead
  // of a new object.
  newcap : true,

  // This option prohibits the use of arguments.caller and arguments.callee. Both .caller
  // and .callee make quite a few optimizations impossible so they were deprecated in
  // future versions of JavaScript. In fact, EcmaScript 5 forbids the use of arguments.callee
  // in strict mode.
  noarg : true,

  // This options warns when you have an empty block in your code. JSLint was originally warning
  // for all empty blocks and we simply made it optional. There were no studies reporting that
  // empty blocks in JavaScript break your code in any way.
  noempty : true,

  // This option prohibits the use of constructor functions for side-effects. Some people like to
  // call constructor functions without assigning its result to any variable:
  //   new MyConstructor();
  //
  // There is no advantage in this approach over simply calling MyConstructor since the object
  // that the operator new creates isn't used anywhere so you should generally avoid
  // constructors like this one.
  nonew : true,

  // This option prohibits the use of unary increment and decrement operators. Some people think
  // that ++ and -- reduces the quality of their coding styles and there are programming
  // languages—such as Python—that go completely without these operators.
  plusplus : true,

  // This option prohibits the use of unsafe . in regular expressions.
  regexp : true,

  // This option prohibits the use of explicitly undeclared variables. This option is very useful
  // for spotting leaking and mistyped variables.
  // If your variable is defined in another file, you can use /*global ... */ syntaxto tell
  // JSHint about it. See the About page for more information.
  undef : true,

  // This option requires all functions to run in EcmaScript 5's strict mode. Strict mode is a way
  // to opt in to a restricted variant of JavaScript. Strict mode eliminates some JavaScript pitfalls
  // that didn't cause errors by changing them to produce errors and it fixes mistakes that made
  // it difficult for JavaScript engines to perform certain optimizations.
  //
  // Note: This option enables strict mode for function scope only, it prohibits the global scoped
  // strict mode because it might break third-party widgets on your page. If you really want to use
  // global strict mode, see the globalstrict option.
  strict : false,

  // This option makes it an error to leave a trailing whitespace in your code. Trailing whitespaces
  // can be source of nasty bugs with multi-line strings in JavaScript:
  trailing : true,

  // This option suppresses warnings about missing semicolons. There is a lot of FUD about semicolon
  // spreaded by quite a few people in the community. The common myths are that semicolons are
  // required all the time (they are not) and that they are unreliable. JavaScript has a small
  // and stable rules regarding semicolons that is followed by all browsers so it is up to you
  // to decide whether you should or should not use semicolons in your code.
  asi : false,

  // This option suppresses warnging about the use of assignments in cases where
  // comparisons are expected.
  boss : false,

  // This option suppresses warnings about the debugger statements in your code.
  debug : false,

  // This option suppresses warnings about == null comparisons. Such comparisons are often useful
  // when you want to check if a variable is null or undefined.
  eqnull : false,

  // This option tells JSHint that your code uses ECMAScript 5 specific features such as getters and
  // setters. Note that not all browsers implement these features.
  es5 : false,

  // This option tells JSHint that your code uses ES.next specific features such as const and let.
  // Note that these features are not finalized yet and not all browsers implement them.
  esnext : false,

  // This option suppresses warnings about the use of eval. The use of eval is discouraged
  // because it can make your code vulnerable to various injection attacks and it makes it
  // hard for JavaScript interpreter to do certain optimizations.
  evil : false,

  // This option suppresses warnings about the use of expressions where normally you would
  // expect to see assignments or function calls. Most of the time, such code is a typo.
  // However, it is not forbidden by the spec and that's why this warning is optional.
  expr : false,

  // This option suppresses warnings about declaring variables inside of control structures while
  // accessing them later from the outside. Even though JavaScript has only two real scopes—global
  // and function—such practice leads to confusion among people new to the language and
  // hard-to-debug bugs. This is way, by default, JSHint warns about variables that are used outside
  // of their intended scope.
  funcscope : false,

  // This option suppresses warnings about the use of global strict mode. Global strict mode
  // can break third-party widgets so it is not recommended.
  globalstrict : false,

  // This option suppresses warnings about the __iterator__ property. This property is not
  // supported by all browsers so use it carefully.
  iterator : false,

  // This option suppresses warnings about missing semicolons but only when the semicolon
  // is omited for the last statement in a one-line block:
  //   var name = (function() { return 'Anton' }());
  // This is a very niche use case that is useful only when you use automatic JavaScript
  // code generators.
  lastsemic : false,

  // This option suppresses all warnings about possibly unsafe line breakings in your code.
  laxbreak : false,

  // This option suppresses warnings about functions inside of loops. Defining functions
  // inside of loops can lead to bugs
  loopfunc : false,

  // This option suppresses warnings about multi-line strings. Multi-line strings can be
  // dangerous in JavaScript because all hell breaks loose if you accidentally put a whitespace
  // in between the escape character (\) and a new line.
  // Note that even though this option allows correct multi-line strings, it still warns about
  // multi-line strings without escape characters or with anything in between the escape
  // character and a whitespace.
  multistr : false,

  // This option suppresses watnings about switches with just one case. Most of the time you
  // want to use if instead of switch if there is only one case. However, some code generators
  // prefer to generate switch statements.
  onecase : false,

  // This option suppresses warnings about the __proto__ property. This property is deprecated
  // and not supported by all browsers.
  proto : false,

  // This option suppresses warnings about unescaped - in the end of regular expressions.
  regexdash : false,

  // This option suppresses warnings about the use of script-targeted URLs—such as
  // javascript:....
  scripturl : false,

  // This option suppresses warnings about mixed tabs and spaces when the latter are used
  // for alignmnent only. The technique is called SmartTabs.
  smarttabs : false,

  // This option suppresses warnings about variable shadowing i.e. declaring a variable
  // that had been already declared somewhere in the outer scope.
  shadow : false,

  // This option suppresses warnings about using [] notation when it can be expressed in
  // dot notation: person['name'] vs. person.name.
  sub : false,

  // This option suppresses warnings about "weird" constructions like
  // new function () { ... } and new Object;. Such constructions are sometimes used to
  // produce singletons in JavaScript:
  supernew : false,

  // This option suppresses warnings about possible strict violations when the code
  // running in a strict mode and you use this in a non-constructor function. You should
  // use this option—in a function scope only—when you are positive that your use of
  // this is valid in the strict mode (for example, if you call your function using
  // Function.call).
  //
  // Note: This option can be used only inside of a function scope. JSHint will fail
  // with an error if you will try to set this option globally.
  validthis : false,

  // This option defines globals exposed by modern browsers: all the way from good ol'
  // document and navigator to the HTML5 FileReader and other new developments in the
  // browser world.
  //
  // Note: this option doesn't expose variables like alert or console. See option devel
  // for more information.
  browser : true,

  // This option defines globals exposed by CouchDB. CouchDB is a document-oriented database
  // that can be queried and indexed in a MapReduce fashion using JavaScript.
  couch : false,

  // This option defines globals that are usually used for logging poor-man's debugging:
  // console, alert, etc. It is usually a good idea to not to ship them in production because,
  // for example, console.log breaks in legacy versions of Internet Explorer.
  devel : false,

  // This option defines globals exposed by the Dojo Toolkit.
  dojo : false,

  // This option defines globals exposed by the jQuery JavaScript library.
  jquery : true,

  // This option defines globals exposed by the MooTools JavaScript framework.
  mootools : false,

  // This option defines globals available when your code is running inside of Node runtime
  // environment. Node.js is a server-side JavaScript environment that uses an asynchronous
  // event-driven model.
  node : false,

  // This option defines non-standard but widely adopted globals such as escape and unescape.
  nonstandard : false,

  // This option defines globals exposed by the Prototype JavaScript framework.
  prototypejs : false,

  // This option defines globals available when your code is running inside of Rhino runtime
  // environment. Rhino is an open-source implementation of JavaScript written entirely in Java.
  rhino : false,

  // This option defines globals available when your code is running as a script for
  // the Windows Script Host.
  wsh : false
};
