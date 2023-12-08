/***********************************************

> 应用名称：12306去广告脚本
> 脚本作者：@ddgksf2013
> 更新时间：2023-02-22
> 脚本地址：https://github.com/RYOFUL/Scripts/blob/master/12306.js
> 问题反馈：ddgksf2013@163.com
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://github.com/ddgksf2013/Scripts/raw/master/12306.js

[mitm]

hostname = ad.12306.cn

***********************************************/


