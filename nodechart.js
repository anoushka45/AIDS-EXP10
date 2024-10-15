var data = {
  "name": "Users",
  "children": [
    { "name": "Patients", "size": 300 },
    { "name": "Doctors", "size": 50 },
    { "name": "Admins", "size": 20 }
  ]
};

var width = 900, height = 500;

var svg = d3.select("#node-chart").append("svg")
    .attr("width", width)
    .attr("height", height);

var g = svg.append("g").attr("transform", "translate(40,0)");

var tree = d3.tree().size([height, width - 160]);

var root = d3.hierarchy(data);

tree(root);

var link = g.selectAll(".link")
  .data(root.descendants().slice(1))
  .enter().append("path")
  .attr("class", "link")
  .attr("d", function(d) {
    return "M" + d.y + "," + d.x
      + "C" + (d.parent.y + 100) + "," + d.x
      + " " + (d.parent.y + 100) + "," + d.parent.x
      + " " + d.parent.y + "," + d.parent.x;
  });

var node = g.selectAll(".node")
  .data(root.descendants())
  .enter().append("g")
  .attr("class", "node")
  .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

node.append("circle").attr("r", 10);

node.append("text")
  .attr("dy", 3)
  .attr("x", function(d) { return d.children ? -13 : 13; })
  .style("text-anchor", function(d) { return d.children ? "end" : "start"; })
  .text(function(d) { return d.data.name; });
