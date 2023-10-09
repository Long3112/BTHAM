function alertMessage()
{
    alert("Chao Xin")
}
function tangso(a) {
    a++;
    return a
}
function nhapso() {
    let so =  prompt("nhapso")
    alert("tăng 1 = " +tangso(so))
}
function tongtich(a,b)
{
    if(a>b)
    {
        alert("a>b")
    }
    if(a<b)
    {
        return a+b
    }
}
function bai3(){
    let a =+prompt("nhap a")
    let b =+prompt("nhap b")
alert("tong :" +tongtich(a,b) )
}
function addNumbers() {
    let firstNum = 4;
    let secondNum = 8;
    let result = firstNum + secondNum;
    return result;
}
function bai4(){
    let result = 0;
    result = addNumbers();
    alert(result)
}
function ngoiSao(sao) {
    let saoa = ["Polaris", "Aldebaran", "Deneb", "Vega", "Altair", "Dubhe", "Regulus"]
    let saob = ["Ursa Minor", "Tarurus", "Cygnus", "Lyra", "Aquila", "Ursa Major", "Leo"]
    for (let i=0; i<saoa.length ; i++){
        if(sao == saoa[i]){
            return saob[i]
        }
    }
    return "";
}

function bai5() {
    let timsao = prompt("Nhập tên ngôi sao")
    let sao = ngoiSao(timsao)
    if(sao == ""){
        document.write("Không có tên ngôi sao nào")
    }else {
        document.write("Tên ngôi sao tương ứng của "+timsao+" là "+sao)
    }
}
