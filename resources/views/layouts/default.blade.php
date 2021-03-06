<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <title>@yield('title', 'ACGoing') | ACGoing - 一个随意但不随便的小酒馆</title>
        <link rel="stylesheet" href="{{ mix('/css/app.css') }}">
        @yield('req_css')
        <script src="{{ mix('/js/app.js') }}" charset="utf-8"></script>
        @yield('req_js')
    </head>
    <body>
        @include('layouts._header')
        <div class="container site-content">
            @yield('content')
        </div>
        @include('layouts._footer')
    </body>
</html>
