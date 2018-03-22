Feature: User is  able to hit local service.

@get
Scenario Outline: Testing all get operations in local service
Given User is able to hit the local api with '<appendString>' for get
When api processes the request
Then User gets the correct '<statusCode>'

Examples:
|appendString|statusCode|
|posts|200|
|comments|200|
|profile|200|
