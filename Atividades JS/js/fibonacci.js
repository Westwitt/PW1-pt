var n = parseInt(prompt("Digite o número"));
var i = 1;
var n1 = 1;
var n2 = 0;
var res = 1;
while(i<=n){
    document.write(res + "<br>");
    res = n1+n2;
    n2 = n1;
    n1 = res;
    i++;
}