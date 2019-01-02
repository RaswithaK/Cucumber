Feature: create contact in homwpage
Scenario Outline: Create a new contact in FreeCRM

Given user is alreayd on loginpage
    When Title of login page is FREECRM
    Then User enters "<username>" in usernamefield And User enters "<password>" in passowrd field
    Then User clicks on Login Button
    Then verify user navigated to Homepage or not
    Then user moves to new contact page
    Then user placing contact "<firstname>" and "<lastname>" and "<position>"
    Then close the browser
   
   
Examples:
  
  |username  | password   |firstname  | lastname | position |
  |RaswithaK | welcome46@ |raswitha   | K        | doctor |
  |Tom       | 122345     |tom        |david     | doc    |
   