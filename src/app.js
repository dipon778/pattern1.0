var datas,num=-1;
function equation() {

    // var c = document.getElementById("myCanvas");
    // var ctx = c.getContext("2d");
    datas = [];

    for (var i = 1; i < 100; i++) {

        var sum = 3 * i + 1;
        if (sum % 2 === 0) {
            firstpoint = sum;
            sum = sum / 2;
            datas[i]=sum;
            //document.getElementById('myList').innerHTML += `<li> ${sum} </li>`
            // ctx.moveTo(10, 100);
            // ctx.lineTo(200,800);
            // ctx.stroke();
            

        } else if (sum % 2 != 0) {
            //document.getElementById('myList').innerHTML += `<li> ${sum} </li>`
            datas[i]=sum;
            // ctx.moveTo(0, 0);
            // ctx.lineTo(0, 00);
            // ctx.stroke();
            
        }
        
    }


    // let n = 0;

    // sum = 3*n+1;

    // if(sum %2 === 0){
    //     n = sum /2 ;
    // } else if(sum % 2  != 0){
    //     n = sum;
    // }
    
    // return sum;
    console.log(datas);
    

}
equation();
function getData(){
    if( num < datas.length){
        num ++;
    return datas[num];
    }
    
    
}


// window.onload = function () {
//     var datar = equation();
//     var chart = new CanvasJS.Chart("chartContainer",
//     {

//       title:{
//       text: "Earthquakes - per month"
//       },
//        data: [

//       {
//         type: "line",

//         dataPoints: [
//             {x:datar[1],y:10},
//             {x:datar[2],y:20},
//             {x:datar[3],y:30},
//             {x:datar[4],y:40},
//             {x:datar[5],y:50},
//             {x:datar[6],y:60},
//             {x:datar[7],y:70},
//         ]
//       }
//       ]
//     });

//     chart.render();
//   }



// function getData() {
//     return Math.random();
//  }  
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
},200);