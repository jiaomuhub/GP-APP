<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<top-tab @change="updateTab" :modelData="sendData"></top-tab>
		<view class="out-bc">
			<view class="out-item" v-for="item in items" :key="item.name">
				<view class="top-item">
					<h1 style="color: #d16e0e">{{item.name}}</h1>
					<h2>{{item.ks}}</h2>
				</view>
				<view class="bottom-item">
					<p v-if="item.lebal1">{{item.lebal1}}:{{item.num1}}</p>
					<p v-if="item.lebal2">{{item.lebal2}}:{{item.num2}}</p>
					<p v-if="item.lebal3">{{item.lebal3}}:{{item.num3}}</p>
				</view>
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
				],
				items: [
					{
						lebal1: '历史带教人数',
						lebal2: '已出科人数',
						lebal3: '当前规培人数',
						name: '黄磊',
						ks: '病理科',
						num1: '0',
						num2: '3',
						num3: '3',
					},
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
			updateTab (data) {
				if(data == 0) {
					this.items = [
						{
							lebal1: '历史带教人数',
							lebal2: '已出科人数',
							lebal3: '当前规培人数',
							name: '黄磊',
							ks: '病理科',
							num1: '0',
							num2: '3',
							num3: '3',
						},
					]
				}
				if(data == 1) {
					this.items = [
						{
							lebal1: '历史跟师人数',
							lebal2: '当前跟师人数',
							name: '白永国',
							ks: '18711112222',
							num1: '0',
							num2: '3',
						},{
							lebal1: '历史跟师人数',
							lebal2: '当前跟师人数',
							name: '白永国',
							ks: '18711112222',
							num1: '0',
							num2: '3',
						},
					]
				}
				if(data == 2) {
					this.items = [
						{
							lebal1: '当前轮转科室',
							lebal2: '已轮转科室数',
							name: '测试',
							ks: '临床医学',
							num1: '神经内科',
							num2: '3',
						},{
							lebal1: '当前轮转科室',
							lebal2: '已轮转科室数',
							name: '测试',
							ks: '临床医学',
							num1: '神经内科',
							num2: '3',
						},
					]
				}
				if(data == 3) {
					this.items = [
						{
							lebal1: '带教老师人数',
							lebal2: '已出科人数',
							lebal3: '当前规培人数',
							name: '熊俊红',
							ks: '内科',
							num1: '0',
							num2: '3',
							num3: '3',
						},
					]
				}
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
		background-color: #fff;
		border-radius: 10upx;
		width: 100%;
		padding: 18upx 30upx;
		box-sizing: border-box;
		margin-bottom: 30upx;
	}
	.top-item, .bottom-item {
		display: flex;
		justify-content: space-between;
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
	.icon-style {
		font-size: 40upx;
	}
	.out-edit, .out-edit>p {
		color: #d16e0e !important;
	}
</style>
