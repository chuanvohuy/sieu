function upDate(previewPic){
    console.log("upDate() function triggered!");
    console.log("Image source:", previewPic.src);
    console.log("Image description:", previewPic.alt);
    const imageDiv = document.getElementById("image");
    console.log("imageDiv element:", imageDiv);
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    console.log("New background image:", imageDiv.style.backgroundImage);
	}

	function unDo(){
    console.log("unDo() function triggered!");
    const imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
    console.log("Background and text have been reset.");
    }