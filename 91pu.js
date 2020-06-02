var ajaxpath='/';
var ajaxtype='POST';
var ajaxct='application/x-www-form-urlencoded; charset=utf-8';
var ajaxJson = 'application/application/json; charset=utf-8';
var ajaxdt='json';
var contentRoot='/templets/pu/';  
var soundRoot='/sound/';
var uinfo={isadmin:false};
var inIPAD=false;
var isToneChanged = false;

function clearTone(songID) {
	showAlert(true, 1, "您確定要重置調性嗎？", function () {
						$.ajax({
		type: ajaxtype,
		url: ajaxpath + 'ajaxapi/deleteUsersongdisplay.php',
		contentType: ajaxct,
		data:{id:songID},
		dataType: ajaxdt,
		success: function (data) {
			if (data.done == "ok") {
				alert("刪除成功")
				location.reload(true);
			} else {
				console.log(data);
				location.reload(true);
			}
		},
		error: function () {
			alert('獲取用戶資料錯誤！');
		}
	});;
					}, null , function(){
						$("#save-label").prop("checked", true);
					});
}

function saveTone() {
	Ẵ(true, 1, "是否保存現在的調性？", ᶉ, null, function() {
		console.log("cancel");

		// if cancel, keep checked, because user don't want to change saved tone.
		if (isToneChanged) {
			$("#save-label").prop("checked", true);
		} else {
			$("#save-label").prop("checked", false);
		}
	});
}

function saveCheckBoxClicked(songID) {
	var isChecked = $("#save-label").prop("checked");
	// if false, means the status from checked to uncheck
	// clear the save data

	isToneChanged = isKeyCapoChanged();

	if (isToneChanged || isChecked) {
		saveTone();
	} else {
		clearTone(songID);
	}

	// if (!isChecked && !isToneChanged) {
	// 	clearTone(songID);
	// } else {
	// 	saveTone();
	// }

}

function notShowTodayClicked() {
	var isChecked = $("#not-show-label").prop("checked");

	setStorage("not-show-today", isChecked);
}

 /*  removeStorage: removes a key from localStorage and its sibling expiracy key
    params:
        key <string>     : localStorage key to remove
    returns:
        <boolean> : telling if operation succeeded
 */
 function removeStorage(name) {
    try {
        localStorage.removeItem(name);
        localStorage.removeItem(name + '_expiresIn');
    } catch(e) {
        console.log('removeStorage: Error removing key ['+ key + '] from localStorage: ' + JSON.stringify(e) );
        return false;
    }
    return true;
}
/*  getStorage: retrieves a key from localStorage previously set with setStorage().
    params:
        key <string> : localStorage key
    returns:
        <string> : value of localStorage key
        null : in case of expired key or failure
 */
function getStorage(key) {

    var now = Date.now();  //epoch time, lets deal only with integer
    // set expiration for storage
    var expiresIn = localStorage.getItem(key+'_expiresIn');
    if (expiresIn===undefined || expiresIn===null) { expiresIn = 0; }

    if (expiresIn < now) {// Expired
        removeStorage(key);
        return null;
    } else {
        try {
            var value = localStorage.getItem(key);
            return value;
        } catch(e) {
            console.log('getStorage: Error reading key ['+ key + '] from localStorage: ' + JSON.stringify(e) );
            return null;
        }
    }
}
/*  setStorage: writes a key into localStorage setting a expire time
    params:
        key <string>     : localStorage key
        value <string>   : localStorage value
        expires <number> : number of seconds from now to expire the key
    returns:
        <boolean> : telling if operation succeeded
 */

function setStorage(key, value, expires) {

    if (expires===undefined || expires===null) {
        expires = (24*60*60);  // default: seconds for 1 day
    } else {
        expires = Math.abs(expires); //make sure it's positive
    }

    var now = Date.now();  //millisecs since epoch time, lets deal only with integer
    var schedule = now + expires*1000; 
    try {
        localStorage.setItem(key, value);
        localStorage.setItem(key + '_expiresIn', schedule);
    } catch(e) {
        console.log('setStorage: Error setting key ['+ key + '] in localStorage: ' + JSON.stringify(e) );
        return false;
    }
    return true;
}

function randRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;;
}

function gotoPage(url) {
	window.location.href = url;
}

function getPageVar() {
	var lh = window.location.href;
	var varstr = lh.substr(lh.lastIndexOf("?") + 1).split("&");
	var verobj = new Object();
	for (var i = 0; i < varstr.length; i++) {
		var _t = varstr[i].split("=");
		verobj[_t[0]] = _t[1];
	}
	return verobj;
}
var pageVars = getPageVar();

function errorImage(obj) {
	obj.src = contentRoot + "images/noface.gif";
}

function sLs(key, value) {
	if (value === undefined) {
		return localStorage.getItem(key);
	}
	if (value === null) {
		localStorage.removeItem(key);
		return true;
	}
	localStorage.setItem(key, value);
	return true;
}
var cookieCFG = {
	expires: 7
};

function refwm() {
	return;
}

function sSs(key, value) {
	if (value === undefined) {
		return sessionStorage.getItem(key);
	}
	if (value === null) {
		sessionStorage.removeItem(key);
		return true;
	}
	sessionStorage.setItem(key, value);
	return true;
}

function getDayTime(oldt) {
	var nowDate;
	if (oldt) {
		nowDate = new Date(oldt);
	} else {
		nowDate = new Date();
	}
	return (new Date(nowDate.getFullYear(), nowDate.getMonth(), nowDate.getDate())).getTime();
}




function showAlert(b, type, txt, func, param, errorFunc) {

	if (b) {
		$('.alertwin p').html(txt);
		if (type == 0) {
			$('.alertwin bdo').removeClass();
		} else if (type == 1) {
			$('.alertwin bdo').addClass('s').text('確定').unbind().data('param', param).click(func);
		}
		$('.alertwin button').show().text(type ? '取消' : '好的').unbind().click(function (e) {
			showAlert(false);
			errorFunc();
		});
		$('.alertwin').fadeIn('fast');
	} else {
		$('.alertwin').fadeOut('fast', function () {
			$('.alertwin bdo').removeClass();
		});
	}
}

function showTipAlert(t) {
	showAlert(true, 0, t);
}

function showLoginAlert() {
	showAlert(true, 1, "您未登入，馬上去登入！", function () {
		gotoPage("/member/login.php");
	});
}

function showUplevelAlert(t) {
	showAlert(true, 1, t, function () {
		gotoPage("/value/membership_step1.php");
	});
}

var __vippageCountTimer;
var __vippageCount;
var popUpVipPageCountTimer;


function showVipPageAlert(vipLevel){

	// show check box to disable ad
	if (vipLevel < 2) {
		$('#disalbe-ad-label').fadeIn().css('display','none');
	} else {
		$('#disalbe-ad-label').fadeIn().css('display','block');
	}

	if (vipLevel >= 2 && getStorage("not-show-today")) {
		$('#viptoneWindow').fadeIn().css('display','none');

		$(".google-auto-placed").each(function(){
				$(this).css('display','none');
				});

		$("#google_pedestal_container").hide();
		$("#google_pedestal_container").css('display','none');


	} else {

		__vippageCount = 5;
		$('#viptoneWindow code').show().text(__vippageCount);
		$('#viptoneWindow').fadeIn().css('display','flex');
	
		$('#viptoneWindow .close2').hide().unbind().click(function(){
		        $('#viptoneWindow').fadeOut();
		});
		__vippageCountTimer = setInterval(countVipPage,1000);

		// Popup vip window every 2 minutes, tempory disable this function.
		// popUpVipPageCountTimer = setInterval(countVipForBackgroundToForground,2 * 60 * 1000);

	}

	if (vipLevel >= 2) {
		$('.adsbygoogle').hide();

		$('.a-post-show').each(function( index ) {
			var position = $(this).attr('data-position-code');
			if (position != 'middle') {
				$(this).hide();	
			}
		});


		$('div[id^="adGeek"]').each(function( index ) {
			$(this).hide();
		});
	}

}

