Feature: Free CRM Login Feature
#without examples keywod
#Scenario: Free CRM Login Test Scenario
    ##Given user is alreayd on loginpage
    #When Title of login page is FREECRM
    #Then User enters RaswithaK in usernamefield And User enters welcome46@ in passowrd field
    #Then User clicks on Login Button
    #Then verify user navigated to Homepage or not
    
  #with exmples keyword and scenrio outline  
    Scenario Outline: Free CRM Login Test Scenario
    Given user is alreayd on loginpage
    When Title of login page is FREECRM
    Then User enters "<username>" in usernamefield And User enters "<password>" in passowrd field
    Then User clicks on Login Button
    Then verify user navigated to Homepage or not
    
    Examples:
    | username  | password   |
    | RaswithaK | welcome46@ |
    | tom       | test123    |