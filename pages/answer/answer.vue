<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<view class="user-box">
			<image src="../../static/image/logo.png"></image>
			<view>
				<div>张三</div>
				<text>超级管理员</text> 
			</view>
		</view>
		<view class="pic-box">
			<image class="pic-big" src="../../static/image/sbig.png"></image>
		</view>
		<view class="item-bc">
			<view class="item-box">
				<div>
					<text class="eosfont icon-style">&#xe60f;</text>
					<p>我的办公</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe64b;</text>
					<p>系统管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe625;</text>
					<p>基础参数管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe60b;</text>
					<p>大纲管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe604;</text>
					<p>个人规培记录</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe639;</text>
					<p>规培记录审核</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe664;</text>
					<p>轮转管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe631;</text>
					<p>教学活动管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe622;</text>
					<p>考勤管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe639;</text>
					<p>评价管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe639;</text>
					<p>出科管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe639;</text>
					<p>结业管理</p>
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
				titleh: '全科助理培训管理平台',
				iconh: '&#xe600;',
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
	.content {
		text-align: center;
		height: 400upx;
	}
	.user-box {
		display: flex;
		font-size: 30upx;
		height: 250upx;
		background-image: linear-gradient(to right, #167fc4, #3ebfe0);
		color: #fff;
		padding: 50upx 30upx 0;
	}
	.user-box image {
		display: block;
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-right: 30upx;
	}
	.user-box view {
		text-align: left;
	}
	.user-box view div {
		padding-top: 10upx;
	}
	.user-box view text {
		font-size: 26upx;
		color: #bfd6eb;
	}
	.pic-box {
		position: relative;
		width: 100%;
		height: 267upx;
		box-sizing: border-box;
	}
	.pic-box .pic-big {
		width: 92%;
		height: 367upx;
		position: absolute;
		top: -100upx;
		left: 30upx;
	}
	.item-bc {
		width: 100%;
		background-color: #fbfdfe;
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
		width: 25%;
		padding: 40upx 0;
		font-size: 22upx;
	}
	.icon-style {
		color: #4fc5d3;
		font-size: 40upx;
	}
</style>
