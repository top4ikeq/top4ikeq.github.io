document.addEventListener("DOMContentLoaded", () => {
    let letterWrapper = document.querySelector(".letter-wrapper"),
        paper = document.querySelector(".paper"),
        letterCover = document.querySelector(".letter-closure"),
        leftSideOfLetter = document.querySelector(".left-side"),
        centerOfLetter = document.querySelector(".center"),
        rightSideOfLetter = document.querySelector(".right-side"),
        submitName = document.querySelector(".submit-name"),
        askNameInput = document.querySelector(".ask-name input[type=text]");

    let letterWrapperClicked = false;

    letterWrapper.addEventListener("click", () => {
        letterWrapper.classList.add("clicked");
        if (!letterWrapperClicked) {
            letterWrapperClicked = true; // Flag can stay if you want single click actions
        }
    });

    const text1 =
        "Желаем вам чудесных дней,^500 наполненных радостными событиями, красивыми словами, любовью и душевностью.^1000 Пусть ваши желания исполняются всё чаще, близкие окружают вас теплом и нежностью,^400 заботой и безграничным вниманием.^600 Счастья Вам и пусть оно не заканчивается! И с праздником весны прекрасным!",
        text2 =
        "Пускай красочными будут ваши дни, а в вашей жизни случаются самые настоящие и невероятные чудеса. Желаю теплой, солнечной и радостной весны, чтобы вы всегда были согреты ласковым словом, делом и любовью родных людей. Желаю благополучия, чтобы в вашем доме и сердцах всегда был покой, уют и счастье. С 8 Марта!";

    let options = {
        strings: [text1, text2],
        typeSpeed: 60,
        showCursor: false
    };

    let typed;

    letterCover.addEventListener("click", () => {
        letterCover.classList.toggle("opened");
        letterCover.title = letterCover.classList.contains("opened") ? "Закрыть" : "Открыть";
        leftSideOfLetter.classList.toggle("opened");
        centerOfLetter.classList.toggle("opened");
        rightSideOfLetter.classList.toggle("opened");
    });

    askNameInput.addEventListener("input", () => {
        const nameValue = askNameInput.value.trim(); // Get trimmed name
        paper.querySelector(".name").textContent = "Дорогая " + nameValue + "!";
        submitName.style.display = nameValue.length >= 2 ? "block" : "none";
    });

    submitName.addEventListener("click", () => {
        letterCover.classList.toggle("opened");
        leftSideOfLetter.classList.toggle("opened");
        centerOfLetter.classList.toggle("opened");
        rightSideOfLetter.classList.toggle("opened");
        letterWrapper.classList.add("submitted");
        paper.classList.toggle("watch");

        setTimeout(() => {
            // Initialize Typed.js only once after submission
            typed = new Typed("#message", options);
        }, 1500);

        // Change background and fade in effect
        document.body.style.opacity = "0";
        setTimeout(() => {
            document.querySelector(".container").style.backgroundImage =
                "url('https://i.ibb.co/DLt3PP0/flowers-374318-1920.jpg')";
            document.body.style.opacity = "1";
        }, 1000);
    });
});