@extends("layout.common")
@section('body')
<body class="bg-gradient-primary">
    <div id="app">
     @yield('content')
    </div>

    <script src="{{ asset(mix('js/manifest.js')) }}"></script>

    <script src="{{ asset(mix('js/vendor.js')) }}"></script>

    <script src="{{ asset(mix('js/app.js')) }}"></script>
</body>
@endsection