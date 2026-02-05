$(document).ready(function () {
  $("#artworkForm").on("submit", function (e) {
    e.preventDefault();

    $.ajax({
      url: "save.php",
      method: "POST",
      data: $(this).serialize(),
      success: function (response) {
        $("#message").text("Artwork saved successfully!");
        $("#artworkForm")[0].reset();
      },
      error: function () {
        $("#message").text("Error saving artwork.");
      },
    });
  });

  // Optional: Delete artwork by ID (call this in artwork.html or admin interface later)
  window.deleteArtwork = function (id) {
    if (!confirm("Delete this artwork?")) return;
    $.ajax({
      url: "delete.php?id=" + id,
      method: "GET",
      success: function () {
        alert("Artwork deleted!");
      },
      error: function () {
        alert("Error deleting artwork.");
      },
    });
  };
});