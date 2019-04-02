class Request {
  get(url, params) {
    return new Promise((resolve, reject) => {
		uni.request({
			url: `${url}`,
			data: Object.assign({}, params),
			header: {
			  'Content-Type': 'application/json',
			  'Authorization': 'hello' //自定义请求头信息
			},
			success: function (res) {
			  console.debug(res);
			  resolve(res);
			},
			fail: function (res) {
			  console.error(res);
			  reject(res);
			}
		})
    })
  }
  post(url, params) {
		let _token = uni.getStorageSync('token');
    return new Promise((resolve, reject) => {
			uni.request({
				url: `${url}`,
				data: Object.assign({}, params),
				method: 'POST',
				header: {
					'Authorization': _token //自定义请求头信息
				},
				success: function (res) {
					resolve(res)
				},
				fail: function (res) {
					reject(res)
				}
			})   
    })
  }
	tokenRefresh (params) {
		uni.request({
			url: 'http://guipei.26cc.cc/gp/auth/tokenRefresh',
			method: 'POST',
			success: function (res) {
				uni.setStorageSync('token', res.data.token);
			},
			fail: function (res) {
			}
		})
	}
  json2Form(json) {
    var str = []
    for (var p in json) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(json[p]))
    }
    return str.join("&")
  }
}

let request = new Request();

module.exports = {
  host_gp: 'http://guipei.26cc.cc/gp',
  get: request.get,
  post: request.post,
  login: request.login,
  json2Form: request.json2Form,
	tokenRefresh: request.tokenRefresh
};