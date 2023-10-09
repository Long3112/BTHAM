function bai2_1(a)
{
    return a*a;
}
function bai1() {
let a= +prompt("nhapso")
    alert("binh phuong cua "+a+ "la " +bai2_1(a));
}
function chuvi(a)
{
    return 2*3.14*a;
}
function dientich(a)
{
    return a*a*3.14;
}
function bai2() {
    let a = +prompt("nhapso")
    alert("chu vi " + a + "la " + chuvi(a)+ "va dien tich la " + dientich(a));
}

function giaiThua(so) {
    let gt = 1
    if(so>=1){
        for (let i=1; i<=so; i++){
            gt = gt * i
        }
    }else if(so == 0 ){
        gt =  1;
    }else{
        return "Giai thừa không xác định được"
    }
    return gt;
}
function bai3() {
    let so= +prompt("nhapso")
    alert("giaithua "+so+ "la " +giaiThua(so));
}

function kiemTra(a) {
    if(a%2 ==0 || a%2 == 1){
        return true;
    }
    return false;
}
function bai4() {
    let a= +prompt("nhapso")
    let kt = kiemTra(a)
    if (kt==true)
    {
        alert("so")
    }
    else if (kt==false)
    {
        alert("ki tu")
    }
}


function timMin(a,b,c) {
    let min =a;
    if(b<min)
    {
        return b;
    }
    if(c<min)
    {
        return c;
    }
    return min;
}
function bai5() {
    let a= +prompt("nhap a")
    let b= +prompt("nhap b")
    let c= +prompt("nhap c")
    alert("Min la " +timMin(a,b,c))
}

function  amduong(a) {
    if (a>0)
    {
        return true;
    }
    else
    {
        return false;
    }
}
function bai6() {
    let a = +prompt("nhap a")
    let check = amduong(a)
    if(check)
    {
        alert("duong")
    }
    else
    {
        alert("am")
    }

}

function doiCho2So(a, b) {
    let mang= [b,a]
    return mang
}
function bai7() {
    let a = +prompt("nhap a")
    let b = +prompt("nhap b")
    let doi = doiCho2So(a,b)
    document.write("Đổi chỗ 2 số: "+doi[0] +" , "+doi[1])}

function daoMangSo(mangso) {
    return mangso.reverse()
}
function bai8() {
    let mangso = [4,1,6,8,2,7,0]
    document.write("Mảng số gồm mang["+mangso+"]<br>")
    let daoMang = daoMangSo(mangso)
    document.write("Đổi chỗ mảng số mangdoi["+daoMang+"]")
}

function bai9() {
    let mang = ['a','b','c','c','d','d','d','e','d','f']
    let kytu = prompt("Nhập vào 1 ký tự bất kỳ")
    document.write("Mảng gồm ["+mang+"]<br>")
    let kiemtra = kiemTraKyTu(kytu, mang)
    if (kiemtra >0){
        document.write("Có "+kiemtra+" ký tự "+kytu+" trong mảng")
    }else{
        document.write("Không ")
    }
}
function kiemTraKyTu(kytu, mang) {
    let dem=0
    for (let i=0; i<mang.length; i++){
        if (kytu == mang[i]) {
            dem++
        }
    }
    if(dem>0){
        return dem
    }
    return -1
}




