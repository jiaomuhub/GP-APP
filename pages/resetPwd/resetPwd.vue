<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<view class="out-bc">
			<view class="out-item">
				<form @submit="formSubmit"  @reset="formReset">
					<view class="uni-form-item uni-column form-style">
						<text>旧密码</text>
						<input class="uni-input" v-model="oldPassword" name="input" type="password" placeholder="输入旧密码"/>
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>新密码</text>
						<input class="uni-input" v-model="newPassword" name="input"  type="password" placeholder="输入新密码"/> 
					</view>
					<view class="uni-btn-v submit-box">
						<button formType="submit">确认</button>
						<button type="default" formType="reset">重置</button>
					</view>
				</form>
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
				titleh: '修改密码',
				iconh: '&#xe600;',
				tips: '',
				newPassword: '',
				oldPassword: ''
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
			formSubmit: function() {
				let that = this;
				if(that.verification()) {
					let param = {
						oldPassword: that.oldPassword,
						newPassword: that.newPassword
					}
					comm.post(comm.host_gp + "/api/f/user/resetPassword", param).then(function (res) {
						res = res.data;
						if(res.code == 0) {
							uni.showToast({
								title: '修改成功',
								icon: 'none',
								duration: 2000
							})
							setTimeout(function() {
								uni.navigateBack()
							}, 1000)
						}else {
							uni.showToast({
								title: res.msg,
								icon: 'none',
								duration: 2000
							})
						}
					})
				};
			},
			formReset: function(e) {
				let that = this;
				that.oldPassword = '';
				that.newPassword = '';
			},
			verification: function() {
				let that = this;
				if(that.oldPassword == '') {
					uni.showToast({
						title: '旧密码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false
				}
				if(that.newPassword == '') {
					uni.showToast({
						title: '新密码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false
				}
				return true;
			}
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
	.form-style {
		display: flex;
		flex-direction: row;
		color: #666;
		justify-content: space-between;
	}
	.form-style>text {
		display: block;
		text-align: left;
		height: 80upx;
		width: 16%;
		line-height: 80upx;
	}
	.form-style input, .form-style textarea{
		border: 1px solid #f5f5f5;
		box-shadow: 0 0 20upx #eee;
		width: 80%;
		text-align: left;
	}
	.submit-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 50upx;
	}
	.submit-box button {
		font-size: 32upx;
		height: 60upx;
		line-height: 60upx;
		width: 200upx;
		margin: 0 30upx;
		border-radius: 30upx;
		border: none;
		color: #fff;
	}
	.submit-box button:nth-child(1) {
		background-color: #50aff1;
	}
	.submit-box button:nth-child(2) {
		background-color: #f1a400;
	}
</style>
