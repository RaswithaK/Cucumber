package testRunner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="C:\\selenium_1\\eclipse workplace\\FreeCRMBDDFramework\\src\\main\\java\\Features\\contact.feature",
		glue= {"StepDefinitions"},
		dryRun=false,
		monochrome=true,
		strict=true,
		format= {"pretty","html:TestOutput/cucumber.html","junit:junit_xml/cucumber.xml"}
		)
public class contactTestRunner {

}
