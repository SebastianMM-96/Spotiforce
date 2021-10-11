({
    
    init : function(component, event, helper) {
        
        component.set('v.mycolumns', [
            {label: 'User', fieldName: 'linkName', type: 'url', 
            typeAttributes: {label: { fieldName: 'Name' }, target: '_blank'}},
            {label: 'Have subscription?', fieldName: 'Subcription__c', type: 'checkbox'},
            {label: 'Date of subscription', fieldName: 'Date_of_purchase__c', type: 'formula'},
        ]);
        
        helper.fetchAccounts(component, event);
    },
    
    //  getSelectedName: function (cmp, event) {
    //     var selectedRows = event.getParam('selectedRows');
    //     // Display that fieldName of the selected rows
    //     for (var i = 0; i < selectedRows.length; i++){
    //         alert(selectedRows[i].Name + " rock " + selectedRows[i].Date_of_purchase__c);
    //     }
    // }

})
