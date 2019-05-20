<!-- index.vue -->
<template>
  <div class="wrapper">
    <header class="main-header">

      <!-- Logo -->
      <a href="index.html" class="logo">
        <!-- mini logo for sidebar mini 50x50 pixels -->
        <span class="logo-mini">flink</span>
        <!-- logo for regular state and mobile devices -->
        <span class="logo-lg"><b>亿级全端用户画像系统</b></span>
      </a>

      <!-- Header Navbar: style can be found in header.less -->
      <nav class="navbar navbar-static-top">
        <!-- Sidebar toggle button-->
        <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
          <span class="sr-only">Toggle navigation</span>
        </a>
        <!-- Navbar Right Menu -->
        <div class="navbar-custom-menu">
          <ul class="nav navbar-nav">
            <li>
              <a href="#">
                <span class="hidden-xs"></span>
              </a>
            </li>
            <!-- Tasks: style can be found in dropdown.less -->
            <!-- User Account: style can be found in dropdown.less -->
            <li class="dropdown user user-menu">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                <img src="./dist/img/photo4.jpg" class="user-image" alt="User Image">
                <span class="hidden-xs">JiangHy</span>
              </a>
              <ul class="dropdown-menu">
                <!-- User image -->
                <li class="user-header">
                  <img src="./dist/img/photo4.jpg" class="img-circle" alt="User Image">

                  <p>
                    JiangHy - China
                    <small>注册日期：2019年5月14日</small>
                  </p>
                </li>
                <!-- Menu Body -->
                <!-- <li class="user-body"> -->
                  <!-- <div class="row"> -->
                    <!-- <div class="col-xs-4 text-center">
                      <a href="#">Followers</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Sales</a>
                    </div>
                    <div class="col-xs-4 text-center">
                      <a href="#">Friends</a>
                    </div> -->
                    <!-- <div class="col-xs-12 text-center">
                      可用调休时长：10小时
                    </div> -->
                  <!-- </div> -->
                  <!-- &lt;!&ndash; /.row &ndash;&gt; -->
                <!-- </li> -->
                <!-- Menu Footer-->
                <li class="user-footer">
                  <div class="pull-left">
                    <a href="#" class="btn btn-default btn-flat">个人资料</a>
                  </div>
                  <div class="pull-right">
                    <a href="#" class="btn btn-default btn-flat">退出登录</a>
                  </div>
                </li>
              </ul>
            </li>
            <!-- Control Sidebar Toggle Button -->
            <!-- <li>
              <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
            </li> -->
          </ul>
        </div>

      </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
      <!-- sidebar: style can be found in sidebar.less -->
      <section class="sidebar">
        <!-- Sidebar user panel -->
        <div class="user-panel">
          <div class="pull-left image">
            <img src="./dist/img/photo4.jpg" class="img-circle" alt="User Image">
          </div>
          <div class="pull-left info">
            <p>JiangHy</p>
            <a href="#"><i class="fa fa-circle text-success"></i>在线</a>
          </div>
        </div>
        <!-- search form -->
        <!--<form action="#" method="get" class="sidebar-form">-->
          <!--<div class="input-group">-->
            <!--<input type="text" name="q" class="form-control" placeholder="Search...">-->
              <!--<span class="input-group-btn">-->
                <!--<button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>-->
                <!--</button>-->
              <!--</span>-->
          <!--</div>-->
        <!--</form>-->
        <!-- /.search form -->
        <!-- sidebar menu: : style can be found in sidebar.less -->
        <ul class="sidebar-menu">
          <li class="header">MAIN NAVIGATION</li>
          <li class="active">
            <router-link :to="{ path:'/' }">
              <i class="glyphicon glyphicon-home"></i> <span>主页</span>
            </router-link>
            <!--<ul class="treeview-menu">-->
              <!--<li><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>-->
              <!--<li class="active"><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>-->
            <!--</ul>-->
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i><span>基础属性</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <!-- <small class="label pull-right bg-green">new</small> -->
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="baseyear"><i class="fa fa-circle-o"></i>年代群体</router-link></li>
              <li><router-link to="carrier"><i class="fa fa-circle-o"></i>手机运营商</router-link></li>
              <li><router-link to="email"><i class="fa fa-circle-o"></i>邮件运营商</router-link></li>
              <!--<li><a href="pages/layout/boxed.html"><i class="fa fa-circle-o"></i> Boxed</a></li>-->
              <!--<li><a href="pages/layout/fixed.html"><i class="fa fa-circle-o"></i> Fixed</a></li>-->
              <!--<li><a href="pages/layout/collapsed-sidebar.html"><i class="fa fa-circle-o"></i> Collapsed Sidebar</a></li>-->
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i><span>行为特征</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <!-- <small class="label pull-right bg-green">new</small> -->
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="chaoManAndWomen"><i class="fa fa-circle-o"></i>潮男潮女</router-link></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i><span>兴趣爱好</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <!-- <small class="label pull-right bg-green">new</small> -->
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="brandlike"><i class="fa fa-circle-o"></i>用户品牌偏好</router-link></li>
              <li><router-link to="usetype"><i class="fa fa-circle-o"></i>用户终端偏好</router-link></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i><span>购买能力</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <!-- <small class="label pull-right bg-green">new</small> -->
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="consumptionlevel"><i class="fa fa-circle-o"></i>消费水平</router-link></li>
            </ul>
          </li>
          <li class="treeview">
            <a href="#">
              <i class="fa fa-pie-chart"></i><span>用户标签信息</span>
              <span class="pull-right-container">
                <i class="fa fa-angle-left pull-right"></i>
                <!-- <small class="label pull-right bg-green">new</small> -->
              </span>
            </a>
            <ul class="treeview-menu">
              <li><router-link to="label"><i class="fa fa-circle-o"></i>标签详情</router-link></li>
            </ul>
          </li>
          <!-- <li class="header">LABELS</li>
          <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
          <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
          <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li> -->
        </ul>
      </section>
      <!-- /.sidebar -->
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>
    <!-- /.content-wrapper -->


    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Create the tabs -->
      <ul class="nav nav-tabs nav-justified control-sidebar-tabs">
        <li><a href="#control-sidebar-home-tab" data-toggle="tab"><i class="fa fa-home"></i></a></li>
        <li><a href="#control-sidebar-settings-tab" data-toggle="tab"><i class="fa fa-gears"></i></a></li>
      </ul>
      <!-- Tab panes -->
      <div class="tab-content">
        <!-- Home tab content -->
        <div class="tab-pane" id="control-sidebar-home-tab">
          <h3 class="control-sidebar-heading">Recent Activity</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-birthday-cake bg-red"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Langdon's Birthday</h4>

                  <p>Will be 23 on April 24th</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-user bg-yellow"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Frodo Updated His Profile</h4>

                  <p>New phone +1(800)555-1234</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-envelope-o bg-light-blue"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Nora Joined Mailing List</h4>

                  <p>nora@example.com</p>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <i class="menu-icon fa fa-file-code-o bg-green"></i>

                <div class="menu-info">
                  <h4 class="control-sidebar-subheading">Cron Job 254 Executed</h4>

                  <p>Execution time 5 seconds</p>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

          <h3 class="control-sidebar-heading">Tasks Progress</h3>
          <ul class="control-sidebar-menu">
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Custom Template Design
                  <span class="label label-danger pull-right">70%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-danger" style="width: 70%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Update Resume
                  <span class="label label-success pull-right">95%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-success" style="width: 95%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Laravel Integration
                  <span class="label label-warning pull-right">50%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-warning" style="width: 50%"></div>
                </div>
              </a>
            </li>
            <li>
              <a href="javascript:void(0)">
                <h4 class="control-sidebar-subheading">
                  Back End Framework
                  <span class="label label-primary pull-right">68%</span>
                </h4>

                <div class="progress progress-xxs">
                  <div class="progress-bar progress-bar-primary" style="width: 68%"></div>
                </div>
              </a>
            </li>
          </ul>
          <!-- /.control-sidebar-menu -->

        </div>
        <!-- /.tab-pane -->

        <!-- Settings tab content -->
        <div class="tab-pane" id="control-sidebar-settings-tab">
          <form method="post">
            <h3 class="control-sidebar-heading">General Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Report panel usage
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Some information about this general settings option
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Allow mail redirect
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Other sets of options are available
              </p>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Expose author name in posts
                <input type="checkbox" class="pull-right" checked>
              </label>

              <p>
                Allow the user to show his name in blog posts
              </p>
            </div>
            <!-- /.form-group -->

            <h3 class="control-sidebar-heading">Chat Settings</h3>

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Show me as online
                <input type="checkbox" class="pull-right" checked>
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Turn off notifications
                <input type="checkbox" class="pull-right">
              </label>
            </div>
            <!-- /.form-group -->

            <div class="form-group">
              <label class="control-sidebar-subheading">
                Delete chat history
                <a href="javascript:void(0)" class="text-red pull-right"><i class="fa fa-trash-o"></i></a>
              </label>
            </div>
            <!-- /.form-group -->
          </form>
        </div>
        <!-- /.tab-pane -->
      </div>
    </aside>
    <!-- /.control-sidebar -->
    <!-- Add the sidebar's background. This div must be placed
         immediately after the control sidebar -->
    <div class="control-sidebar-bg"></div>
  </div>
</template>
<script>
  export default {
  data() {
    return {

    }
  },
  components: {

  },
  mounted(){
    var sUserAgent = navigator.userAgent.toLowerCase();
    var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
    var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
    var bIsMidp = sUserAgent.match(/midp/i) == "midp";
    var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
    var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
    var bIsAndroid = sUserAgent.match(/android/i) == "android";
    var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
    var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
    if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
      alert(1);
        $("a[href!='#']").attr("data-toggle","offcanvas");
    }else{
      // alert(2);
    }
  },
  methods: {}
}
</script>
