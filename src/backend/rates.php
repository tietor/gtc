<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=utf-8");

function getConnection()
{
    $servername = 'localhost';
    $username = 'gtc';
    $password = 'test123';
    $dbname = 'gtc';

    $conn = new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    return $conn;
}

function getIdOfUsername($username)
{
    $connection = getConnection();
    $selectUser = "SELECT id FROM user WHERE username = '" . $username . "';";
    $result = $connection->query($selectUser);
    $row = $result->fetch_assoc();
    return $row['id'];
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $connection = getConnection();
    $getCalculationsOfUser = "select username, date, from_currency, to_currency, exchange_rate, from_value, to_value from currency_conversion inner join user on user.id = currency_conversion.user_fk;";
    $result = $connection->query($getCalculationsOfUser);
    $output = $result->fetch_all(MYSQLI_ASSOC);
    echo json_encode($output);
} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents("php://input");
    $json_data = json_decode($input);
    $date = $json_data->date;
    $username = $json_data->username;
	$date = $json_data->date;
    $user_fk = getIdOfUsername($username);
    $fromCurrency = $json_data->fromCurrency;
    $toCurrency = $json_data->toCurrency;
    $exchangeRate = $json_data->rate;
    $fromValue = $json_data->fromValue;
    $calculationResult = $json_data->result;
    $connection = getConnection();
	$insertMeasurement = "insert into currency_conversion (date, from_currency, to_currency, exchange_rate, from_value, to_value, user_fk) 
	values (STR_TO_DATE('" . $date . "' , '%d.%m.%Y'),'" . $fromCurrency . "', '" . $toCurrency . "', " . $exchangeRate . ", ". $fromValue . ", " . $calculationResult . ", " . $user_fk . ");";
    if ($connection->query($insertMeasurement) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $connection->error;
    }
}
?>

