$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com.adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "user Launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The Username In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And Its Navigate to Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 6608434900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Username_In_Username_Field()"
});
formatter.result({
  "duration": 259120100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Password_In_Password_Field()"
});
formatter.result({
  "duration": 88630500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Login_Button_And_Its_Navigate_to_Search_Hotel_Page()"
});
formatter.result({
  "duration": 638609200,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Search The Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-search-the-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "user Select Location In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Select Hotel In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user Select RoomType In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "user Select NumberOfRooms In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Select The AdultsPerRooms In Test Data",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "user Click The Search Button And Its Navigate To Selet Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Select_Location_In_Test_Data()"
});
formatter.result({
  "duration": 220693000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_Hotel_In_Test_Data()"
});
formatter.result({
  "duration": 195487500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_RoomType_In_Test_Data()"
});
formatter.result({
  "duration": 278975200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_NumberOfRooms_In_Test_Data()"
});
formatter.result({
  "duration": 250379100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_AdultsPerRooms_In_Test_Data()"
});
formatter.result({
  "duration": 3250729100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Search_Button_And_Its_Navigate_To_Selet_Hotel_Page()"
});
formatter.result({
  "duration": 3301911800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User Select The Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "user Select The Hotel For The All Details Checking To Select Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user Clicck The Continue Button And Its Navigate To Book A Hotel page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Hotel_For_The_All_Details_Checking_To_Select_Hotel()"
});
formatter.result({
  "duration": 104852400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Clicck_The_Continue_Button_And_Its_Navigate_To_Book_A_Hotel_page()"
});
formatter.result({
  "duration": 666018000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "User Book A Hotel In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-a-hotel-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "user Enter The FirstName In FirstName Field",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "user Enter The LastName In LastName Field",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "user Enter The BillingAddress In BillingAddress Field",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "user Enter The CreditCardNo In CreditCardNo Field",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Enter The CreditCardType In CreditCardType Field",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user Enter The ExpiryDate To SelectMonth In SelectMonth Field",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Enter The ExpiryDate To SelectYear In SelectYear Field",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user Entet The CVVNumber In CVVNumber Field",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Click The BookNow Button And Its Navigate To Booking Confiromation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_FirstName_In_FirstName_Field()"
});
formatter.result({
  "duration": 84454600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_LastName_In_LastName_Field()"
});
formatter.result({
  "duration": 73411200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_BillingAddress_In_BillingAddress_Field()"
});
formatter.result({
  "duration": 138645000,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_CreditCardNo_In_CreditCardNo_Field()"
});
formatter.result({
  "duration": 149818400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_CreditCardType_In_CreditCardType_Field()"
});
formatter.result({
  "duration": 153299600,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_ExpiryDate_To_SelectMonth_In_SelectMonth_Field()"
});
formatter.result({
  "duration": 146311100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_ExpiryDate_To_SelectYear_In_SelectYear_Field()"
});
formatter.result({
  "duration": 4422152700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Entet_The_CVVNumber_In_CVVNumber_Field()"
});
formatter.result({
  "duration": 75145700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_BookNow_Button_And_Its_Navigate_To_Booking_Confiromation_Page()"
});
formatter.result({
  "duration": 5105961500,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "User Booking Confirmation In Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-booking-confirmation-in-web-application",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 33,
  "name": "user Click To Logout Button And Its To Navigate To Hotel Login Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Click_To_Logout_Button_And_Its_To_Navigate_To_Hotel_Login_Page()"
});
formatter.result({
  "duration": 3032396100,
  "status": "passed"
});
});