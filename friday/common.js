var sdp_client_id = "607201de-7d99-4343-86df-57f2489f66f9";
var api_host = location.protocol + "//" + window.location.host + "/";
var api_url = api_host + "api2/";

var sdp_callerId = "CSE0001779" ;
var sdp_prodId = "CSIP164709" ;
var sdp_npp_host = "dspservice.friday.tw/oneclick";
var sdp_npp_url = "https://" + sdp_npp_host + "/configBroker?callerId=" + sdp_callerId + "&prodId=" + sdp_prodId + "&is3d=N&callbackUrl=" ;

var relogin_url = "";
var tv_share_url = api_host;

var config_imageDomain = "";
var config_serviceUrl = "";
var config_marketingDescription = "";
var config_syncPlayTime = "";
var config_update = "";

var h5player;
var playIndex;
var player;

var uaParser = new UAParser();
var uaResult = uaParser.getResult();
var osVersion = uaResult.os.version;
var commonBrowserName = uaResult.browser.name.toLowerCase();
var commonBrowserVersion = uaResult.browser.version;
if (commonBrowserVersion) {
	var splits = commonBrowserVersion.split(".");
	if (splits.length>1) {
		commonBrowserVersion = commonBrowserVersion.split(".")[0]+"."+commonBrowserVersion.split(".")[1];
	}
}

// friday Login URL
var friday_url = "member.friday.tw";
var friday_login_url = "https://"+friday_url+"/fri/sso/authorize?fb=1&response_type=code&" +
        "client_id="+sdp_client_id+"&scope=phone+address+email+openid+profile&" +
        "nonce=927ad9c0b8f0&state="+randomString()+"&redirect_uri=";

var login_url = friday_login_url + location.protocol +"//"+window.location.host+"/login_result";
var logout_url = "/logout";
var mobile_logout_url = "/m/logout";

// friday member center
var member_center_url = "http://"+friday_url+"/fmc/memberCenter?redirect_uri=" + 
    location.protocol +"//"+window.location.host+"/account/info" + 
    "&client_id="+sdp_client_id+"&access_token=";

var sCurrentURL=window.location.href;
//160718 Amy補充檢核，當來源網址非friday影音，不能算推薦。
var sParentURL=document.referrer;	
if((sCurrentURL.indexOf("movie/detail")==-1 && sCurrentURL.indexOf("drama/detail")==-1 && sCurrentURL.indexOf("anime/detail")==-1 
		&& sCurrentURL.indexOf("show/detail")==-1 && sCurrentURL.indexOf("play")==-1) || ( sParentURL.indexOf("video.friday.tw")==-1)) {	
	eraseCookie("srcRId");
	eraseCookie("rId");
	eraseCookie("urlTemp");
}

function configGet(data) {
    if (data.status != 200) {
        //alert(data.message);
    } else {
        config_imageDomain = data.data.imageDomain;
        config_serviceUrl = data.data.serviceUrl;
        config_marketingDescription = data.data.marketingDescription;
        config_syncPlayTime = data.data.syncPlayTime;
        config_update = data.data.update;
    }
}

getDataNonSync('config/get', configGet, '');

function getData(api, callBack, params) {
    $.ajax({
        url: api_url + api,
        type: 'get',
        cache: false,
        //async : false,
        data: params,
        dataType: 'json',
        success: function (data) {
            handleData(api, data, callBack);
        }
    });
}

function handleData(api, data, callBack) {
    if (data.status != 200) {

    }
    if (relogin_url == "") {
        callBack(data);
    } else {
        return;
    }
}

function getDataNonSync(api, callBack, params) {
    $.ajax({
        url: api_url + api,
        type: 'get',
        cache: false,
        async: false,
        data: params,
        dataType: 'json',
        success: callBack
    });
}

function randomString() {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    var string_length = 16;
    var randomstring = '';
    for (var i=0; i<string_length; i++) {
        var rnum = Math.floor(Math.random() * chars.length);
        randomstring += chars.substring(rnum,rnum+1);
    }
    return randomstring;
}

function ErrorCode(code, defMsg){
    switch(code){
        case 400:
            return "驗證碼錯誤";
        break;
        default:
            return defMsg;
            break;
    }
}

