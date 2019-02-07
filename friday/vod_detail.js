$(function(){
    var vodname = $(".content h1").text();
    $("#offer-modal h3 b").text(vodname);
    
    if(getCookie("openPackagesPage") == "1") {
        packagesList(cId, cType);
        eraseFridayCookie("openPackagesPage");
    }
    
    $(".packagelist").on("click", ".payment-option", function(e) {
        var t = $(this),
          a = $(this).parents(".section-option").siblings(".section-option"),
          i = t.siblings(".payment-option"),
          s = encodeURI($(this).attr("data-tip"));
        
          t.addClass("selected"),
          t.find(".btn").removeClass("btn-primary"),
          t.siblings(".option-note").html(decodeURI(s)).removeClass("hidehide"),

          i.removeClass("selected"),
          i.find(".btn").addClass("btn-primary"),
          i.find(".option-note").addClass("hidehide"),

          a.find(".payment-option").removeClass("selected"),
          a.find(".btn").addClass("btn-primary"),
          a.find(".option-note").addClass("hidehide")
    })

    $(".packagelist").on("click", ".goPay", function(e) {
      if (!IsLogin()) {
        popup_login("請先登入會員才可購買");
        return false;
      }else{
        var t = $(this), a = t.parents(".payment-option");
        
        // 流程步驟對應參數
        var WT_si_n = WT_Pname(a.attr("packagemenuname"), a.attr("packagecode"));
        if(WT_si_n != "") WTscenario("step1", "影片"+WT_si_n, "方案說明");
        
        $('input[name=packageName]').val(a.attr("name"));
        $('input[name=packageMenuName]').val(a.attr("packagemenuname"));
        $('input[name=price]').val(a.attr("price"));
        $('input[name=pid]').val(a.attr("packageid"));
        $('input[name=packageCode]').val(a.attr("packagecode"));
        $('input[name=ispromotionids]').val(a.attr("ispromotionids"));
        $('input[name=contentId]').val(cId);
        $('input[name=contentType]').val(cType);
        
        var timeId=setTimeout(function() {
            $('#orderForm').submit();
        }, 3000);
        gImages[gIndex-1].onload = function() {
            clearTimeout(timeId);
            $('#orderForm').submit()
        };
      }
    })
    
    $("#ppvq-modal").on("click", ".goExch", function(e) {
      $(".goExch").prop('disabled', true);
      var radio = $('.ppvq-content .radio-check input:checked');
      if(radio == undefined) {
        msg_popup("尚未選擇方案");
        return;
      }
      var param = {contentId: radio.attr('cId'), packageCode: radio.attr('pCode'), applyRecordId: radio.attr('ari')};
      getData("monthlyPPV/redeem", ppvRedeem, param);
      $.magnificPopup.close();
    })

    $("[data-fancybox='movie']").fancybox({
        beforeClose: function(){
            if (IsLogin()) {
                recentlyPlay()
                $('.fancybox-iframe')[0].contentWindow.closePlayer();
                
                timeout = setTimeout(function(){   
    	        },2000);
            }
        },
        beforeLoad: function(){
            var isEmpty = $(".play-button").attr("isEmpty");
            if (isEmpty == "false"){
            	beforePlayCheck();
            }
        },
        closeClickOutside: false
    });
    
    $("[data-fancybox='chapter']").fancybox({
    	fullScreen: !1,
        slideShow: !1,
        infobar: !1,
        thumbs: {
            showOnStart: !0,
            hideOnClosing: !0
        },
    	beforeClose: function(){
            if (IsLogin()) {
                recentlyPlay()
            	$('.fancybox-iframe')[0].contentWindow.closePlayer();
                
                timeout = setTimeout(function(){   
    	        },2000);
            }
        },
        beforeLoad: function(){
        	beforePlayCheck();
        	
            $(".fancybox-thumbs li").find(".thumbs-title").remove(),
            $(".fancybox-thumbs li").append("<p></p>").find("p").addClass("thumbs-title"),
            $("[data-fancybox='chapter']").each(function() {
                var e = $(this).data("title")
                  , t = $(this).data("index");
                $(".fancybox-thumbs li").each(function(a, i) {
                    var s = $(this).index();
                    s == t && $(this).find("p").html(e)
                })
            })
        },
        closeClickOutside: false
    });
    
    $("[data-fancybox='drama-list']").fancybox({
        fullScreen: !1,
        slideShow: !1,
        infobar: !1,
        thumbs: {
            showOnStart: !0,
            hideOnClosing: !0
        },
        beforeClose: function(){
            if (IsLogin()) {
                recentlyPlay()
                $('.fancybox-iframe')[0].contentWindow.closePlayer();
                
                timeout = setTimeout(function(){   
    	        },2000);
            }
        },
        beforeLoad: function(e, t) {
        	beforePlayCheck();
        	
            $(".fancybox-thumbs li").find(".thumbs-title").remove(),
            $(".fancybox-thumbs li").append("<p></p>").find("p").addClass("thumbs-title"),
            $("[data-fancybox='drama-list']").each(function() {
                var e = $(this).data("title")
                  , t = $(this).data("index");
                $(".fancybox-thumbs li").each(function(a, i) {
                    var s = $(this).index();
                    s == t && $(this).find("p").html(e)
                })
            })
        }
    });
   
    $(".ppvq-content").on("click", ".label-text",function(e) {
        $(this).siblings("input").trigger("click");
    })

    $(".ppvq-content").on("click", ".radio-check input",function(e) {
        var t = $(this),
            a = t.parents(".plan-item"),
            i = a.siblings(".plan-item"),
            s = t.prop("checked", !0);
        s && (i.removeClass("selected"), a.addClass("selected"))
    })
    
    $(".rating-box-inline-vod").hide();
});

