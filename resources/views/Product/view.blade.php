@extends("layout.normal")
@section('description')
@endsection
@section('author')
@endsection
@section('head')
@endsection
@section('title')
Products
@endsection
@section('content')

  <!-- Page Wrapper -->
  <div id="wrapper">

    @include('includes.sidebar')

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        @include('includes.topbar')
        
       <product-view csrf="{{csrf_token()}}"></product-view>

      </div>
      <!-- End of Main Content -->

     @include('includes.footer')

    </div>
    <!-- End of Content Wrapper -->
  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>
@endsection