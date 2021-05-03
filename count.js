
function print(){

    var stringtocount = document.getElementById('input').value;
    var arr1 = stringtocount.split(" ");
    var n = arr1.length;
    document.getElementById('result').innerHTML = n;
    console.log(stringtocount);
    return n;
}
// function wordCount(str1){
//     var arr1 = str1.split(" ");
//     var n = arr1.length;
//     return n;
// }