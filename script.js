import { artworks } from "./data.js";

document.addEventListener("DOMContentLoaded", function () {
  var elems = document.querySelectorAll(".carousel");
  var instances = M.Carousel.init(elems, 200);
});

function createCard(data) {
  return `
    <div class="col s12 m3 l3">
      <br><br>
      <div class="card">
        <div class="card-image waves-effect waves-block waves-light">
          <img class="activator" src="${data.link}" height="300" width="300"/>
        </div>
        <div class="card-content">
          <span class="card-title">
            ${data.title}
            <i class="fa-solid fa-circle-info right activator"></i>
          </span>
        </div>
        <div class="card-reveal">
          <span class="card-title activator grey-text text-darken-4">
            ${data.title}
            <i class="fa-solid fa-xmark right"></i>
          </span>
          <p>${data.description}</p>
        </div>
      </div>
      <br>
    </div>
  `;
}

const container = document.getElementById("app");
artworks.forEach(item => {
  container.innerHTML += createCard(item);
});