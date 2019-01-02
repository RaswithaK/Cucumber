Feature: Deals data creation

Scenario: creating dealspage by entering deals details

Given user is alreayd on loginpage
    When Title of login page is FREECRM
    Then User enters username in usernamefield And User enters password in passowrd field
    | RaswithaK | welcome46@|
    Then User clicks on Login Button
    Then verify user navigated to Homepage or not
    Then user moves to new deals page
    Then user placing deals details 
    | test deal | 1000 | 50 | 10 |
    Then close the browser