function Streaming() {
    alert('TUTU');
    this.streamingId = null;
    this.streamingType = null;
    this.contentType = null;
    this.contentId = null;
    this.url = null;
    this.subtitles = [];
    this.startTime = null;
    this.canLike = false;
    this.hasSubtitle = false;
    
    //methods
    
    this.fetchFromServer = function(api, params) {
        //console.log('fetchFromServer');
        
        this.streamingId = params.streamingId;
        this.streamingType = params.streamingType;
        this.contentType = params.contentType;
        this.contentId = params.contentId;
        
        $.ajax({
            type: "GET",
            url: api_url + api,
            async: false,
            data : {streamingId: "6029", streamingType: "2", contentType: "1", contentId: "6030", clientId: "1704255069"},
            dataType : 'json',
            context : this,
            cache : false,
            success : function(data) {
                //console.log(data);
                if (data.status == "200") {
                    if (data.code == "0000") {
                        this.url = data.data.streaming.replace("6029", params.streamingId);
                        this.startTime = 0;
                        this.haveNextEpisode = data.data.haveNextEpisode;
                        this.nextCid = data.data.nextCid;
                        this.nextSid = data.data.nextSid;
                        this.nextEpisodeName = data.data.nextEpisodeName;

                        //subtitle
                        if (this.subtitles instanceof Array) {
                            this.subtitles.length = 0;
                        }
                        data.data.subtitleList = [{name: "中文", url: "https://edge02p.video.friday.tw/" + params.streamingId + ".cht.vtt"}]; 
                        if (data.data.subtitleList) {
                        	if(data.data.subtitleList.length == 0){
                                $('.p-caption').hide();
                            }else {
                            	$('.p-caption').show();
                            	$('#subtitle_type').val(0);
                            }
                            for(var i=0;i<data.data.subtitleList.length;i++) {
                                this.subtitles[i] = new Subtitle(data.data.subtitleList[i]);
                            }
                        }
                        // Ken 160205 padding// isDisabled1080p = data.data.disabled1080p; // Ken 160125 新增取得是否不可播放1080p畫質
                        return;
                    }
                }
                    
                throw data;
            }
        });
    }

    this.loadCanLikeInfo = function(api, params) {
        //console.log('loadCanLikeInfo');

        $.ajax({
            type: "GET",
            url: api_url + api,
            async: false,
            data : params,
            dataType : 'json',
            context : this,
            success : function(data) {
                //console.log(data);
                if (data.status == '200') {
                    if (data.code == "0000") {
                        this.canLike = data.canLike;
                        return;
                    }
                }

                throw data;
            }
        });
    }
}

function Subtitle(data) {
    this.name = data.name;
    this.url = data.url;
}


function StreamingUtil() {}
StreamingUtil.isDrm = function(theUrl) {
    //console.log('isDrm');
    if (theUrl) { 
        return (theUrl.indexOf('drm') != -1);
    } else {
        return false;
    }
};
StreamingUtil.urlFor = function(tech, theUrl) {
    if (tech == "dash") {
        return theUrl.replace("playlist.m3u8", "manifest.mpd");
    } else if (tech == "hls") {
        return theUrl.replace("manifest.mpd", "playlist.m3u8");
    } else {
        return theUrl.replace("playlist.m3u8", "manifest.mpd");
    }
}


function VenusAPI() {}
VenusAPI.get = function(apiUrl, param, isAsync, handlerSuccess, handlerError) {
    $.ajax({
        type: "GET",
        url: apiUrl,
        async: isAsync,
        data : param,
        dataType : 'json',
        success : handlerSuccess,
        error : handlerError
    });
}
VenusAPI.post = function(apiUrl, param, isAsync, handlerSuccess, handlerError) {
    $.ajax({
        type: "POST",
        url: apiUrl,
        async: isAsync,
        data : param,
        dataType : 'json',
        success : handlerSuccess,
        error : handlerError
    });
}
VenusAPI.playUpdate = function(thePlayer, playUpdateParams, handler) {
    $.ajax({
        type: "GET",
        url: api_url + "play/update",
        //async: false,
        data : playUpdateParams,
        dataType : 'json',
        success : handler,
        error : function(data) {
            //console.log('fail');
            //console.log(data);
        }
    });
    
};  
VenusAPI.concurrentCheck = function(thePlayer, playUpdateParams, handler) {    
    $.ajax({
        type: "GET",
        url: api_url + "play/update",
        async: true,
        data : playUpdateParams,
        dataType : 'json',
        context : this,
        success : handler
    });
};
VenusAPI.playStop = function() {
    var params = {};
    //console.log('playStop');
    $.ajax({
        type: "POST",
        url: api_url + "play/stop",
        async: true,
        data : params,
        dataType : 'json',
        context : this,
        success : function(data) {
            //console.log('success');
            //console.log(data);
        },
        error : function(data) {
            //console.log('error');
            //console.log(data);
        }
    });
};
VenusAPI.errorLogUpdate = function(playUpdateParams) {
    $.ajax({
        type: "GET",
        url: api_url + "playerErrorLog/record",
        //async: false,
        data : playUpdateParams,
        dataType : 'json',
        success : function(data) {
        },
        error : function(data) {
        }
    });
};  