function countVipPage(){
	__vippageCount--;
	$('#viptoneWindow code').text(__vippageCount);
	if(__vippageCount<=0){
		$('#viptoneWindow code').hide();
		$('#viptoneWindow .close2').show().unbind().click(function(){
			$('#viptoneWindow').fadeOut();
		});
		clearInterval(__vippageCountTimer);
	}
}

function countVipForBackgroundToForground() {
	__vippageCount = 5;
	$('#viptoneWindow code').show().text(__vippageCount);
	$('#viptoneWindow').visible();
	$('#viptoneWindow').css('display','flex');

	$('#viptoneWindow .close2').hide().unbind().click(function(){
		$('#viptoneWindow').fadeOut();
	});
	__vippageCountTimer = setInterval(countVipPage,1000);
}

function showUnLoginAlert(){
	$('#unloginWindow .close2').show().unbind().click(function(){
		document.getElementById('unloginWindow').style.visibility='hidden'
	});
	$('#unloginWindow').fadeIn().css('display','flex');

	// showGuide();
}

function closeGuide() {
    var guideView = document.getElementsByClassName("slideshow-container");
    guideView[0].style.visibility = "hidden";
}

function showGuide() {
	var guideView = document.getElementsByClassName("slideshow-container");
    guideView[0].style.visibility = "visible";
}

//
function checkLogin(func) {
	if (!func) {
		try {
			func = initPage;
		} catch (e) {}
	}
	$.ajax({
		type: ajaxtype,
		url: ajaxpath + 'ajaxapi/getuserinfo.php',
		contentType: ajaxct,
		dataType: ajaxdt,
		success: function (data) {
			if (data.done == "ok") {
				if (data.islogin) {
					/*
					data.vip_expired_d = "2018-12-12";
					data.level = 3;
					data.monthly_vip = 1;
					data.cfg.sts = 1;
					*/
					data.vip_expired_d = "2099-12-12";
					data.level = 3;
					data.monthly_vip = 1;
					data.cfg.sts = 1;
                    			data.cfg.st = -1;
					saveAccountLevel(data.level);
					uinfo = data;
					try {
						func(true, data);
					} catch (e) {}
					initShowHead(true, data);
				} else {
					try {
						func(false);
					} catch (e) {}
					initShowHead(false);
				}
			} else {
				try {
					func(false, data.done);
				} catch (e) {}
				initShowHead(false);
			}
		},
		error: function () {
			alert('獲取用戶資料錯誤！');
		}
	});
}

