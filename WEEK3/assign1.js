var num = 5;
var fname;
var lname;
var userid;
var n1="Sarrah";
var n2="Dhruv";
var n3="Himani";
var n4="Isha";
userid=prompt("Please enter your Group number");
console.log(userid);
if(userid===num)
{
    fname=prompt("Please enter your Name");
    console.log(fname);
    switch(fname.toLowerCase())
    {
        case n1:
            alert (n1 + " Gandhi");
            break;

        case n2:
            alert (n2 + " Shah");
            break;

        case n3:
            alert (n3 + " Bansal");
            break;

        case n4:
            alert (n4 + " Shah");
            break;

        default: 
        alert("Access denied");
        break;
    }
}
else
{
    alert("Access denied");
}


