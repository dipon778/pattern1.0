
//Declaring storing variable
var sum,datas,num=-1,iterations;;


//function for generating data 
function equation(sum) {
    for (var i = 0; i < 1000; i++) {         
        // if even divide by 2
        if (sum % 2 == 0) {     ,AS qknwkqwekwkqe kqwjhekjgjwq kekwjqhe  maksa kasbjkjkhn 
            sum = sum / 2;
            datas[i]=sum;
            if(sum == 2){
                sum = sum /2;
                datas[i+1] = sum;
                iterations = i+2;
                break;
            }            
            
        //if odd store as it is 
        } else if ((sum % 2) != 0) {
            //The equation 
            sum = 3 * sum + 1;    
            datas[i]=sum;    
        }        
    }
}


    



 function getData(){
    if( num <  datas.length){
        num ++;
    return datas[num];
    }    
}


    
    // setInterval( function(){

        
    //     console.log('useless'+num++);

    // },400);





function onClick(){

    datas = [];
    num=-1;
    sum = parseInt(document.getElementById("user-input").value);
    equation(sum);
    document.getElementById("msg").innerHTML = `Total Number of iteration : ${iterations}`;
    
    Plotly.newPlot('chart',[{
        y:[getData()],
        type:'line'
    }]);
    var cnt = 0;

    for(var j=0;j<100;j++){

        Plotly.extendTraces('chart',{ y:[[getData()]]}, [0]);
        cnt++;
        if(cnt > 500) {
            Plotly.relayout('chart',{
                xaxis: {
                    range: [cnt-500,cnt]
                }
            });
        }
    }

}

