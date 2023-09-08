<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $phone = $_POST["phone"];
    $date = $_POST["date"];

    $to = "radekraisigl@gmail.com"; // Replace with your email address
    $subject = "Book Reservation";
    $message = "Name: $name\nPhone: $phone\nDate: $date";

    if (mail($to, $subject, $message)) {
        echo "Email sent successfully!";
    } else {
        echo "Email could not be sent.";
    }
}
?>