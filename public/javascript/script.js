var ipsum = new LoremIpsum();
var out = document.getElementById("out");
var randSelect = document.getElementById("randSelect")
var count = document.getElementById("count")
var generateBtn = document.getElementById("generateBtn")
var copyBtn = document.getElementById("copyBtn")
// "sentence"
// "paragraph"
// "random"
// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
// }



generateBtn.addEventListener("click", () => {
    var random = ""
    if (randSelect.value === "words"){
        if (count.value > 0){
            random = ipsum.words(count.value)
        } else {
            random = ipsum.words()
        }
        out.innerHTML = random
    } else if (randSelect.value === "sentence"){
        if (count.value > 1) {
            for (var i = 0; i < count.value; i++) {
                random += ipsum.sentence() + "\n"
            }
        } else {
            random = ipsum.sentence()
        }
        out.innerHTML = random
    } else if (randSelect.value === "paragraph"){
        if (count.value > 1) {
            for (var i = 0; i < count.value; i++) {
                random += ipsum.paragraph(5,10)
            }
        } else {
            random = ipsum.paragraph()
        }
        out.innerHTML = random
    }
});


document.getElementById("copyBtn")
    .onclick = function () {
        let text = document.getElementById("out").innerHTML;
        navigator.clipboard.writeText(text)
            .then(() => {
                alert(`Copied: ${text}`);
            })
            .catch(err => {
                alert('Error in copying text: ', err);
            });
    }
