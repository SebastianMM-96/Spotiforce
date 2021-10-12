({
    handleError: function (cmp, event, helper) {
        cmp.find('notifLib').showToast({
            "title": "Something has gone wrong!",
            "message": event.getParam("message"),
            "variant": "error"
        });
    },
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "success",
            "title": "Song created successfully :)",
            "message": "Refresh your page to see the new song."
        });
    }
})