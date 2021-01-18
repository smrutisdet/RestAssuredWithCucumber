package stepdefs;

import baseSteps.BaseSteps;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class GetOperations {

    BaseSteps steps = new BaseSteps();

    @Given("^User is able to hit the local api with '(.*)' for get$")
    public void givenIHitTheService(String appendString) {
        steps.hitlocalWebServiceWithUrl(appendString);
    }

    @When("^api processes the request$")
    public void apiProcessesReqeust() {
        steps.processGetRequest();
    }

    @Then("^User gets the correct '(\\d+)'$")
    public void userGetsCorrectResponseCode(int statusCode) {
        steps.verifyGetRequestStatusCode(statusCode);
    }
    @Then("^Rsponse is in JSON format$")
    public void verifyContentType() {
        steps.verifyRsponseisJSONformat();
    }
    @Then("^return the JSON response$")
    public void returnTheJsonResponse() {
        steps.getJSONResponse();
    }
    @Then("^id is '(\\d+)'$")
    public void verifyIDIsMatched(int id) {
        steps.verifyIDInResponse(id);
    }
}
