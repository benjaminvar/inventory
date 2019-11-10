@extends('layout.common')
@section('body')
<body id="page-top">
    <div id="app">
     @yield('content')
    </div>
    <script src="{{ asset(mix('js/manifest.js')) }}"></script>

    <script src="{{ asset(mix('js/vendor.js')) }}"></script>

    <script src="{{ asset(mix('js/app.js')) }}"></script>
</body>
@endsection