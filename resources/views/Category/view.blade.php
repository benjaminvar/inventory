@extends("layout.normal")
@section('description')
@endsection
@section('author')
@endsection
@section('head')
@endsection
@section('title')
Categories
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
        
        <!-- Begin Page Content -->
        <div class="container-fluid">

          <!-- Page Heading -->
          <h1 class="h3 mb-4 text-gray-800">Blank Page</h1>

        </div>
        <!-- /.container-fluid -->

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