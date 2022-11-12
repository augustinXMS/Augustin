public with sharing class TileController{
    @AuraEnabled(cacheable = true)
    public static List<Project__c> getTiles(){
        List<Project__c> tileList = Database.query('Select id,recLogo__c,recDecription__c,Name from Project__c');
        for (Project__c s : tileList){
            if(s.recLogo__c!=null){
                String logoURL = (String) s.recLogo__c;
                String imageURL = logoURL.substringBetween(' src="', '"');
                String decodedURL = imageURL.unescapeHtml4();
                s.recLogo__c = decodedURL;
            }
        }
        return tileList;
    }

}