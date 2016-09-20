<?php
session_start();
header("Content-Type:application/json; charset=utf-8");
header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
ini_set('display_errors','On'); ini_set('error_reporting','E_ALL | E_STRICT'); error_reporting(E_ALL);
require '../config.php';
include('../combos.php');

$idState = $_POST['idState'];

echo $cities->getAllCities($con,$idState);

mysqli_close($con);
?>