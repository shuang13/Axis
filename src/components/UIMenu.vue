<template>
  <div class="UIMenu">
    <ul class ="menu">
        <li>
          <span>层位解释</span>
        </li>
    </ul>
  </div>
</template>

<script>
export default {

  name: 'UIMenu',
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

.menu {
  display: none;
  position: absolute;
  list-style: none;
  padding-inline-start: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
  border: 1px solid #ddd;
  box-shadow: 2px 2px 2px #888888;
}

.menu li {
  float: left;
  background: #fff;
  text-align: center;
  line-height: 30px;
  width: 100px;
  height: 30px;
  list-style: none;
  font-size: 14px;
}
.menu li:hover {
  background: #ddd;
  cursor: pointer;
}
</style>
