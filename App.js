import React from 'react';
import './App.css';

class Home extends React.Component {

    render() {

    return (

      <div className="maincontainer ">
        <section>
          <div class="container   ">

            <header class="text-center mb-1   "> </header>
              
           

            <div class="row text-center ">

              <div class="col-lg-4  ">
                <div class="bg-white p-5 rounded-lg ">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4 text-muted">FREE</h1>
                  <h1 class=" font-weight-bold">$0<span class="text-small font-weight-normal ">/ month</span></h1>
                 <hr/>
                  <ul class="list-unstyled my-4 text-small text-left">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Single User</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 5GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                    <li class="mb-3 ">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Access   </li>
                    <li class="mb-3 text-muted"> <i class="fa fa-times mr-2 "></i>Unlimited Private Projects </li>

                    <li class="mb-3 text-muted"><i class="fa fa-times mr-2"></i> Dedicated Phone Support </li>
                    
                    <li class="mb-3 text-muted"><i class="fa fa-times mr-2 "></i> Free Subdomain </li>
                    
                    <li class="mb-3 text-muted "><i class="fa fa-times mr-2 "></i>  Monthly Status Reports </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2  rounded-pill">BUTTON</a>
                </div>
              </div>

              <div class="col-lg-4 ">
                <div class="bg-white p-5 rounded-lg shadow-lg">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4 text-muted">PLUS</h1>
                  <h2 class="h1 font-weight-bold">$9<span class="text-small font-weight-normal">/ month</span></h2>
                  <hr/>
                  <ul class="list-unstyled my-4 text-small text-left ">
                   
                    <li class="mb-3"><i class="fa fa-check mr-2 text-primary  "></i> <span class="font-weight-bold">5 Users</span></li>
                   
                    <li class="mb-3"><i class="fa fa-check mr-2 text-primary"></i> 50GB Storage</li>
                   
                    <li class="mb-3"> <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                   
                    <li class="mb-3"> <i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
                    
                    <li class="mb-3"> <i class="fa fa-check mr-2 text-primary"></i> Unlimited Private Projects</li>
                     
                      <li class="mb-3"><i class="fa fa-check mr-2 text-primary"></i> Dedicated Phone Support</li>
                     
                      <li class="mb-3"> <i class="fa fa-check mr-2 text-primary"></i> Free Subdomain</li>

                    <li class="mb-3 text-muted"><i class="fa fa-times mr-2"></i> Monthly Status Reports
                    </li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">BUTTON</a>
                </div>
              </div>

              <div class="col-lg-4">
                <div class="bg-white p-5 rounded-lg shadow-lg ">
                  <h1 class="h6 text-uppercase font-weight-bold mb-4 text-muted">PRO</h1>
                  <h2 class="h1 font-weight-bold">$49<span class="text-small font-weight-normal ">/ month</span></h2>
                 <hr/>
                  <ul class="list-unstyled my-4 text-small text-left font-weight-normal">
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <span class="font-weight-bold">Unlimited Users</span></li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> 150GB Storage</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Public Projects</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Community Access</li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Unlimited Private Projects  </li>
                    <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Dedicated Phone Support</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> <span class="font-weight-bold">Unlimited </span> Free Subdomains</li>
                      <li class="mb-3">
                      <i class="fa fa-check mr-2 text-primary"></i> Monthly Status Reports</li>
                  </ul>
                  <a href="#" class="btn btn-primary btn-block p-2 shadow rounded-pill">BUTTON</a>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>


    )
  };
}
export default Home;