<template>
	<view class="content" style="background: url(../../static/image/login.png) no-repeat;background-size: 100% 100%;">
		<form @submit="formSubmit" class="login-box">
			<view class="uni-form-item uni-column">
				<input class="uni-input user" name="input" type="text" v-model="formData.username" placeholder="账号" />
			</view>
			<view class="uni-form-item uni-column">
				<input class="uni-input user" name="input" type="password"  v-model="formData.password" placeholder="密码" />
			</view>
			<view class="uni-form-item uni-column">
				<picker class="user" @change="bindPickerChange" :value="index" :range="array" placeholder="医院">
					<view class="uni-input">{{array[index]}}</view>
				</picker>
			</view>
			<view class="uni-btn-v">
				<button class="login-btn" formType="submit">登录</button>
			</view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				array: ['中医院', '附属医院', '儿童医院', '日本', '美国', '巴西', '日本','美国', '巴西', '日本'],
				index: 0,
				formData: {
					username: '',
					password: ''
				}
			}
		},
		onLoad() {

		},
		methods: {
			bindPickerChange: function(e) {
				console.log('picker发送选择改变，携带值为', e.target.value)
				this.index = e.target.value
			},
			formSubmit: function() {
				let that = this;
				console.log(this.formData)
				console.log(this.index)
				if(that.verification()) {
					uni.navigateTo({
						url: '/pages/index/index'
					})
				};
			},
			verification: function() {
				let that = this;
				if(that.formData.username == '') {
					uni.showToast({
						title: '账号不能为空',
						icon: 'none',
						duration: 2000
					});
					return false
				}
				if(that.formData.password == '') {
					uni.showToast({
						title: '密码不能为空',
						icon: 'none',
						duration: 2000
					});
					return false
				}
				if(that.formData.password.length != 6) {
					uni.showToast({
						title: '密码长度为6位',
						icon: 'none',
						duration: 2000
					});
					return false
				}
				if(that.index == '') {
					uni.showToast({
						title: '请选择医院',
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
	.content {
		width: 100%;
		height: 100%;
	}
	.content .login-box {
		height: 100%;
		width: 100%;
		display: block;
		box-sizing: border-box;
		padding: 500upx 140upx !important;
		
	}
	.content .login-box .user {
		border-radius: 40upx;
		background-color: #FFFFFF;
		height: 70upx;
		line-height: 70upx;
		padding: 0 30upx;
		margin: 30upx 0;
		font-size: 30upx;
	}
	.login-btn {
		height: 70upx;
		line-height: 70upx;
		border-radius: 40upx;
		background-color: #66d354;
		color: #fff;
		margin-top: 60upx;
		font-size: 40upx;
	}
	uni-page-body, uni-page-refresh {
		height: 100%;
	}
</style>
