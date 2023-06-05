let filterA = document.getElementById("blur");
    let filterB = document.getElementById("contrast");
    let filterC = document.getElementById("hue-rotate");
    let filterD = document.getElementById("sepia");
    let filterE = document.getElementById("brightness");
    let filterF = document.getElementById("saturation");
  let filterG = document.getElementById("grayscale");
  let filterH = document.getElementById("invert");



    let noFlipBtn = document.getElementById("no-flip");
    let flipXBtn = document.getElementById("flip-x");
    let flipYBtn = document.getElementById("flip-y");
    let uploadButton = document.getElementById("upload-button");
    let image = document.getElementById("chosen-image");
    const savedbutton = document.querySelector(".save")
toast = document.querySelector(".toast")

closeIcon = document.querySelector(".close")

progress = document.querySelector(".progress")

    function resetFilter() {
      filterA.value = "0";
      filterB.value = "100";
      filterC.value = "0";
      filterD.value = "0";
      filterE.value = "100";
      filterF.value = "100";
      filterG.value = "0";
      filterH.value = "0";
      noFlipBtn.checked = true;
      addFilter();
      flipImage();
    }

    const resetbutton=document.querySelector(".reset")
    resetbutton.addEventListener("click", () =>{
   
        
        
        filterA.value = "0";
        filterB.value = "100";
        filterC.value = "0";
        filterD.value = "0";
        filterE.value = "100";
        filterF.value = "100";
        filterG.value = "0";
        filterH.value = "0";
        noFlipBtn.checked = true;
        addFilter();
        flipImage();
      

    });
    


savedbutton.addEventListener("click", () =>{
  toast.classList.add("active2");
progress.classList.add("active2");

setTimeout(()=>{
  toast.classList.remove("active2");
},3000)
});
closeIcon.addEventListener("click",()=>{
  toast.classList.remove("active2")
});

    uploadButton.onchange = () => {
      resetFilter();
      document.querySelector(".image-container").style.display = "block";

      let reader = new FileReader();
      reader.readAsDataURL(uploadButton.files[0]);
      reader.onload = () => {
        image.setAttribute("src", reader.result);
      }
    }

    let sliders = document.querySelectorAll(".filter input[type='range']");
    sliders.forEach(slider => {
      slider.addEventListener("input", addFilter);
    });

    function addFilter() {
      image.style.filter = `blur(${filterA.value}px) contrast(${filterB.value}%) hue-rotate(${filterC.value}deg) sepia(${filterD.value}%) brightness(${filterE.value}%) saturate(${filterF.value}%) grayscale(${filterG.value}%) invert(${filterH.value}%)`;
      

    }

    let radioBtns = document.querySelectorAll(".flip-option input[type='radio']");
    radioBtns.forEach(radioBtn => {
      radioBtn.addEventListener("click", flipImage);
    });

    function flipImage() {
      if (flipXBtn.checked) {
        image.style.transform = "scaleX(-1)";
      } else if (flipYBtn.checked) {
        image.style.transform = "scaleY(-1)";
      } else {
        image.style.transform = "scale(1,1)";
      }
    }
   


  // Update the countdown timer every second
  

    let downloadButton = document.querySelector(".download-button");
    // let timer=downloadbtn.dataset.timer;
    downloadButton.addEventListener("click", (event) => {
      event.preventDefault(); 
      downloadButton.classList.add("active")
      toast.classList.add("active2");
    progress.classList.add("active2");
    // Select the <i> element with class "fas fa-solid fa-check check"
const iconElement = document.querySelector('.fa-solid.fa-check.check');

// Change the class name to "fa fa-spinner fa-spin"
iconElement.className = 'fa fa-spinner fa-spin';

// Select the span element with class "text-1"
const text1Element = document.querySelector('.text-1');

// Change the text to "Wait"
text1Element.textContent = 'Wait';

// Select the span element with class "text-2"
const text2Element = document.querySelector('.text-2');

// Change the text to "Your image is downloading"
text2Element.textContent = 'Your image is downloading';
      setTimeout(()=>{
    
      toast.classList.remove("active2");
      

        // toastr.success("File download completed!");

                downloadButton.classList.remove("active")//remove active class after 6s
                document.querySelector("i").classList.replace("bx-cloud-download","bx-check-circle")
                document.querySelector(".button-text").innerText="Completed"

      const canvas = document.createElement("canvas");
      const context = canvas.getContext("2d");
      const img = document.querySelector("#chosen-image");

      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      context.filter = getComputedStyle(image).filter;

      if (flipXBtn.checked) {
        context.scale(-1, 1);
      } else if (flipYBtn.checked) {
        context.scale(1, -1);
      }

      context.drawImage(img, 0, 0);

      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/jpeg");
      downloadLink.download = uploadButton.files[0].name.replace(/\.[^.]+$/, "") + ".jpg";
      downloadLink.click();
      
    },3000)
    
    });