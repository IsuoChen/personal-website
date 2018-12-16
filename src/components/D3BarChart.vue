<template>
  <div>
    <svg width="100%" height="500px"></svg>
    <div class="color_definition pa-2">
      <div class="ma-1">
        <div class="d-inline-block mr-1 color"></div>
        <div class="d-inline-block text">Height(centimeter)</div>
      </div>
      <div class="ma-1">
        <div class="d-inline-block mr-1 color"></div>
        <div class="d-inline-block text">Mass(mass number)</div>
      </div>
    </div>
  </div>
</template>
<script>
  import * as d3 from 'd3'
  export default {
    props: {
      data: {
        type: Array,
        default: function () {
          return [{
            name: 'A',
            height: 168,
            mass: 55
          }]
        }
      }
    },
    data: () => ({
      margin: {
        top: 50,
        right: 60,
        bottom: 20,
        left: 60
      }
    }),
    mounted() {
      this.init()
    },
    methods: {
      init () {
        let svg = d3.select('svg'),
            width = svg.node().getBoundingClientRect().width - this.margin.left - this.margin.right,
            height = svg.node().getBoundingClientRect().height - this.margin.top - this.margin.bottom,
            g = svg.append('g').attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')')

        let x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
            yl = d3.scaleLinear().rangeRound([height, 0]),
            yr = d3.scaleLinear().rangeRound([height, 0])

        x.domain(this.data.map(function(d) { return d.name }))
        yl.domain([0, d3.max(this.data, function(d) { return Number(d.height) + 10 })])
        yr.domain([0, d3.max(this.data, function(d) { return Number(d.mass) + 10 })])

        g.append('g').attr('transform', 'translate(0,' + height + ')').call(d3.axisBottom(x))
        g.append('g').call(d3.axisLeft(yl))
         .append('text')
         .attr('fill', '#000')
         .attr('transform', 'rotate(-90)')
         .attr('y', 15)
         .attr('text-anchor', 'end')
         .text('Height')
        
        g.append('g').attr('transform', 'translate(' + width + ', 0)').call(d3.axisRight(yr))
         .append('text')
         .attr('fill', '#000')
         .attr('transform', 'rotate(-90)')
         .attr('y', -15)
         .attr('text-anchor', 'end')
         .text('Mass')
        // bar1
        g.selectAll('.bar1')
         .data(this.data)
         .enter().append('rect')
         .attr('class', 'bar1')
         .attr('fill', '#978486')
         .attr('x', function (d) {
           return x(d.name);
         })
         .attr('y', function (d) {
           return yl(Number(d.height))
         })
         .attr('width', x.bandwidth()/2)
         .attr('height', function (d) {
           return height - yl(Number(d.height))
         })
         // bar2
         g.selectAll('.bar2')
          .data(this.data)
          .enter().append('rect')
          .attr('class', 'bar2')
          .attr('fill', '#2C3044')
          .attr('x', function (d) {
            return x(d.name);
          })
          .attr('y', function (d) {
            return yr(Number(d.mass))
          })
          .attr('transform', function() { return 'translate(' + x.bandwidth()/2 + ',0)'; })
          .attr('width', x.bandwidth()/2)
          .attr('height', function (d) {
            return height - yr(Number(d.mass))
          })
      }
    }
  }
</script>
<style lang="scss" scoped>
  .color_definition {
    margin-left: 60px;
    width: 200px;
    div {
      &:first-child { 
        .color {
          background-color:#978486;
        }
      }
      &:last-child {
        .color {
          background-color:#2C3044;
        }
      }
    }
    .color {
      width: 12px;
      height: 12px;
    }
  }
</style>