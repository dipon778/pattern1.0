
//Declaring storing variable
var datas,num=-1;

//function for generating data 
function equation() {

    datas = [];
    for (var i = 0; i < 100; i++) {

        //var sum = document.getElementById('user-input').value; 
        //console.log(sum);

        //The equation 
        var sum = 3 * i + 1;

        // if even divide by 2
        if (sum % 2 === 0) {
            
            sum = sum / 2;
            datas[i]=sum;
            
        //if odd store as it is 
        } else if (sum % 2 != 0) {    
            datas[i]=sum;    
        }        
    }
}
equation();

function getData(){
    if( num < datas.length){
        num ++;
    return datas[num];
    }    
}

Plotly.newPlot('chart',[{
    y:[getData()],
    type:'line'
}]);

var cnt = 0;
setInterval(function(){
    Plotly.extendTraces('chart',{ y:[[getData()]]}, [0]);
    cnt++;
    if(cnt > 500) {
        Plotly.relayout('chart',{
            xaxis: {
                range: [cnt-500,cnt]
            }
        });
    }
},400);