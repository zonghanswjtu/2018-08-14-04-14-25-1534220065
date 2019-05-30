module.exports = function main(num) {
    var line1 = [   '._.',   '...',   '._.',   '._.',   '...',   '._.',   '._.',   '._.',   '._.',   '._.' ];
    var line2 = [   '|.|',   '..|',   '._|',   '._|',   '|_|',   '|_.',   '|_.',   '..|',   '|_|',   '|_|' ];
    var line3 = [   '|_|',   '..|',   '|_.',   '._|',   '..|',   '._|',   '|_|',   '..|',   '|_|',   '..|' ];
    var out1 = [], out2 = [], out3 = [];
    var s = num.slice();
    for(var n in s) {
        out1.push(line1[s[n]]);
        out2.push(line2[s[n]]);
        out3.push(line3[s[n]]);
    }
    var ans = out1.join(' ') + '\n' + out2.join(' ') + '\n' + out3.join(' ') + '\n';
    console.log(ans);
    return ans;
};