function packagesList(cId, cType){
    if(!cType) cType = 1;
    getData("packageMenu2/list", function(data) {
        if (data.status != 200){
            location.href= "/";
        }else{
            var PackList = "";
            var Plist = data.data.packageMenuList ;
            var PPVList = "" ;
            if(Plist){
                for (var i = 0; i < Plist.length; i++) {
                    if(Plist[i].isPpv){
                        var ExpireDes = "";
                        if (data.data.willExpire == 1) {
                            var nWarnning = 0; //warnning 字眼提醒提前0天數
                            var dtExpireDate = new Date(Date.parse(data.data.expireDateTime));
                            var t = dtExpireDate.getTime() - nWarnning * 86400 * 1000;
                            var dtWarnningDate = new Date(t);
                            var nDate = new Date(Date.now());
                            if(dtWarnningDate <= nDate){
                                var dtYear = dtWarnningDate.getFullYear();
                                var dtMonth = dtWarnningDate.getMonth() + 1;
                                var dtDate = dtWarnningDate.getDate();
                                ExpireDes = "此片已於 " + dtYear + "/" + dtMonth + "/" + dtDate + " 停止提供租借";
                            }
                        }
                        if(data.data.packageList){
                          for (var p = 0; p < data.data.packageList.length; p++) {
                              PPVList += PackageItem(data.data.packageList[p], "單片租借", ExpireDes);
                          }
                        }
                    }
    
                    if(Plist[i].title == "看影劇" || Plist[i].title == "片數儲值"){
                        for (var c = 0; c < Plist[i].childList.length; c++) {
                            PackList +=  Packagebk(Plist[i].title, Plist[i].childList[c], PPVList);
                        }
                    }
                }
                
                $("#offer-modal .packagelist").html(PackList);
                $("#offer-modal hr").last().addClass("hide");
                $(".payment-option").eq(0).trigger("click");
                $(".section-option").each(function(i,item){
                    $(item).children('div[isContinue="1"]').eq(0).find(".box").before( "<div class=\"recommend-tag\"><span>推薦</span></div>" );
                });
    
                $.magnificPopup.open({
                    items: {
                        src: "#offer-modal",
                        type: 'inline'
                    },
                    removalDelay: 300,
                    mainClass: 'mfp-fade',
                    closeOnContentClick : false,
                    closeOnBgClick : true,
                    showCloseBtn : false,
                    enableEscapeKey : true,
                    callbacks: {
                      close:function(){
    
                      }
                    },
                }, 0);
            }else{
                alert("此片因授權到期，無法進行購買，已購買用戶仍可於購買後48小時內觀看");
            }
        }
    }, {
        contentId : cId,contentType : cType
    });
}

function Packagebk(title, Plist, PPVList){
    var PackList = "" ;
    PackList += "<div class=\"section-option\" >";
    PackList += "<p>" + Plist.subTitle + "</p>";
    PackList += "<p class=\"option-note hidehide\"></p>";

    if(Plist.packageList){
    for (var p = 0; p < Plist.packageList.length; p++) {
        var packageMenuName = Plist.title;
        if(title == "片數儲值") packageMenuName = "單片館續租型";
        PackList += PackageItem(Plist.packageList[p], packageMenuName) ;
    }}

    if(PPVList) PackList += "<div class=\"clearfix\">&nbsp;</div>" + PPVList ;
    PackList += "<hr ></div>";
    return PackList;
}

