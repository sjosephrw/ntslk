export const editCategory = async (data) => {
  const { name } = data;

  const markup = `<section class="section-title section-padding text-center">
  <div class="container">
    <div class="row">
      <div class="col-1">
        <h2>EDIT ITEM</h2>            
      </div>    
    </div>
  </div>
</section>
<section class="section-manage-item section-padding section-full-height">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding">
        <form class="form-manage-item">
          <input type="text" name="name" id="name" value='${name}' placeholder="Enter Menu Name">
          <button type="submit" class="btn btn-primary full-width" id="action"><i class="fas fa-edit"></i>&nbsp;&nbsp;EDIT ITEM</button> 
        </form>
      </div>
    </div>
  </div> 
</section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