function initShowHead(isLogin, data) {
	if (isLogin) {
		var _ub;
		if (uinfo.level == 1) {
			_ub = $('<div>').append(
				$("<strong>").text("普通會員").click(
					function(){
						gotoPage("/member/myvip.php");
					}
				)
			).append(
				"馬上<span class='b' onclick=\"buyPay('vipNew')\">升級</span>為VIP會員！"
			);
		} else if (uinfo.level == 2) {
			_ub = $('<div>').append(
				uinfo.monthly_vip ?
				$("<strong>").addClass('g').text("白金包月會員").click(
					function(){
						gotoPage("/member/myvip.php");
					}
				)
				:
				$("<strong>").text("白金會員").click(
					function(){
						gotoPage("/member/myvip.php");
					}
				)
			).append(
				uinfo.monthly_vip ?
				$('<abbr>').text(uinfo.vip_expired_d + ' 到期')
				:
				$('<abbr>').text(uinfo.vip_expired_d + ' 自動到期')	
			).append(
				uinfo.monthly_vip ?
				$('<span>').addClass('b').text('取消包月').click(function () {
					showAlert(true, 1, "您確定要取消包月嗎？", function () {
						showCpWaitting('月繳訂單取消中，請稍候 3 ～ 10分鐘', 1);
						window.open('/order/order_period_cancel.php');
					});
				}) :
				$('<span>').addClass('b').text('續費').click(function () {
					buyPay("vip2");
				})
			).append(
				uinfo.monthly_vip ?
				''
				:
				$('<span>').addClass('b').text('升級鑽石').click(function () {
					buyPay("vip3");
				})
			);
		} else if (uinfo.level == 3) {
			_ub = $('<div>').append(
				uinfo.monthly_vip ?
				$("<strong>").addClass('g').text("鑽石包月會員").click(
					function(){
						gotoPage("/member/myvip.php");
					}
				)
				:
				$("<strong>").text("鑽石會員").click(
					function(){
						gotoPage("/member/myvip.php");
					}
				)
			).append(
				uinfo.monthly_vip ?
				$('<abbr>').text(uinfo.vip_expired_d + ' 到期')
				:
				$('<abbr>').text(uinfo.vip_expired_d + ' 自動到期')
			).append(
				uinfo.monthly_vip ?
				$('<span>').addClass('b').text('取消包月').click(function () {
					showAlert(true, 1, "您確定要取消包月嗎？", function () {
						showCpWaitting('月繳訂單取消中，請稍候 3 ～ 10分鐘', 1);
						window.open('/order/order_period_cancel.php');
					});
				}) :
				$('<span>').addClass('b').text('續費').click(function () {
					buyPay("vip3");
				})
			);
		}
		//
		$('.ushow').empty().append(
			$('<ins>').addClass('lv' + uinfo.level).text(uinfo.nickname)
		).append(
			$('<div>').addClass('fix')
		).append(
			$('<div>').addClass('showbox').append(
				$('<div>').addClass('ub').append(
					$('<div>').addClass('face').append(
						$('<img>').attr('src', uinfo.face)
					).click(function () {
						gotoPage('/member/edit_baseinfo.php');
					})
				).append(
					$('<div>').addClass('ii').append(
						$('<div>').append(
							$("<dfn>").text(uinfo.nickname).click(function () {
								gotoPage('/member/edit_baseinfo.php')
							})
						).append(
							$('<a>').addClass('b').attr('href', "/member/index_do.php?fmdo=login&dopost=exit").text('登出')
						)
					).append(
						_ub
					)
				).append(
					$('<div>').addClass('clear')
				).append(
					$('<div>').addClass('hm').html("我的海馬幣：<a href='/member/hmpoint.php'><code>" + uinfo.point + "</code></a>幣，馬上去<span onclick=\"buyPay('hm')\" class='b'>購買</span>")
				).append(
					$('<div>').addClass('hm').html("序號兌換：<span onclick=\" showExchangeWindow(true)\" class='b'>兌換</span>")
				)
			).append(
				$('<div>').addClass('umenu').append(
					$('<a>').attr('href', '/member/mypu.php').text('我的求譜')
				).append(
					$('<a>').attr('href', '/member/fav.php').text('我的收藏')
				).append(
					$('<a>').attr('href', '/member/myorder.php').text('我的交易')
				).append(
					$('<a>').attr('href', '/member/vip.php').text('VIP專區')
				)
			).append(
				$('<div>').addClass('umore').append(
					$('<a>').attr('href', '/member/edit_baseinfo.php').text('更多 >>')
				)
			).append(
				$('<div>').addClass('hdonate').append($('<icon>')).append(
					$('<a>').attr('href', '/special/pay.shtml?t=d').text('我要捐款')
				).hide()
			)
		);
		//
		if(!uinfo.monthly_vip&&!uinfo.reg_gift){
			var gwin=$('#giftWindow');
			if(gwin.length>0){
				gwin.find('.close').click(function(){
					$('#giftWindow').fadeOut();
				});
				gwin.find('button').click(function(){
					if(uinfo.vertify_email){
						$.ajax({
							type: ajaxtype,
							url: ajaxpath + 'ajaxapi/reggift.php',
							data:{gift:1},
							contentType: ajaxct,
							dataType: ajaxdt,
							success: function (data) {
								if (data.done == "ok") {
								showTipAlert('領取禮包成功！');
									uinfo.reg_gift=1;
								} else {
									showTipAlert(data.done);
								}
								$('#giftWindow').fadeOut();
							},
							error: function () {
								$('#giftWindow').fadeOut();
							showTipAlert('領取禮包失敗！');
							}
						});
					}else{
						showAlert(true, 1, "您的Email未通過驗証，請先驗証 Email！", function () {
							window.open('/member/vemail.php');
						});
					}					
				})
				gwin.fadeIn().css('display','flex');
			}
		}
	} else {
		$('.ushow').empty().append(
			$('<a>').addClass('lf').attr('href', "/member/login.php").text('登入')
		).append(
			$('<a>').addClass('lf').attr('href', "/member/reg_new.php").text('註冊')
		);
	}
}

