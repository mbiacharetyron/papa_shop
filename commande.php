<?php
$FirstName = $_POST["first_name"];
$LastName = $_POST["last_name"];
$email = $_POST["email"];
$TableType = $_POST["table_type"];
$GuestNumber= $_POST["guest_number"];
$Placement= $_POST["Placement"];
$Date= $_POST["Date"];
$Time= $_POST["Time"];
$Note= $_POST["Note"];



// database connection 
$conn = new mysqli('localhost','root','','shop');
if($conn -> connect_errno){
    die(" connection failed : ".$conn->connect_error);
}
else{
    $stmt =$conn->prepare("insert into commands(FirstName, LastName, email, TableType, GuestNumber, Placement, Date, Time, Note) 
    values( ?, ?, ?, ?, ?, ?, ?, ?,?)");
    $stmt->bind_param("sssssssss" ,$FirstName,$LastName,$email,$TableType,$GuestNumber,$Placement,$Date,$Time,$Note);
$stmt->execute();
echo "registration successful";
$stmt->close();
$conn->close();
}

?>


