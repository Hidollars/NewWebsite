function jump(n) {
	switch (n) {
	case 1:
		var url = 'https://t.me/'+telegramName+'?start='
		GoogleAnalytics(url,'join_telegram');
		break;
	case 2:
		var url = "https://api.whatsapp.com/send?phone=" + whatsappName
		GoogleAnalytics(url,'join_whatsapp');
		break;
	case 3:
		break;
	case 4:
		break;
	case 5:
		break;
	case 6:
		break;
		
 }
}