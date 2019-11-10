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

          <div class="row">
            <div class="col"> <h1 class="h3 mb-4 text-gray-800">Categories</h1></div>
            <div><a class="btn btn-success" href="#"><i class="fas fa-plus"></i> Add category</a></div>
          </div>
          <div class="row">
            
            <div class="col-sm-12">
                <div class="card">
                    <div class="card-header"><h6 class="m-0 font-weight-bold">Categories list</h6></div>
                    <div class="card-body">
                      <form class="mb-3">
                        <div class="input-group">
                            <input class="form-control" type="text" placeholder="Staer typing to searhc">
                            <div class="input-group-append">
                              <button class="btn btn-primary"><i class="fas fa-search"></i></button>
                            </div>
                            
                        </div>
                        
                      </form>
                        <div class="table-responsive bg-white">
                            <table class="table table-bordered">
                              <thead>
                                <tr>
                                  <th>Id</th>
                                  <th>Name</th>
                                  <th>Actions</th>
                                </tr>
                                <tr>
                                  <td>1</td>
                                  <td>Sample</td>
                                  <td>
                                    <a href="#" class="btn btn-primary btn-circle" title="Edit"><i class="fas fa-edit"></i></a>
                                    <a href="#" class="btn btn-danger btn-circle" title="Delete"><i class="fas fa-trash"></i></a>
            
                                  </td>
                                </tr>
                              </thead>
                            </table>
                          </div>
                          <nav aria-label="Page navigation example">
                              <ul class="pagination justify-content-center">
                                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                                <li class="page-item"><a class="page-link" href="#">1</a></li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                                <li class="page-item"><a class="page-link" href="#">Next</a></li>
                              </ul>
                            </nav>

                    </div>
                  </div>
           
            </div>
          </div>

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