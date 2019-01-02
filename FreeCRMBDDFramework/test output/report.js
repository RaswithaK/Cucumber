$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/selenium_1/eclipse workplace/FreeCRMBDDFramework/src/main/java/Features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM Login Feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 2,
      "value": "#without examples keywod"
    },
    {
      "line": 3,
      "value": "#Scenario: Free CRM Login Test Scenario"
    },
    {
      "line": 4,
      "value": "##Given user is alreayd on loginpage"
    },
    {
      "line": 5,
      "value": "#When Title of login page is FREECRM"
    },
    {
      "line": 6,
      "value": "#Then User enters RaswithaK in usernamefield And User enters welcome46@ in passowrd field"
    },
    {
      "line": 7,
      "value": "#Then User clicks on Login Button"
    },
    {
      "line": 8,
      "value": "#Then verify user navigated to Homepage or not"
    },
    {
      "line": 10,
      "value": "#with exmples keyword and scenrio outline"
    }
  ],
  "line": 11,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is alreayd on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"\u003cusername\u003e\" in usernamefield And User enters \"\u003cpassword\u003e\" in passowrd field",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify user navigated to Homepage or not",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;1"
    },
    {
      "cells": [
        "RaswithaK",
        "welcome46@"
      ],
      "line": 20,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test123"
      ],
      "line": 21,
      "id": "free-crm-login-feature;free-crm-login-test-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is alreayd on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"RaswithaK\" in usernamefield And User enters \"welcome46@\" in passowrd field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify user navigated to Homepage or not",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitoncontact.user_is_alreayd_on_loginpage()"
});
formatter.result({
  "duration": 16150459826,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 22211922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RaswithaK",
      "offset": 13
    },
    {
      "val": "welcome46@",
      "offset": 58
    }
  ],
  "location": "stepDefinitoncontact.user_enters_user_name_in_usernamefield_And_User_enters_password_in_passowrd_field(String,String)"
});
formatter.result({
  "duration": 294069847,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 6878453411,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.verify_user_navigated_to_Homepage_or_not()"
});
formatter.result({
  "duration": 8190313,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Free CRM Login Test Scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-test-scenario;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 12,
  "name": "user is alreayd on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "Title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "User enters \"tom\" in usernamefield And User enters \"test123\" in passowrd field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "verify user navigated to Homepage or not",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitoncontact.user_is_alreayd_on_loginpage()"
});
formatter.result({
  "duration": 7245654831,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 12417346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test123",
      "offset": 52
    }
  ],
  "location": "stepDefinitoncontact.user_enters_user_name_in_usernamefield_And_User_enters_password_in_passowrd_field(String,String)"
});
formatter.result({
  "duration": 760418479,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 1522572891,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.verify_user_navigated_to_Homepage_or_not()"
});
formatter.result({
  "duration": 57794067,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinitions.stepDefinitoncontact.verify_user_navigated_to_Homepage_or_not(stepDefinitoncontact.java:60)\r\n\tat ✽.Then verify user navigated to Homepage or not(C:/selenium_1/eclipse workplace/FreeCRMBDDFramework/src/main/java/Features/login.feature:16)\r\n",
  "status": "failed"
});
});