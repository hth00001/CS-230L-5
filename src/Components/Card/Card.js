import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function Card(){
    return(
      <div>
        <h1>Card Components</h1>
        <p></p>
      <div class="row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
      <div class="card text-bg-primary h-100">
        <div class="card-body">
          <h5 class="card-title">Card 1</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-primary">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-bg-danger h-100">
        <div class="card-body">
          <h5 class="card-title">Card 2</h5>
          <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-danger">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="card text-bg-success h-100">
        <div class="card-body">
          <h5 class="card-title">Card 3</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
        </div>
        <div class="card-footer">
          <small class="text-body-success ">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
  }
  export default Card;