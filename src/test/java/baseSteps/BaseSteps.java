package baseSteps;

import io.restassured.RestAssured;
import io.restassured.path.json.JsonPath;
import org.junit.Assert;
//import org.testng.Assert;
import apiClasses.Comments;
import apiClasses.PostRequest;
import io.restassured.response.Response;

import static io.restassured.RestAssured.*;

import io.restassured.http.ContentType;

import java.util.ArrayList;
import java.util.Properties;
import java.util.logging.Logger;

import cucumber.api.java.Before;
import cucumber.api.Scenario;

public class BaseSteps {
    //private String baseUrl = "http://localhost:3000";
    private Response response;
    private int statusCode;
    private String url;
    private Comments comment;
    String body;
    private final static Logger logger = Logger.getLogger(BaseSteps.class.getName());
    private Properties prop;
    private String baseURL;

    public void setAPIEndpointURL() {
        try {
            prop = new Properties();
            //load a properties file from class path, inside static method
            prop.load(BaseSteps.class.getClassLoader()
                    .getResourceAsStream("environment.properties"));
            baseURL = prop.getProperty("baseUrl");
            logger.info(" Base URL is :" + baseURL);
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    //-----------------------GET------------------------------------

    public void hitlocalWebServiceWithUrl(String appendString) {
        setAPIEndpointURL();
        url = baseURL + "/" + appendString;
        logger.info("=======URL is++++++++++++++++++++++++++ " + url);
        response = given().log().all().get(url);
    }

    public void processGetRequest() {
        statusCode = response.getStatusCode();
    }

    public void verifyGetRequestStatusCode(int expectedStatusCode) {
        Assert.assertTrue(statusCode == expectedStatusCode);
    }

    public void verifyRsponseisJSONformat() {
        given().log().all().get(url).then().assertThat().contentType(ContentType.JSON);
    }
    //-------------------------------- POST ---------------------------------
    public void createPostsUsingPostOperations(int id, String title, String author) {
        PostRequest postObject = new PostRequest();
        postObject.setId(id);
        postObject.setTitle(title);
        postObject.setAuthor(author);
        response = given().log().all().when().contentType(ContentType.JSON).body(postObject).post(url);
    }

    public void verifyPostCorrectlyCreated(int id, String title, String author) {
        body = response.getBody().asString();
        logger.info("body is" + body);

        Assert.assertTrue(body.contains(Integer.toString(id)));
        Assert.assertTrue(body.contains(title));
        Assert.assertTrue(body.contains(author));

    }

    //------------------------------- PUT ------------------------------------

    public void createPutRequest(int id, String body, int postId) {
        comment = new Comments();
        comment.setId(id);
        comment.setBody(body);
        comment.setPostId(postId);
    }

    public void hitServiceWithPutRequest(int id) {
        setAPIEndpointURL();
        String putUrl = baseURL + "/comments/" + id;
        logger.info("Put URL is========== " + putUrl);
        response = given().log().all().when().contentType(ContentType.JSON).body(comment).put(putUrl);
        logger.info("put response++ " + response.getBody().asString());
    }

    public void put_VerifyResultOfOperation(int id, String body) {
        Assert.assertTrue(body.equals(body));
    }

    //---------------------------- DELETE ----------------------------------


    public void delete_HitServiceWithDeleteRequest(int id) {
        String deleteUrl = baseURL + "/comments/" + id;
        response = given().log().all().when().contentType(ContentType.JSON).delete(deleteUrl);
        logger.info("patch response++ " + response.getBody().asString());
    }

    public void delete_VerifyResultOfOperation() {
        Assert.assertTrue((response.getBody().asString()).equals("{}"));
    }


//-----------------common operations/ reusable methods======================================

    public void getJSONResponse() {
        // Base URI
        //RestAssured.baseURI = baseURL;
        // validate that response is 200 and content type is JSON
        Response rawResponse = given().log().all().when().get(url).then().extract().response();
        logger.info("Raw Response is:" + rawResponse);
        String stringResponse = rawResponse.asString();
        logger.info("Response in String format is:" + stringResponse);
        JsonPath jsonResponse = new JsonPath(stringResponse);
        logger.info("Response in JSON format is:" + jsonResponse);
//        String firstUser = jsonResponse.get("[0].author");
//        logger.info(firstUser);

    }
    public void verifyIDInResponse(int id) {
        // Base URI
        //RestAssured.baseURI = baseURL;
        // validate that response is 200 and content type is JSON
        logger.info("URL for get with append string is:+++++++++"+url);
        Response rawResponse = given().log().all().when().get(url).then().extract().response();
        logger.info("Raw Response is:" + rawResponse);
        String stringResponse = rawResponse.asString();
        logger.info("Response in String format is:" + stringResponse);
        JsonPath jsonResponse = new JsonPath(stringResponse);
        logger.info("Response in JSON format is:" + jsonResponse);
        int aid=jsonResponse.getInt("id");
        logger.info("Actual response id is:"+aid);
        Assert.assertTrue(id==aid);
    }
}