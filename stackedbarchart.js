google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
    ['Content Type', 'Medical Articles', 'Video Consultations', 'Health Check Reports'],
    ['Week 1', 10, 5, 3],
    ['Week 2', 15, 7, 4],
    ['Week 3', 12, 8, 5]
  ]);

  var options = {
    chart: {
      title: 'Healthcare Content Creation and Curation',
      subtitle: 'Medical Articles, Video Consultations, Health Check Reports'
    },
    isStacked: true // Enables stacking
  };

  var chart = new google.charts.Bar(document.getElementById('stacked_bar_chart'));
  chart.draw(data, google.charts.Bar.convertOptions(options));
}
