public with sharing class GetArtistController {
    @AuraEnabled
        public static List<Contact> getContacts() {
            List<Contact> contacts = 
                    [SELECT Id, Name, Phone, Email, RecordType.Name FROM Contact WHERE RecordType.Name = 'Artist'];
    
            //Add isAccessible() check
            return contacts;
        }
    }