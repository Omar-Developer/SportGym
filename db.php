
<?php
function OpenCon()
 {
$host ="";

$username ="";

$pass ="";

$dbname ="";

$db = new mysqli($host, $username, $pass,$dbname) or die("Connect failed: %s\n". $db -> error);

return $db;
 }
 
function CloseCon($db)
 {
 $db -> close();
 }
 
 