function buyPay(t) {
	sSs('pay_type', t);
	gotoPage('/special/pay.shtml');
}

function showReport(b){
	if(b){
		$('#reportWindow').fadeIn().css('display','flex');
	}else{
		$('#reportWindow').fadeOut();
	}
}

function showExchangeWindow(b){
	if(b){
		$('#exchangeWindow').fadeIn().css('display','flex');
	}else{
		$('#exchangeWindow').fadeOut();
	}
}

$(function(){
	$('.a-post-show').each(function(ix,va){
		var _pd=$(va);
		$.ajax({
			type:ajaxtype,
			url:ajaxpath+'ajaxapi/getpicbycode.php',
			data:{zone_code:_pd.data('zone-code'),position_code:_pd.data('position-code')},
			contentType:ajaxct,
			dataType:ajaxdt,
			success :function(data){
				if(data.done=="ok"){

					var randomValue = Math.floor(Math.random() * data.list.length);
					var displayElement = data.list[randomValue];

					if (displayElement.type == "video") {
						_pd.append(
							$('<iframe>').attr('src',displayElement.weburl + '?autoplay=1&mute=1').attr('target','_blank')
								.attr('frameborder', 0).attr('width', 560).attr('height', 315).attr('allow', 'autoplay')
								)
						
					} else if(displayElement.urlimg) {
						_pd.append(
							$('<a>').attr('href',displayElement.weburl).attr('target','_blank').append(
								$('<img>').attr('src', displayElement.urlimg)
							)
							.data('k1',displayElement.zone_code+'-'+ displayElement.position_code)
							.data('k2',displayElement.name)
							.click(function(){
								ga('send','event',$(this).data('k1'),'廣告點擊',$(this).data('k2'))
							})
						)
					}
				} else {
					showRmaxPost(_pd,_pd.data('rmax-space-id'), _pd.data('target'));
					// Not set any AD
					 // var adventiseWindow = document.getElementById("viptoneWindow");
					 // if (adventiseWindow != null) {
					 // 	adventiseWindow.style.visibility = "hidden";
					 // }

					 // Facebook iFrame
					//  _pd.append(
					//  	$('<div>').attr('style', '')
					// 	$('<iframe>').attr('src', "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhima91pu%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=565664173891580")
					// 	.attr('width', '500').attr('height','500').attr('style','border:none;overflow:hidden;margin-left: auto;margin-right: auto;display:block;text-align: center;')
					// 	.attr('scrolling', 'no').attr('frameborder', 0).attr('allowTransparency', true)
					// 	.attr('allow','"encrypted-media')
					// )
				}
				// } else { 

 			// 		_pd.append(
				// 		$('<iframe>').attr('src', "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhima91pu%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=565664173891580")
				// 		.attr('width', '500').attr('height','500').attr('style','border:none;overflow:hidden;margin-left: auto;margin-right: auto;display:block;text-align: center;')
				// 		.attr('scrolling', 'no').attr('frameborder', 0).attr('allowTransparency', true)
				// 		.attr('allow','"encrypted-media')
				// 	)

				// 	// _pd.append(
 			// 	// 	$('<div>').attr('class', 'line-it-button').attr('data-lang','zh_Hant').attr('data-type','friend')
 			// 	// 		.attr('data-lineid','@91pu').attr('data-count','true').attr('data-home',true).attr('style', 'display: none;'))

				// }
			},error: function(){
				showRmaxPost(_pd,_pd.data('rmax-space-id'), _pd.data('target'));
			}
		});
	});
});

