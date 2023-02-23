document.getElementById("button").addEventListener("click", function() {
  // Change background to dancing rick
  document.body.style.backgroundSize = "non"
  document.body.style.backgroundPosition = "center"
    document.body.style.backgroundImage = "url('kin.jpg')"
    
  // Hide the heading and the button
  document.querySelector(".everything").style.display = "none"

  // Play song
  var song = document.getElementById("song")
  song.play()
})