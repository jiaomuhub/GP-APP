<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<!-- <top-tab @change="updateTab" :modelData="sendData"></top-tab> -->
		<view class="out-bc">
			<view class="out-item">
				<view class="item">
					<image src="../../static/image/dulin-setting/head.png" mode=""></image>
					<view class="item-right">
						<view class="jtop">
							<h1>邹微</h1>
							<h2>科室：呼吸内科</h2>
						</view>
						<view class="jtop">
							<text>迟到：0</text>
							<text>早退：0</text>
							<text>事假：0</text>
							<text>病假：0</text>
						</view>
						<view class="jtop jtime">
							<text>年假：0</text>
							<text>婚假：0</text>
							<text>产假：0</text>
							<text>旷工：10</text>
						</view>
						<view class="jbottom">
							<div>
								<text class="eosfont icon-style">&#xe642;</text>
								<p>明细</p>
							</div>
						</view>
					</view>
				</view>
				<view class="item">
					<image src="../../static/image/dulin-setting/head.png" mode=""></image>
					<view class="item-right">
						<view class="jtop">
							<h1>邹微</h1>
							<h2>科室：呼吸内科</h2>
						</view>
						<view class="jtop">
							<text>迟到：0</text>
							<text>早退：0</text>
							<text>事假：0</text>
							<text>病假：0</text>
						</view>
						<view class="jtop jtime">
							<text>年假：0</text>
							<text>婚假：0</text>
							<text>产假：0</text>
							<text>旷工：10</text>
						</view>
						<view class="jbottom">
							<div>
								<text class="eosfont icon-style">&#xe642;</text>
								<p>明细</p>
							</div>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import xHeader from "../../components/xHeader.vue";
	// import topTab from "../../components/top-tab/top-tab.vue";
	import comm from '../../static/js/common.js';
	export default {
		data() {
			return {
				titleh: '考勤审批',
				iconh: '&#xe600;',
				tips: '',
				userInfo: {},
			}
		},
		components: {
            xHeader
        },
		onNavigationBarButtonTap(e) {
			this.tips = e
		},
		onLoad(options) {
			
		},
		methods: {
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
		background-color: #fff;
		border-radius: 10upx;
		width: 100%;
		padding: 18upx 30upx;
		box-sizing: border-box;
		margin-bottom: 30upx;
	}
	.item {
		display: flex;
		border-bottom: 1px dashed #ccc;
		padding: 30upx 0;
	}
	.item-right {
		width: 80%;
	}
	.item image {
		display: block;
		height: 110upx;
		width: 110upx;
		margin-right: 30upx;
	}
	.jtop {
		display: flex;
		justify-content: space-between;
	}
	.jbottom {
		display: flex;
	}
	.jbottom > div {
		margin-right: 30upx;
	}
	.jtime {
		color: #167fc4;
	}
	.out-item h1 {
		color: #d16e0e;
		font-size: 30upx;
	}
	.out-item p {
		color: #666;
		font-size: 26upx;
		line-height: 20upx;
	}
	.out-item h2 {
		color: #999;
		font-size: 26upx;
		padding-top: 10upx;
	}
	.icon-style {
		font-size: 40upx;
	}
	.out-edit, .out-edit>p {
		color: #d16e0e !important;
	}
</style>
