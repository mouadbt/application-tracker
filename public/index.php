<?php
require_once __DIR__ . '/../vendor/autoload.php';

use App\Core\Database;

$db = Database::getConnection();
echo "Database connected!";
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Job Tracker</title>
    <link rel="stylesheet" href="/assets/css/output.css">
</head>

<body class="bg-black text-white">
    <h1 class="bg-green-800">Test</h1>
</body>

</html>