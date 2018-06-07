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
var go_parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,7],$V2=[1,9],$V3=[1,10],$V4=[1,11],$V5=[1,15],$V6=[5,16],$V7=[5,13,16,17,25,29,30,66],$V8=[1,29],$V9=[1,22],$Va=[1,28],$Vb=[1,25],$Vc=[1,30],$Vd=[1,31],$Ve=[1,34],$Vf=[2,57],$Vg=[1,47],$Vh=[1,53],$Vi=[1,54],$Vj=[1,55],$Vk=[1,56],$Vl=[1,57],$Vm=[1,58],$Vn=[1,59],$Vo=[1,60],$Vp=[1,61],$Vq=[1,62],$Vr=[1,63],$Vs=[2,54],$Vt=[1,66],$Vu=[5,13,15,16,17,20,25,28,29,30,42,43,44,45,46,47,48,49,50,51,52,56,66],$Vv=[5,13,15,16,17,20,25,28,29,30,41,42,43,44,45,46,47,48,49,50,51,52,56,62,66],$Vw=[2,73],$Vx=[1,76],$Vy=[1,84],$Vz=[1,110],$VA=[2,61],$VB=[28,56],$VC=[5,13,15,16,17,20,25,28,29,30,42,43,44,45,46,47,56,66],$VD=[5,13,15,16,17,20,25,28,29,30,42,43,44,45,46,47,48,49,56,66],$VE=[1,129],$VF=[1,142];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"expressions":3,"statements":4,"EOF":5,"statements_":6,"statement":7,"access_modifier":8,"public":9,"private":10,"statement_with_semicolon":11,"type":12,"IDENTIFIER":13,"struct":14,"{":15,"}":16,"for":17,"e":18,"_":19,",":20,":=":21,"range":22,"dot_expr":23,"if_statement":24,"func":25,"(":26,"parameters":27,")":28,"return":29,"var":30,"=":31,"identifiers":32,"access_array":33,"++":34,"--":35,"+=":36,"-=":37,"*=":38,"/=":39,"function_call":40,".":41,"||":42,"&&":43,"<=":44,"<":45,">=":46,">":47,"+":48,"-":49,"*":50,"/":51,"%":52,"parentheses_expr":53,"[":54,"access_arr":55,"]":56,"exprs":57,"function":58,"NUMBER":59,"STRING_LITERAL":60,"parameter":61,"][":62,"types":63,"elif":64,"else":65,"if":66,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",9:"public",10:"private",13:"IDENTIFIER",14:"struct",15:"{",16:"}",17:"for",19:"_",20:",",21:":=",22:"range",25:"func",26:"(",28:")",29:"return",30:"var",31:"=",34:"++",35:"--",36:"+=",37:"-=",38:"*=",39:"/=",41:".",42:"||",43:"&&",44:"<=",45:"<",46:">=",47:">",48:"+",49:"-",50:"*",51:"/",52:"%",54:"[",56:"]",58:"function",59:"NUMBER",60:"STRING_LITERAL",62:"][",65:"else",66:"if"},
productions_: [0,[3,2],[6,2],[6,1],[4,1],[8,1],[8,1],[7,1],[7,6],[7,5],[7,10],[7,10],[7,1],[7,9],[11,2],[11,4],[11,3],[11,2],[11,3],[11,3],[11,2],[11,2],[11,3],[11,3],[11,3],[11,3],[11,3],[11,3],[11,1],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,3],[18,2],[18,1],[23,3],[23,1],[33,4],[40,3],[40,4],[53,7],[53,1],[53,1],[53,2],[53,3],[53,3],[53,1],[53,1],[53,1],[12,3],[12,1],[61,2],[27,3],[27,1],[27,0],[55,3],[55,1],[57,3],[57,1],[63,3],[63,1],[64,7],[64,4],[24,6],[24,5],[32,3],[32,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:
return $$[$0-1];
break;
case 2:
this.$ = [$$[$0-1]].concat($$[$0]);
break;
case 3: case 43: case 60: case 63:
this.$ =
 [$$[$0]];
break;
case 4:
this.$ = ["statements",$$[$0]]
break;
case 7:
this.$ = ["semicolon",$$[$0]];
break;
case 8:
this.$ = ["struct",$$[$0-5],$$[$0-1]]
break;
case 9:
this.$ = ["while",$$[$0-3],$$[$0-1]];
break;
case 10:
this.$ = ["foreach","Object",$$[$0-6],$$[$0-3],$$[$0-1]];
break;
case 11:
this.$ = ["foreach_with_index","Object",$$[$0-8],$$[$0-6],$$[$0-3],$$[$0-1]];
break;
case 13:
this.$ = ["function","public",$$[$0-3],$$[$0-7],$$[$0-5],$$[$0-1]];
break;
case 14:
this.$ = ["return",$$[$0]];
break;
case 15: case 16:
this.$ = ["initialize_var","Object",$$[$0-2],$$[$0]];
break;
case 17:
this.$ = ["initialize_empty_vars","Object",$$[$0]];
break;
case 18: case 19:
this.$ = ["set_var",$$[$0-2],$$[$0]];
break;
case 20: case 21:
this.$ = [$$[$0],$$[$0-1]];
break;
case 22: case 23: case 24: case 25: case 29: case 30: case 31: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39:
this.$ = [$$[$0-1],$$[$0-2],$$[$0]];
break;
case 26: case 27:
this.$ = [".",[$$[$0-2]].concat($$[$0])]
break;
case 40:
this.$ = ["-",$$[$0]];
break;
case 41:
this.$ = [".", $$[$0]];
break;
case 42: case 59: case 62: case 64: case 66: case 72:
this.$ = [$$[$0-2]].concat($$[$0]);
break;
case 44:
this.$ = ["access_array",$$[$0-3],$$[$0-1]];
break;
case 45:
this.$ = ["function_call",$$[$0-2],[]];
break;
case 46:
this.$ = ["function_call",$$[$0-3],$$[$0-1]];
break;
case 47:
this.$ = ["anonymous_function","Object",$$[$0-4],$$[$0-1]]
break;
case 50:
this.$ = ["initializer_list","Object",[]];
break;
case 51:
this.$ = ["initializer_list","Object",$$[$0-1]];
break;
case 52:
this.$ = $$[$0-1];
break;
case 53: case 54: case 55:
this.$ = yytext;
break;
case 56:
this.$ = [$$[$0-2],"[]"];
break;
case 58:
this.$ = [$$[$0], $$[$0-1]];
break;
case 61:
this.$ = []
break;
case 65: case 67: case 73:
this.$ = [$$[$0]];
break;
case 68:
this.$ = ["elif",$$[$0-4],$$[$0-2],$$[$0]]
break;
case 69:
this.$ = ["else",$$[$0-1]];
break;
case 70:
this.$ = ["if",$$[$0-4],$$[$0-2],$$[$0]];
break;
case 71:
this.$ = ["if",$$[$0-3],$$[$0-1]];
break;
}
},
table: [{3:1,4:2,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{1:[3]},{5:[1,16]},o($V6,[2,4]),o($V6,[2,3],{7:4,11:5,12:6,24:8,33:13,40:14,6:17,13:$V0,17:$V1,25:$V2,29:$V3,30:$V4,66:$V5}),o($V7,[2,7]),{13:[1,18]},{13:[1,21],18:19,19:[1,20],23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},o($V7,[2,12]),{13:[1,32]},{13:$Ve,18:33,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:[1,35],32:36},{13:$Vf,21:[1,37],26:$Vg,31:[1,38],34:[1,39],35:[1,40],36:[1,41],37:[1,42],38:[1,43],39:[1,44],41:[1,45],54:[1,46]},{31:[1,48]},o($V7,[2,28],{41:[1,49]}),{13:$Ve,18:50,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{1:[2,1]},o($V6,[2,2]),{14:[1,51]},{15:[1,52],42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr},{20:[1,64]},o([15,41,42,43,44,45,46,47,48,49,50,51,52],$Vs,{20:[1,65],26:$Vg,54:$Vt}),{13:$Ve,18:67,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},o($Vu,[2,41]),o($Vu,[2,43],{41:[1,68]}),{26:[1,69]},o($Vv,[2,48]),o($Vv,[2,49]),{13:$Ve,18:72,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,56:[1,70],57:71,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:73,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},o($Vv,[2,53]),o($Vv,[2,55]),{26:[1,74]},o($V7,[2,14],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($Vv,$Vs,{26:$Vg,54:$Vt}),o($V7,$Vw,{20:$Vx,31:[1,75]}),o($V7,[2,17]),{13:$Ve,18:77,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:78,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},o($V7,[2,20]),o($V7,[2,21]),{13:$Ve,18:79,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:80,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:81,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:82,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,23:83,26:$V8,33:26,40:27,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,26:$V8,33:26,40:27,53:86,54:$Va,55:85,56:$Vy,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:72,23:23,26:$V8,28:[1,87],33:26,40:27,49:$V9,53:24,54:$Va,57:88,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:89,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,23:90,26:$V8,33:26,40:27,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{15:[1,91],42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr},{15:[1,92]},{4:93,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{13:$Ve,18:94,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:95,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:96,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:97,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:98,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:99,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:100,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:101,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:102,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:103,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,18:104,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:[1,105]},{13:[1,106]},{13:$Ve,26:$V8,33:26,40:27,53:86,54:$Va,55:85,58:$Vb,59:$Vc,60:$Vd},o($Vu,[2,40]),{13:$Ve,23:107,26:$V8,33:26,40:27,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Vz,27:108,28:$VA,61:109},o($Vv,[2,50]),{56:[1,111]},o($VB,[2,65],{20:[1,112],42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),{28:[1,113],42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr},{13:$Vz,27:114,28:$VA,61:109},{13:$Ve,18:115,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:[1,117],32:116},o($V7,[2,16],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,19],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,22],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,23],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,24],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,25],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,27]),o([13,15,20,28],[2,56]),{56:[1,118]},{56:[2,63],62:[1,119]},o($Vv,[2,45]),{28:[1,120]},o($V7,[2,18],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,26]),{4:121,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{4:122,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{16:[1,123]},o([5,13,15,16,17,20,25,28,29,30,42,56,66],[2,29],{43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o([5,13,15,16,17,20,25,28,29,30,42,43,56,66],[2,30],{44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($VC,[2,31],{48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($VC,[2,32],{48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($VC,[2,33],{48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($VC,[2,34],{48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($VD,[2,35],{50:$Vp,51:$Vq,52:$Vr}),o($VD,[2,36],{50:$Vp,51:$Vq,52:$Vr}),o($Vu,[2,37]),o($Vu,[2,38]),o($Vu,[2,39]),{21:[1,124]},{21:[1,125]},o($Vu,[2,42]),{28:[1,126]},{20:[1,127],28:[2,60]},{12:128,13:$VE},o($Vv,[2,51]),{13:$Ve,18:72,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,57:130,58:$Vb,59:$Vc,60:$Vd},o($Vv,[2,52]),{28:[1,131]},o($V7,[2,15],{42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr}),o($V7,[2,72]),o($V7,$Vw,{20:$Vx}),o([5,13,15,16,17,20,25,28,29,30,31,41,42,43,44,45,46,47,48,49,50,51,52,56,62,66],[2,44]),{13:$Ve,26:$V8,33:26,40:27,53:86,54:$Va,55:132,58:$Vb,59:$Vc,60:$Vd},o($Vv,[2,46]),{16:[1,133]},{16:[1,134]},o($V7,[2,9]),{22:[1,135]},{22:[1,136]},{15:[1,137]},{13:$Vz,27:138,28:$VA,61:109},o([20,28],[2,58]),o([15,20,28],$Vf,{54:[1,139]}),o($VB,[2,64]),{12:140,13:$VE},{56:[2,62]},o($V7,[2,71],{64:141,65:$VF}),o($V7,[2,8]),{13:$Ve,23:143,26:$V8,33:26,40:27,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{13:$Ve,23:144,26:$V8,33:26,40:27,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{4:145,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{28:[2,59]},{56:$Vy},{15:[1,146]},o($V7,[2,70]),{15:[1,148],66:[1,147]},{15:[1,149]},{15:[1,150]},{16:[1,151]},{4:152,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{13:$Ve,18:153,23:23,26:$V8,33:26,40:27,49:$V9,53:24,54:$Va,58:$Vb,59:$Vc,60:$Vd},{4:154,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{4:155,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},{4:156,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},o($Vv,[2,47]),{16:[1,157]},{15:[1,158],42:$Vh,43:$Vi,44:$Vj,45:$Vk,46:$Vl,47:$Vm,48:$Vn,49:$Vo,50:$Vp,51:$Vq,52:$Vr},{16:[1,159]},{16:[1,160]},{16:[1,161]},o($V7,[2,13]),{4:162,6:3,7:4,11:5,12:6,13:$V0,17:$V1,24:8,25:$V2,29:$V3,30:$V4,33:13,40:14,66:$V5},o($V7,[2,69]),o($V7,[2,10]),o($V7,[2,11]),{16:[1,163]},{64:164,65:$VF},o($V7,[2,68])],
defaultActions: {16:[2,1],132:[2,62],138:[2,59]},
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
case 1:return 59
break;
case 2:return 60
break;
case 3:return "$"
break;
case 4:return 21
break;
case 5:return "func"
break;
case 6:return 'type'
break;
case 7:return "range"
break;
case 8:return "struct"
break;
case 9:return "public"
break;
case 10:return "extends"
break;
case 11:return "implements"
break;
case 12:return "private"
break;
case 13:return "static"
break;
case 14:return 66
break;
case 15:return 65
break;
case 16:return 29
break;
case 17:return 'while'
break;
case 18:return 17
break;
case 19:return 30
break;
case 20:return 'of'
break;
case 21:return 20
break;
case 22:return ';'
break;
case 23:return 41
break;
case 24:return ':'
break;
case 25:return 43
break;
case 26:return 42
break;
case 27:return 46
break;
case 28:return 47
break;
case 29:return 44
break;
case 30:return 45
break;
case 31:return '=='
break;
case 32:return 31
break;
case 33:return 38
break;
case 34:return 50
break;
case 35:return 39
break;
case 36:return 51
break;
case 37:return 52
break;
case 38:return 37
break;
case 39:return 35
break;
case 40:return 49
break;
case 41:return 34
break;
case 42:return 36
break;
case 43:return 48
break;
case 44:return '^'
break;
case 45:return 15
break;
case 46:return 16
break;
case 47:return 62
break;
case 48:return 54
break;
case 49:return 56
break;
case 50:return 26
break;
case 51:return 28
break;
case 52:return 19
break;
case 53:return 13
break;
case 54:return 5
break;
case 55:return 'INVALID'
break;
}
},
rules: [/^(?:\s+)/,/^(?:[0-9]+(\.[0-9]+)?\b)/,/^(?:"([^\\\"]|\\.)*")/,/^(?:\$)/,/^(?::=)/,/^(?:func\b)/,/^(?:type\b)/,/^(?:range\b)/,/^(?:struct\b)/,/^(?:public\b)/,/^(?:extends\b)/,/^(?:implements\b)/,/^(?:private\b)/,/^(?:static\b)/,/^(?:if\b)/,/^(?:else\b)/,/^(?:return\b)/,/^(?:while\b)/,/^(?:for\b)/,/^(?:var\b)/,/^(?:of\b)/,/^(?:,)/,/^(?:;)/,/^(?:\.)/,/^(?::)/,/^(?:&&)/,/^(?:\|\|)/,/^(?:>=)/,/^(?:>)/,/^(?:<=)/,/^(?:<)/,/^(?:==)/,/^(?:=)/,/^(?:\*=)/,/^(?:\*)/,/^(?:\/=)/,/^(?:\/)/,/^(?:%)/,/^(?:-=)/,/^(?:--)/,/^(?:-)/,/^(?:\+\+)/,/^(?:\+=)/,/^(?:\+)/,/^(?:\^)/,/^(?:\{)/,/^(?:\})/,/^(?:\]\[)/,/^(?:\[)/,/^(?:\])/,/^(?:\()/,/^(?:\))/,/^(?:_\b)/,/^(?:[a-zA-Z_][a-zA-Z0-9_]*)/,/^(?:$)/,/^(?:.)/],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],"inclusive":true}}
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
exports.parser = go_parser;
exports.Parser = go_parser.Parser;
exports.parse = function () { return go_parser.parse.apply(go_parser, arguments); };
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