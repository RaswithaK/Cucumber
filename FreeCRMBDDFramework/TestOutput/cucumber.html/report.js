$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/selenium_1/eclipse workplace/FreeCRMBDDFramework/src/main/java/Features/contact.feature");
formatter.feature({
  "line": 1,
  "name": "create contact in homwpage",
  "description": "",
  "id": "create-contact-in-homwpage",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 2,
  "name": "Create a new contact in FreeCRM",
  "description": "",
  "id": "create-contact-in-homwpage;create-a-new-contact-in-freecrm",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is alreayd on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"\u003cusername\u003e\" in usernamefield And User enters \"\u003cpassword\u003e\" in passowrd field",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify user navigated to Homepage or not",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user placing contact \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "create-contact-in-homwpage;create-a-new-contact-in-freecrm;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 16,
      "id": "create-contact-in-homwpage;create-a-new-contact-in-freecrm;;1"
    },
    {
      "cells": [
        "RaswithaK",
        "welcome46@",
        "raswitha",
        "K",
        "doctor"
      ],
      "line": 17,
      "id": "create-contact-in-homwpage;create-a-new-contact-in-freecrm;;2"
    },
    {
      "cells": [
        "Tom",
        "122345",
        "tom",
        "david",
        "doc"
      ],
      "line": 18,
      "id": "create-contact-in-homwpage;create-a-new-contact-in-freecrm;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
  "name": "Create a new contact in FreeCRM",
  "description": "",
  "id": "create-contact-in-homwpage;create-a-new-contact-in-freecrm;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is alreayd on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"RaswithaK\" in usernamefield And User enters \"welcome46@\" in passowrd field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify user navigated to Homepage or not",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user placing contact \"raswitha\" and \"K\" and \"doctor\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitoncontact.user_is_alreayd_on_loginpage()"
});
formatter.result({
  "duration": 9215518811,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 19781942,
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
  "duration": 443310171,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 7524969646,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.verify_user_navigated_to_Homepage_or_not()"
});
formatter.result({
  "duration": 14850198,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.user_moves_to_new_contact_page()"
});
formatter.result({
  "duration": 2650396246,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "raswitha",
      "offset": 22
    },
    {
      "val": "K",
      "offset": 37
    },
    {
      "val": "doctor",
      "offset": 45
    }
  ],
  "location": "stepDefinitoncontact.user_placing_contact_and_and(String,String,String)"
});
formatter.result({
  "duration": 361178155,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.close_the_browser()"
});
formatter.result({
  "duration": 224799416,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Create a new contact in FreeCRM",
  "description": "",
  "id": "create-contact-in-homwpage;create-a-new-contact-in-freecrm;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user is alreayd on loginpage",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "Title of login page is FREECRM",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User enters \"Tom\" in usernamefield And User enters \"122345\" in passowrd field",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "User clicks on Login Button",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "verify user navigated to Homepage or not",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user moves to new contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user placing contact \"tom\" and \"david\" and \"doc\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinitoncontact.user_is_alreayd_on_loginpage()"
});
formatter.result({
  "duration": 7489137693,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.title_of_login_page_is_FREECRM()"
});
formatter.result({
  "duration": 12432523,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 13
    },
    {
      "val": "122345",
      "offset": 52
    }
  ],
  "location": "stepDefinitoncontact.user_enters_user_name_in_usernamefield_And_User_enters_password_in_passowrd_field(String,String)"
});
formatter.result({
  "duration": 353569494,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.user_clicks_on_Login_Button()"
});
formatter.result({
  "duration": 1842481582,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinitoncontact.verify_user_navigated_to_Homepage_or_not()"
});
formatter.result({
  "duration": 55462123,
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat StepDefinitions.stepDefinitoncontact.verify_user_navigated_to_Homepage_or_not(stepDefinitoncontact.java:60)\r\n\tat ✽.Then verify user navigated to Homepage or not(C:/selenium_1/eclipse workplace/FreeCRMBDDFramework/src/main/java/Features/contact.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "stepDefinitoncontact.user_moves_to_new_contact_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 22
    },
    {
      "val": "david",
      "offset": 32
    },
    {
      "val": "doc",
      "offset": 44
    }
  ],
  "location": "stepDefinitoncontact.user_placing_contact_and_and(String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinitoncontact.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});