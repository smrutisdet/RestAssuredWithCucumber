#Feature: User wants to perform the other operations like put and delete
#  @putOperation
#  Scenario Outline:Testing put operations in local service
#    Given User creates proper put request with '<id>' and '<body>' and '<postId>'
#    When User hits the service with proper url and put operation with '<id>'
#    Then User verifies correct '<id>' and '<body>'
#
#    Examples:
#      | id | body            | postId |
#      | 3  | modified by put | 3      |
#
#  @deleteOperation
#  Scenario Outline:Testing delete operations in local service
#    Given User accesses the url
#    When User hits the api with proper url and delete operation with '<id>'
#    Then User verifies the operation is successful for '<id>'
#
#    Examples:
#      | id |
#      | 6  |
