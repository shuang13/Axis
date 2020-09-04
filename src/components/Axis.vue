<template>
  <div class="container">
    <div class="cover"></div>
    <div class="cross-x"></div>
    <div class="cross-y"></div>
    <div class="axis"></div>
  </div>
  
</template>

<script>
import * as d3 from "d3"
export default {

  name: 'Axis',
  data () {
    return {
      // 画布大小
      width: 2000,
      height: 4000,

      // 绘图区域边距
      margin: {
        top: 80,
        right: 0,
        bottom: 0,
        left: 80
      }
    }
  },
  methods: {
    init() {
      this.initSvg();
      
    },
    initSvg() {
      const svg = d3.select(".axis").append("svg")
          .attr("width", this.width)
          .attr("height", this.height)

      const x = d3.scaleLinear()
          .range([0, this.width - this.margin.left - 20])
          .domain([0, (this.width - this.margin.left - 20)/20]);
      const y = d3.scaleLinear()
          .range([0, this.height - this.margin.top - 20])
          .domain([0, (this.height - this.margin.top - 20)/2]);

      var xAxis = g => g
          .call(d3.axisTop()
            .scale(x)
            .ticks((this.width - this.margin.left - 20)/20)
            .tickFormat(d => {return d%3==0 && d != 0?d:""}))
          .call(g => g.append("text")
            .attr("x", 60)
            .attr("y", -20)
            .attr("fill", "currentColor")
            .attr("text-anchor", "end")
            .text("XLine →"))

      var yAxis = g => g
          .call(d3.axisLeft()
            .scale(y)
            .ticks((this.height - this.margin.top - 20)/4)
            .tickFormat(d => {return d%20==0 && d != 0?d:""}))
          .call(g => g.append("text")
            .attr("x", -20)
            .attr("y", 20)
            .attr("fill", "currentColor")
            .attr("text-anchor", "end")
            .text("Time[ms] ↓"))

      var grid = g => g
          .attr("stroke", "currentColor")
          .attr("stroke-opacity", 0.1)
          .call(g => g.append("g")
            .selectAll("line")
            .data(y.ticks((this.height - this.margin.top - 20)/40))
            .join("line")
              .attr("y1", d => 0.5 + y(d))
              .attr("y2", d => 0.5 + y(d))
              .attr("x1", 0)
              .attr("x2", this.width - this.margin.left - 20));

      // 网格
      svg.append("g")
          .attr("transform", `translate(${this.margin.top}, ${this.margin.left})`)
          .attr("class", "grid")
          .call(grid)
      // 顶部遮盖
      svg.append("rect")  
          .attr("class", "coverTop")
          .attr("width", this.width)
          .attr("height", 80) 
          .style("fill", "#fff")
      // 左侧遮盖
      svg.append("rect")  
          .attr("class", "coverLeft")
          .attr("width", 80)
          .attr("height", this.height) 
          .style("fill", "#fff")
      // x坐标轴
      svg.append("g")
          .attr("class", "xAxis")
          .attr("transform", `translate(${this.margin.top}, ${this.margin.left})`)
          .call(xAxis)
      // y坐标轴    
      svg.append("g")
          .attr("class", "yAxis")
          .attr("transform", `translate(${this.margin.top}, ${this.margin.left})`)
          .call(yAxis)
      // 内部填充区    
      svg.append("rect")  
          .attr("class", "inner")
          .attr("transform", `translate(${this.margin.top}, ${this.margin.left})`)
          .attr("width", this.width)
          .attr("height", this.height) 
          .style("fill", "rgba(255, 255, 255, 0)");
      // 滚轮事件，固定坐标轴定位
      d3.select(".axis").on('scroll', e => {
        var s = document.querySelector('svg');
        d3.select(".coverTop").attr("transform", `translate(0, ${-s.getBoundingClientRect().top})`)
        d3.select(".coverLeft").attr("transform", `translate(${-s.getBoundingClientRect().left}, 0)`)

        d3.select(".xAxis").attr("transform", `translate(80, ${-s.getBoundingClientRect().top + 80})`)
        d3.select(".yAxis").attr("transform", `translate(${-s.getBoundingClientRect().left + 80}, 80)`)
      });
      
      // 十字坐标轴定位
      d3.select(".inner").on('mousemove', e => {
        var crossX = document.querySelector(".cross-x");
        var crossY = document.querySelector(".cross-y");
        this.onInnerMousemove(crossX, crossY, 0, 0, e);
      });
       
    },
    // 获取鼠标在窗口的坐标
    onInnerMousemove(ox, oy, x, y, e) {  
      var posX = 0, posY = 0;  
      if (e.pageX || e.pageY) { 
          posX = e.pageX;
          posY = e.pageY;
      } else if (e.clientX || e.clientY) {
          posX = event.clientX + document.documentElement.scrollLeft + document.body.scrollLeft;
          posY = event.clientY + document.documentElement.scrollTop + document.body.scrollTop;
      }
      ox.style.top = posY + y + "px";  
      oy.style.left = posX + x + "px"; 
    }
  },
  mounted() {
    this.init();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.axis {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
.cover {
  position: absolute;
  width: 81px;
  height: 81px;
  background: #fff;
  border-radius: 2px 0;
  z-index: 999;
}
path {
  fill: #000;
  stroke: #76BF8A;
  stroke-width: 3px;
}
.cross-x {
  position: fixed;
  width: 100%;
  height: 1px;
  background: #000;
}
.cross-y {
  position: fixed;
  width: 1px;
  height: 100%;
  background: #000;
}
</style>
