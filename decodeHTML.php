var decodeHTML = function(str) {
    var map = {"gt":">" /* , … */};
    return str.replace(/&(#(?:x[0-9a-f]+|\d+)|[a-z]+);?/gi, 
        function($0, $1) {
            if ($1[0] === "#") {
                return str.fromCharCode($1[1].toLowerCase() === "x" ? parseInt($1.substr(2), 16)  : parseInt($1.substr(1), 10));
            } else {
                return map.hasOwnProperty($1) ? map[$1] : $0;
            }
        }
    );
};