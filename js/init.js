// Mock up data
var contacts = [{
    "Id": 1,
    "Name": "Turner",
    "Email": "tchantrell0@bandcamp.com",
    "Phone": "414-786-8374",
    "DOB": "04/13/2018"
}, {
    "Id": 2,
    "Name": "Christoffer",
    "Email": "cgollop1@reuters.com",
    "Phone": "518-825-1029",
    "DOB": "08/08/2017"
}, {
    "Id": 3,
    "Name": "Cristal",
    "Email": "cgwyneth2@ameblo.jp",
    "Phone": "692-440-0082",
    "DOB": "01/17/2018"
}, {
    "Id": 4,
    "Name": "Deirdre",
    "Email": "droper3@w3.org",
    "Phone": "810-414-1602",
    "DOB": "11/29/2017"
}, {
    "Id": 5,
    "Name": "Dorella",
    "Email": "dsterry4@typepad.com",
    "Phone": "452-627-6876",
    "DOB": "03/03/2018"
}, {
    "Id": 6,
    "Name": "Flynn",
    "Email": "fbread5@latimes.com",
    "Phone": "824-566-9648",
    "DOB": "01/30/2018"
}, {
    "Id": 7,
    "Name": "Barnebas",
    "Email": "bpeschka6@com.com",
    "Phone": "897-896-5479",
    "DOB": "04/15/2018"
}, {
    "Id": 8,
    "Name": "Terrell",
    "Email": "tcoupman7@wiley.com",
    "Phone": "530-274-3809",
    "DOB": "11/29/2017"
}, {
    "Id": 9,
    "Name": "Georg",
    "Email": "glaherty8@imageshack.us",
    "Phone": "906-373-3305",
    "DOB": "04/30/2018"
}, {
    "Id": 10,
    "Name": "Phebe",
    "Email": "pselbach9@blog.com",
    "Phone": "776-761-6917",
    "DOB": "04/28/2018"
}];

if (localStorage.getItem("contacts") === null) 
{    
    localStorage.setItem("contacts", JSON.stringify(contacts));
}

contacts.forEach(function(element, index){
    crudjs.contacts.fnRender(element);
});