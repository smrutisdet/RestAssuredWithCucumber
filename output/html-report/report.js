$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("get.feature");
formatter.feature({
  "line": 1,
  "name": "User is  able to hit local service.",
  "description": "",
  "id": "user-is--able-to-hit-local-service.",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Testing all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is able to hit the local api with \u0027\u003cappendString\u003e\u0027 for get",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User gets the correct \u0027\u003cstatusCode\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;",
  "rows": [
    {
      "cells": [
        "appendString",
        "statusCode"
      ],
      "line": 11,
      "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;;1"
    },
    {
      "cells": [
        "posts",
        "200"
      ],
      "line": 12,
      "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;;2"
    },
    {
      "cells": [
        "comments",
        "200"
      ],
      "line": 13,
      "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;;3"
    },
    {
      "cells": [
        "profile",
        "200"
      ],
      "line": 14,
      "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Testing all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is able to hit the local api with \u0027posts\u0027 for get",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User gets the correct \u0027200\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 40
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 2106903300,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.apiProcessesReqeust()"
});
formatter.result({
  "duration": 53300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetOperations.userGetsCorrectResponseCode(int)"
});
formatter.result({
  "duration": 1996900,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.verifyContentType()"
});
formatter.result({
  "duration": 48147800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Testing all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is able to hit the local api with \u0027comments\u0027 for get",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User gets the correct \u0027200\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 40
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 20312600,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.apiProcessesReqeust()"
});
formatter.result({
  "duration": 32100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetOperations.userGetsCorrectResponseCode(int)"
});
formatter.result({
  "duration": 56500,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.verifyContentType()"
});
formatter.result({
  "duration": 35835000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Testing all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;testing-all-get-operations-in-local-service;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is able to hit the local api with \u0027profile\u0027 for get",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User gets the correct \u0027200\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "profile",
      "offset": 40
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 35509900,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.apiProcessesReqeust()"
});
formatter.result({
  "duration": 24000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetOperations.userGetsCorrectResponseCode(int)"
});
formatter.result({
  "duration": 59900,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.verifyContentType()"
});
formatter.result({
  "duration": 37373600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "verify response for  all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is able to hit the local api with \u0027\u003cappendString\u003e\u0027 for get",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User gets the correct \u0027\u003cstatusCode\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "return the JSON response",
  "keyword": "And "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;",
  "rows": [
    {
      "cells": [
        "appendString",
        "statusCode"
      ],
      "line": 23,
      "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;1"
    },
    {
      "cells": [
        "posts",
        "200"
      ],
      "line": 24,
      "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;2"
    },
    {
      "cells": [
        "comments",
        "200"
      ],
      "line": 25,
      "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;3"
    },
    {
      "cells": [
        "profile",
        "200"
      ],
      "line": 26,
      "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "verify response for  all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is able to hit the local api with \u0027posts\u0027 for get",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User gets the correct \u0027200\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "return the JSON response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 40
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 32041700,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.apiProcessesReqeust()"
});
formatter.result({
  "duration": 37600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetOperations.userGetsCorrectResponseCode(int)"
});
formatter.result({
  "duration": 78300,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.verifyContentType()"
});
formatter.result({
  "duration": 38261100,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.returnTheJsonResponse()"
});
formatter.result({
  "duration": 51850000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "verify response for  all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is able to hit the local api with \u0027comments\u0027 for get",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User gets the correct \u0027200\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "return the JSON response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "comments",
      "offset": 40
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 32576100,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.apiProcessesReqeust()"
});
formatter.result({
  "duration": 61400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetOperations.userGetsCorrectResponseCode(int)"
});
formatter.result({
  "duration": 78200,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.verifyContentType()"
});
formatter.result({
  "duration": 16865300,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.returnTheJsonResponse()"
});
formatter.result({
  "duration": 24699300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "verify response for  all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "User is able to hit the local api with \u0027profile\u0027 for get",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "User gets the correct \u0027200\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 20,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "return the JSON response",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "profile",
      "offset": 40
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 45594100,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.apiProcessesReqeust()"
});
formatter.result({
  "duration": 38200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetOperations.userGetsCorrectResponseCode(int)"
});
formatter.result({
  "duration": 59100,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.verifyContentType()"
});
formatter.result({
  "duration": 30645500,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.returnTheJsonResponse()"
});
formatter.result({
  "duration": 31532800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 29,
  "name": "verify response for  all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is able to hit the local api with \u0027\u003cappendString\u003e\u0027 for get",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User gets the correct \u0027\u003cstatusCode\u003e\u0027",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "return the JSON response",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "id is \u0027\u003cid\u003e\u0027",
  "keyword": "And "
});
formatter.examples({
  "line": 36,
  "name": "",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;",
  "rows": [
    {
      "cells": [
        "appendString",
        "statusCode",
        "id"
      ],
      "line": 37,
      "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;1"
    },
    {
      "cells": [
        "posts",
        "200",
        "1"
      ],
      "line": 38,
      "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 38,
  "name": "verify response for  all get operations in local service",
  "description": "",
  "id": "user-is--able-to-hit-local-service.;verify-response-for--all-get-operations-in-local-service;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 28,
      "name": "@get"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "User is able to hit the local api with \u0027posts\u0027 for get",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "api processes the request",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User gets the correct \u0027200\u0027",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "Rsponse is in JSON format",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "return the JSON response",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "id is \u00271\u0027",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "posts",
      "offset": 40
    }
  ],
  "location": "GetOperations.givenIHitTheService(String)"
});
formatter.result({
  "duration": 35733300,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.apiProcessesReqeust()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 23
    }
  ],
  "location": "GetOperations.userGetsCorrectResponseCode(int)"
});
formatter.result({
  "duration": 52900,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.verifyContentType()"
});
formatter.result({
  "duration": 24908500,
  "status": "passed"
});
formatter.match({
  "location": "GetOperations.returnTheJsonResponse()"
});
formatter.result({
  "duration": 30293900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 7
    }
  ],
  "location": "GetOperations.verifyIDIsMatched(int)"
});
formatter.result({
  "duration": 320138700,
  "status": "passed"
});
});