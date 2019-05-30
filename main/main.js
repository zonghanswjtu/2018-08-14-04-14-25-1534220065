module.exports = function main(num) {
    var w = [   '._.',   '...',   '._.',   '._.',   '...',   '._.',   '._.',   '._.',   '._.',   '._.' ];
    var w1 = [   '|.|',   '..|',   '._|',   '._|',   '|_|',   '|_.',   '|_.',   '..|',   '|_|',   '|_|' ];
    var w2 = [   '|_|',   '..|',   '|_.',   '._|',   '..|',   '._|',   '|_|',   '..|',   '|_|',   '..|' ];
    var out1 = [], out2 = [], out3 = [];
    var s = num.slice();
    for(var n in s) {
        out1.push(w[s[n]]);
        out2.push(w1[s[n]]);
        out3.push(w2[s[n]]);
    }
    var ans = out1.join(' ') + '\n' + out2.join(' ') + '\n' + out3.join(' ') + '\n';
    console.log(ans);
    return ans;
};