function compute()
{
    var principal = document.getElementById("principal").value;
    var rate=document.getElementById("rate").value;
    var years= document.getElementById("years").value;
    var interest=principal*years*rate/100;
    var year=new Date().getFullYear()+parseInt(years);
document.getElementById("result").innerHTML="If you Deposit"+principal+
",\<br\>At an Interest rate of "+rate+"%\<br\>You will receive an amount of "+amount+",\<br\>in the Year "+year+
"\<br\>"
}
function updateRate(){
    var rateval=document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

