({
    doInit : function(component, event, helper) {
        
        var columns = ['Name','Email','Phone', 'End of Subscription'];
        component.set('v.columns', columns);
        
        let action = component.get("c.fetchContacts");
        action.setCallback(this, function(response) {
            let state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.lstSubscription", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    }
})