function PackageItem(Ilist, packageMenuName, ExpireDes){
    var PackItem = "" ;
    var isBranderCard = 0 ;
    if(Ilist.isCoBranderCard) isBranderCard = Ilist.isCoBranderCard;
    if(Ilist.isBranderCard) isBranderCard = Ilist.isBranderCard;
    var eventId = 0, des = Ilist.description;
    if(Ilist.isPromotionIds && Ilist.isPromotionIds!="0" && Ilist.promotionDesc != ""){
      eventId = Ilist.isPromotionIds.split(",")[0];
      var promotionDesc = Ilist.promotionDesc;
      des = promotionDesc + "<br />" + des ;
    }
    if( Ilist.packageCode.substring(4, 5) == "U" )$('input[name=fridayCardMemo]').val(1);
    if(packageMenuName == "單片租借") des = "單片付費後48小時無限暢看。<br />單片租借影片，皆經授權廠商合法授權取得，可供單片租借的期限，由授權廠商決定；部份單片租借影片亦可能包含在影劇館中。";
    PackItem += "<div class=\"payment-option\" data-tip=\""+ HTMLEnCode(des) +"\" packageId=\""+ Ilist.packageId +"\" packageCode=\""+ Ilist.packageCode +"\" isPromotionIds=\""+ eventId +"\" packageMenuName=\""+ packageMenuName +"\" name=\""+ Ilist.name +"\" price=\""+ Ilist.price +"\" isBranderCard=\""+ isBranderCard +"\" isContinue=\""+ Ilist.isContinue +"\" >" ;
    PackItem += "<div class=\"box\">" ;
    PackItem += "<h2><span>$</span>"+ Ilist.price +"" ;
    if(Ilist.price < Ilist.oriPrice)PackItem += "<div class=\"old\"><span>$</span><s>"+ Ilist.oriPrice +"</s></div>" ;
    PackItem += "</h2>" ;
    PackItem += "<div class=\"info\">" ;
    if(Ilist.name) PackItem += "<h5>"+ Ilist.name +"</h5>" ;
    if(Ilist.name != Ilist.oriName && (Ilist.oriName != '' && Ilist.oriName)) PackItem += "<s>"+ Ilist.oriName +"</s><div class=\"clearfix\">&nbsp;</div>" ;
    if(Ilist.canBuy==1){
        if(ExpireDes){
            PackItem += "<span class=\"payment-dafault\">"+ ExpireDes +"</span>" ;
        }else{
            PackItem += "<a class=\"btn btn-default btn-primary goPay\">立即購買</a>" ;
        }
    }else{
        PackItem += "<span class=\"payment-dafault\">無法選購此方案</span>" ;
    }
    PackItem += "</div></div></div>" ;
    return PackItem;
}

function PPVQ(data) {
    var PackList = "" ;
    var noQuota = true;
    var list = data;
    for(var i=0;i<list.length;i++){
        var type = list[i].type;
        if(list[i].quota > 0 && noQuota) noQuota = false;
        
        var str_checked = "", str_selected = "" ;
        if( i == 0) str_checked = "checked" ;
        if( i == 0) str_selected = "selected" ;
        
        PackList += "<div class=\"row plan-item "+ str_selected +"\">";
        PackList += "<div class=\"col-xs-6\">";
        PackList += "<h4 class=\"side-title\"><span>" + list[i].packageName + "</span></h4>";
        PackList += "</div>";
        PackList += "<div class=\"col-xs-6 radio-box\">";
        PackList += "<div class=\"radio-check\">";
        PackList += "<input type=\"radio\" id=\"packagesRadio"+i+"\" name=\"packagesRadio\" " + str_checked + " type=\"radio\" cId=\"" + cId + "\" pCode=\""+list[i].packageCode+"\" ari=\""+list[i].applyRecordId+"\" "+(list[i].quota==0?"disabled":"")+" >";
        PackList += "<label for=\"packagesRadio"+i+"\"></label>";
        PackList += "<div class=\"label-text\"><p class=\"label-main\">"+(type==1?"本期":"")+"尚可兌換 "+list[i].quota+" 部</p><p>" +(type==1?"本期":"使用")+"效期 ："+list[i].startDateTime+"~"+list[i].endDateTime+"</p></div>";
        PackList += "</div>";
        PackList += "</div>";
        PackList += "</div>";
    }
    if(!noQuota)$("#ppvq-modal .btn-box button").attr("disabled", false);
    $("#ppvq-modal .plan-item-box").html(PackList);
    $.magnificPopup.open({
        items: {
            src: "#ppvq-modal",
            type: 'inline'
        },
        removalDelay: 300,
        mainClass: 'mfp-fade',
        closeOnContentClick : false,
        closeOnBgClick : true,
        showCloseBtn : false,
        enableEscapeKey : true,
        callbacks: {
          close:function(){
          }
        },
    }, 0);
}

