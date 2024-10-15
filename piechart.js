google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['User Type', 'Number'],
    ['Patients', 300],
    ['Doctors', 50],
    ['Admins', 20]
  ]);

  var options = {
    title: 'User Distribution in Healthcare System'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}
