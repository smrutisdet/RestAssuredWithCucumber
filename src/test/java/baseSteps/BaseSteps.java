package baseSteps;

import org.testng.Assert;

import apiClasses.Comments;
import apiClasses.PostRequest;
import io.restassured.response.Response;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import static io.restassured.RestAssured.*;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;


public class BaseSteps {
	private String baseUrl="http://localhost:3000";
	private Response response;
	private int statusCode;
	private String url;
	private Comments comment;
	String body;
	//-----------------------GET------------------------------------

	public void hitlocalWebServiceWithUrl(String appendString){
		url=baseUrl+"/"+appendString;
		response=given().get(url);
	}

	public void processGetRequest(){
		statusCode=response.getStatusCode();
	}

	public void verifyGetRequest(int expectedStatusCode){
		Assert.assertTrue(statusCode==expectedStatusCode);
	}

	//-------------------------------- POST ---------------------------------
	public void createPostsUsingPostOperations(int id, String title, String author){
		PostRequest postObject=new PostRequest();
		postObject.setId(id);
		postObject.setTitle(title);
		postObject.setAuthor(author);
		response=given().when().contentType(ContentType.JSON).body(postObject).post(url);
	}

	public void verifyPostCorrectlyCreated(int id, String title, String author){
		body=response.getBody().asString();
		System.out.println("body is"+body);
		
		Assert.assertTrue(body.contains(Integer.toString(id)));
		Assert.assertTrue(body.contains(title));
		Assert.assertTrue(body.contains(author));

	}

	//------------------------------- PUT ------------------------------------

	public void createPutRequest(int id, String body, int postId){
		comment=new Comments();
		comment.setId(id);
		comment.setBody(body);
		comment.setPostId(postId);
	}

	public void hitServiceWithPutRequest(int id){
		String putUrl=baseUrl+"/comments/"+id;
		response=given().when().contentType(ContentType.JSON).body(comment).put(putUrl);
		System.out.println("put respons++ "+response.getBody().asString() );
	}

	public void put_VerifyResultOfOperation(int id, String body){
		Assert.assertTrue(body.equals(body));
	}

	//---------------------------- DELETE ----------------------------------


	public void delete_HitServiceWithDeleteRequest(int id){
		String deleteUrl=baseUrl+"/comments/"+id;
		response=given().when().contentType(ContentType.JSON).delete(deleteUrl);
		System.out.println("patch respons++ "+response.getBody().asString() );
	}

	public void delete_VerifyResultOfOperation(){
		Assert.assertTrue((response.getBody().asString()).equals("{}"));
	}
}

