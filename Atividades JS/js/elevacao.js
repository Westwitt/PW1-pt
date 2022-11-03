var n1 = parseInt(prompt("Digite a base"));
var n2 = parseInt(prompt("Digite o expoente"));
base = n1;
var i = 1;
while(i<n2){
    n1 = n1*base;
    i++;
}
document.write(base+" elevado a "+n2+" é "+" = "+n1);