function ppvRedeem(data) {
  if (data.status != 200) {
    msg_popup(data.message);
    $(".goExch").prop('disabled', false);
    return false;
  } else {
     $("#playbutton").trigger('click');
  }
}

$(".rating-btn-vod").on("click", function() {
	if(!IsLogin()) {
		popup_login();
		return;
	} else {    
		var tempType=BookingMarkContenTypeTemp(cType);
		$(".rating-box-inline-vod").toggle(0);
        var e = first_mark;
        $(".rating-vod").starRating({
        	totalStars: 5,
            starSize: 24,
            emptyColor: "lightgray",
            hoverColor: "#FF8400",
            activeColor: "#FF8400",
            initialRating: e,
            strokeWidth: 0,
            useGradient: !1,
            disableAfterRate: !1,
            callback: function(e, t) {
            	memberMark(tempType, 1, e);
            	$(".rating-btn-vod").text("已評分");            	
                WTvideoplay("評分", WTvod_t, WTvod_n); // WT 評分	
            	$(".rating-box-inline-vod").hide(0);
                var a = $("#score");
                a.removeClass("back"), a.on("click", ".dismiss", function(e) {
                	e.preventDefault(), a.addClass("back")
                }), setTimeout(function() {
                    a.addClass("back")
                }, 3e3)
            }
        }), $(".rated").starRating({
            starSize: 22,
            readOnly: !0
        })
	}
});

function memberMark(contentType,markType,score) {
	getData("member/mark", function(data) {
		if (data.status != 200) {
		} else {
		}
	}, {
		contentId : _contentId,
		contentType : contentType,
		markType : markType,
		value : score
	});
}

function beforePlayCheck() {
    // WT 播放
    videoplay_tracking("P");
    if (!IsLogin()){
        var guest_msg = "";
        var pmtList = "";
        var popup_msg = 1;
        $('.pmt').each(function(){
           pmtList +=  $('.pmt').html()+",";
        })
        /*
        if(pmtList.indexOf('免費') >= 0 && popup_msg){
            guest_msg = "請登入後，可觀看免費影片";
            popup_msg = 0;
            $("#member-player-popup-modal .go-packages").hide();
        }
        if(pmtList.indexOf('影劇') >= 0 && popup_msg){
            guest_msg = "本片限影劇館付費會員觀看，首次訂購享前30天免費。";
            popup_msg = 0;
            $("#member-player-popup-modal .player-cancel").hide();
        }
        if(pmtList.indexOf('單片') >= 0 && popup_msg){
            guest_msg = "本片為單片租借影片，請登入";
            popup_msg = 0; 
            $("#member-player-popup-modal .go-packages").hide();
        }
        if(guest_msg == ""){
            guest_msg = "請登入";
            $("#member-player-popup-modal .go-packages").hide();
        }
        */
        $("#member-player-popup-modal h4").html(guest_msg);
        guest_player_popup();
        parent.$.fancybox.close();
    }
}

function restricted_popup() {
    $.magnificPopup.open({
        modal: true,
        removalDelay: 300,
        mainClass: "mfp-fade",
        items: {
            src: "#restricted-popup-modal",
            type: "inline"
        },callbacks: {
            open: function() {
                $('html').css('margin-right',0);
            }
        }
    })

    $(".go-home").on("click",function(e){location.href = "/";});
    $(".btn-18").on("click",function(e){
    	$("#restricted-popup-modal").magnificPopup("close");
    	if (getCookie("recommend_autoplay") == "1") {
			if(getCookie("voBrowserName")!="msie")
				eraseCookie("recommend_autoplay");
			$("#playbutton").trigger('click');
		}
    });
}

// WT videoplay
function videoplay_tracking(WTPlay){
    WTvideoplay(WTPlay, WTvod_t, WTvod_n);
} 