function contact(details) {
    console.log("Dear ".concat(details.name, ".I hope you have received our email at ").concat(details.email, ". We will call you at ").concat(details.phone, " shortly,"));
}
var objContact = { name: 'Rohit', email: 'rohit@gmail.com', phone: '9850979777' };
contact(objContact); // string
