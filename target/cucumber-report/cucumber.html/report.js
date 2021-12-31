$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/onlineshoping.feature");
formatter.feature({
  "line": 1,
  "name": "SignUp, Sign In and Purchase Product",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product",
  "keyword": "Feature"
});
formatter.before({
  "duration": 11327039700,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "TC-001 Create New User/SignUp",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-001-create-new-user/signup",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "Navigate to SignUp page",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "create an account with random username",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnHomePage()"
});
formatter.result({
  "duration": 87609400,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.navigateToSignUpPage()"
});
formatter.result({
  "duration": 10529929000,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.createAnAccountWithRandomUsername()"
});
formatter.result({
  "duration": 20560866000,
  "status": "passed"
});
formatter.before({
  "duration": 11168393300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "TC-002 Sign In with newly created user credentials",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-002-sign-in-with-newly-created-user-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "I shall verify the address information in my address section",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 11246098200,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 11874387100,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallVerifyTheAddressInformationInMyAddressSection()"
});
formatter.result({
  "duration": 6595468500,
  "status": "passed"
});
formatter.before({
  "duration": 11430117200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "TC-003 Add product to Online Cart and checkout",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-003-add-product-to-online-cart-and-checkout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I add below product to cart",
  "rows": [
    {
      "cells": [
        "category",
        "subCategory",
        "name",
        "model",
        "quantity"
      ],
      "line": 20
    },
    {
      "cells": [
        "Dresses",
        "CASUAL DRESSES",
        "Printed Dress",
        "demo_3",
        "2"
      ],
      "line": 21
    },
    {
      "cells": [
        "Women",
        "TOPS",
        "Faded Short Sleeve T-shirts",
        "demo_1",
        "3"
      ],
      "line": 22
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I shall validate shopping cart as below",
  "rows": [
    {
      "cells": [
        "name",
        "model",
        "quantity"
      ],
      "line": 24
    },
    {
      "cells": [
        "Printed Dress",
        "SKU : demo_3",
        "2"
      ],
      "line": 25
    },
    {
      "cells": [
        "Faded Short Sleeve T-shirts",
        "SKU : demo_1",
        "3"
      ],
      "line": 26
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "I shall be able to Buy the product",
  "keyword": "Then "
});
formatter.step({
  "line": 28,
  "name": "I shall be able to Buy using cheque payment",
  "keyword": "And "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 12722675100,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 10648817000,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAddBelowProductToCart(DataTable)"
});
formatter.result({
  "duration": 49137520699,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallValidateShoppingCartAsBelow(DataTable)"
});
formatter.result({
  "duration": 328348100,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallBeAbleToBuyTheProduct()"
});
formatter.result({
  "duration": 44200125200,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iShallBeAbleToBuyUsingChequePayment()"
});
formatter.result({
  "duration": 29684600,
  "status": "passed"
});
formatter.before({
  "duration": 11282464101,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "TC-004 Contact customer service for the previous successful order",
  "description": "",
  "id": "signup,-sign-in-and-purchase-product;tc-004-contact-customer-service-for-the-previous-successful-order",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 30,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I am on the Sign In Page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Login using newly create credentials",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I am on the contact page",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I send refund request to customer care for previous order",
  "keyword": "Then "
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheSignInPage()"
});
formatter.result({
  "duration": 12381383700,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.loginUsingNewlyCreateCredentials()"
});
formatter.result({
  "duration": 11807430000,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iAmOnTheContactPage()"
});
formatter.result({
  "duration": 7565868999,
  "status": "passed"
});
formatter.match({
  "location": "OnlineShoppingTestSteps.iSendRefundRequestToCustomerCareForPreviousOrder()"
});
formatter.result({
  "duration": 7757635801,
  "status": "passed"
});
});