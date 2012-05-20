var args = arguments;

(function() {

  // first argument is the output type (console, xml, or gcc)
  var output = args[0];

  // followed by the list of files to check
  var files = args.slice(1);

  if(files.length === 0 && output === 'console') {
    print('No input files');
    quit(0);
  }

  // formats the error as a 2 line message with explicit
  // line and column information
  var formatStandard = function(error) {
    return '    ' +
      '(line: ' + error.line + ', character: ' + error.character + ')\n    ' +
      (error.evidience ? error.evidence.replace(/^\s+|\s+$/g, '') + '\n' : '') +
      error.reason + '\n';
  };

  // formats the error as a compact gcc style message
  var formatGcc = function(error) {
    var message = (error.evidience ? error.evidence.replace(/^\s+|\s+$/g, '') + '\n' : '') + error.reason;
    return '(' + error.line + '): JSHint warning: ' + message;
  };

  // prints the result formatted for console display
  var printResultConsole = function(result) {
    var count = 0;
    for(var filename in result) {
      if(!result.hasOwnProperty(filename)) continue;

      var errors = result[filename];
      if(errors.length > 0) {
        if(count === 0) {
          print('\n***** JSHint Errors Found *****\n');
        }
        print('* ' + filename);
      }

      for(var i=0; i<errors.length; i++) {
        count++;
        print(formatStandard(errors[i]));
      }
    }
  };

  // escapes the value for XML
  var escapeXml = function(value) {
    var escaped = value.replace(/&/g, '&amp;');
    escaped = escaped.replace(/"/g, '&quot;');
    escaped = escaped.replace(/'/g, '&apos;');
    escaped = escaped.replace(/</g, '&lt;');
    escaped = escaped.replace(/>/g, '&gt;');
    escaped = escaped.replace(/\n/g, '&#10;');
    return escaped;
  };

  // prints the result formatted as JUnit compatible XML
  var printResultXml = function(result) {
    print('<testsuite>');
    for(var filename in result) {
      if(!result.hasOwnProperty(filename)) continue;

      var errors = result[filename];
      if(errors.length === 0) {
        print("  <testcase classname='" + filename + "' name='" + filename + "'/>");
      }
      else {
        for(var i=0; i<errors.length; i++) {
          print("  <testcase classname='" + filename + "' name='" + filename + "'>");
          print("    <failure type='JS Lint'>" + escapeXml(formatStandard(errors[i])) + '</failure>');
          print("  </testcase>");
        }
      }
    }
    print('</testsuite>');
  };

  // prints the result formatted as GCC style messages: 
  var printResultGcc = function(result) {
    for(var filename in result) {
      if(!result.hasOwnProperty(filename)) continue;

      var errors = result[filename];
      for(var i=0; i<result[filename].length; i++) {
        print(filename + formatGcc(errors[i]));
      }
    }
  };

  // result object of the form: filename -> [error, error, ...]
  var result = {};
  for(var i=0; i<files.length; i++) {
    var file = files[i];
    if(!file) continue;

    var input = read(file);
    if(!input) continue;

    var errors = [];
    if(!JSHINT(input, JSHINT_OPTIONS, JSHINT_GLOBALS)) {
      JSHINT.errors.forEach(function (error) {
        if(!!error) errors.push(error);
      });
    }
    result[file] = errors;
  }

  switch(output) {
    case 'xml' :
      printResultXml(result);
      break;

    case 'gcc' :
      printResultGcc(result);
      break;

    case 'console' :
    default :
      printResultConsole(result);
      break;
  }

  return 0;
})();

quit(0); 

