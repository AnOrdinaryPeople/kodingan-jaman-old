# Aplikasi yang Dibutuhkan
1. [composer](https://getcomposer.org/download/)
1. [git](https://git-scm.com/downloads)
1. [node.js](https://nodejs.org/en/download/current/) dengan versi terbaru
1. [xampp](https://www.apachefriends.org/download.html) dengan versi PHP >= 7.1.3

# Cara Install
1. buka `xampp\htdocs\`
1. klik kanan lalu pilih `Git Bash Here`
1. ketik `git clone https://github.com/AnOrdinaryPeople/kodingan-jaman-old.git`
1. setelah selesai download ketik `cd kodingan-jaman-old`
1. ketik `composer install`
1. setelah selesai instal composer ketik `npm install`
1. karena `npm install` membutuhkan waktu yang lama buka folder `kodingan-jaman-old` cari `.env.example` ganti namanya ke `.env`
1. ketik `php artisan key:generate`
1. ketik `php artisan serve`
1. buka browser lalu ketik `localhost:8000` atau `127.0.0.1:8000`
