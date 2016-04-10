import React from 'react';
import ReactDOM from 'react-dom';
import ChartDoughnut from './react-chart-doughnut.js';

// sample usage 1
/*
var chart = { msg: [], osY: [] };
for (var i=0; i<5; i++) {
  //chart.msg[i] = "id: "+i;
  chart.osY[i] = Math.cos(i)+Math.sin(i);
}

ReactDOM.render(
  <ChartDoughnut data={chart}/>,
  document.getElementById('app')
);
*/

// sample usage 2
function setRandomChart() {
  var chart = { msg: [], osY: [] };
  for (var i=0; i<8; i++) {
    chart.msg[i] = "id: "+i;
    chart.osY[i] = Math.cos(i)*Math.random();
  }
  ReactDOM.render(
    <ChartDoughnut data={chart}/>,
    document.getElementById('app')
  );
}
setInterval(() => { setRandomChart() }, 5000);
