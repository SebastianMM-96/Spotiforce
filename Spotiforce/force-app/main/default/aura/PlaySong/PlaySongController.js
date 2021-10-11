({
    playSound : function(component, event, helper) {
        // play sound
        var getSound = $A.get('$Resource.suittie' + '/suitTie.mp3');
        var playSound = new Audio(getSound);
        playSound.play();
    },
    toggleSound: function (cmp, event, helper) {
        helper.toggleSound(cmp);
    },
    invoke : function(cmp, event, helper) {
        cmp.set("v._priv_usedInLocalAction", "true");
        cmp.set("v.showUI", "false");
        var cancelToken = event.getParam("arguments").cancelToken;
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                helper.playSound(cmp, resolve, reject);
            });
            cancelToken.promise.then(function(error) {
                helper.pauseSound(cmp);
                reject(error);
            });
        });
    }
})