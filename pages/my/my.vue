<template>
	<div class="vbox">
		<!-- <image class="top_back_img" src="../../static/image/dulin-setting/set-top-bg.png" mode="aspectFit"></image> -->
		<view class="top_back_img">
		</view>
		<view class="top">
			<view class="circle">
				<image class="head" src="../../static/image/dulin-setting/head.png" mode="widthFix"></image>
			</view>
			<view class="top-texts">
				<text class="name">{{userInfo.userRealName || '未设置'}}</text>
				<!-- <image class="set-top-hr" src="../../static/image/dulin-setting/set-top-hr.png" mode=""></image> -->
				<text class="depart">{{userInfo.departmentName || '部门未设置'}}</text>
				<!-- <view>
					<text>绑定手机：</text>
					<text>18888888888</text>
				</view> -->
			</view>
			<!-- <view class="top-changeInfo">
				<text>完善资料</text>
			</view> -->
		</view>
		<view class="add-view-me">
			<!-- 中间部分 -->
			<view class="middle">
				<view class="middle-left">
					<text class="eosfont icon-style middle-icon">&#xe60d;</text>
					<!-- <image class="middle-icon" src="../../static/image/dulin-setting/cust.png"></image> -->
					<text>状态：</text>
					<text class="middle-num">{{userInfo.gpStatus || '未知'}}</text>
				</view>
				<view class="middle-line"></view>
				<view class="middle-right">
					<text class="eosfont icon-style middle-icon">&#xe607;</text>
					<!-- <image class="middle-icon" src="../../static/image/dulin-setting/loan.png"></image> -->
					<text>学校：</text>
					<text class="middle-num">{{userInfo.schoolName || '未知'}}</text>
				</view>
			</view>
			
			<!-- 下半部分 -->
			<view class="index">
				<view class="cell" @click="resetPwd">
					<view class="cell-left">
						<image class="cell_icon" src="../../static/image/dulin-setting/account.png"></image>
						<text class="cell-text">修改密码</text>
					</view>
					<view class="cell-right">
						<image class="right-arrow" src="../../static/image/dulin-setting/right-arrow.png"></image>
					</view>
				</view>
			
				<view class="cell" @click="getCurrVersion">
					<view class="cell-left">
						<image class="cell_icon" src="../../static/image/dulin-setting/account.png"></image>
						<text class="cell-text">当前版本</text>
					</view>
					<view class="cell-right">
						<image class="right-arrow" src="../../static/image/dulin-setting/right-arrow.png"></image>
					</view>
				</view>
			
				<view class="cell" @click="changeGray">
					<view class="cell-left">
						<image class="cell_icon" src="../../static/image/dulin-setting/account.png"></image>
						<text class="cell-text">检查更新</text>
					</view>
					<view class="cell-right">
						<image class="right-arrow" src="../../static/image/dulin-setting/right-arrow.png"></image>
					</view>
				</view>
			
				<!-- <view class="cell" @click="changeGray">
					<view class="cell-left">
						<image class="cell_icon" src="../../static/image/dulin-setting/account.png"></image>
						<text class="cell-text">清除缓存</text>
					</view>
					<view class="cell-right">
						<image class="right-arrow" src="../../static/image/dulin-setting/right-arrow.png"></image>
					</view>
				</view> -->
			
			
				<view class="cell" @click="changeGray">
					<view class="cell-left">
						<image class="cell_icon" src="../../static/image/dulin-setting/account.png"></image>
						<text class="cell-text">关于</text>
					</view>
					<view class="cell-right">
						<image class="right-arrow" src="../../static/image/dulin-setting/right-arrow.png"></image>
					</view>
				</view>
			</view>
		</view>
		

		<!-- 退出登录 -->
		<view class="logout" style="width:80%;margin-top: 50upx;">
			<button type="warn" @click="logout">退出登录</button>
		</view>
	</div>
</template>