function setRedir(){
    var link = encodeURI(location.href);
    setCookie("login_redir", decodeURI(link));
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var cvalue = encodeURIComponent(cvalue);
    document.cookie = cname + "=" + cvalue + "; " + expires + "; path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = decodeURIComponent(ca[i]);
        while (c.charAt(0) == ' ')
            c = c.substring(1);
        if (c.indexOf(name) == 0)
            return c.substring(name.length, c.length);
    }
    return "";
}

function eraseCookie(name) {
    setCookie(name, "", -1);
}

function eraseFridayCookie(name) {
    setCookie(name, "", -1);
}

function IsLogin() {
    //return getCookie("logined") === "true";
    return true;
}

function substr(str, len) {
    if (!str || !len) {
        return '';
    }

    var a = 0;
    var i = 0;
    var temp = '';
    for (i = 0; i < str.length; i++) {
        if (str.charCodeAt(i) > 255) {
            a += 2;
        } else {
            a++;
        }
        if (a > len) {
            return temp;
        }
        temp += str.charAt(i);
    }
    return str;
}

function HTMLEnCode(str){
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g,  "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/\'/g, "'");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

function stripscript(s) 
{ 
    //~!@#$%^&*<>\/|
    var pattern = new RegExp("[`~!@#$%^&*<>\\\/|+]");
    var start=0;
    for (var i = 0; i < s.length; i++) { 
        if(s.substr(i, 1).match(pattern)) {
            start = i+1;
        }else{
            break;
        }       
    } 
    return s.substring(start);
} 

function memberGetMessage() {
	if(IsLogin()) {
		//訊息中心
		getData('member/get', memberGetMessageCount, '');
	};
}

function memberGetMessageCount(data) {
	if (data.status != 200) {

	} else {
		var i = data.data.member.inboxMessageCount;
		var imc = parseInt(i);
		inboxMessage = imc;
		if(imc > 0){
			if(!$('#sideMessage').hasClass('alert'))
				$('#sideMessage').addClass('alert');
			if(!$('#goMemberCenter').hasClass('notice'))
				$('#goMemberCenter').addClass('notice');
		}else{
			$('#sideMessage').removeClass('alert');
			$('#goMemberCenter').removeClass('notice');
		}
		
		var pt = data.data.member.paidType;
		var st = data.data.member.subType;
		
		//會員首頁取得點數
		setCookie("bonusPoint", data.data.member.bonusPoint);
	}
}

function pad(numb) {
    return (numb < 10 ? '0' : '') + numb;
}

function dateFormat(date) {
    var year = date.getFullYear();
    var month = pad(date.getMonth() + 1);
    var day = pad(date.getDate());
    var df = year + '/' + month + '/' + day;
    return df;
}

function GetTodayDate() {
    var tdate = new Date();
    var dd = tdate.getDate(); //yields day
    var MM = tdate.getMonth(); //yields month
    var yyyy = tdate.getFullYear(); //yields year
    var xxx = yyyy + "/" + padLeft(( MM+1+""), 2) + "/" + padLeft(dd+"", 2);
    return xxx;
}

function padLeft(str,lenght){
    if(str.length >= lenght)
        return str;
    else
        return padLeft("0" +str,lenght);
}
function padRight(str,lenght){
    if(str.length >= lenght)
        return str;
    else
        return padRight(str+"0",lenght);
}

// WebTRends CTR
function WTctr(block, t1, t2, t3, arg){
  if((block != "") && (typeof t1 !== "undefined") && (typeof t2 !== "undefined")){
    dcsMultiTrack('DCS.dcsuri', '/CTR.dat', 'DCSext.WTlayout_block', block, 'DCSext.WTlayout_type', t1, 'DCSext.WTlayout_type2', t2, 'DCSext.WTlayout_type3', t3);
    if(arg) waitCTR2(arg);
    switch (block){
    case "VOD":
      setCookie("WTvod_unit", "推薦"), setCookie("WTvod_block", t1);
      break;
    case "VOD_CHARTS":
      setCookie("WTvod_unit", "排行榜"), setCookie("WTvod_block", t1);
      break;
    case "Curation":
      setCookie("WTvod_unit", "主題推薦"), setCookie("WTvod_block", t1);
      break;
    }
    
  }
}

// WebTRends videoplay
function WTvideoplay(WTPlay, WTvod_t, WTvod_n){
    if( (WTPlay == "P" || WTPlay == "S" ) && HReferrer == "OK" && getCookie("WTvod_unit") != "" && getCookie("WTvod_block") != ""){
        dcsMultiTrack('DCS.dcsuri','/videoplay.dat', 'DCSext.WTPlay',WTPlay, 'DCSext.WTvod_t',WTvod_t, 'DCSext.WTvod_n',WTvod_n, 'DCSext.WTvod_unit',getCookie("WTvod_unit"), 'DCSext.WTvod_block', getCookie("WTvod_block"));  
    }else{
        dcsMultiTrack('DCS.dcsuri','/videoplay.dat', 'DCSext.WTPlay',WTPlay, 'DCSext.WTvod_t',WTvod_t, 'DCSext.WTvod_n',WTvod_n);
    }
}

// WebTRends scenario
function WTscenario(block, WT_si_n, WT_si_p, WT_pn, WT_tx_s, WT_tx_i, WT_tx_id, WT_tx_it){
    if(typeof WT_si_n !== "undefined" && typeof WT_si_p !== "undefined"){
        switch (block) {
        case "step1":
        case "step2":
            dcsMultiTrack('DCS.dcsuri','/scenario.dat', 'WT.si_n',WT_si_n, 'WT.si_p',WT_si_p);
            break;
        case "step3_sn":
            dcsMultiTrack('DCS.dcsuri','/scenario.dat', 'WT.si_n',WT_si_n, 'WT.si_p',WT_si_p, 'WT.pn',WT_pn);
            break;
        case "step3":
            dcsMultiTrack('DCS.dcsuri','/scenario.dat', 'WT.si_n',WT_si_n, 'WT.si_p',WT_si_p, 'WT.pn',WT_pn, 'WT.tx_u',1, 'WT.tx_s',WT_tx_s, 'WT.tx_i',WT_tx_i, 'WT.tx_id',WT_tx_id, 'WT.tx_it',WT_tx_it, 'WT.tx_e','p');
            break;
        }
    }
}

// WebTRends event
function WTevent(L1, L2, L3){
    dcsMultiTrack('DCS.dcsuri','/event.dat','DCSext.WTevent_L1', L1,'DCSext.WTevent_L2', L2,'DCSext.WTevent_L3', L3);
}

$(function(){
  $(document).on("click", ".evt_a", function(e){
      e.preventDefault();
      var t1 = $(this).closest(".t1").attr("t1");
      var t2 = $(this).closest(".t2").attr("t2");
      var t3 = $(this).closest(".t3").attr("t3");
      if(typeof t3 === "undefined") t3 = "na";
      if(typeof t2 === "undefined" && typeof t3 !== "undefined"){
          t2 = t3, t3 = "na";
      }
      var arg = $(this).attr('href');
      if(typeof WT_block !== "undefined" && t2){
          WTctr(WT_block, t1, t2, t3, arg);
      }else{
          waitCTR2(arg);
      }
  });
  
});

function waitCTR2(arg){
    if(arg!="na"&& arg!=""){
        var timeId=setTimeout(function() {
            window.location.href = arg;
        }, 3000);
        gImages[gIndex-1].onload = function() {
            clearTimeout(timeId);
            window.location.href = arg;
        };
    }
}

function getContentTypeName(cType){
    var cTypeName = "電影";
    if (cType==1){
        cTypeName = "電影";
    } else if (cType==2) {
        cTypeName = "戲劇";
    } else if (cType==3) {
        cTypeName = "動漫";
    } else if (cType==4) {
        cTypeName = "綜藝";
    }
    return cTypeName;
}

function WT_Pname(packageN, packageC){
    si_n = "";
    switch(packageN){
    case "續租型":
        si_n = "30天續租型";
        break;
    case "天數儲值":
        si_n = "天數儲值型";
        break;
    case "單片館續租型":
        si_n = "單片續租型";
        break;
    case "單片租借":
        if(packageC.indexOf("VPPSU") == 0){
            si_n = "聯名卡";
        }else{
            si_n = "單片";
        }
        break;
    case "序號兌換":
        si_n = "序號兌換";
        break;
    }
    return si_n
}
