<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<view class="user-box">
			<image src="../../static/image/dulin-setting/head.png"></image>
			<view>
				<div>{{userInfo.userRealName || '未设置'}}</div>
				<text>{{userInfo.title || '未设置'}}</text> 
			</view>
		</view>
		<view class="pic-box">
			<image class="pic-big" src="../../static/image/sbig.png"></image>
		</view>
		<view class="item-bc">
			<view class="item-box">
				<div @click="goItemPage('bg')">
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
				<div @click="goItemPage('dg')">
					<text class="eosfont icon-style">&#xe60b;</text>
					<p>大纲管理</p>
				</div>
				<div @click="goItemPage('rz')">
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
				<div @click="goItemPage('st')">
					<text class="eosfont icon-style">&#xe631;</text>
					<p>教学活动管理</p>
				</div>
				<div @click="goItemPage('kq')">
					<text class="eosfont icon-style">&#xe622;</text>
					<p>考勤管理</p>
				</div>
				<div>
					<text class="eosfont icon-style">&#xe63f;</text>
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
	import xHeader from "../../components/xHeader.vue";
	import comm from '../../static/js/common.js';
	export default {
		data() {
			return {
				titleh: '全科助理培训管理平台',
				iconh: '&#xe600;',
				tips: '',
				userInfo: {}
			}
		},
		components: {
            xHeader
        },
		onNavigationBarButtonTap(e) {
			this.tips = e
		},
		onLoad() {
			let that = this;
			let _token = uni.getStorageSync('token');
			if(_token == '') {
				uni.navigateTo({
					url: '/pages/login/login'
				})
			}else{
				comm.post(comm.host_gp + "/api/f/user/get").then(function(res) {
					res = res.data;
					that.userInfo = res;
				})
			}
		},
		methods: {
			goItemPage(item) {
				if(item == 'bg') {
					uni.showActionSheet({
						itemList: ['工作督导', '教学文档管理', '设备管理'],
						success: function (res) {
							if(res.tapIndex + 1 == 1) {
								uni.navigateTo({
									url: '/pages/workReview/workReview'
								})
							}
							if(res.tapIndex + 1 == 2) {
								uni.navigateTo({
									url: '/pages/teachingDoc/teachingDoc'
								})
							}
						},
						fail: function (res) {
							console.log(res.errMsg);
						}
					});
				}
				if(item == 'kq') {
					uni.showActionSheet({
						itemList: ['考勤查询', '考勤审批', '考勤违纪', '我的考勤', '我的请假'],
						success: function (res) {
							if(res.tapIndex + 1 == 1) {
								uni.navigateTo({
									url: '/pages/checkWork/checkWork'
								})
							}
							if(res.tapIndex + 1 == 2) {
								uni.navigateTo({
									url: '/pages/approval/approval'
								})
							}
						},
						fail: function (res) {
							console.log(res.errMsg);
						}
					});
				}
// 				uni.navigateTo({
// 					url: '/pages/subPage/subPage?id='+ item
// 				})
// 				if(item == 'bg') {
// 					uni.navigateTo({
// 						url: '/pages/outline/outline'
// 					})
// 				}
// 				if(item == 'dg') {
// 					uni.navigateTo({
// 						url: '/pages/outline/outline'
// 					})
// 				}
// 				if(item == 'rz') {
// 					uni.navigateTo({
// 						url: '/pages/upload/upload'
// 					})
// 				}
// 				if(item == 'st') {
// 					uni.navigateTo({
// 						url: '/pages/tests/tests'
// 					})
// 				}
			},
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
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
		font-size: 30upx;
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
		background-color: #f6fafe;
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
		padding: 30upx 0;
		font-size: 24upx;
	}
	.icon-style {
		color: #4fc5d3;
		font-size: 50upx;
	}
</style>
