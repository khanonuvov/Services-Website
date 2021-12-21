
const  fileBtn = document.getElementById("input-file");
const  customBtn = document.getElementById("custom-button");
const  customTxt = document.getElementById("custom-text");

customBtn.addEventListener("click", function(){
    fileBtn.click();
});
fileBtn.addEventListener("change", function() {
    if (fileBtn.value) {
        customTxt.innerHTML = fileBtn.value.match(
        /[\/\\]([\w\d\s\.\-\(\)]+)$/
        )[1];
    } else {
        customTxt.innerHTML = "No file chosen, yet.";
    }
}); 


