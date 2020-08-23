export const editProduct = (data) => {
  const { category, name, link, description, features } = data;

  const markup = `<section class="section-title section-padding">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding text-center">
        <h2>EDIT ITEM</h2>            
      </div>      
    </div>
  </div>
</section>
<section class="section-add-item section-padding">
  <div class="container">
    <div class="row">
      <div class="col-1 col-padding">
        <form class="form-manage-item" enctype="multipart/form-data">
          <input type="text" name="name" id="name" value="${name}" placeholder="Enter Name">
          <input type="text" name="category" id="category" value="${category}" placeholder="Enter Category">
          <input type="file" name="image" id="image" style="margin-bottom: 15px;">
          <input type="text" name="link" id="link" value="${link}" placeholder="Enter Links *optional">          
          <textarea name="description" id="description" placeholder="Enter Description">${description}</textarea>
          <textarea name="features" id="features" placeholder="Enter Features">${features}</textarea>
          <button type="submit" class="btn btn-primary full-width" id="action"><i class="fas fa-plus"></i>&nbsp;&nbsp;EDIT ITEM</button> 
        </form>
      </div>    
    </div>
  </div> 
</section>`;

  document.getElementById("app").insertAdjacentHTML("beforeend", markup);
};
