Feature: User wants to perform the other operations like put and delete

  @putOperation
  Scenario Outline: 
    Given User creates proper put request with '<id>' and '<body>' and '<postId>'
    When User hits the service with proper url and put operation with '<id>'
    Then User verifies correct '<id>' and '<body>'

    Examples: 
      | id | body            | postId |
      |  4 | modified by put |      4 |

  @deleteOperation
  Scenario Outline: 
    #Given User creates proper delete request with '<id>'
    When User hits the api with proper url and delete operation with '<id>'
    Then User verifies the operation is successful for '<id>'

    Examples: 
      | id |
      |  1 |
