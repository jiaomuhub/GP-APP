<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<top-tab @change="updateTab" :modelData="sendData"></top-tab>、
		<view class="out-bc">
			<view class="out-item">
				<div class="out-first">
					<h1>黄磊</h1>
					<h2>病理科</h2>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe642;</text>
					<p>查看</p>
				</div>
				<div class="out-edit">
					<text class="eosfont icon-style">&#xe60e;</text>
					<p>编辑</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe606;</text> 
					<p>删除</p>
				</div>
			</view>
			<view class="out-item">
				<div class="out-first">
					<h1>临床医疗服务相关课程</h1>
					<h2>专业细则</h2>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe642;</text>
					<p>查看</p>
				</div>
				<div class="out-edit">
					<text class="eosfont icon-style">&#xe60e;</text>
					<p>编辑</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe606;</text> 
					<p>删除</p>
				</div>
			</view>
			<view class="out-item">
				<div class="out-first">
					<h1>临床医疗服务相关课程</h1>
					<h2>专业细则</h2>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe642;</text>
					<p>查看</p>
				</div>
				<div class="out-edit">
					<text class="eosfont icon-style">&#xe60e;</text>
					<p>编辑</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe606;</text> 
					<p>删除</p>
				</div>
			</view>
			<view class="out-item">
				<div class="out-first">
					<h1>临床医疗服务相关课程</h1>
					<h2>专业细则</h2>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe642;</text>
					<p>查看</p>
				</div>
				<div class="out-edit">
					<text class="eosfont icon-style">&#xe60e;</text>
					<p>编辑</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe606;</text> 
					<p>删除</p>
				</div>
			</view>
		</view>
	</view>
</template>

<script>
	import xHeader from "../../components/xHeader.vue";
	import topTab from "../../components/top-tab/top-tab.vue";
	import comm from '../../static/js/common.js';
	export default {
		data() {
			return {
				titleh: '工作监督',
				iconh: '&#xe600;',
				tips: '',
				userInfo: {},
				sendData: [
					{label:"带教监督",},
					{label:"导师监督"},
					{label:"学员监督"},
					{label:"科室监督"},
				]
			}
		},
		components: {
            xHeader,topTab
        },
		onNavigationBarButtonTap(e) {
			this.tips = e
		},
		onLoad(options) {
			let that = this;
			console.log(options.id)
			if(options.id == 'bg') {
				that.titleh = '我的办公';
			}
		},
		methods: {
			goItemPage(item) {
				if(item == 'dg') {
					uni.navigateTo({
						url: '/pages/outline/outline'
					})
				}
				if(item == 'rz') {
					uni.navigateTo({
						url: '/pages/upload/upload'
					})
				}
				if(item == 'st') {
					uni.navigateTo({
						url: '/pages/tests/tests'
					})
				}
			},
			updateTab (data) {
				console.log(data);
			}
		}
	}
</script>

<style>
	body {
		background-color: #f7f7f7;
	}
	.content {
		text-align: center;
		height: 400upx;
	}
	.item-box {
		width: 92%;
		margin: 0 30upx;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		box-sizing: border-box;
	}
	.item-box div{
		width: 30%;
		padding: 30upx 0;
		font-size: 24upx;
	}
	.icon-style {
		color: #4fc5d3;
		font-size: 50upx;
	}
	
	.out-bc {
		height: 250upx;
	}
	.out-item {
		display: flex;
		background-color: #fff;
		border-radius: 10upx;
		width: 100%;
		padding: 30upx;
		box-sizing: border-box;
		margin-bottom: 30upx;
	}
	.out-item h1 {
		color: #666;
		font-size: 30upx;
	}
	.out-item p {
		color: #666;
		font-size: 26upx;
	}
	.out-item h2 {
		color: #999;
		font-size: 26upx;
		padding-top: 10upx;
	}
	.out-item>div:not(.out-first) {
		margin: 0 10upx;
	}
	.out-first {
		width: 66%;
		text-align: left;
	}
	.icon-style {
		font-size: 40upx;
	}
	.out-edit, .out-edit>p {
		color: #d16e0e !important;
	}
</style>
