<?php
$name=$_REQUEST["name"];
$sal=$_REQUEST["sal"];
$num=$_REQUEST["num"];
$txt=$_REQUEST["txt"];
$conn= mysqli_connect("localhost","root","","test");
if(!$conn){
    die("COnnection Failed : ".mysql_connect_error());
}
$sql="INSERT INTO test2 (name,sal,num,txt) VALUES ('$name',$sal,$num,$txt)";
if(mysqli_query($conn,$sql)){
    echo"<h1>Row inserted <h1>";
}
else{
    echo"<h1>How can you get this wrong<h1>";
}

?>