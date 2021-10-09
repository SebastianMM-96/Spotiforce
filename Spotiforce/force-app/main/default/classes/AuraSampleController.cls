public with sharing class AuraSampleController{
     
    @AuraEnabled
    public static List<Contact> getAccounts(){
        List<Contact> accList = new List<Contact>();
        accList = [SELECT Id,RecordTypeId,RecordType.Name FROM Contact];
        return accList;
    }
}