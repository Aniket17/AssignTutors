/* parser generated by jison 0.4.4 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
	EOF: 1,
	parseError: function(str, hash),
	setInput: function(input),
	input: function(),
	unput: function(str),
	more: function(),
	less: function(n),
	pastInput: function(),
	upcomingInput: function(),
	showPosition: function(),
	test_match: function(regex_match_array, rule_index),
	next: function(),
	lex: function(),
	begin: function(condition),
	popState: function(),
	_currentRules: function(),
	topState: function(),
	pushState: function(condition),

	options: {
	    ranges: boolean           (optional: true ==> token location info will include a .range[] member)
	    flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
	    backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
	},

	performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
	rules: [...],
	conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function() {
    var parser = {
	trace: function trace() {},
	yy: {},
	symbols_: {
	    "error": 2,
	    "expressions": 3,
	    "e": 4,
	    "EOF": 5,
	    "+": 6,
	    "-": 7,
	    "*": 8,
	    "/": 9,
	    ">": 10,
	    "<": 11,
	    "=": 12,
	    "^": 13,
	    "MOD": 14,
	    "(": 15,
	    ")": 16,
	    "ABS": 17,
	    "ROUND": 18,
	    "FLOOR": 19,
	    "CEIL": 20,
	    "SQRT": 21,
	    "IF": 22,
	    ",": 23,
	    "MAX": 24,
	    "MIN": 25,
	    "AVG": 26,
	    "SUM": 27,
	    "NUMBER": 28,
	    "E": 29,
	    "PI": 30,
	    "$accept": 0,
	    "$end": 1
	},
	terminals_: {
	    2: "error",
	    5: "EOF",
	    6: "+",
	    7: "-",
	    8: "*",
	    9: "/",
	    10: ">",
	    11: "<",
	    12: "=",
	    13: "^",
	    14: "MOD",
	    15: "(",
	    16: ")",
	    17: "ABS",
	    18: "ROUND",
	    19: "FLOOR",
	    20: "CEIL",
	    21: "SQRT",
	    22: "IF",
	    23: ",",
	    24: "MAX",
	    25: "MIN",
	    26: "AVG",
	    27: "SUM",
	    28: "NUMBER",
	    29: "E",
	    30: "PI"
	},
	productions_: [0, [3, 2],
	    [4, 3],
	    [4, 3],
	    [4, 3],
	    [4, 3],
	    [4, 3],
	    [4, 3],
	    [4, 4],
	    [4, 4],
	    [4, 3],
	    [4, 4],
	    [4, 3],
	    [4, 3],
	    [4, 3],
	    [4, 4],
	    [4, 4],
	    [4, 4],
	    [4, 4],
	    [4, 4],
	    [4, 8],
	    [4, 6],
	    [4, 6],
	    [4, 6],
	    [4, 6],
	    [4, 2],
	    [4, 1],
	    [4, 1],
	    [4, 1]
	],
	performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$) { /* this == yyval */

	    var $0 = $$.length - 1;
	    switch (yystate) {
	    case 1:
		return $$[$0 - 1];
		break;
	    case 2:
		this.$ = $$[$0 - 2] + $$[$0];
		break;
	    case 3:
		this.$ = $$[$0 - 2] - $$[$0];
		break;
	    case 4:
		this.$ = $$[$0 - 2] * $$[$0];
		break;
	    case 5:
		this.$ = $$[$0 - 2] / $$[$0];
		break;
	    case 6:
		this.$ = $$[$0 - 2] > $$[$0];
	        break;
	    case 7:
		this.$ = $$[$0 - 2] < $$[$0];
	        break;
	    case 8:
		this.$ = $$[$0 - 3] >= $$[$0];
	        break;
	    case 9:
		this.$ = $$[$0 - 3] <= $$[$0];
	        break;
	    case 10:
		this.$ = $$[$0 - 2] == $$[$0];
	        break;
	    case 11:
		this.$ = $$[$0 - 3] != $$[$0];
	        break;
	    case 12:
		this.$ = Math.pow($$[$0 - 2], $$[$0]);
		break;
	    case 13:
		this.$ = $$[$0 - 2] % $$[$0];
		break;
	    case 14:
		this.$ = $$[$0 - 1];
		break;
	    case 15:
		this.$ = Math.abs($$[$0 - 1]);
		break;
	    case 16:
		this.$ = Math.round($$[$0 - 1]);
		break;
	    case 17:
		this.$ = Math.floor($$[$0 - 1]);
		break;
	    case 18:
		this.$ = Math.ceil($$[$0 - 1]);
		break;
	    case 19:
		this.$ = Math.sqrt($$[$0 - 1]);
		break;
	    case 20:
		this.$ = ($$[$0 - 5]) ? $$[$0 - 3] : $$[$0 - 1];
		break;
	    case 21:
		this.$ = utility.max($$[$0 - 3], $$[$0 - 1]);
		break;
	    case 22:
		this.$ = utility.min($$[$0 - 3], $$[$0 - 1]);
		break;
	    case 23:
		this.$ = utility.avg($$[$0 - 3], $$[$0 - 1]);
		break;
	    case 24:
		this.$ = utility.sum($$[$0 - 3], $$[$0 - 1]);
		break;
	    case 25:
		this.$ = -$$[$0];
		break;
	    case 26:
		this.$ = Number(yytext);
		break;
	    case 27:
		this.$ = Math.E;
		break;
	    case 28:
		this.$ = Math.PI;
		break;
	    }
	},
	table: [{
	    3: 1,
	    4: 2,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    1: [3]
	}, {
	    5: [1, 18],
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27]
	}, {
	    4: 28,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    15: [1, 29]
	}, {
	    15: [1, 30]
	}, {
	    15: [1, 31]
	}, {
	    15: [1, 32]
	}, {
	    15: [1, 33]
	}, {
	    15: [1, 34]
	}, {
	    15: [1, 35]
	}, {
	    15: [1, 36]
	}, {
	    15: [1, 37]
	}, {
	    15: [1, 38]
	}, {
	    4: 39,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    5: [2, 26],
	    6: [2, 26],
	    7: [2, 26],
	    8: [2, 26],
	    9: [2, 26],
	    10: [2, 26],
	    11: [2, 26],
	    12: [2, 26],
	    13: [2, 26],
	    14: [2, 26],
	    16: [2, 26],
	    23: [2, 26]
	}, {
	    5: [2, 27],
	    6: [2, 27],
	    7: [2, 27],
	    8: [2, 27],
	    9: [2, 27],
	    10: [2, 27],
	    11: [2, 27],
	    12: [2, 27],
	    13: [2, 27],
	    14: [2, 27],
	    16: [2, 27],
	    23: [2, 27]
	}, {
	    5: [2, 28],
	    6: [2, 28],
	    7: [2, 28],
	    8: [2, 28],
	    9: [2, 28],
	    10: [2, 28],
	    11: [2, 28],
	    12: [2, 28],
	    13: [2, 28],
	    14: [2, 28],
	    16: [2, 28],
	    23: [2, 28]
	}, {
	    1: [2, 1]
	}, {
	    4: 40,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 41,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 42,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 43,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 44,
	    7: [1, 14],
	    12: [1, 45],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 46,
	    7: [1, 14],
	    10: [1, 48],
	    12: [1, 47],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 49,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 50,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 51,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 52]
	}, {
	    4: 53,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 54,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 55,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 56,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 57,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 58,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 59,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 60,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 61,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 62,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    5: [2, 25],
	    6: [2, 25],
	    7: [2, 25],
	    8: [2, 25],
	    9: [2, 25],
	    10: [2, 25],
	    11: [2, 25],
	    12: [2, 25],
	    13: [2, 25],
	    14: [2, 25],
	    16: [2, 25],
	    23: [2, 25]
	}, {
	    5: [2, 2],
	    6: [2, 2],
	    7: [2, 2],
	    8: [1, 21],
	    9: [1, 22],
	    10: [2, 2],
	    11: [2, 2],
	    12: [2, 2],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 2],
	    23: [2, 2]
	}, {
	    5: [2, 3],
	    6: [2, 3],
	    7: [2, 3],
	    8: [1, 21],
	    9: [1, 22],
	    10: [2, 3],
	    11: [2, 3],
	    12: [2, 3],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 3],
	    23: [2, 3]
	}, {
	    5: [2, 4],
	    6: [2, 4],
	    7: [2, 4],
	    8: [2, 4],
	    9: [2, 4],
	    10: [2, 4],
	    11: [2, 4],
	    12: [2, 4],
	    13: [1, 26],
	    14: [2, 4],
	    16: [2, 4],
	    23: [2, 4]
	}, {
	    5: [2, 5],
	    6: [2, 5],
	    7: [2, 5],
	    8: [2, 5],
	    9: [2, 5],
	    10: [2, 5],
	    11: [2, 5],
	    12: [2, 5],
	    13: [1, 26],
	    14: [2, 5],
	    16: [2, 5],
	    23: [2, 5]
	}, {
	    5: [2, 6],
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [2, 6],
	    11: [2, 6],
	    12: [2, 6],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 6],
	    23: [2, 6]
	}, {
	    4: 63,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    5: [2, 7],
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [2, 7],
	    11: [2, 7],
	    12: [2, 7],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 7],
	    23: [2, 7]
	}, {
	    4: 64,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 65,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    5: [2, 10],
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [2, 10],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 10],
	    23: [2, 10]
	}, {
	    5: [2, 12],
	    6: [2, 12],
	    7: [2, 12],
	    8: [2, 12],
	    9: [2, 12],
	    10: [2, 12],
	    11: [2, 12],
	    12: [2, 12],
	    13: [2, 12],
	    14: [2, 12],
	    16: [2, 12],
	    23: [2, 12]
	}, {
	    5: [2, 13],
	    6: [2, 13],
	    7: [2, 13],
	    8: [2, 13],
	    9: [2, 13],
	    10: [2, 13],
	    11: [2, 13],
	    12: [2, 13],
	    13: [1, 26],
	    14: [2, 13],
	    16: [2, 13],
	    23: [2, 13]
	}, {
	    5: [2, 14],
	    6: [2, 14],
	    7: [2, 14],
	    8: [2, 14],
	    9: [2, 14],
	    10: [2, 14],
	    11: [2, 14],
	    12: [2, 14],
	    13: [2, 14],
	    14: [2, 14],
	    16: [2, 14],
	    23: [2, 14]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 66]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 67]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 68]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 69]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 70]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    23: [1, 71]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    23: [1, 72]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    23: [1, 73]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    23: [1, 74]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    23: [1, 75]
	}, {
	    5: [2, 8],
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [2, 8],
	    11: [2, 8],
	    12: [2, 8],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 8],
	    23: [2, 8]
	}, {
	    5: [2, 9],
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [2, 9],
	    11: [2, 9],
	    12: [2, 9],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 9],
	    23: [2, 9]
	}, {
	    5: [2, 11],
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [2, 11],
	    11: [2, 11],
	    12: [2, 11],
	    13: [1, 26],
	    14: [1, 27],
	    16: [2, 11],
	    23: [2, 11]
	}, {
	    5: [2, 15],
	    6: [2, 15],
	    7: [2, 15],
	    8: [2, 15],
	    9: [2, 15],
	    10: [2, 15],
	    11: [2, 15],
	    12: [2, 15],
	    13: [2, 15],
	    14: [2, 15],
	    16: [2, 15],
	    23: [2, 15]
	}, {
	    5: [2, 16],
	    6: [2, 16],
	    7: [2, 16],
	    8: [2, 16],
	    9: [2, 16],
	    10: [2, 16],
	    11: [2, 16],
	    12: [2, 16],
	    13: [2, 16],
	    14: [2, 16],
	    16: [2, 16],
	    23: [2, 16]
	}, {
	    5: [2, 17],
	    6: [2, 17],
	    7: [2, 17],
	    8: [2, 17],
	    9: [2, 17],
	    10: [2, 17],
	    11: [2, 17],
	    12: [2, 17],
	    13: [2, 17],
	    14: [2, 17],
	    16: [2, 17],
	    23: [2, 17]
	}, {
	    5: [2, 18],
	    6: [2, 18],
	    7: [2, 18],
	    8: [2, 18],
	    9: [2, 18],
	    10: [2, 18],
	    11: [2, 18],
	    12: [2, 18],
	    13: [2, 18],
	    14: [2, 18],
	    16: [2, 18],
	    23: [2, 18]
	}, {
	    5: [2, 19],
	    6: [2, 19],
	    7: [2, 19],
	    8: [2, 19],
	    9: [2, 19],
	    10: [2, 19],
	    11: [2, 19],
	    12: [2, 19],
	    13: [2, 19],
	    14: [2, 19],
	    16: [2, 19],
	    23: [2, 19]
	}, {
	    4: 76,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 77,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 78,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 79,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    4: 80,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    23: [1, 81]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 82]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 83]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 84]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 85]
	}, {
	    4: 86,
	    7: [1, 14],
	    15: [1, 3],
	    17: [1, 4],
	    18: [1, 5],
	    19: [1, 6],
	    20: [1, 7],
	    21: [1, 8],
	    22: [1, 9],
	    24: [1, 10],
	    25: [1, 11],
	    26: [1, 12],
	    27: [1, 13],
	    28: [1, 15],
	    29: [1, 16],
	    30: [1, 17]
	}, {
	    5: [2, 21],
	    6: [2, 21],
	    7: [2, 21],
	    8: [2, 21],
	    9: [2, 21],
	    10: [2, 21],
	    11: [2, 21],
	    12: [2, 21],
	    13: [2, 21],
	    14: [2, 21],
	    16: [2, 21],
	    23: [2, 21]
	}, {
	    5: [2, 22],
	    6: [2, 22],
	    7: [2, 22],
	    8: [2, 22],
	    9: [2, 22],
	    10: [2, 22],
	    11: [2, 22],
	    12: [2, 22],
	    13: [2, 22],
	    14: [2, 22],
	    16: [2, 22],
	    23: [2, 22]
	}, {
	    5: [2, 23],
	    6: [2, 23],
	    7: [2, 23],
	    8: [2, 23],
	    9: [2, 23],
	    10: [2, 23],
	    11: [2, 23],
	    12: [2, 23],
	    13: [2, 23],
	    14: [2, 23],
	    16: [2, 23],
	    23: [2, 23]
	}, {
	    5: [2, 24],
	    6: [2, 24],
	    7: [2, 24],
	    8: [2, 24],
	    9: [2, 24],
	    10: [2, 24],
	    11: [2, 24],
	    12: [2, 24],
	    13: [2, 24],
	    14: [2, 24],
	    16: [2, 24],
	    23: [2, 24]
	}, {
	    6: [1, 19],
	    7: [1, 20],
	    8: [1, 21],
	    9: [1, 22],
	    10: [1, 23],
	    11: [1, 24],
	    12: [1, 25],
	    13: [1, 26],
	    14: [1, 27],
	    16: [1, 87]
	}, {
	    5: [2, 20],
	    6: [2, 20],
	    7: [2, 20],
	    8: [2, 20],
	    9: [2, 20],
	    10: [2, 20],
	    11: [2, 20],
	    12: [2, 20],
	    13: [2, 20],
	    14: [2, 20],
	    16: [2, 20],
	    23: [2, 20]
	}],
	defaultActions: {
	    18: [2, 1]
	},
	parseError: function parseError(str, hash) {
	    if (hash.recoverable) {
		this.trace(str);
	    } else {
		throw new Error(str);
	    }
	},
	parse: function parse(input) {
	    var self = this,
		stack = [0],
		vstack = [null],
		lstack = [],
		table = this.table,
		yytext = '',
		yylineno = 0,
		yyleng = 0,
		recovering = 0,
		TERROR = 2,
		EOF = 1;
	    this.lexer.setInput(input);
	    this.lexer.yy = this.yy;
	    this.yy.lexer = this.lexer;
	    this.yy.parser = this;
	    if (typeof this.lexer.yylloc == 'undefined') {
		this.lexer.yylloc = {};
	    }
	    var yyloc = this.lexer.yylloc;
	    lstack.push(yyloc);
	    var ranges = this.lexer.options && this.lexer.options.ranges;
	    if (typeof this.yy.parseError === 'function') {
		this.parseError = this.yy.parseError;
	    } else {
		this.parseError = Object.getPrototypeOf(this).parseError;
	    }

	    function popStack(n) {
		stack.length = stack.length - 2 * n;
		vstack.length = vstack.length - n;
		lstack.length = lstack.length - n;
	    }

	    function lex() {
		var token;
		token = self.lexer.lex() || EOF;
		if (typeof token !== 'number') {
		    token = self.symbols_[token] || token;
		}
		return token;
	    }
	    var symbol, preErrorSymbol, state, action, a, r, yyval = {},
		p, len, newState, expected;
	    while (true) {
		state = stack[stack.length - 1];
		if (this.defaultActions[state]) {
		    action = this.defaultActions[state];
		} else {
		    if (symbol === null || typeof symbol == 'undefined') {
			symbol = lex();
		    }
		    action = table[state] && table[state][symbol];
		}
		if (typeof action === 'undefined' || !action.length || !action[0]) {
		    var errStr = '';
		    expected = [];
		    for (p in table[state]) {
			if (this.terminals_[p] && p > TERROR) {
			    expected.push('\'' + this.terminals_[p] + '\'');
			}
		    }
		    if (this.lexer.showPosition) {
			errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + this.lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
		    } else {
			errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
		    }
		    this.parseError(errStr, {
			text: this.lexer.match,
			token: this.terminals_[symbol] || symbol,
			line: this.lexer.yylineno,
			loc: yyloc,
			expected: expected
		    });
		}
		if (action[0] instanceof Array && action.length > 1) {
		    throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
		}
		switch (action[0]) {
		case 1:
		    stack.push(symbol);
		    vstack.push(this.lexer.yytext);
		    lstack.push(this.lexer.yylloc);
		    stack.push(action[1]);
		    symbol = null;
		    if (!preErrorSymbol) {
			yyleng = this.lexer.yyleng;
			yytext = this.lexer.yytext;
			yylineno = this.lexer.yylineno;
			yyloc = this.lexer.yylloc;
			if (recovering > 0) {
			    recovering--;
			}
		    } else {
			symbol = preErrorSymbol;
			preErrorSymbol = null;
		    }
		    break;
		case 2:
		    len = this.productions_[action[1]][1];
		    yyval.$ = vstack[vstack.length - len];
		    yyval._$ = {
			first_line: lstack[lstack.length - (len || 1)].first_line,
			last_line: lstack[lstack.length - 1].last_line,
			first_column: lstack[lstack.length - (len || 1)].first_column,
			last_column: lstack[lstack.length - 1].last_column
		    };
		    if (ranges) {
			yyval._$.range = [
			lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
		    }
		    r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
		    if (typeof r !== 'undefined') {
			return r;
		    }
		    if (len) {
			stack = stack.slice(0, -1 * len * 2);
			vstack = vstack.slice(0, -1 * len);
			lstack = lstack.slice(0, -1 * len);
		    }
		    stack.push(this.productions_[action[1]][0]);
		    vstack.push(yyval.$);
		    lstack.push(yyval._$);
		    newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
		    stack.push(newState);
		    break;
		case 3:
		    return true;
		}
	    }
	    return true;
	}
    }; /* generated by jison-lex 0.2.0 */
    var lexer = (function() {
	var lexer = {

	    EOF: 1,

	    parseError: function parseError(str, hash) {
		if (this.yy.parser) {
		    this.yy.parser.parseError(str, hash);
		} else {
		    throw new Error(str);
		}
	    },

	    // resets the lexer, sets new input
	    setInput: function(input) {
		this._input = input;
		this._more = this._backtrack = this.done = false;
		this.yylineno = this.yyleng = 0;
		this.yytext = this.matched = this.match = "";
		this.conditionStack = ["INITIAL"];
		this.yylloc = {
		    first_line: 1,
		    first_column: 0,
		    last_line: 1,
		    last_column: 0
		};
		if (this.options.ranges) {
		    this.yylloc.range = [0, 0];
		}
		this.offset = 0;
		return this;
	    },

	    // consumes and returns one char from the input
	    input: function() {
		var ch = this._input[0];
		this.yytext += ch;
		this.yyleng++;
		this.offset++;
		this.match += ch;
		this.matched += ch;
		var lines = ch.match(/(?:\r\n?|\n).*/g);
		if (lines) {
		    this.yylineno++;
		    this.yylloc.last_line++;
		} else {
		    this.yylloc.last_column++;
		}
		if (this.options.ranges) {
		    this.yylloc.range[1]++;
		}
		this._input = this._input.slice(1);
		return ch;
	    },

	    // unshifts one char (or a string) into the input
	    unput: function(ch) {
		var len = ch.length;
		var lines = ch.split(/(?:\r\n?|\n)/g);
		this._input = ch + this._input;
		this.yytext = this.yytext.substr(0, this.yytext.length - len - 1);
		this.offset -= len;
		var oldLines = this.match.split(/(?:\r\n?|\n)/g);
		this.match = this.match.substr(0, this.match.length - 1);
		this.matched = this.matched.substr(0, this.matched.length - 1);
		if (lines.length - 1) {
		    this.yylineno -= lines.length - 1;
		}
		var r = this.yylloc.range;
		this.yylloc = {
		    first_line: this.yylloc.first_line,
		    last_line: this.yylineno + 1,
		    first_column: this.yylloc.first_column,
		    last_column: lines ? (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length : this.yylloc.first_column - len
		};
		if (this.options.ranges) {
		    this.yylloc.range = [r[0], r[0] + this.yyleng - len];
		}
		this.yyleng = this.yytext.length;
		return this;
	    },

	    // When called from action, caches matched text and appends it on next action
	    more: function() {
		this._more = true;
		return this;
	    },

	    // When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
	    reject: function() {
		if (this.options.backtrack_lexer) {
		    this._backtrack = true;
		} else {
		    return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n" + this.showPosition(), {
			text: "",
			token: null,
			line: this.yylineno
		    });
		}
		return this;
	    },

	    // retain first n characters of the match
	    less: function(n) {
		this.unput(this.match.slice(n));
	    },

	    // displays already matched input, i.e. for error messages
	    pastInput: function() {
		var past = this.matched.substr(0, this.matched.length - this.match.length);
		return (past.length > 20 ? "..." : "") + past.substr(-20).replace(/\n/g, "");
	    },

	    // displays upcoming input, i.e. for error messages
	    upcomingInput: function() {
		var next = this.match;
		if (next.length < 20) {
		    next += this._input.substr(0, 20 - next.length);
		}
		return (next.substr(0, 20) + (next.length > 20 ? "..." : "")).replace(/\n/g, "");
	    },

	    // displays the character position where the lexing error occurred, i.e. for error messages
	    showPosition: function() {
		var pre = this.pastInput();
		var c = new Array(pre.length + 1).join("-");
		return pre + this.upcomingInput() + "\n" + c + "^";
	    },

	    // test the lexed token: return FALSE when not a match, otherwise return token
	    test_match: function(match, indexed_rule) {
		var token, lines, backup;
		if (this.options.backtrack_lexer) {
		    backup = {
			yylineno: this.yylineno,
			yylloc: {
			    first_line: this.yylloc.first_line,
			    last_line: this.last_line,
			    first_column: this.yylloc.first_column,
			    last_column: this.yylloc.last_column
			},
			yytext: this.yytext,
			match: this.match,
			matches: this.matches,
			matched: this.matched,
			yyleng: this.yyleng,
			offset: this.offset,
			_more: this._more,
			_input: this._input,
			yy: this.yy,
			conditionStack: this.conditionStack.slice(0),
			done: this.done
		    };
		    if (this.options.ranges) {
			backup.yylloc.range = this.yylloc.range.slice(0);
		    }
		}
		lines = match[0].match(/(?:\r\n?|\n).*/g);
		if (lines) {
		    this.yylineno += lines.length;
		}
		this.yylloc = {
		    first_line: this.yylloc.last_line,
		    last_line: this.yylineno + 1,
		    first_column: this.yylloc.last_column,
		    last_column: lines ? lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length
		};
		this.yytext += match[0];
		this.match += match[0];
		this.matches = match;
		this.yyleng = this.yytext.length;
		if (this.options.ranges) {
		    this.yylloc.range = [this.offset, this.offset += this.yyleng];
		}
		this._more = false;
		this._backtrack = false;
		this._input = this._input.slice(match[0].length);
		this.matched += match[0];
		token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
		if (this.done && this._input) {
		    this.done = false;
		}
		if (token) {
		    if (this.options.backtrack_lexer) {
			delete backup;
		    }
		    return token;
		} else if (this._backtrack) {
		    for (var k in backup) {
			this[k] = backup[k];
		    }
		    return false;
		}
		if (this.options.backtrack_lexer) {
		    delete backup;
		}
		return false;
	    },

	    // return next match in input
	    next: function() {
		if (this.done) {
		    return this.EOF;
		}
		if (!this._input) {
		    this.done = true;
		}
		var token, match, tempMatch, index;
		if (!this._more) {
		    this.yytext = "";
		    this.match = "";
		}
		var rules = this._currentRules();
		for (var i = 0; i < rules.length; i++) {
		    tempMatch = this._input.match(this.rules[rules[i]]);
		    if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
			match = tempMatch;
			index = i;
			if (this.options.backtrack_lexer) {
			    token = this.test_match(tempMatch, rules[i]);
			    if (token !== false) {
				return token;
			    } else if (this._backtrack) {
				match = false;
				continue;
			    } else {
				return false;
			    }
			} else if (!this.options.flex) {
			    break;
			}
		    }
		}
		if (match) {
		    token = this.test_match(match, rules[index]);
		    if (token !== false) {
			return token;
		    }
		    return false;
		}
		if (this._input === "") {
		    return this.EOF;
		} else {
		    return this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
			text: "",
			token: null,
			line: this.yylineno
		    });
		}
	    },

	    // return next match that has a token
	    lex: function lex() {
		var r = this.next();
		if (r) {
		    return r;
		} else {
		    return this.lex();
		}
	    },

	    // activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
	    begin: function begin(condition) {
		this.conditionStack.push(condition);
	    },

	    // pop the previously active lexer condition state off the condition stack
	    popState: function popState() {
		var n = this.conditionStack.length - 1;
		if (n > 0) {
		    return this.conditionStack.pop();
		} else {
		    return this.conditionStack[0];
		}
	    },

	    // produce the lexer rule set which is active for the currently active lexer condition state
	    _currentRules: function _currentRules() {
		if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
		    return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
		} else {
		    return this.conditions["INITIAL"].rules;
		}
	    },

	    // return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
	    topState: function topState(n) {
		n = this.conditionStack.length - 1 - Math.abs(n || 0);
		if (n >= 0) {
		    return this.conditionStack[n];
		} else {
		    return "INITIAL";
		}
	    },

	    // alias for begin(condition)
	    pushState: function pushState(condition) {
		this.begin(condition);
	    },

	    // return the number of states currently on the stack
	    stateStackSize: function stateStackSize() {
		return this.conditionStack.length;
	    },
	    options: {},
	    performAction: function anonymous(yy, yy_, $avoiding_name_collisions, YY_START) {

		var YYSTATE = YY_START;
		switch ($avoiding_name_collisions) {
		case 0:
		    /* skip whitespace */
		    break;
		case 1:
		    return 28;
		    break;
		case 2:
		    return 8;
		    break;
		case 3:
		    return 9;
		    break;
		case 4:
		    return 14;
		    break;
		case 5:
		    return 7;
		    break;
		case 6:
		    return 6;
		    break;
		case 7:
		    return 13;
		    break;
		case 8:
		    return 21;
		    break;
		case 9:
		    return 15;
		    break;
		case 10:
		    return 16;
		    break;
		case 11:
		    return 23;
		    break;
		case 12:
		    return 10;
		    break;
		case 13:
		    return 11;
		    break;
		case 14:
		    return 12;
		    break;
		case 15:
		    return 30;
		    break;
		case 16:
		    return 29;
		    break;
		case 17:
		    return 22;
		    break;
		case 18:
		    return 17;
		    break;
		case 19:
		    return 18;
		    break;
		case 20:
		    return 19;
		    break;
		case 21:
		    return 20;
		    break;
		case 22:
		    return 24;
		    break;
		case 23:
		    return 25;
		    break;
		case 24:
		    return 26;
		    break;
		case 25:
		    return 27;
		    break;
		case 26:
		    return 5;
		    break;
		case 27:
		    return 'INVALID';
		    break;
		}
	    },
	    rules: [/^(?:\s+)/, /^(?:[0-9]+(\.[0-9]+)?\b)/, /^(?:\*)/, /^(?:\/)/, /^(?:MOD\b)/, /^(?:-)/, /^(?:\+)/, /^(?:\^)/, /^(?:SQRT\b)/, /^(?:\()/, /^(?:\))/, /^(?:,)/, /^(?:>)/, /^(?:<)/, /^(?:=)/, /^(?:PI\b)/, /^(?:E\b)/, /^(?:IF\b)/, /^(?:ABS\b)/, /^(?:ROUND\b)/, /^(?:FLOOR\b)/, /^(?:CEIL\b)/, /^(?:MAX\b)/, /^(?:MIN\b)/, /^(?:AVG\b)/, /^(?:SUM\b)/, /^(?:$)/, /^(?:.)/],
	    conditions: {
		"INITIAL": {
		    "rules": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
		    "inclusive": true
		}
	    }
	};
	return lexer;
    })();
    parser.lexer = lexer;

    function Parser() {
	this.yy = {};
    }
    Parser.prototype = parser;
    parser.Parser = Parser;
    return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
    exports.parser = parser;
    exports.Parser = parser.Parser;
    exports.parse = function() {
	return parser.parse.apply(parser, arguments);
    };
    exports.main = function commonjsMain(args) {
	if (!args[1]) {
	    console.log("Usage: " + args[0] + " FILE");
	    process.exit(1);
	}
	var source = require("fs").readFileSync(require("path").normalize(args[1]), "utf8");
	return exports.parser.parse(source);
    };
    if (typeof module !== 'undefined' && require.main === module) {
	exports.main(process.argv.slice(1));
    }
}