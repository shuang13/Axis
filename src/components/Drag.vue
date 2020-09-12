<template>
  <div class="Drag">
      <el-container>
        <el-header>
          <slot name="header">header</slot>
        </el-header>
        <el-main>
          <slot name="main">main</slot>
        </el-main>
      </el-container>
      

  </div>
</template>

<script>
export default {
  name: 'Drag',
  
  data () {
    return {
      
    }
  },
  methods: {
    
    init() {
      
    },
    
  },
  mounted() {
    this.init();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.Drag {
  position: absolute;
  width: 200px;
  height: 200px;
  background: red;
  z-index: 999;
  top: 0;
  left: 0;
}
.el-container {
  width: 100%;
  height: 100%;
}


</style>
