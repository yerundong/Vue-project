<!--
	主（根）组件
	所有的组件都是App.vue的子或子孙组件，都在这个大组件下运行的,包括路由
-->
<template>
  <div id="clApp" class="clApp">
    <router-view/>
  </div>
</template>

<script></script>

<style lang="scss">
	.clApp{
		width: 100%;
		height: 100%;
	}
</style>
