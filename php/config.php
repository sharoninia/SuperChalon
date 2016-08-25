<?php
ini_set('display_errors','On'); ini_set('error_reporting','E_ALL | E_STRICT'); error_reporting(E_ALL);

$db_name = 'root';
$db_user = 'superchalon';
$db_pass = '12345';
$db_host = 'localhost';

$con = new mysqli($db_host,$db_user,$db_pass,$db_name);

if ($con->connect_error) {
  trigger_error('Error de conexion a la base: '  . mysqli_connect_error(), E_USER_ERROR);
}
?>