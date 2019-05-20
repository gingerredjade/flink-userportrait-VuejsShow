<!-- content_header.vue -->
<template>
	<div class="content-header">
		<h1>
			{{title}}
			<small>{{v}}</small>
		</h1>
		<ol class="breadcrumb">
			<li v-for="(i,index) in menuList" v-bind:class="{ active: i.isActive}">{{i.text}}</li>
		</ol>
	</div>
</template>
<script>
export default {
  name: 'content_header',
  data(){
  	return {
  		title:"flink亿级动态统计分析系统",
  		v:"Version 1.0"
  	}
  },
  props: ['menuList']
}
</script>