$(function(){
    $('.live-show').each(function(ix,va){
        var _pd=$(va);
        $.ajax({
            type:ajaxtype,
            url:ajaxpath+'ajaxapi/getLiveStatus.php',
            contentType:ajaxct,
            dataType:ajaxdt,
            success :function(data){
                if(data.done=="ok"){
                    if(data.list.status === "1"){
                        _pd.append(
                        	$('<div>').attr('style','height: 170px').append(
	                            $('<a>').attr('class','live-close-btn').attr('onclick','closeLiveBtn()').text('X'),
	                            $('<iframe>').attr('src',"https://www.facebook.com/plugins/video.php?href=" + data.list.weburl + "&show_text=0&width=315")
										.attr("width",250).attr("height",150).attr('scrolling','no').attr("frameborder", 0).attr("allowtransparency", true).attr("allowfullscreen", true)
										.attr('style',"float: right; display: inline; border: 1px solid #808184; margin: 16px 16px 0 0"),
	                           
	                            $('<a>').attr('href',data.list.weburl).attr('target','_blank').append(
	                                $('<img>').attr('src',data.list.urlImg).attr('style','width:256px;height:64px;')
	                            ).append(
	                                $('<h1>').text(data.list.description).attr('style','display: inline-block; color: white;')
								)
							)
                        )
                    }
                }else{
                    showRmaxPost(_pd,_pd.data('rmax-space-id'));
                }
            },error: function(){
                showRmaxPost(_pd,_pd.data('rmax-space-id'));
            }
        });
    });

    $('.live-show-header').each(function(ix,va){
        var _pd=$(va);
        $.ajax({
            type:ajaxtype,
            url:ajaxpath+'ajaxapi/getLiveStatus.php',
            contentType:ajaxct,
            dataType:ajaxdt,
            success :function(data){
                if(data.done=="ok"){
                    if(data.list.status === "1"){
                        _pd.append(
                            $('<a>').attr('href',data.list.weburl).attr('target','_blank').append(
                                $('<img>').attr('src',data.list.urlImg).attr('style','width:256px;height:64px;')
                            ).append(
                                $('<h1>').text(data.list.description).attr('style','display: inline-block; color: white;')
                            )
                        )
                    }
                }else{
                    showRmaxPost(_pd,_pd.data('rmax-space-id'));
                }
            },error: function(){
                showRmaxPost(_pd,_pd.data('rmax-space-id'));
            }
        });
    });

    $('.live-show-mobile').each(function(ix,va){
        var _pd=$(va);
        $.ajax({
            type:ajaxtype,
            url:ajaxpath+'ajaxapi/getLiveStatus.php',
            contentType:ajaxct,
            dataType:ajaxdt,
            success :function(data){
                if(data.done=="ok"){
                    if(data.list.status === "1"){
                        _pd.append(
							$('<a>').attr('class','live-close-btn').attr('onclick','closeLiveBtn()').text('X'),
    
                            $('<a>').attr('href',data.list.weburl).attr('target','_blank').append(
                                $('<img>').attr('src',data.list.urlImg).attr('style','width:256px;height:64px;')
                            )
                        )
                    }
                }else{
                    showRmaxPost(_pd,_pd.data('rmax-space-id'));
                }
            },error: function(){
                showRmaxPost(_pd,_pd.data('rmax-space-id'));
            }
        });
    });
});

function showRmaxPost(dom,rid, target){
	if(rid && target){

		dom.html(
			'<ins class="rmax" data-rmax-space-id="'+rid+'" data-rmax-space-type="' + target + '" data-target-pos="INNER"></ins><script async="async" src="//tenmax-static.cacafly.net/ssp/adsbytenmax.js"></script>'
		);
	} else if (rid) {
		dom.html(
			'<ins class="rmax" data-rmax-space-id="'+rid+'" data-rmax-space-type="NATIVE" data-target-pos="INNER"></ins><script async="async" src="//tenmax-static.cacafly.net/ssp/adsbytenmax.js"></script>'
		);
	}
}

