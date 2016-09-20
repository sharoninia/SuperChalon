<?php 

class Country{
	public $id ;
	public $name ;

	public function __construct($row){
		$this->id = $row['ID_COUNTRY'];
		$this->name = utf8_encode($row['NAME_COUNTRY']);
	}

}

class State{
	public $id ;
	public $name ;
	public $idCountry;

	public function __construct($row){
		$this->id = $row['ID_STATE'];
		$this->name = utf8_encode($row['NAME_STATE']);
		$this->idCountry = utf8_encode($row['ID_COUNTRY']);
	}
}

class City{
	public $id ;
	public $name ;
	public $idState;

	public function __construct($row){
		$this->id = $row['ID_CITY'];
		$this->name = utf8_encode($row['NAME_CITY']);
		$this->idState = utf8_encode($row['ID_STATE']);
	}
}

class Specialty{
	public $id ;
	public $name ;

	public function __construct($row){
		$this->id = $row['ID_SPECIALTY'];
		$this->name = utf8_encode($row['NAME_SPECIALTY']);
	}
}


function getAllSpecialties{
	private $con ;
	public function __construct($con)
	{
		$this->con = $con;
	}

	$query = "SELECT * FROM Specialty";
	$resultArray = array();
	try {
		$result = mysqli_query($this->con,$query);
		while($row = mysqli_fetch_array($result)) {
			array_push($resultArray, new Specialty($row));
		}
	} catch (Exception $e) {
		return false;
	}
	return resultArray;
}

function getAllCountries{
	private $con ;
	public function __construct($con)
	{
		$this->con = $con;
	}

	$query = "SELECT * FROM Country";
	$resultArray = array();
	try {
		$result = mysqli_query($this->con,$query);
		while($row = mysqli_fetch_array($result)) {
			array_push($resultArray, new Specialty($row));
		}
	} catch (Exception $e) {
		return false;
	}
	return resultArray;
}


function getAllStates{
	private $con ;
	public function __construct($con,$idCountry)
	{
		$this->con = $con;
	}

	$query = "SELECT * FROM States WHERE id_country = '$idCountry'";
	$resultArray = array();
	try {
		$result = mysqli_query($this->con,$query);
		while($row = mysqli_fetch_array($result)) {
			array_push($resultArray, new Specialty($row));
		}
	} catch (Exception $e) {
		return false;
	}
	return resultArray;
}


function getAllCities{
	private $con ;
	public function __construct($con,$idState)
	{
		$this->con = $con;
	}

	$query = "SELECT * FROM City WHERE id_state = '$idState'";
	$resultArray = array();
	try {
		$result = mysqli_query($this->con,$query);
		while($row = mysqli_fetch_array($result)) {
			array_push($resultArray, new Specialty($row));
		}
	} catch (Exception $e) {
		return false;
	}
	return resultArray;
}



?>