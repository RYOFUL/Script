/***********************************

> ScriptName        BuyiTunes多合一脚本[墨鱼版]
> Author            @ddgksf2013
> Feedback          ddgksf2013@163.com
> UpdateTime        2023-12-08
> Attention         使用此脚本，会导致AppleStore无法切换账户，解决方法[关闭QX切换账户，或关闭MITM，或删除脚本]
> ScriptURL         https://gist.githubusercontent.com/ddgksf2013/9e0f6c7341beea09a31aa309d9d7f502/raw/buyitunes.js

# ========解锁列表======== #
# > 01 OldRoll[231203]
https://apps.apple.com/us/app/id1570093460
# > 02 picsewV3.9.4[231206]
https://apps.apple.com/us/app/id1208145167
# > 03 proknockout[231208]
https://apps.apple.com/us/app/id944665061


[rewrite_local]

# ～ BuyiTunes@ddgksf2013
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://gist.githubusercontent.com/ddgksf2013/9e0f6c7341beea09a31aa309d9d7f502/raw/buyitunes.js

[mitm]

hostname=buy.itunes.apple.com

***********************************/



var ddgksf2013 = JSON.parse($response.body);

// ========= 动态ID ========= //
var productidmap={
	"telegramChannel":{"name":"ddgksf2013","product_id":"https://t.me/ddgksf2021","mark":1},
	"com.sugarmo.ScrollClip":{"name":"picsewV3.9.4","product_id":"com.sugarmo.ScrollClip.pro","mark":1},
	"com.zijayrate.analogcam":{"name":"oldroll","product_id":"com.zijayrate.analogcam.vipforever10","mark":0},
	"com.loveyouchenapps.knockout":{"name":"proknockout","product_id":"com.knockout.7daysplus","mark":0}
}
// ========= 固定部分 ========= //
ddgksf2013.Attention = "恭喜你抓到元数据！由墨鱼分享，请勿售卖或分享他人！";
var inapp = {"product_id":"https://t.me/ddgksf2021","quantity":"1","expires_date":"2099-12-18 23:59:59 Etc/GMT","expires_date_pst":"2099-12-18 23:59:59 America/Los_Angeles","expires_date_ms":"4101292799000","is_in_intro_offer_period":"false","transaction_id":"100000000000000","is_trial_period":"false","original_transaction_id":"100000000000000","purchase_date_ms":"1701705599000","purchase_date":"2023-12-04 23:59:59 Etc/GMT","purchase_date_pst":"2023-12-04 23:59:59 America/Los_Angeles","original_purchase_date":"2023-12-04 23:59:59 Etc/GMT","original_purchase_date_pst":"2023-12-04 23:59:59 America/Los_Angeles","original_purchase_date_ms":"1701705599000","in_app_ownership_type":"PURCHASED","web_order_line_item_id":"100000000000000"};
var renew={"product_id":"https://t.me/ddgksf2021","original_transaction_id":"100000000000000","auto_renew_product_id":"https://t.me/ddgksf2021","auto_renew_status":"1"};
var mapid=ddgksf2013.receipt.bundle_id;renew.product_id=productidmap[mapid].product_id,renew.auto_renew_product_id=productidmap[mapid].product_id,inapp.product_id=productidmap[mapid].product_id,productidmap[mapid].mark?(delete inapp.expires_date,delete inapp.expires_date_ms,delete inapp.expires_date_pst):(ddgksf2013.latest_receipt_info=[inapp],ddgksf2013.latest_receipt="https://t.me/ddgksf2021",ddgksf2013.pending_renewal_info=[renew]),ddgksf2013.receipt.in_app=[inapp];
$done({ body: JSON.stringify(ddgksf2013) });
