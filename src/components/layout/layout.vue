<template>
	<div class="frame">
		<div class="menu">
			<router-link to="/system" tag="div" class="menu_t_title">菜单</router-link>
			<!--test-->
			<!--<router-link to="/system/web1" tag="div" class="menu_item">web1</router-link>
			<router-link to="/system/web2" tag="div" class="menu_item">web2</router-link>-->
			
			<!--vuex-->
			<!-- <router-link to="/vuex/vuex-state" tag="div" class="menu_item">state</router-link>
			<router-link to="/vuex/vuex-mapState" tag="div" class="menu_item">mapState</router-link>
			<router-link to="/vuex/vuex-getters" tag="div" class="menu_item">getters</router-link>
			<router-link to="/vuex/vuex-mapGetters" tag="div" class="menu_item">mapGetters</router-link>
			<router-link to="/vuex/vuex-mutation" tag="div" class="menu_item">mutation</router-link>
			<router-link to="/vuex/vuex-mapMutations" tag="div" class="menu_item">mapMutations</router-link>
			<router-link to="/vuex/vuex-vuexAction" tag="div" class="menu_item">vuexAction</router-link>
			<router-link to="/vuex/vuex-vuexMapAction" tag="div" class="menu_item">vuexMapAction</router-link>
			<router-link to="/vuex/vuex-vuexModules" tag="div" class="menu_item">vuexModules</router-link>
			<router-link to="/vuex/vuex-vuexModulesMapSome" tag="div" class="menu_item">vuexModulesMapSome</router-link>
			<router-link to="/vuex/vuex-vuexDynamicModules" tag="div" class="menu_item">vuexDynamicModules</router-link> -->
			
			<!--递归组件-->
			<!--<router-link to="/others/recursion-component1" tag="div" class="menu_item">recComponent1</router-link>
			<router-link to="/others/recursion-component2" tag="div" class="menu_item">recComponent2</router-link>-->

			<!-- vm-operate -->
			<!-- <router-link to="/others/vm-operate" tag="div" class="menu_item">vm-operate</router-link> -->
			
			<!--mixins-->
			<!--<router-link to="/mixins/mixin-base" tag="div" class="menu_item">mixin-base</router-link>
			<router-link to="/mixins/global-mixin" tag="div" class="menu_item">global-mixin</router-link>-->
			
			<!--custom-directives-->
			<!--<router-link to="/custom-directives/base" tag="div" class="menu_item">base</router-link>-->
			
			<!--render-->
			<!--<router-link to="/render/base" tag="div" class="menu_item">base</router-link>
			<router-link to="/render/test" tag="div" class="menu_item">test</router-link>-->

			<!-- sass -->
			<!-- <router-link to="/sass/base" tag="div" class="menu_item">sass-base</router-link> -->
		</div>
		<div class="r_part">
			<div class="operate_wrap">
				选项卡
			</div>
			<div class="cl_window">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
			}
		}
	}
</script>

<style scoped="scoped">
	.frame{
		width:100%;
		height:100%;
	}
	.menu_t_title{
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 18px;
		background: #42B983;
		color: #666;
		font-weight: 600;
		cursor: pointer;
	}
	.menu{
		float: left;
		height: 100%;
		width: 150px;
		background: #ccc;
	}
	.menu_item{
		height: 40px;
		text-align: center;
		line-height: 40px;
		font-size: 16px;
		cursor: pointer;
	}
	.menu_item:hover{
		background: #eee;
	}
	.r_part{
		position: fixed;
		left: 150px;
		right: 0;
		bottom: 0;
		top:0;
	}
	.operate_wrap{
		width: 100%;
		height: 40px;
		background: aqua;
	}
	.cl_window{
		position: absolute;
		top: 40px;
		left: 0;
		right: 0;
		bottom: 0;
		background: #fff;
	}
</style>