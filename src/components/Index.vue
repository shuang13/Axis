<template>
  <div class="Index">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside id="left_aside" width="200px">
          
        </el-aside>
        <el-main>Main</el-main>
        <el-aside id="right_aside" width="200px"></el-aside>

      </el-container>
      <el-footer>Footer</el-footer>
    </el-container>
    <Drag class="float_drag" @mousedown.native.prevent="onDragMousedown" @mouseup.native="onDragMouseup">
      <template v-slot:header>
        <span>色表</span>
      </template>
      <template v-slot:main>
        <div>内容</div>
      </template>
    </Drag>
    <ul class="indicator" v-if="isDraging" @mouseover="onIndicatorMouseenter"  @mouseout="onIndicatorMouseleave" @mouseup="onIndicatorMouseup">
      <li class="docIndicator" data-index="1"></li>
      <li class="docIndicator" data-index="2"></li>
      <li class="docIndicator" data-index="3"></li>
      <li class="docIndicator" data-index="4"></li>
    </ul>
    
  </div>
</template>

<script>

export default {

  name: 'Index',
  data () {
    return {
      clienWidth: document.body.clientWidth,
      clienHeight: document.body.clientHeight,
      x: 0,
      y: 0,
      l: 0,
      t: 0,
      isDraging: false,
      isDragGhostLeft: false,
      isDragGhostRight: false,
      isDragFloat: true,
      dragList:[{
          id: 0,
          title:'色表',
          isDraging: false,
          isVisible: true
        }
      ],
      $float_drag_el: null,
    }
  },
  methods: {
    init() {
      this.$float_drag_el = document.querySelector('.float_drag');
      window.addEventListener("mousemove", e => {
        if (this.isDraging == true) {

          var indicator = document.getElementsByClassName('docIndicator');
          indicator[0].style.transform= "translate(0, 60px)";
          indicator[1].style.transform= "translate(-60px, 0)";
          indicator[2].style.transform= "translate(0, -60px)";
          indicator[3].style.transform= "translate(60px, 0)";

          
          var nx = e.clientX;
          var ny = e.clientY;
          var nl = nx - (this.x - this.l);
          var nt = ny - (this.y - this.t);
          this.$float_drag_el.style.left = nl + 'px';
          this.$float_drag_el.style.top = nt + 'px';
        }

      }, false);
    },
    onIndicatorMouseenter(e) {

      if(e.target.nodeName.toLowerCase() == 'li') {
        if(e.target.dataset.index == 2) {
          
        }
      }
    },
    onIndicatorMouseleave(e) {
      if(e.target.dataset.index == 2) {
          
      }
    },
    onIndicatorMouseup(e) {
      this.isDraging = false;
     
      var $root_el = this.$float_drag_el.parentNode;
      var $left_aside_el = document.querySelector('#left_aside');
      var $right_aside_el = document.querySelector('#right_aside');
      $root_el.removeChild(this.$float_drag_el);

      if(e.target.dataset.index == 2) {
        $right_aside_el.appendChild(this.$float_drag_el);

      } else if(e.target.dataset.index == 4) {
        $left_aside_el.appendChild(this.$float_drag_el);
      }
      
      this.$float_drag_el.className = "fixed_drag";
      
      this.$float_drag_el.style.cursor = 'default';
      this.isDragFloat = false;


      
    },
    onDragMousedown(e) {
      if (e.target.nodeName.toLowerCase() == 'header' || e.target.parentNode.nodeName.toLowerCase() == 'header') {
        
        var $root_el = document.querySelector('.Index');
        var $left_aside_el = document.querySelector('#left_aside');
        var $right_aside_el = document.querySelector('#right_aside');
        this.isDraging = true;

        if(this.isDragFloat) {
          this.x = e.clientX;
          this.y = e.clientY;
          this.l = this.$float_drag_el.offsetLeft;
          this.t = this.$float_drag_el.offsetTop;
          this.$float_drag_el.style.cursor = 'move';
        } else {
          
          this.$float_drag_el.parentNode.removeChild(this.$float_drag_el);
          $root_el.appendChild(this.$float_drag_el);

          this.$float_drag_el.className = "float_drag";
          this.$float_drag_el.style.top = e.clientY - (this.y - this.t) + 'px';
          this.$float_drag_el.style.cursor = 'move';
          this.isDragFloat = true;

        }
        
      }
      

    },
    onDragMouseup(e) {
      //开关关闭
      if (!this.isDraging) {
        return;
      }
      this.isDraging = false;
      this.$float_drag_el.style.cursor = 'default';

    },
    
  },
  mounted() {
    this.init();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Index {
  width: 100%;
  height: 100%;
}
.el-container {
  width: 100%;
  height: 100%;

}
.el-header {
  background: yellow;
}
.el-aside {
  background: green;
}
.fixed_drag {
  position: static; 
  width: 200px;
  height: 100%; 
  background: pink; 
  cursor: default;
}
.float_drag {
  position: absolute;
  width: 200px;
  height: 200px;
  background: red;
  z-index: 999;
  top: 0;
  left: 0;
}
.el-footer {
  background: pink;
}
.docIndicator {
  position: absolute;
  width: 40px;
  height: 40px;
  transition: transform 0.5s;
  background: blue;
  z-index: 9999;
}
.docIndicator:nth-child(1) {
  top: -40px;
  left: 50%;
}
.docIndicator:nth-child(2) {
  top: 50%;
  left: 100%;
}
.docIndicator:nth-child(3) {
  top: 100%;
  left: 50%;
}
.docIndicator:nth-child(4) {
  top: 50%;
  left: -40px;
}
.indicator {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
