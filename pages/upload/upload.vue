<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<view class="out-bc">
			<view class="out-item">
				<form @submit="formSubmit">
					<view class="uni-form-item uni-column form-style">
						<text>科&emsp;&emsp;室</text>
						<input class="uni-input" name="input" />
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>手术名称</text>
						<input class="uni-input" name="input" />
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>手者助手</text>
						<input class="uni-input" name="input" />
					</view>					
					<view class="uni-form-item uni-column form-style">
						<text>手术时间</text>
						<input class="uni-input" name="input" />
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>病人姓名</text>
						<input class="uni-input" name="input" />
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>病例编号</text>
						<input class="uni-input" name="input" />
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>手术记录</text>
						<textarea auto-height/>
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>术后诊断</text>
						<textarea auto-height/>
					</view>
					<view class="uni-form-item uni-column form-style">
						<text>上传图片</text>
						<view class="up-box">
							<div class="img-upload">
								<span>+</span>
								<span>上传图片</span>
							</div>
							<div class="file-upload" @click="upload_file">
								<span>点击上传文件到这里<br/> 支持多文件同时上传</span>
							</div>
						</view>
					</view>
					<view class="uni-btn-v submit-box">
						<button formType="submit">确认</button>
						<button type="default">取消</button>
					</view>
				</form>
			</view>
		</view>
	</view>
</template>
<script>
	import xHeader from "../../components/xHeader.vue"
	export default {
		data() {
			return {
				titleh: '手术记录编辑',
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
			upload_file: function() {
// 				var path=plus.io.convertLocalFileSystemURL("Document/MY/File");
// 				console.log(path);
// 				plus.io.requestFileSystem(path.substring(0, path.lastIndexOf("/Documents"))+"/Documents", function(fs) {
// 					console.log(1);
					// console.log(fs);
					// console.log(fs.root.fullPath);
		
					// console.log(JSON.stringify(fs.root));
// 					var directoryReader = entry.root.createReader();
// 					directoryReader.readEntries( function( entries ){
// 						var i;
// 						
// 						for( i=0; i < entries.length; i++ ) {
// 							uni.showToast({
// 								title: ""+entries[i].file,
// 								icon: 'none',
// 								duration: 2000
// 							})
// 						}
// 					}, function ( e ) {
// 					    alert( "Read entries failed: " + e.message );
// // 					} );
// 				}, function ( e ) {
// 					uni.showToast({
// 						title: 'we',
// 						icon: 'none',
// 						duration: 2000
// 					})
// 				})
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
		width: 20%;
		line-height: 80upx;
	}
	.form-style input, .form-style textarea{
		border: 1px solid #f5f5f5;
		box-shadow: 0 0 20upx #eee;
		width: 80%;
		text-align: left;
	}
	.form-style textarea{
		min-height: 150upx;
	}
	.up-box {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 80%;
	}
	.img-upload {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 30%;
		height: 150upx;
		border: 1px solid #f5f5f5;
		box-shadow: 0 0 20upx #eee;
		color: #ccc;
	}
	.file-upload {
		width: 60%;
		height: 150upx;
		border: 1px solid #f5f5f5;
		box-shadow: 0 0 20upx #eee;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: #ccc;
	}
	.submit-box {
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin-top: 50upx;
	}
	.submit-box button {
		height: 40px;
		width: 150px;
		margin: 0 30upx;
		border-radius: 20px;
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
