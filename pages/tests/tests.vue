<template>
	<view class="content">
		<x-header :iconh="iconh" :titleh="titleh"></x-header>
		<view class="out-bc">
			<view class="out-item">
				<text class="test-type">单选题</text>
				<div class="test-title">
					<h1>12.下列哪项不符合急性肾炎的用药则是：</h1>
					<view>
						<radio-group>
							<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in items" :key="item.value">
								<view>
									<text v-if="!item.checked">{{item.value}}.</text>
									<figure v-if="item.checked">
										<image class="icon-pic" src="../../static/image/check.png" v-show="item.value == current"></image>
										<image class="icon-pic" src="../../static/image/cw.png" v-show="item.value != current"></image>
									</figure>
								</view>
								<view @click="checked(item.value)">
									{{item.name}}
								</view>
							</label>
						</radio-group>
					</view>
					<text class="daan" v-if="click_num != 1">正确答案：{{current}}</text>
				</div>
			</view>
			<view class="out-item" v-if="click_num != 1">
				<div class="out-first">
					<h1>试题解析：</h1>
					<h2>急性肾炎应该用于有效的抗生素控制感染，如左氧氟沙星，头 炮类药物，继续治疗一周到2周时间。</h2>
					<h2>数据分析：67.36％ 的用户也做错了该题。。</h2>
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
				titleh: '规培考试',
				iconh: '&#xe600;',
				items: [{
						value: 'A',
						name: '好发于中年女性及青少年，免疫学检查可见多种自身抗体',
						checked: false
					},
					{
						value: 'B',
						name: '多见于儿童及青少年，临床主要表现为蛋白尿或NS',
						checked: false
					},
					{
						value: 'C',
						name: '轻症一般使用一个抗生素',
						checked: false
					},
					{
						value: 'D',
						name: '注意调节尿液酸碱度以增强抗菌药物效果',
						checked: false
					}
				],
				current: 'A',
				click_num: 1 
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
			checked: function(check) {
				let that = this;
				if(that.click_num == 1) {
					that.click_num++
					for(var i=0;i<that.items.length;i++) {
						if(check == that.current) {
							if(that.items[i].value == check ) {
								that.items[i].checked = !that.items[i].checked;
							}
						}else {
							if(that.items[i].value == check || that.items[i].value == that.current) {
								that.items[i].checked = !that.items[i].checked;
							}
						}
					}
				}else{
					return false;
				}
			}
		}
	}
</script>

<style>
	page {
		background-color: #e8ebf2;
	}
	.content {
		height: 400upx;
	}
	.out-bc {
		height: 250upx;
		background-image: linear-gradient(to right, #167fc4, #3ebfe0);
		padding: 50upx 30upx 0;
	}
	.out-item {
		background-color: #fff;
		border-radius: 10upx;
		width: 100%;
		padding: 30upx 30upx 70upx;
		box-sizing: border-box;
		margin-bottom: 30upx;
	}
	.test-type {
		display: inline-block;
		background-color: #eb6100;
		color: #fff;
		padding: 4upx 10upx;
		border-radius: 6upx;
		margin-bottom: 30upx;
	}
	.test-title h1{
		
	}
	.uni-list-cell::after {
		height: 0;
	}
	.uni-list-cell {
		justify-content: flex-start;
		align-items: flex-start;
	}
	.test-title radio-input {
		width: 20upx !important;
		height: 20upx !important;
	}
	.uni-list-cell-pd {
		padding-left: 0;
	}
	.icon-pic {
		display: inline-block;
		width: 30upx;
		height: 30upx;
		vertical-align: middle;
	}
	.daan {
		color: #eb6100;
		float: right;
	}
</style>
