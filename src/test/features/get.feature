Feature: User is  able to hit local service.

  @get
  Scenario Outline: Testing all get operations in local service
    Given User is able to hit the local api with '<appendString>' for get
    When api processes the request
    Then User gets the correct '<statusCode>'
    And Rsponse is in JSON format

    Examples:
      | appendString | statusCode |
      | posts        | 200        |
      | comments     | 200        |
      | profile      | 200        |
  @get
  Scenario Outline: verify response for  all get operations in local service
    Given User is able to hit the local api with '<appendString>' for get
    When api processes the request
    Then User gets the correct '<statusCode>'
    And Rsponse is in JSON format
    And return the JSON response
    Examples:
      | appendString | statusCode |
      | posts        | 200        |
      | comments     | 200        |
      | profile      | 200        |

  @get
  Scenario Outline: verify response for  all get operations in local service
    Given User is able to hit the local api with '<appendString>' for get
    When api processes the request
    Then User gets the correct '<statusCode>'
    And Rsponse is in JSON format
    And return the JSON response
    #And id is '<id>'
    Examples:
      | appendString | statusCode |id|
     | posts      | 200        |1 |