<script>
	import comm from '../../static/js/common.js';
	export default {
		data() {
			return {
				userInfo: {},
				formData: {
					username: '',
					password: ''
				}
			}
		},
		onLoad() {
			let that = this;
			comm.post(comm.host_gp + "/api/f/user/get").then(function(res) {
				res = res.data;
				that.userInfo = res;
			})
		},
		methods: {
			getCurrVersion() {
				let v = plus.runtime.version;
				console.log(v)
				uni.showToast({
					title: '当前版本:  ' + v || '当前版本:   1.0.1',
					icon: 'none',
					duration: 2000
				});
			},
			resetPwd () {
				uni.navigateTo({
					url: '/pages/resetPwd/resetPwd'
				})
			},
			logout() {
				uni.showModal({
					title: '提示',
					content: '确认退出登陆？',
					success: function(res) {
						if (res.confirm) {
							comm.post(comm.host_gp + "/auth/logout").then(function(res) {
								res = res.data;
								if(res.code == 600) {
									uni.showToast({
										title: '退出成功',
										icon: 'none',
										duration: 2000
									})								
									uni.removeStorage({
										key: 'token',
										success(res) {
											uni.redirectTo({
												url: '/pages/login/login'
											})
										}
									})
								}else {
									uni.showToast({
										title: res.msg,
										icon: 'none',
										duration: 2000
									})
								}
							})
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		}
	}
</script>

<style scoped>
	/* page {
		background-color: #e8ebf2;
	} */
	.index {
		display: flex;
		flex-direction: column;
		width: 100%;
		background-color: white;
		border-top: 1px solid #cccccc;
	}

	.vbox {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	/* .top_back_img {
		z-index: -1;
		position: absolute;
		top: 0upx;
		width: 100%;
		height: 420upx;
	} */
	
	.top_back_img {
		z-index: -1;
		position: absolute;
		top: 0upx;
		background-image: linear-gradient(to right, #167fc4, #3ebfe0);
		height: 420upx;
		width: 100%;
	}

	.top {
		display: flex;
		width: 100%;
		height: 420upx;
		align-items: center;
	}
	.add-view-me {
		width: 100%;
		background-color: #f2f2f2;
	}
	.circle {
		margin-left: 8%;
		width: 120upx;
		height: 120upx;
		border: 10upx solid #a4f4f6;
		border-radius: 150upx;
		overflow: hidden;
	}

	.head {
		width: 120upx;
		height: 120upx;
		border-radius: 150upx;
	}

	.top-texts {
		display: flex;
		flex-direction: column;
		margin-left: 15upx;
		color: white;
	}

	.name {
		font-size: 36upx;
		font-weight: 500;
	}

	.set-top-hr {
		width: 210upx;
		height: 6upx;
	}

	.top-changeInfo {
		margin-top: 250upx;
		width: 120upx;
		height: 28upx;
		line-height: 28upx;
		background-color: #FFFFFF;
		border-radius: 15upx;
		padding: 10upx;
		color: #33dce8;
	}

	.middle {
		display: flex;
		align-items: center;
		position: relative;
		top: -50upx;
		left: 8%;
		width: 84%;
		height: 100upx;
		background-color: white;
		border-radius: 15upx;
	}

	.middle-line {
		width: 2upx;
		height: 80upx;
		background-color: #eeeeee;
	}

	.middle-left {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-right {
		flex-grow: 1;
		color: #666666;
		display: flex;
		align-items: center;
		text-align: center;
	}

	.middle-icon {
		display: block;
		/* width: 40upx;
		height: 40upx; */
		margin-left: 20upx;
		color: #4fc5d3;
	}

	.middle-num {
		color: #fcac45;
		-webkit-font-smoothing: antialiased;
	}

	.cell {
		display: flex;
		align-items: center;
		border-bottom: 1px solid #ccc;
		height: 90upx;
		align-items: center;
		justify-content: space-between;
	}

	.cell:active {
		background-color: #333;
		color: white;
		box-shadow: 1upx 1upx 35upx #ccc;
	}

	.cell-left {
		display: flex;
		align-items: center;
		margin-left: 65upx;
	}

	.cell-text {
		margin-left: 25upx;
	}

	.cell-right {
		margin-right: 45upx;
		height: 28upx;
	}

	.cell_icon {
		width: 40upx;
		height: 40upx;
		height: 40upx;
	}

	.right-arrow {
		color: #aaa;
		width: 15upx;
		height: 28upx;
	}
</style>
