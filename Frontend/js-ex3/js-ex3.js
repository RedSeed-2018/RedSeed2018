var a = [5,7,8,2,11,16,77,88,66];
document.write("Mảng A: " + a + "<br>");
document.write("-----<br>");
document.write("Thêm số 99 vào mảng<br>");
a.push(99);
document.write("Mảng A: " + a + "<br>");
document.write("-----<br>");
document.write("Xóa số 77 khỏi mảng<br>");
for(var index = a.length - 1; index--;) {
    if(a[index] == 77) {
        a.splice(index, 1);
    }
}
document.write("Mảng A: " + a + "<br>");
document.write("-----<br>");
document.write("Sắp xếp mảng A tăng dần<br>");
for(var i = 0; i < a.length; i++) {
    for(var j = i + 1; j < a.length; j++) {
        if(a[i] > a[j]) {
            var temp = a[i];
            a[i] = a[j];
            a[j] = temp;
        }
    }
}
document.write("Mảng A: " + a + "<br>");
document.write("-----<br>");
document.write("Sắp xếp mảng A giảm dần<br>");
a.reverse();
document.write("Mảng A: " + a + "<br>");
document.write("-----<br>");
document.write("Sắp xếp số chẵn trước số lẻ sau trong mảng A<br>");
var b = [];
var c = [];
for(var index = 0; index < a.length; index++) {
    if(a[index] % 2 == 0) {
        b.push(a[index]);
    }
    else {
        c.push(a[index]);
    }
}
a = b.concat(c);
document.write("Mảng A: " + a + "<br>");
document.write("-----<br>");
document.write("Mảng B: " + b + "<br>");
document.write("Mảng C: " + c + "<br>");