/* parser generated by jison 0.4.18 */
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
var c_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,10],$V1=[1,6],$V2=[1,7],$V3=[1,8],$V4=[1,11],$V5=[1,12],$V6=[1,13],$V7=[1,14],$V8=[1,16],$V9=[5,17,30],$Va=[5,12,17,20,23,25,30,31,33,35,37,75],$Vb=[2,62],$Vc=[1,43],$Vd=[1,41],$Ve=[1,44],$Vf=[1,35],$Vg=[1,37],$Vh=[1,45],$Vi=[1,46],$Vj=[1,48],$Vk=[1,50],$Vl=[1,54],$Vm=[1,55],$Vn=[15,19],$Vo=[1,60],$Vp=[1,68],$Vq=[1,69],$Vr=[1,70],$Vs=[1,71],$Vt=[1,72],$Vu=[1,73],$Vv=[1,74],$Vw=[1,75],$Vx=[1,76],$Vy=[1,77],$Vz=[1,78],$VA=[1,79],$VB=[1,80],$VC=[1,81],$VD=[15,17,19,29,32,45,46,47,48,49,50,51,52,53,54,55,56,57,58,65],$VE=[13,15,17,19,29,32,45,46,47,48,49,50,51,52,53,54,55,56,57,58,63,65],$VF=[2,67],$VG=[1,97],$VH=[15,17],$VI=[1,133],$VJ=[15,17,19,29,32,45,46,47,48,49,50,51,52,53,65],$VK=[15,17,19,29,32,45,46,47,48,49,50,51,52,53,54,55,65],$VL=[1,150],$VM=[1,155],$VN=[5,12,17,20,23,25,30,31,33,35,37,74,75];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements_":4,"EOF":5,"statement":6,"statements":7,"access_modifier":8,"public":9,"private":10,"type":11,"IDENTIFIER":12,"(":13,"parameters":14,")":15,"{":16,"}":17,"statement_with_semicolon":18,";":19,"while":20,"e":21,"bracket_statements":22,"switch":23,"case_statements":24,"for":25,"if_statement":26,"case_statement":27,"case":28,":":29,"break":30,"printf":31,",":32,"return":33,"=":34,"const":35,"access_array":36,"var":37,"identifiers":38,"++":39,"--":40,"+=":41,"-=":42,"*=":43,"/=":44,"?":45,"||":46,"&&":47,"<=":48,"<":49,">=":50,">":51,"==":52,"!=":53,"+":54,"-":55,"%":56,"*":57,"/":58,"not_expr":59,"!":60,"dot_expr":61,"parentheses_expr":62,".":63,"[":64,"]":65,"exprs":66,"parentheses_expr_":67,"NUMBER":68,"STRING_LITERAL":69,"parameter":70,"void":71,"types":72,"elif":73,"else":74,"if":75,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"public",10:"private",12:"IDENTIFIER",13:"(",15:")",16:"{",17:"}",19:";",20:"while",23:"switch",25:"for",28:"case",29:":",30:"break",31:"printf",32:",",33:"return",34:"=",35:"const",37:"var",39:"++",40:"--",41:"+=",42:"-=",43:"*=",44:"/=",45:"?",46:"||",47:"&&",48:"<=",49:"<",50:">=",51:">",52:"==",53:"!=",54:"+",55:"-",56:"%",57:"*",58:"/",60:"!",63:".",64:"[",65:"]",68:"NUMBER",69:"STRING_LITERAL",71:"void",74:"else",75:"if"},
productions_: [0,[3,2],[4,2],[4,1],[7,1],[8,1],[8,1],[6,8],[6,2],[6,5],[6,7],[6,9],[6,1],[27,6],[24,2],[24,1],[18,6],[18,2],[18,4],[18,5],[18,2],[18,2],[18,3],[18,3],[18,2],[18,2],[18,3],[18,3],[18,3],[18,3],[21,5],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,3],[21,2],[21,1],[59,2],[59,1],[61,3],[61,1],[36,4],[62,1],[62,3],[62,4],[62,3],[62,1],[67,2],[67,3],[67,1],[67,1],[67,1],[11,3],[11,1],[70,2],[14,3],[14,1],[14,1],[14,0],[66,3],[66,1],[72,3],[72,1],[73,7],[73,6],[73,2],[26,6],[26,5],[38,3],[38,1],[22,3],[22,2]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return ["top_level_statements",$$[$0-1]]
break;
case 2: case 14:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 15: case 49: case 65:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 7:
this.$ = ["function","public",$$[$0-7],$$[$0-6],$$[$0-4],$$[$0-1]];
break;
case 8: case 80:
this.$ = ["semicolon",$$[$0-1]];
break;
case 9:
this.$ = ["while",$$[$0-2],$$[$0]];
break;
case 10:
this.$ = ["switch",$$[$0-4],$$[$0-1]];
break;
case 11:
this.$ = ["for",$$[$0-6],$$[$0-4],$$[$0-2],$$[$0]];
break;
case 13:
this.$ = ["case",$$[$0-4],$$[$0-2]]
break;
case 16:
this.$ = ["println",$$[$0-1]];
break;
case 17:
this.$ = ["return",$$[$0]];
break;
case 18:
this.$ = ["initialize_var",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 19:
this.$ = ["initialize_constant",$$[$0-3],$$[$0-2],$$[$0]];
break;
case 20:
return ["set_array_size",$$[$0-1],$$[$0][1],$$[$0][2]];
break;
case 21:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 22: case 23:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 24: case 25:
this.$ = [$$[$0],$$[$0-1]];
break;
case 26: case 27: case 28: case 29: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 41: case 42: case 43:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 30:
this.$ = ["ternary_operator",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 40:
this.$ = ["-",$$[$0-2],$$[$0]];
break;
case 44:
this.$ = ["-",$$[$0]];
break;
case 46:
this.$ = ["!", [".",$$[$0]]];
break;
case 47:
this.$ = [".", $$[$0]];
break;
case 48: case 64: case 68: case 70: case 77:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 50:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 52:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 53:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 54:
this.$ = ["parentheses",$$[$0-1]];
break;
case 56:
this.$ = ["initializer_list","Object",[]];
break;
case 57:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 58: case 59: case 60:
this.$ = yytext;
break;
case 61:
this.$ = [$$[$0-2],"[]"];
break;
case 63:
this.$ = [$$[$0-1],$$[$0]];
break;
case 66: case 67:
this.$ = [];
break;
case 69: case 71: case 78:
this.$ = [$$[$0]];
break;
case 72:
this.$ = ["elif",$$[$0-3],$$[$0-1],$$[$0]]
break;
case 73:
this.$ = ["elif",$$[$0-2],$$[$0]]
break;
case 74:
this.$ = ["else",$$[$0]];
break;
case 75:
this.$ = ["if",$$[$0-3],$$[$0-1],$$[$0]];
break;
case 76:
this.$ = ["if",$$[$0-2],$$[$0]];
break;
case 79:
this.$= $$[$0-1];
break;
}
},
table: [{3:1,4:2,6:3,11:4,12:$V0,18:5,20:$V1,23:$V2,25:$V3,26:9,31:$V4,33:$V5,35:$V6,36:15,37:$V7,75:$V8},{1:[3]},{5:[1,17]},o($V9,[2,3],{6:3,11:4,18:5,26:9,36:15,4:18,12:$V0,20:$V1,23:$V2,25:$V3,31:$V4,33:$V5,35:$V6,37:$V7,75:$V8}),{12:[1,19],36:20},{19:[1,21]},{13:[1,22]},{13:[1,23]},{13:[1,24]},o($Va,[2,12]),{12:$Vb,34:[1,26],39:[1,27],40:[1,28],41:[1,29],42:[1,30],43:[1,31],44:[1,32],64:[1,25]},{13:[1,33]},{12:$Vc,13:$Vd,16:$Ve,21:34,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{11:47,12:$Vj},{12:$Vk,38:49},{34:[1,51]},{13:[1,52]},{1:[2,1]},o($V9,[2,2]),{13:[1,53],34:$Vl,64:$Vm},o($Vn,[2,20]),o($Va,[2,8]),{12:$Vc,13:$Vd,16:$Ve,21:56,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:57,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{11:59,12:$V0,18:58,31:$V4,33:$V5,35:$V6,36:15,37:$V7},{12:$Vc,13:$Vd,16:$Ve,21:61,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,65:$Vo,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:62,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},o($Vn,[2,24]),o($Vn,[2,25]),{12:$Vc,13:$Vd,16:$Ve,21:63,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:64,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:65,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:66,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:67,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},o($Vn,[2,17],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),{12:$Vc,13:$Vd,16:$Ve,21:82,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},o($VD,[2,45]),{12:$Vc,13:$Vd,16:$Ve,36:40,61:83,62:39,67:42,68:$Vh,69:$Vi},o($VD,[2,47]),o($VD,[2,49],{13:[1,85],63:[1,84]}),o($VE,[2,51]),{12:$Vc,13:$Vd,16:$Ve,21:86,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},o($VE,[2,55]),o($VE,[2,59],{64:$Vm}),{12:$Vc,13:$Vd,16:$Ve,17:[1,87],21:89,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,66:88,67:42,68:$Vh,69:$Vi},o($VE,[2,58]),o($VE,[2,60]),{12:[1,90]},{12:$Vb,64:[1,91]},o($Vn,[2,21]),o($Vn,[2,78],{32:[1,92]}),{12:$Vc,13:$Vd,16:$Ve,21:93,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:94,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{11:98,12:$Vj,14:95,15:$VF,70:96,71:$VG},{12:$Vc,13:$Vd,16:$Ve,21:99,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:61,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{15:[1,100],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{15:[1,101],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{19:[1,102]},{12:[1,103],36:20},{12:[2,61]},{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC,65:[1,104]},o($Vn,[2,23],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($Vn,[2,26],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($Vn,[2,27],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($Vn,[2,28],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($Vn,[2,29],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),{32:[1,105],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{12:$Vc,13:$Vd,16:$Ve,21:106,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:107,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:108,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:109,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:110,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:111,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:112,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:113,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:114,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:115,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:116,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:117,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:118,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:119,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},o($VD,[2,44]),o($VD,[2,46]),{12:$Vc,13:$Vd,16:$Ve,36:40,61:120,62:39,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,15:[1,121],16:$Ve,21:89,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,66:122,67:42,68:$Vh,69:$Vi},{15:[1,123],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},o($VE,[2,56]),{17:[1,124]},o($VH,[2,69],{32:[1,125],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),{34:[1,126]},{65:$Vo},{12:$Vk,38:127},o($Vn,[2,22],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),{15:[1,128],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{15:[1,129]},{15:[2,65],32:[1,130]},{15:[2,66]},{12:[1,131]},o($Vn,[2,18],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),{11:59,12:$V0,16:$VI,18:134,22:132,31:$V4,33:$V5,35:$V6,36:15,37:$V7},{16:[1,135]},{12:$Vc,13:$Vd,16:$Ve,21:136,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{34:$Vl,64:$Vm},o([13,15,17,19,29,32,34,45,46,47,48,49,50,51,52,53,54,55,56,57,58,63,65],[2,50]),{12:$Vc,13:$Vd,16:$Ve,21:137,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{29:[1,138],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},o([15,17,19,29,32,45,46,65],[2,31],{47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o([15,17,19,29,32,45,46,47,65],[2,32],{48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($VJ,[2,33],{54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($VJ,[2,34],{54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($VJ,[2,35],{54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($VJ,[2,36],{54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($VJ,[2,37],{54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($VJ,[2,38],{54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($VK,[2,39],{56:$VA,57:$VB,58:$VC}),o($VK,[2,40],{56:$VA,57:$VB,58:$VC}),o($VD,[2,41]),o($VD,[2,42]),o($VD,[2,43]),o($VD,[2,48]),o($VE,[2,52]),{15:[1,139]},o($VE,[2,54]),o($VE,[2,57]),{12:$Vc,13:$Vd,16:$Ve,21:89,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,66:140,67:42,68:$Vh,69:$Vi},{12:$Vc,13:$Vd,16:$Ve,21:141,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},o($Vn,[2,77]),{11:59,12:$V0,16:$VI,18:134,22:142,31:$V4,33:$V5,35:$V6,36:15,37:$V7},{16:[1,143]},{11:98,12:$Vj,14:144,15:$VF,70:96,71:$VG},o([15,32],[2,63]),o($Va,[2,9]),{4:146,6:3,7:145,11:4,12:$V0,18:5,20:$V1,23:$V2,25:$V3,26:9,31:$V4,33:$V5,35:$V6,36:15,37:$V7,75:$V8},{19:[1,147]},{24:148,27:149,28:$VL},{19:[1,151],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{15:[1,152],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{12:$Vc,13:$Vd,16:$Ve,21:153,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},o($VE,[2,53]),o($VH,[2,68]),o($Vn,[2,19],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($Va,[2,76],{73:154,74:$VM}),{4:146,6:3,7:156,11:4,12:$V0,18:5,20:$V1,23:$V2,25:$V3,26:9,31:$V4,33:$V5,35:$V6,36:15,37:$V7,75:$V8},{15:[2,64]},{17:[1,157]},o([17,30],[2,4]),o($VN,[2,80]),{17:[1,158]},{17:[2,15],24:159,27:149,28:$VL},{12:$Vc,13:$Vd,16:$Ve,21:160,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{11:59,12:$V0,18:161,31:$V4,33:$V5,35:$V6,36:15,37:$V7},o($Vn,[2,16]),o([15,17,19,29,32,65],[2,30],{45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC}),o($Va,[2,75]),{11:59,12:$V0,16:$VI,18:134,22:163,31:$V4,33:$V5,35:$V6,36:15,37:$V7,75:[1,162]},{17:[1,164]},o($VN,[2,79]),o($Va,[2,10]),{17:[2,14]},{29:[1,165],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{15:[1,166]},{13:[1,167]},o($Va,[2,74]),o($Va,[2,7]),{4:146,6:3,7:168,11:4,12:$V0,18:5,20:$V1,23:$V2,25:$V3,26:9,31:$V4,33:$V5,35:$V6,36:15,37:$V7,75:$V8},{11:59,12:$V0,16:$VI,18:134,22:169,31:$V4,33:$V5,35:$V6,36:15,37:$V7},{12:$Vc,13:$Vd,16:$Ve,21:170,36:40,55:$Vf,59:36,60:$Vg,61:38,62:39,67:42,68:$Vh,69:$Vi},{30:[1,171]},o($Va,[2,11]),{15:[1,172],45:$Vp,46:$Vq,47:$Vr,48:$Vs,49:$Vt,50:$Vu,51:$Vv,52:$Vw,53:$Vx,54:$Vy,55:$Vz,56:$VA,57:$VB,58:$VC},{19:[1,173]},{11:59,12:$V0,16:$VI,18:134,22:174,31:$V4,33:$V5,35:$V6,36:15,37:$V7},o([17,28],[2,13]),o($Va,[2,73],{73:175,74:$VM}),o($Va,[2,72])],
defaultActions: {17:[2,1],60:[2,61],97:[2,66],144:[2,64],159:[2,14]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
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
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
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
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
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
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
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
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
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
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
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
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
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
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
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
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
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
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
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
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:/* skip whitespace */
break;
case 1:return 68
break;
case 2:return 69
break;
case 3:return "if"
break;
case 4:return "else"
break;
case 5:return "return"
break;
case 6:return "void"
break;
case 7:return "case"
break;
case 8:return "printf"
break;
case 9:return "while"
break;
case 10:return "const"
break;
case 11:return "switch"
break;
case 12:return "for"
break;
case 13:return 32
break;
case 14:return 19
break;
case 15:return 63
break;
case 16:return 29
break;
case 17:return 47
break;
case 18:return 46
break;
case 19:return 53
break;
case 20:return 60
break;
case 21:return 50
break;
case 22:return '>>'
break;
case 23:return 51
break;
case 24:return 48
break;
case 25:return '<<'
break;
case 26:return 49
break;
case 27:return 52
break;
case 28:return 34
break;
case 29:return 43
break;
case 30:return 57
break;
case 31:return 56
break;
case 32:return 44
break;
case 33:return 58
break;
case 34:return 42
break;
case 35:return 40
break;
case 36:return 55
break;
case 37:return 39
break;
case 38:return 41
break;
case 39:return 54
break;
case 40:return '^'
break;
case 41:return 45
break;
case 42:return 16
break;
case 43:return 17
break;
case 44:return 64
break;
case 45:return 65
break;
case 46:return 13
break;
case 47:return 15
break;
case 48:return 12
break;
case 49:return 5
break;
case 50:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:void\b)/,/^(?:case\b)/,/^(?:printf\b)/,/^(?:while\b)/,/^(?:const\b)/,/^(?:switch\b)/,/^(?:for\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:!=)/,/^(?:!)/,/^(?:>=)/,/^(?:>>)/,/^(?:>)/,/^(?:<=)/,/^(?:<<)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:%)/,/^(?:\/=)/,/^(?:\/)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\?)/,/^(?:\{)/,/^(?:\})/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = c_parser;
exports.Parser = c_parser.Parser;
exports.parse = function () { return c_parser.parse.apply(c_parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}