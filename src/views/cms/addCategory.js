export const addCategory = () => {
  const markup = `<section class="section-title section-padding">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding text-center">
        <h2>ADD ITEM</h2>            
      </div>      
    </div>
  </div>
</section>
<section class="section-manage-item section-padding section-full-height">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding">
        <form class="form-manage-item">
          <input type="text" name="name" id="name" value="" placeholder="Enter Item Name">
          <button type="submit" class="btn btn-primary full-width" id="action"><i class="fas fa-plus"></i>&nbsp;&nbsp;ADD ITEM</button> 
        </form>
      </div>    
    </div>
  </div> 
</section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
