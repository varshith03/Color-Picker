document.addEventListener("DOMContentLoaded", () => {
  const pickColorBtn = document.getElementById("pickColorBtn");
  const imageInput = document.getElementById("upload");
  const imageContainer = document.getElementById("image-container");
  const result = document.getElementById("result");

  pickColorBtn.addEventListener("click", colorPicker);

  function colorPicker() {
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then(({ sRGBHex }) => {
      result.innerHTML = "Color Value: " + sRGBHex;
    });
  }

  imageInput.addEventListener("change", handleImageUpload);

  function handleImageUpload() {
    const file = imageInput.files[0];

    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;
        // Display the image in the container
        imageContainer.innerHTML = "";
        imageContainer.appendChild(img);
      };

      reader.readAsDataURL(file);
    } else {
      alert("Please choose a valid image file.");
      imageInput.value = "";
    }
  }
});
