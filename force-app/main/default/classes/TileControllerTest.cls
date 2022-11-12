@isTest
public with sharing class TileControllerTest{
    @TestSetup
    static void makeData(){
        Test.loadData(Project__c.sObjectType, 'Mock_Data_Projects1');
    }

    @isTest
    static void testNoOfProjects(){
        List<Project__c> projectList;
        Test.startTest();
        projectList = TileController.getTiles();
        Test.stopTest();
        System.assertEquals(projectList.size(),3, 'Test-Failed')
    }

}