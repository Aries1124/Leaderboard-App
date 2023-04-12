import React from "react";

export default function Header() {
  return (
    <div class="p-3 mb-2 bg-info text-dark">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Home</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">About</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="#">Name1</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Name2</a>
            </li>
            <li class="nav-item" >
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Name3</a>
            </li> */}
          </ul>
        </div>
        </div>
      </nav>
      
    </div>

    

  ); 

}

