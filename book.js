//Liked heart
const likeBook = Array.from(document.querySelectorAll(".like-book"));
likeBook.forEach(item => {
    item.addEventListener("click", (e) => {
        console.log(e);
        item.classList.toggle("liked");
        item.classList.toggle("fa-regular");
        item.classList.toggle("fa-solid");
    });
});

//email
const subscribe = document.querySelector("#subscribe");
subscribe.addEventListener("click", () => {
    let inputValue = document.querySelector("#email").value;
    let regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+.)+([.])+[a-zA-Z0-9.-]{2,4}$/;

    if (document.querySelector("#email").value == "") {
        console.log("Mail Alanı Boş Bırakılamaz!");
        alert("Mail Alanı Boş Bırakılamaz!");
    } else {
        if (regex.test(inputValue) == true) {
            console.log("Mail Adresiniz: " + inputValue);
            alert("Mail Adresiniz Başarıyla kaydedildi!");
        } else {
            console.log("Geçersiz Mail Adresi Girdiniz!");
            alert("Geçersiz Mail Adresi Girdiniz!");
        }
    }
    document.querySelector("#email").value = "";
});