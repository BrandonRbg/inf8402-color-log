function logColor(color, args) {
    console.log(`%c ${args.join(' ')}`, `color: ${color}`);
}

const log = {
    aliceblue: (...args) => { logColor('aliceblue', args)},
    antiquewhite: (...args) => { logColor('antiquewhite', args)},
    aqua: (...args) => { logColor('aqua', args)},
    aquamarine: (...args) => { logColor('aquamarine', args)},
    azure: (...args) => { logColor('azure', args)},
    beige: (...args) => { logColor('beige', args)},
    bisque: (...args) => { logColor('bisque', args)},
    black: (...args) => { logColor('black', args)},
    blanchedalmond: (...args) => { logColor('blanchedalmond', args)},
    blue: (...args) => { logColor('blue', args)},
    blueviolet: (...args) => { logColor('blueviolet', args)},
    brown: (...args) => { logColor('brown', args)},
    burlywood: (...args) => { logColor('burlywood', args)},
    cadetblue: (...args) => { logColor('cadetblue', args)},
    chartreuse: (...args) => { logColor('chartreuse', args)},
    chocolate: (...args) => { logColor('chocolate', args)},
    coral: (...args) => { logColor('coral', args)},
    cornflowerblue: (...args) => { logColor('cornflowerblue', args)},
    cornsilk: (...args) => { logColor('cornsilk', args)},
    crimson: (...args) => { logColor('crimson', args)},
    cyan: (...args) => { logColor('cyan', args)},
    darkblue: (...args) => { logColor('darkblue', args)},
    darkcyan: (...args) => { logColor('darkcyan', args)},
    darkgoldenrod: (...args) => { logColor('darkgoldenrod', args)},
    darkgray: (...args) => { logColor('darkgray', args)},
    darkgreen: (...args) => { logColor('darkgreen', args)},
    darkgrey: (...args) => { logColor('darkgrey', args)},
    darkkhaki: (...args) => { logColor('darkkhaki', args)},
    darkmagenta: (...args) => { logColor('darkmagenta', args)},
    darkolivegreen: (...args) => { logColor('darkolivegreen', args)},
    darkorange: (...args) => { logColor('darkorange', args)},
    darkorchid: (...args) => { logColor('darkorchid', args)},
    darkred: (...args) => { logColor('darkred', args)},
    darksalmon: (...args) => { logColor('darksalmon', args)},
    darkseagreen: (...args) => { logColor('darkseagreen', args)},
    darkslateblue: (...args) => { logColor('darkslateblue', args)},
    darkslategray: (...args) => { logColor('darkslategray', args)},
    darkslategrey: (...args) => { logColor('darkslategrey', args)},
    darkturquoise: (...args) => { logColor('darkturquoise', args)},
    darkviolet: (...args) => { logColor('darkviolet', args)},
    deeppink: (...args) => { logColor('deeppink', args)},
    deepskyblue: (...args) => { logColor('deepskyblue', args)},
    dimgray: (...args) => { logColor('dimgray', args)},
    dimgrey: (...args) => { logColor('dimgrey', args)},
    dodgerblue: (...args) => { logColor('dodgerblue', args)},
    firebrick: (...args) => { logColor('firebrick', args)},
    floralwhite: (...args) => { logColor('floralwhite', args)},
    forestgreen: (...args) => { logColor('forestgreen', args)},
    fuchsia: (...args) => { logColor('fuchsia', args)},
    gainsboro: (...args) => { logColor('gainsboro', args)},
    ghostwhite: (...args) => { logColor('ghostwhite', args)},
    gold: (...args) => { logColor('gold', args)},
    goldenrod: (...args) => { logColor('goldenrod', args)},
    gray: (...args) => { logColor('gray', args)},
    green: (...args) => { logColor('green', args)},
    greenyellow: (...args) => { logColor('greenyellow', args)},
    grey: (...args) => { logColor('grey', args)},
    honeydew: (...args) => { logColor('honeydew', args)},
    hotpink: (...args) => { logColor('hotpink', args)},
    indianred: (...args) => { logColor('indianred', args)},
    indigo: (...args) => { logColor('indigo', args)},
    ivory: (...args) => { logColor('ivory', args)},
    khaki: (...args) => { logColor('khaki', args)},
    lavender: (...args) => { logColor('lavender', args)},
    lavenderblush: (...args) => { logColor('lavenderblush', args)},
    lawngreen: (...args) => { logColor('lawngreen', args)},
    lemonchiffon: (...args) => { logColor('lemonchiffon', args)},
    lightblue: (...args) => { logColor('lightblue', args)},
    lightcoral: (...args) => { logColor('lightcoral', args)},
    lightcyan: (...args) => { logColor('lightcyan', args)},
    lightgoldenrodyellow: (...args) => { logColor('lightgoldenrodyellow', args)},
    lightgray: (...args) => { logColor('lightgray', args)},
    lightgreen: (...args) => { logColor('lightgreen', args)},
    lightgrey: (...args) => { logColor('lightgrey', args)},
    lightpink: (...args) => { logColor('lightpink', args)},
    lightsalmon: (...args) => { logColor('lightsalmon', args)},
    lightseagreen: (...args) => { logColor('lightseagreen', args)},
    lightskyblue: (...args) => { logColor('lightskyblue', args)},
    lightslategray: (...args) => { logColor('lightslategray', args)},
    lightslategrey: (...args) => { logColor('lightslategrey', args)},
    lightsteelblue: (...args) => { logColor('lightsteelblue', args)},
    lightyellow: (...args) => { logColor('lightyellow', args)},
    lime: (...args) => { logColor('lime', args)},
    limegreen: (...args) => { logColor('limegreen', args)},
    linen: (...args) => { logColor('linen', args)},
    magenta: (...args) => { logColor('magenta', args)},
    maroon: (...args) => { logColor('maroon', args)},
    mediumaquamarine: (...args) => { logColor('mediumaquamarine', args)},
    mediumblue: (...args) => { logColor('mediumblue', args)},
    mediumorchid: (...args) => { logColor('mediumorchid', args)},
    mediumpurple: (...args) => { logColor('mediumpurple', args)},
    mediumseagreen: (...args) => { logColor('mediumseagreen', args)},
    mediumslateblue: (...args) => { logColor('mediumslateblue', args)},
    mediumspringgreen: (...args) => { logColor('mediumspringgreen', args)},
    mediumturquoise: (...args) => { logColor('mediumturquoise', args)},
    mediumvioletred: (...args) => { logColor('mediumvioletred', args)},
    midnightblue: (...args) => { logColor('midnightblue', args)},
    mintcream: (...args) => { logColor('mintcream', args)},
    mistyrose: (...args) => { logColor('mistyrose', args)},
    moccasin: (...args) => { logColor('moccasin', args)},
    navajowhite: (...args) => { logColor('navajowhite', args)},
    navy: (...args) => { logColor('navy', args)},
    oldlace: (...args) => { logColor('oldlace', args)},
    olive: (...args) => { logColor('olive', args)},
    olivedrab: (...args) => { logColor('olivedrab', args)},
    orange: (...args) => { logColor('orange', args)},
    orangered: (...args) => { logColor('orangered', args)},
    orchid: (...args) => { logColor('orchid', args)},
    palegoldenrod: (...args) => { logColor('palegoldenrod', args)},
    palegreen: (...args) => { logColor('palegreen', args)},
    paleturquoise: (...args) => { logColor('paleturquoise', args)},
    palevioletred: (...args) => { logColor('palevioletred', args)},
    papayawhip: (...args) => { logColor('papayawhip', args)},
    peachpuff: (...args) => { logColor('peachpuff', args)},
    peru: (...args) => { logColor('peru', args)},
    pink: (...args) => { logColor('pink', args)},
    plum: (...args) => { logColor('plum', args)},
    powderblue: (...args) => { logColor('powderblue', args)},
    purple: (...args) => { logColor('purple', args)},
    red: (...args) => { logColor('red', args)},
    rosybrown: (...args) => { logColor('rosybrown', args)},
    royalblue: (...args) => { logColor('royalblue', args)},
    saddlebrown: (...args) => { logColor('saddlebrown', args)},
    salmon: (...args) => { logColor('salmon', args)},
    sandybrown: (...args) => { logColor('sandybrown', args)},
    seagreen: (...args) => { logColor('seagreen', args)},
    seashell: (...args) => { logColor('seashell', args)},
    sienna: (...args) => { logColor('sienna', args)},
    silver: (...args) => { logColor('silver', args)},
    skyblue: (...args) => { logColor('skyblue', args)},
    slateblue: (...args) => { logColor('slateblue', args)},
    slategray: (...args) => { logColor('slategray', args)},
    slategrey: (...args) => { logColor('slategrey', args)},
    snow: (...args) => { logColor('snow', args)},
    springgreen: (...args) => { logColor('springgreen', args)},
    steelblue: (...args) => { logColor('steelblue', args)},
    tan: (...args) => { logColor('tan', args)},
    teal: (...args) => { logColor('teal', args)},
    thistle: (...args) => { logColor('thistle', args)},
    tomato: (...args) => { logColor('tomato', args)},
    turquoise: (...args) => { logColor('turquoise', args)},
    violet: (...args) => { logColor('violet', args)},
    wheat: (...args) => { logColor('wheat', args)},
    white: (...args) => { logColor('white', args)},
    whitesmoke: (...args) => { logColor('whitesmoke', args)},
    yellow: (...args) => { logColor('yellow', args)},
    yellowgreen: (...args) => { logColor('yellowgreen', args)},
};
