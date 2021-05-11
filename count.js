

function print(){

    var stringtocount = document.getElementById('input').value;
    var arr1 = stringtocount.split(" ");
    var n = arr1.length;
    let i = 0;
    let arr2 =[];
    while(i<n){
        if(arr1[i] != ""){
            arr2.push(arr1[i]);
        }
        else{
            console.log('space');
        }
        i++;
    }
    var x = arr2.length;
    document.getElementById('result').innerHTML = x;
    
    
}
