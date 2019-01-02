@FunctionalTest
Feature: Free CRM application tetsing

@Smoke @Regression
 Scenario: Login with username and password
 Given This is a valid login test
 
 @Regression
 Scenario: login with incorrect credentials
 Given this is a invalid login page
 
 @Smoke @Regression
 Scenario: move contact page
 Given this will be  contact page test
 
 @Smoke @Regression
 Scenario: move to deals page
 Given crating deal
 
 @Regression
 Scenario: move to tasks
 Given create a task
   
   @Regression
   Scenario: verify left panel links
   Given clikcing on left panel links
   
@Smoke
   Scenario: search a case
   Given testing search case
 
 @Regression
 Scenario: search a email
   Given testing email case
 
 @Smoke @End2End  
   Scenario: search docs
   Given testing docs case
  
  @Regression  @Smoke
   Scenario: search a form
   Given testing  form case
   
   @End2End 
   Scenario: search a call
   Given testing call case