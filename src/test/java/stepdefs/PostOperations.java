package stepdefs;

import baseSteps.BaseSteps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class PostOperations {

	 BaseSteps steps=new BaseSteps();
	
	@Given("^User hits the local api with '(.*)' for post$")
	public void userHitsLocalApiUsingPost(String appendString){
		steps.hitlocalWebServiceWithUrl(appendString);
	}
	
	@When("^Api produces correct request for post with '(\\d+)' and '(.*)' and '(.*)'")
	public void apiProducesCorrectRequest(int id, String title,String author){
		steps.createPostsUsingPostOperations(id, title, author);
	}
	
	@Then("^User gets proper response with '(\\d+)' and '(.*)' and '(.*)'$")
	public void userValidatesResponse(int id, String title, String author){
		steps.verifyPostCorrectlyCreated(id, title, author);
		
	}

}
