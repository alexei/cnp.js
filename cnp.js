/*! sprintf.js | Copyright (c) 2014 Alexandru Marasteanu <hello at alexei dot ro> | 3 clause BSD license */

function is_valid_cnp(value) {
    // 0: cnp
    // 1: s (1-8)
    // 2: aa (00-99)
    // 3: ll (01-12)
    // 4: zz (01-31)
    // 5: jj (1-46, 51-52)
    // 6: nnn (001-999)
    // 7: c (279146358279)
    var m
    if (m = /^([1-8])(0[1-9]|[1-9][0-9])(0[1-9]|1[0-2])(\d{2})(\d{2})(\d{3})(\d)$/.exec(value)) {
        var ll = parseInt(m[3])
        var zz = parseInt(m[4])
        switch (ll) {
            case 2:
                if (zz > 29) {
                    return false
                }
            case 3:
            case 4:
            case 6:
            case 9:
            case 11:
                if (zz > 30) {
                    return false
                }
            default:
                if (zz > 31) {
                    return false
                }
        }
        var jj = parseInt(m[5])
        if (jj < 0 || (jj > 46 && jj < 51) || jj > 52) {
            return false
        }
        var nnn = parseInt(m[6])
        if (nnn < 0) {
            return false
        }
        var c = parseInt(m[7])
        var constanta = "279146358279"
        var suma = 0
        for(var i = 0; i < constanta.length; i++) {
            suma = suma + parseInt(m[0].charAt(i)) * constanta.charAt(i)
        }
        var rest = suma % 11
        return (((rest < 10) && (rest == m[0].charAt(12))) || ((rest == 10) && (m[0].charAt(12) == 1))) ? true : false
    }
    return false
}
