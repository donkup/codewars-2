/*
Is duoto array reikia apskaiciuoti suma, kuri yra sudaryta 
is pirmo ir paskutinio to array nariu.
*/

const a = [4, 5];
const b = [1, 2, 3, 4];
const c = [99, 77, 55, 33, 22, 11, -11, -22, -33];
const d = [-17, 55, 4, 5];
const e = [-17, 55, 1, 2, 3, 4];
const f = [-17, 55, 99, 77, 55, 33, 22, 11, -11, -22, -33];

const xa = a[0] + a[a.length - 1];
const xb = b[0] + b[b.length - 1];
const xc = c[0] + c[c.length - 1];
const xd = d[0] + d[d.length - 1];
const xe = e[0] + e[e.length - 1];
const xf = f[0] + f[f.length - 1];

function math(list) {
    return list[0] + list[list.length - 1];
    
}

console.log(xa, math(a));
console.log(xf, math(b));
console.log(xc, math(c));
console.log(xd, math(d));
console.log(xe, math(e));
console.log(xf, math(f));