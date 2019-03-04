<template>
<div class="page-searchList">
	<div class="header">
        <div class="statusBar" :style="{height:statusBarHeight+'px'}"></div>
        <div class="info"><text @click="goBack(iconh)" class="eosfont" v-html="iconh"></text><text style="font-size: 16px;">{{titleh}}</text><text class="eosfont"  @click="goSearch('&#xe64c;')">&#xe64c;</text></div>
    </div>
</div>
</template>

<script>
export default {
	data() {
		return {
			statusBarHeight: '',
			tips: ''
		}
	},
	props:['iconh','titleh'],
    created() {
        let _t = this;
        setTimeout(() => { //获取状态栏高度，setTimeout后才能调用uni.
            uni.getSystemInfo({
                success: function(res) {
                    _t.statusBarHeight = res.statusBarHeight;
                }
            });
        }, 1);
    },
	methods: {
		goBack: function(code) {
			if(code == '&#xe600;') {
				console.log('xiala');
			}
			if(code == '&#xe690;') {
				console.log('add');
			}
			if(code == 'back'){
				uni.navigateBack({
					delta: 1
				});
			}
		},
		goSearch: function(code) {
			this.tips = code;
			uni.navigateTo({
				url: '/pages/HM-search/HM-search'
			})
		},
	}
};
</script>

<style>
/*  #ifdef  APP-PLUS*/
.page-searchList {
    justify-content: center;
    align-items: center;
	height: calc(var(--status-bar-height) + 44px);
}
/*  #endif  */
/*  #ifdef  H5*/
.page-searchList {
    justify-content: center;
    align-items: center;
	height: 44px;
}
/*  #endif  */
.statusBar {
	width: 100%;
}
.header {
    background-image: linear-gradient(to right, #167fc4, #3ebfe0);
    width: 100%;
    position: fixed;
    top: 0;
	color: #fff;
	z-index: 10;
}
.info {
	height: 44px;
	display: flex;
    justify-content: space-between;
    align-items: center;
	padding: 0 30upx;
}
</style>