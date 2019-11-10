 <!-- Sidebar -->
 <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

    <!-- Sidebar - Brand -->
    <a class="sidebar-brand d-flex align-items-center justify-content-center" href="{{ url('/') }}">
    <div class="sidebar-brand-text mx-3">{{ config('app.name') }}</div>
    </a>

    <!-- Divider -->
    <hr class="sidebar-divider my-0">

    <!-- Nav Item - Dashboard -->
    <li class="nav-item">
      <a class="nav-link" href="{{ url('/') }}">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Overview</span></a>
    </li>

    <!-- Divider -->
    <hr class="sidebar-divider">

    <li class="nav-item">
      <a href="{{ url('/customers') }}" class="nav-link">Customers</a>
    </li>
    <hr class="sidebar-divider">
    <li class="nav-item">
      <a href="{{ url('/categories') }}" class="nav-link">Categories</a>
    </li>
    <hr class="sidebar-divider">
    
    <li class="nav-item">
      <a href="{{ url('/providers') }}" class="nav-link">Providers</a>
      </li>
      <hr class="sidebar-divider">
    <li class="nav-item">
    <a href="{{ url('/products') }}" class="nav-link">Products</a>
    </li>
    <hr class="sidebar-divider">
    <li class="nav-item">
      <a href="{{ url('/billing') }}" class="nav-link">Billing</a>
    </li>
    <hr class="sidebar-divider">
    <li class="nav-item">
      <a href="{{ url('/billing') }}" class="nav-link">Sales</a>
    </li>
    <hr class="sidebar-divider">
    <li class="nav-item">
      <a href="{{ url('/users') }}" class="nav-link">Users</a>
    </li>
    <hr class="sidebar-divider d-none d-md-block">

    <!-- Sidebar Toggler (Sidebar) -->
    <div class="text-center d-none d-md-inline">
      <button class="rounded-circle border-0" id="sidebarToggle"></button>
    </div>

  </ul>
  <!-- End of Sidebar -->