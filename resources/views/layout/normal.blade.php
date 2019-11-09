@extends('layout.common')
@section('body')
<body id="page-top">
    @yield('content')
    

    <script src="{{ asset(mix('js/manifest.js')) }}"></script>

    <script src="{{ asset(mix('js/vendor.js')) }}"></script>

    <script src="{{ asset(mix('js/app.js')) }}"></script>
</body>
@endsection