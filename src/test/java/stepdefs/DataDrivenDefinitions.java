package stepdefs;

import baseSteps.BaseSteps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class DataDrivenDefinitions {
	BaseSteps steps=new BaseSteps();
	@Given("^User creates proper put request with '(\\d+)' and '(.*)' and '(\\d+)'$")
	public void userCreatesProperPutRequest(int id, String body,int postId){
	steps.createPutRequest(id, body, postId);	
}
	@When("^User hits the service with proper url and put operation with '(\\d+)'$")
	public void userHitsServiceWithProperUrl_Put(int id){
		steps.hitServiceWithPutRequest(id);
 }
	
	@Then("^User verifies correct '(\\d+)' and '(.*)'$")
	public void userVerifiesCorrectResponse_put(int id, String body){
		steps.put_VerifyResultOfOperation(id,body);
}

	@When("^User hits the api with proper url and delete operation with '(\\d+)'$")
	public void UserHitsTheServiceWithProperUrl_Delete(int id){
		steps.delete_HitServiceWithDeleteRequest(id);
	}
	
	@Then("^User verifies the operation is successful for '(\\d+)'$")
	public void userVerifiesDeleteIsSuccess_Delete(int id){
		steps.delete_VerifyResultOfOperation();
	}

}
