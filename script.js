const profilePhoto = document.getElementById("profilePhoto");
const profileFallback = document.getElementById("profileFallback");


if (profilePhoto) {

  profilePhoto.addEventListener("load", () => {
    profileFallback.style.display = "none";
    profilePhoto.style.display = "block";
  });

  profilePhoto.addEventListener("error", () => {
    profilePhoto.style.display = "none";
    profileFallback.style.display = "grid";
  });

}
