export const deleteItem = () => {
  const markup = `<section class="section-title section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding">
        <h2>DELETE ITEM</h2>            
      </div>    
    </div>

  </div>
</section>
<section class="section-delete-item section-padding section-full-height">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding hide-element-on-success">
        <p>Are you sure you want to delete ? This action can not be reversed!</p>
        <a href="#" class="btn btn-danger full-width" id="action">DELETE ITEM</a> 
      </div>
    </div>
  </div> 
</section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
