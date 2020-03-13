module.exports = function check(str, bracketsConfig) {
    if (str.length % 2) return false
    let v = str, c
    for(let i = 0; i < str.length; i++) {
        c = v.replace(/(\[\])|(\(\))|(\{\})|(\|\|)|(12)|(34)|(56)|(77)|(88)/, '')
        if (v === c) if (c.length > 0) return false
        else return true
        v = c
    }
}