var cpTimes = 0;
var cpSeconds = 5;
function showCpWaitting(txt, type){
	$('.alertwin p').html(txt);
	$('.alertwin bdo').removeClass();
	
	if (1 == type) {
		$('.alertwin button').hide();
		$('.alertwin').fadeIn('fast');
		cpTimes = 180;
		cancelPeriodCheck();
	} else {
		$('.alertwin button').show().text('好的').unbind().click(function (e) {
			showAlert(false);
			location.reload(true);
		});
	}

}

function showSpWaitting(txt, type){
	$('.alertwin p').html(txt);
	$('.alertwin bdo').removeClass();	
	if (1 == type) {
		$('.alertwin button').hide();
		$('.alertwin').fadeIn('fast');
	} else {
		$('.alertwin button').show().text('好的').unbind().click(function (e) {
			showAlert(false);
			location.reload(true);
		});
	}

}

function cancelPeriodCheck(){
	$.get('/ajaxapi/vipTypeCheck.php', function(json){
		var _result = $.parseJSON(json);
		if(1 == _result.period){
			cpTimes--;
			if(cpTimes > 0){setTimeout(cancelPeriodCheck, cpSeconds * 1000);}
			else{
				showCpWaitting('請洽客服人員查詢退訂進度', 2);
			}
		}else{
			showCpWaitting('取消月繳成功', 2);
		}
	});
}

function closeTipAlert(){
	showAlert(false);	
}

function saveAccountLevel(accountLevel) {
	setStorage("accountLevel", accountLevel);
}

function isPayingAccount() {
	return getStorage("accountLevel") >= 2;
}

function showExchangeWindow(isShow) {
	if(isShow){
		$('#exchangeWindow').fadeIn().css('display','flex');
	}else{
		$('#exchangeWindow').fadeOut();
	}
}

function addExchangeData(exchangeCode) {

	if (exchangeCode == null || exchangeCode == '') {
		showTipAlert("請輸入兌換碼");
		return;
	}

	var dataJSON = {};
	dataJSON["exchange_code"] = exchangeCode;


	$.ajax({
		type: ajaxtype,
		url: ajaxpath + 'ajaxapi/addExchange.php',
		data: JSON.stringify(dataJSON),
		contentType: ajaxJson,
		dataType: ajaxdt,
		success: function (data) {
			if (data.done == "ok") {
				showExchangeWindow(false);
				showTipAlert("送出兌換需求成功，會儘快為你進行兌換，請等候3 ~ 5天");
			} else {
				showExchangeWindow(false);
				showTipAlert("新增兌換碼錯誤 請登入");
			}
		},
		error: function () {
			showExchangeWindow(false);
			showTipAlert("新增兌換碼錯誤 請登入");
		}
	});
}

function addExchangeDataInMobile(exchangeCode) {

	if (exchangeCode == null || exchangeCode == '') {
		alert("請輸入兌換碼");
		return;
	}

	var dataJSON = {};
	dataJSON["exchange_code"] = exchangeCode;


	$.ajax({
		type: ajaxtype,
		url: ajaxpath + 'ajaxapi/addExchange.php',
		data: JSON.stringify(dataJSON),
		contentType: ajaxJson,
		dataType: ajaxdt,
		success: function (data) {
			if (data.done == "ok") {
				alert("送出兌換需求成功，會儘快為你進行兌換，請等候3 ~ 5天");
				window.location.reload();
			} else {
				alert("新增兌換碼錯誤 請登入");
				window.location.reload();
			}
		},
		error: function () {
			alert("新增兌換碼錯誤 請登入");
			window.location.reload();
		}
	});
}

function browserRedirectPhone() {


    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
	return true;
    }
    return false;

}

(function($) {
	$.fn.invisible = function() {
		return this.each(function() {
			$(this).css("visibility", "hidden");
		});
	};
	$.fn.visible = function() {
		return this.each(function() {
			$(this).css("visibility", "visible");
		});
	};
}(jQuery));
