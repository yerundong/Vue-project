<template>
	<div>
		age:<input type="num" v-model="assignAge" />
		place:<input type="num" v-model="assignPlace" />
		<button @click="assignTalkHandle">Assign Talk Handle</button>
		<p>talk:{{getTalkFromStore}}</p>
	</div>
</template>

<script>
	export default {
		name:"getters",
		computed:{
			getTalkFromStore(){
				return this.$store.getters.completeTalk
			}
		},
		data(){
			return{
				assignAge:'',
				assignPlace:'',
				assignTalk:'',
			}
		},
		methods:{
			assignTalkHandle(){
				this.$store.commit('assignAge',this.assignAge);
				this.$store.commit('assignPlace',this.assignPlace);
				this.$store.commit('assignTalk');
			}
		},
		created(){
			
		}
	}
</script>

<style>
</style>