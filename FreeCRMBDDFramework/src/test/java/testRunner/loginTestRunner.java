package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;

import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\selenium_1\\eclipse workplace\\FreeCRMBDDFramework\\src\\main\\java\\Features\\login.feature",
		glue= {"StepDefinitions"},
		strict=true,//if any keyword code is missing or not
		//format= {"pretty","html:test output"},
		plugin={"pretty","html:test output","json:json_output/cucmber.json","junit:junit_output/cucumber.xml"},
		dryRun=false,//it will continue execution without checking..we need to makeit false after checking step defintion file i mean after true function
		//dryRun=true,//folow rules between mapping between stepdefinitions,feature,runner class
		monochrome=true//display console output in a readble way
		
		)

public class loginTestRunner {

}
