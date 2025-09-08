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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $input = file_get_contents("php://input");
    $json_data = json_decode($input);
    $username = $json_data->username;
    $firstname = $json_data->firstname;
    $lastname = $json_data->lastname;
    $password = $json_data->password;
    $connection = getConnection();
    $insertUser = "INSERT INTO user (username, firstname, lastname, password) values ('" . $username . "', '" . $firstname . "', '" . $lastname . "',  '" . $password . "');";
    if ($connection->query($insertUser) === TRUE) {
        echo "Successful";
    } else {
        echo "Failed";
    }
} else if ($_SERVER['REQUEST_METHOD'] === 'GET')  {
    $username = $_GET['username'];
    $connection = getConnection();
    $selectUser = "SELECT password FROM user WHERE username = '" . $username . "';";
    $result = $connection->query($selectUser);
    $rowCount = mysqli_num_rows($result);
    if ($rowCount > 0) {
        $row = $result->fetch_assoc();
        echo $row['password'];
    } else {
        echo "Failed";
    }
}
?>