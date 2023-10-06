<?php
//get data from form  

$name = $_POST['name'];
$phone= $_POST['phone'];
$Address1= $_POST['Address1'];
$Address2= $_POST['Address2'];
$Address3= $_POST['Address3'];
$payment= $_POST['payment'];
$to = "mauryakuldeepkamlesh.com";
$subject = "Mail From website";
$txt ="Name = ". $name . "\r\n  Phone = " . $phone . "\r\n Address1 =" . $Address1 ."\r\n Address2 =" . $Address2 ."\r\n Address3 =" . $Address3 .;
$headers = "From: noreply@yoursite.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>
