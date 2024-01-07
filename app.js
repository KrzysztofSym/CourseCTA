// Add JavaScript code here
const summer = document.querySelector(".enrol li:nth-child(1)");
const autumn = document.querySelector(".enrol li:nth-child(2)");
const winter = document.querySelector(".enrol li:nth-child(3)");

const enrollment = document.querySelector(".date > p:nth-child(1)");
const commencement = document.querySelector(".date > p:nth-child(2)");
const completion = document.querySelector(".date > p:nth-child(4)");

completion.addEventListener("click", function () {
    document.querySelector(".container").style.scale = "1.2";
    enrollment.innerHTML = "test";
});

