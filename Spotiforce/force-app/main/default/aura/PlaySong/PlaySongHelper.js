({
    playSound : function(cmp, resolve, reject) {
        var audioPlayer = cmp.find("audioPlayer");
        var audioElement = audioPlayer.getElement();
        audioElement.muted = false;
        audioElement.loop = false;
        audioElement.onerror = reject;
        audioElement.onended = resolve;
        audioElement.play();
    },
    toggleSound: function (cmp) {
        cmp.set("v.muted", !cmp.get("v.muted"));
    },
    pauseSound: function (cmp) {
        cmp.find("audioPlayer").getElement().pause();
    }
})