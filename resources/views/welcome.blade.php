<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="icon" type="image/png" href="{{ asset('img/logo.ico')}}" />
        <title>Wat dis is</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('css/app.css') }}">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/prism-okaidia.min.css') }}">
        <style type="text/css">
            ul{ list-style-type: none }
            .slide-fade-enter-active { transition: all .3s ease }
            .slide-fade-leave-active { transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0) }
            .slide-fade-enter, .slide-fade-leave-to{
                transform: translateX(10px);
                opacity: 0
            }
            .spin{
                width: 300px;
                height: 300px;
                animation-name: spinner;
                animation-duration: 5000ms;
                animation-iteration-count: infinite;
                animation-timing-function: linear
            }
            @keyframes spinner {
                from { transform: rotate(0deg) }
                to { transform:rotate(360deg) }
            }
            .bg-custom-dark{ background-color: #272822 }
        </style>
    </head>
    <body>
        <div id="app"></div>
        <script type="text/javascript" src="{{ asset('js/prism.js') }}"></script>
        <script type="text/javascript" src="{{ asset('js/app.js') }}"></script>
    </body>
</html>