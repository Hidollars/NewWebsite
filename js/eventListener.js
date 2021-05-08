window.onload = function () {
	document.addEventListener('touchstart', function (event) {
		if (event.touches.length > 1) {
			event.preventDefault();
		}
	});
	var lastTouchEnd = 0;
	document.addEventListener('touchend', function (event) {
		var now = (new Date()).getTime();
		if (now - lastTouchEnd <= 300) {
			event.preventDefault();
		}
		lastTouchEnd = now;
	}, false);
	document.addEventListener('gesturestart', function (event) {
		event.preventDefault();
	});
	var name = getCookie("name");
	var userId = getCookie("userId");
	/** This code will redirect to landing page if no cookies */
	/** For this layout implement stage, it is commented for demo use */
	// if (name == undefined || userId == undefined) {
	// 	location.href = '/';
	// 	return
	// }
}

function addCookie(name, userId) {
	var exp = new Date();
	exp.setTime(exp.getTime() + (30 * 60 * 1000));
	document.cookie = "name=" + escape(name) + ";expires=" + exp + ";path= /";
	document.cookie = "userId=" + escape(userId) + ";expires=" + exp + ";path= /";
}

function getCookie(cookie_name) {
	var allcookies = document.cookie;
	var cookie_pos = allcookies.indexOf(cookie_name); //索引的长度

	// 如果找到了索引，就代表cookie存在，
	// 反之，就说明不存在。
	if (cookie_pos != -1) {
		// 把cookie_pos放在值的开始，只要给值加1即可。
		cookie_pos += cookie_name.length + 1; //这里容易出问题，所以请大家参考的时候自己好好研究一下
		var cookie_end = allcookies.indexOf(";", cookie_pos);

		if (cookie_end == -1) {
			cookie_end = allcookies.length;
		}

		var value = unescape(allcookies.substring(cookie_pos, cookie_end)); //这里就可以得到你想要的cookie的值了。。。
	}
	return value;
}

var url = 'https://api.hi5.money/chat';