document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, 200);
});

fetch("artworks.json")
  .then((res) => res.json())
  .then((data) => {
    const gallery = document.getElementById("gallery");

    data.forEach((item) => {
      gallery.innerHTML += `
      <br><br>  
      <div class="col s12 m3 l3">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" src="${item.image}">
            </div>
            <div class="card-content">
              <span class="card-title">${item.title}<i class="fa-solid fa-circle-info right"></i></span>
            </div>
            <div class="card-reveal">
              <span class="card-title activator grey-text text-darken-4">${item.title}<i class="material-icons right">close</i></span>
              <p>${item.details}</p>
            </div>
          </div>
        </div>
      `;
    });
  });
