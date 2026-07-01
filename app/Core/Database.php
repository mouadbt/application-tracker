<?php

namespace App\Core;

use PDO;
use PDOException;

class Database
{
    private static ?PDO $connection = null;

    public static function getConnection(): PDO
    {
        if (self::$connection === null) {
            $config = self::loadEnv();

            try {
                self::$connection = new PDO(
                    "pgsql:host={$config['DB_HOST']};dbname={$config['DB_NAME']}",
                    $config['DB_USER'],
                    $config['DB_PASS']
                );
                self::$connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
                self::$connection->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
            } catch (PDOException $e) {
                die("Database connection failed: " . $e->getMessage());
            }
        }

        return self::$connection;
    }

    private static function loadEnv(): array
    {
        $path = __DIR__ . '/../../.env';
        $lines = file($path, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        $config = [];

        foreach ($lines as $line) {
            [$key, $value] = explode('=', $line, 2);
            $config[trim($key)] = trim($value);
        }

        return $config;
    }
}