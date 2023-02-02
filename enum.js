var Gender;
(function (Gender) {
    Gender[Gender["Other"] = 2] = "Other";
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female"; // 1
})(Gender || (Gender = {}));
console.log(Gender.Male);
console.log(Gender.Female);
console.log(Gender[0]);
console.log(Gender[1]);
var UserLogin;
(function (UserLogin) {
    UserLogin[UserLogin["Email"] = 0] = "Email";
    UserLogin[UserLogin["Social"] = 1] = "Social";
})(UserLogin || (UserLogin = {}));
