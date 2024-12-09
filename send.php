<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Отримання даних з POST
    $data = [
        "source_id" => 1, // до якого джерела в KeyCRM додавати замовлення
        "buyer" => [
            "full_name" => $_POST['your-name'], // ПІБ покупця
            "phone" => $_POST['your-phone'] // номер телефону покупця
        ],
        "shipping" => [
            "shipping_address_city"=> $_POST['address_city'], // місто покупця
        ], 
    ];

    // Упаковуємо дані
    $data_string = json_encode($data);

    // Ваш унікальний API ключ KeyCRM
    $token = 'OGM3ZTZlZDUzZmFmOWU3MzhhYjM3MDc4YmY1YmM4YWEyMmFhNjEyNA';

    // Відправка на сервер
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://openapi.keycrm.app/v1/order");
    curl_setopt($ch, CURLOPT_POST, 1);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data_string);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HTTPHEADER, array(
        "Content-type: application/json",
        "Accept: application/json",
        "Cache-Control: no-cache",
        "Pragma: no-cache",
        'Authorization: Bearer ' . $token
    ));

    $result = curl_exec($ch);
    curl_close($ch);


}
?>