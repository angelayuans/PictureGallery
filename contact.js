function Validation()
{
var name1 = document.registration.fname;
var name2 = document.registration.lname;
var addy = document.registration.address;
var mnum = document.registration.Mnumber;
var mailat = document.registration.email;

 if(fname_validation(name1))
{
if(ValidateEmail(mailat))
{
if(validsex(umsex,ufsex))
{
}
} 
}
return false;
} 

function fname_validation(name1)
{
var name1_len = name1.value.length;
if (name1_len == 0 )
{
alert("Please enter your first name");
name1.focus();
return false;
}
return true;
}
function lname_validation(name2)
{
var name2_len = name2.value.length;
if (name2_len == 0 )
{
alert("Please enter your last name");
name2.focus();
return false;
}
return true;
}
function alphanumeric(addy)
{ 
var letters = /^[0-9a-zA-Z]+$/;
if(addy.value.match(letters))
{
return true;
}
else
{
alert('Please enter the adress in format Countrty-City-Streetnumber without spaces');
addy.focus();
return false;
}
}
function nums(mnum)
{ 
var digits = /^[0-9]+$/;
if(mnum.value.match(digits))
{
return true;
}
else
{
alert('Please enter your Mobile number');
mnum.focus();
return false;
}
}
function ValidateEmail(mailat)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(mailat.value.match(mailformat))
{
return true;
}
else
{
alert("Please enter a valid email address");
return false;
}


}