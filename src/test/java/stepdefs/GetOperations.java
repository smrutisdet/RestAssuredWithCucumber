package stepdefs;

import baseSteps.BaseSteps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GetOperations {
                            
	BaseSteps steps=new BaseSteps();
	
	@Given("^User is able to hit the local api with '(.*)' for get$")
	public void givenIHitTheService(String appendString){
		steps.hitlocalWebServiceWithUrl(appendString);
	}
	
	@When("^api processes the request$")
	public void apiProcessesReqeust(){
		steps.processGetRequest();
	}
	
	@Then("^User gets the correct '(\\d+)'$")
	public void userGetsCorrectResponse(int statusCode){
		steps.verifyGetRequest(statusCode);
	}
}
