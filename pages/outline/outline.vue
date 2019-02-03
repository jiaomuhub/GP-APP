<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<view class="out-bc">
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
	import xHeader from "../../components/xHeader.vue"
	export default {
		data() {
			return {
				titleh: '规培大纲',
				iconh: '&#xe690;',
				tips: ''
			}
		},
		components: {
            xHeader
        },
		onNavigationBarButtonTap(e) {
			this.tips = e
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	page {
		background-color: #e8ebf2;
	}
	.content {
		text-align: center;
		height: 400upx;
	}
	.out-bc {
		height: 250upx;
		background-image: linear-gradient(to right, #167fc4, #3ebfe0);
		padding: 50upx 30upx 0;
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
