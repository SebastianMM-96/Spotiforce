public class SearchSongsController {
    @AuraEnabled
    public static List <Songs__c> getAccounts() {
        return [SELECT Id, Name FROM Songs__c];
    }    
    @AuraEnabled
    public static List<Account> findByName(String searchKey) {
        String name =  + searchKey + '%';
        return [SELECT id, name, phone,type FROM Account WHERE name LIKE :name];
    }
}
