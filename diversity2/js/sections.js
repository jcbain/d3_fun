     //Width and height
      var w = 5000;
      var h = 5000;

      // var dataset = [5]

      // var dataset = [ {r: 1, c: 1, col: "red"},
      //                 {r: 2, c: 1, col: "green"},
      //                 {r: 3, c: 1, col: "red"},
      //                 {r: 4, c: 1, col: "red"},
      //                 {r: 5, c: 1, col: "red"},
      //                 {r: 6, c: 1, col: "green"},
      //                 {r: 1, c: 2, col: "red"},
      //                 {r: 2, c: 2, col: "red"},
      //                 {r: 3, c: 2, col: "red"},
      //                 {r: 4, c: 2, col: "green"},
      //                 {r: 5, c: 2, col: "red"},
      //                 {r: 6, c: 2, col: "red"},
      //                 {r: 1, c: 3, col: "blue"},
      //                 {r: 2, c: 3, col: "green"},
      //                 {r: 3, c: 3, col: "red"},
      //                 {r: 4, c: 3, col: "red"},
      //                 {r: 5, c: 3, col: "red"},
      //                 {r: 6, c: 3, col: "green"},
      //                 {r: 1, c: 4, col: "red"},
      //                 {r: 2, c: 4, col: "red"},
      //                 {r: 3, c: 4, col: "red"},
      //                 {r: 4, c: 4, col: "green"},
      //                 {r: 5, c: 4, col: "red"},
      //                 {r: 6, c: 4, col: "red"},
      //                 {r: 1, c: 5, col: "orange"},
      //                 {r: 2, c: 5, col: "green"},
      //                 {r: 3, c: 5, col: "red"},
      //                 {r: 4, c: 5, col: "red"},
      //                 {r: 5, c: 5, col: "red"},
      //                 {r: 6, c: 5, col: "green"},
      //                 {r: 1, c: 6, col: "red"},
      //                 {r: 2, c: 6, col: "red"},
      //                 {r: 3, c: 6, col: "red"},
      //                 {r: 4, c: 6, col: "green"},
      //                 {r: 5, c: 6, col: "red"},
      //                 {r: 6, c: 6, col: "red"},
      // ];

      var dataset = [{"r": "1", "c": "1", "col": "#42f4bf"}, {"r": "2", "c": "1", "col": "#42f4bf"}, {"r": "3", "c": "1", "col": "#42f4bf"}, {"r": "4", "c": "1", "col": "#d9f441"}, {"r": "5", "c": "1", "col": "#42f4bf"}, {"r": "6", "c": "1", "col": "#42f4bf"}, {"r": "7", "c": "1", "col": "#db7dc6"}, {"r": "8", "c": "1", "col": "#d9f441"}, {"r": "9", "c": "1", "col": "#db7dc6"}, {"r": "10", "c": "1", "col": "#d9f441"}, {"r": "1", "c": "2", "col": "#db7dc6"}, {"r": "2", "c": "2", "col": "#42f4bf"}, {"r": "3", "c": "2", "col": "#db7dc6"}, {"r": "4", "c": "2", "col": "#db7dc6"}, {"r": "5", "c": "2", "col": "#42f4bf"}, {"r": "6", "c": "2", "col": "#42f4bf"}, {"r": "7", "c": "2", "col": "#42f4bf"}, {"r": "8", "c": "2", "col": "#d9f441"}, {"r": "9", "c": "2", "col": "#d9f441"}, {"r": "10", "c": "2", "col": "#42f4bf"}, {"r": "1", "c": "3", "col": "#db7dc6"}, {"r": "2", "c": "3", "col": "#d9f441"}, {"r": "3", "c": "3", "col": "#db7dc6"}, {"r": "4", "c": "3", "col": "#db7dc6"}, {"r": "5", "c": "3", "col": "#42f4bf"}, {"r": "6", "c": "3", "col": "#42f4bf"}, {"r": "7", "c": "3", "col": "#42f4bf"}, {"r": "8", "c": "3", "col": "#42f4bf"}, {"r": "9", "c": "3", "col": "#42f4bf"}, {"r": "10", "c": "3", "col": "#d9f441"}, {"r": "1", "c": "4", "col": "#db7dc6"}, {"r": "2", "c": "4", "col": "#db7dc6"}, {"r": "3", "c": "4", "col": "#42f4bf"}, {"r": "4", "c": "4", "col": "#d9f441"}, {"r": "5", "c": "4", "col": "#d9f441"}, {"r": "6", "c": "4", "col": "#42f4bf"}, {"r": "7", "c": "4", "col": "#db7dc6"}, {"r": "8", "c": "4", "col": "#d9f441"}, {"r": "9", "c": "4", "col": "#db7dc6"}, {"r": "10", "c": "4", "col": "#db7dc6"}, {"r": "1", "c": "5", "col": "#db7dc6"}, {"r": "2", "c": "5", "col": "#42f4bf"}, {"r": "3", "c": "5", "col": "#d9f441"}, {"r": "4", "c": "5", "col": "#42f4bf"}, {"r": "5", "c": "5", "col": "#d9f441"}, {"r": "6", "c": "5", "col": "#db7dc6"}, {"r": "7", "c": "5", "col": "#42f4bf"}, {"r": "8", "c": "5", "col": "#d9f441"}, {"r": "9", "c": "5", "col": "#d9f441"}, {"r": "10", "c": "5", "col": "#42f4bf"}, {"r": "1", "c": "6", "col": "#42f4bf"}, {"r": "2", "c": "6", "col": "#42f4bf"}, {"r": "3", "c": "6", "col": "#d9f441"}, {"r": "4", "c": "6", "col": "#42f4bf"}, {"r": "5", "c": "6", "col": "#42f4bf"}, {"r": "6", "c": "6", "col": "#db7dc6"}, {"r": "7", "c": "6", "col": "#42f4bf"}, {"r": "8", "c": "6", "col": "#db7dc6"}, {"r": "9", "c": "6", "col": "#db7dc6"}, {"r": "10", "c": "6", "col": "#db7dc6"}, {"r": "1", "c": "7", "col": "#42f4bf"}, {"r": "2", "c": "7", "col": "#d9f441"}, {"r": "3", "c": "7", "col": "#42f4bf"}, {"r": "4", "c": "7", "col": "#42f4bf"}, {"r": "5", "c": "7", "col": "#db7dc6"}, {"r": "6", "c": "7", "col": "#d9f441"}, {"r": "7", "c": "7", "col": "#db7dc6"}, {"r": "8", "c": "7", "col": "#d9f441"}, {"r": "9", "c": "7", "col": "#db7dc6"}, {"r": "10", "c": "7", "col": "#42f4bf"}, {"r": "1", "c": "8", "col": "#db7dc6"}, {"r": "2", "c": "8", "col": "#d9f441"}, {"r": "3", "c": "8", "col": "#db7dc6"}, {"r": "4", "c": "8", "col": "#42f4bf"}, {"r": "5", "c": "8", "col": "#db7dc6"}, {"r": "6", "c": "8", "col": "#42f4bf"}, {"r": "7", "c": "8", "col": "#d9f441"}, {"r": "8", "c": "8", "col": "#42f4bf"}, {"r": "9", "c": "8", "col": "#db7dc6"}, {"r": "10", "c": "8", "col": "#42f4bf"}, {"r": "1", "c": "9", "col": "#d9f441"}, {"r": "2", "c": "9", "col": "#42f4bf"}, {"r": "3", "c": "9", "col": "#db7dc6"}, {"r": "4", "c": "9", "col": "#42f4bf"}, {"r": "5", "c": "9", "col": "#42f4bf"}, {"r": "6", "c": "9", "col": "#d9f441"}, {"r": "7", "c": "9", "col": "#42f4bf"}, {"r": "8", "c": "9", "col": "#db7dc6"}, {"r": "9", "c": "9", "col": "#db7dc6"}, {"r": "10", "c": "9", "col": "#d9f441"}, {"r": "1", "c": "10", "col": "#db7dc6"}, {"r": "2", "c": "10", "col": "#db7dc6"}, {"r": "3", "c": "10", "col": "#42f4bf"}, {"r": "4", "c": "10", "col": "#db7dc6"}, {"r": "5", "c": "10", "col": "#db7dc6"}, {"r": "6", "c": "10", "col": "#42f4bf"}, {"r": "7", "c": "10", "col": "#db7dc6"}, {"r": "8", "c": "10", "col": "#db7dc6"}, {"r": "9", "c": "10", "col": "#d9f441"}, {"r": "10", "c": "10", "col": "#d9f441"}]

            //Create scales
      var scale = d3.scaleBand()
                     .domain(d3.range(dataset.length))
                     .rangeRound([0, w])
                     .paddingInner(0.05);

      //Create SVG element
      var svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

            //Create bars
      svg.selectAll("rect")
         .data(dataset)
         .enter()
         .append("rect")
         .attr("x", function(d, i) {
            return scale(d.c);
         })
         .attr("y", function(d,i) {
            return scale(d.r);
         })
         .attr("width", scale.bandwidth())
         .attr("height", scale.bandwidth())
         .attr("fill", function(d) {
          return "#e2e2e2";
        })
         .on("mouseover", function(d) {
            d3.select(this)
            .attr("fill", function(d){
              if(d.col == "#db7dc6"){
                return d.col;
              } else {
                return "#e2e2e2";
              }
            })
          }); 
