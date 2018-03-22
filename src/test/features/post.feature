Feature: User wants to test local post features

@post
Scenario Outline: Testing post request for posts
Given User hits the local api with '<appendString>' for post
When Api produces correct request for post with '<id>' and '<title>' and '<author>'
Then User gets proper response with '<id>' and '<title>' and '<author>'
Examples:
|appendString|id|title|author|
|posts|40|Fourty post|Author40|


