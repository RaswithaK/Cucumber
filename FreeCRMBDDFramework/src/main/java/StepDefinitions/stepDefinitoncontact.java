package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinitoncontact {
	WebDriver driver;
	@Given("^user is alreayd on loginpage$")
	public void user_is_alreayd_on_loginpage() throws Throwable {
	    
		System.setProperty("webdriver.chrome.driver","C:\\selenium_1\\DRIVERS\\chromedriver.exe");// Write code here that turns the phrase above into concrete actions
	    driver=new ChromeDriver();
		driver.get("https://www.freecrm.com/index.html");
		//driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
		driver.manage().timeouts().pageLoadTimeout(50,TimeUnit.SECONDS);
	    
	}

	
	@When("^Title of login page is FREECRM$")
	public void title_of_login_page_is_FREECRM() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		String title=driver.getTitle();
		System.out.println(title);
		Assert.assertEquals("#1 Free CRM software in the cloud for sales and service",title);
	}

	@Then("^User enters \"(.*)\" in usernamefield And User enters \"(.*)\" in passowrd field$")
	public void user_enters_user_name_in_usernamefield_And_User_enters_password_in_passowrd_field(String username,String password) throws Throwable {
	  driver.findElement(By.name("username")).sendKeys(username);
	  driver.findElement(By.name("password")).sendKeys(password);
	  
	}

	@Then("^User clicks on Login Button$")
	
	public void user_clicks_on_Login_Button() throws Throwable {
	   WebElement lgnbtn=driver.findElement(By.xpath("//input[@type='submit']"));
		JavascriptExecutor js= (JavascriptExecutor)driver;
	   js.executeScript("arguments[0].click()", lgnbtn);
	}

	@Then("^verify user navigated to Homepage or not$")
	public void verify_user_navigated_to_Homepage_or_not() throws Throwable {
	 String title=driver.getTitle() ;
	 System.out.println(title);
	 Assert.assertEquals("CRMPRO",title);
	 
	}



	@Then("^user moves to new contact page$")
	public void user_moves_to_new_contact_page() throws Throwable {
	    
	// Write code here that turns the phrase above into concrete actions
	   driver.switchTo().frame("mainpanel");
		Actions action=new Actions(driver);
		WebElement contact=driver.findElement(By.xpath("//a[@title='Contacts']"));
	    action.moveToElement(contact).build().perform();
	    action.moveToElement( driver.findElement(By.xpath("//a[@title='New Contact']"))).click().build().perform();
	    driver.findElement(By.xpath("//input[@value='Save']")).clear();
	}

	@Then("^user placing contact \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_placing_contact_and_and(String firstname, String lastname, String position) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.findElement(By.id("first_name")).sendKeys(firstname);
	    driver.findElement(By.id("surname")).sendKeys(lastname);
	    driver.findElement(By.xpath("//input[@id='company_position']")).sendKeys(position);
	}

	@Then("^close the browser$")
	public void close_the_browser() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    driver.close();
	}


}
