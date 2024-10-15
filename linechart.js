google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Time', 'Patient Engagement'],
    ['Week 1', 50],
    ['Week 2', 65],
    ['Week 3', 80],
    ['Week 4', 90]
  ]);

  var options = {
    title: 'Patient Engagement with Healthcare Platform',
    curveType: 'function',
    legend: { position: 'bottom' },
    hAxis: { title: 'Weeks' },
    vAxis: { title: 'Engagement Level' }
  };

  var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));
  chart.draw(data, options);
}
