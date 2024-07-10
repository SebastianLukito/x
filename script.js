var makeItRain = function() {
    // Bersihkan elemen hujan sebelumnya
    $('.rain').empty();

    var increment = 0;
    var drops = "";
    var backDrops = "";

    while (increment < 100) {
        // Angka acak untuk berbagai penyesuaian
        var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
        var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
        increment += randoFiver;

        // Tambahkan tetes hujan dengan penyesuaian CSS
        drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
        backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    }

    $('.rain.front-row').append(drops);
    $('.rain.back-row').append(backDrops);
}

makeItRain();

// Efek mengetik untuk surat cinta
const letterText = "Dear Ica Sayang,\n\nEvery moment with you is a beautiful dream. I cherish every memory we've made and look forward to many more. You are my everything.\n\nToday is a special day, the day you came into this world and made it a better place just by being you. I am incredibly grateful to be able to celebrate this day with you. Your birthday is not just a reminder of how wonderful you are but also a reminder of how lucky I am to have you in my life.\n\nI still remember the first time we met at the prep course for college entrance exams. The way your smile lit up the room and how your laughter was like music to my ears. Though we separated for a while, fate brought us back together, and since then, every day with you has been a new adventure, filled with joy, love, and endless happiness. You have a way of making even the simplest moments feel extraordinary.\n\nOn this special day, I want you to know how deeply you are loved. You are not only my partner but also my best friend, my confidant, and my soulmate. Your kindness, compassion, and strength inspire me every day. I am so proud of the person you are and the person you continue to become.\n\nI hope this birthday brings you as much joy as you have brought into my life. Even though we often have our ups and downs, our love remains strong. No matter the challenges we face, my love for you only grows stronger with each passing day. May your day be filled with laughter, love, and all your heart's desires. I promise to be by your side, celebrating you not just today but every day.\n\nHappy birthday, my love. Here's to many more birthdays together, creating beautiful memories and sharing our dreams. Thank you for being you and for letting me love you. You are my forever and always.\n\nYours forever,\nTian";
let i = 0;
const speed = 30;

function typeWriter() {
    if (i < letterText.length) {
        document.getElementById("love-letter-text").innerHTML += letterText.charAt(i);
        scrollToBottom();
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Auto scroll mengikuti kursor ketik
function scrollToBottom() {
    const container = document.getElementById("scroll-container");
    container.scrollTop = container.scrollHeight;
    const loveLetter = document.querySelector(".love-letter");
    const loveLetterHeight = loveLetter.clientHeight;
    const containerHeight = container.clientHeight;
    const scrollPosition = container.scrollTop;
    if (scrollPosition > containerHeight - loveLetterHeight) {
        container.scrollTop = scrollPosition + 30;
    }
}

document.getElementById("love-letter-text").addEventListener("DOMNodeInserted", scrollToBottom);

// Fungsi untuk memilih animasi secara acak
function getRandomAnimation() {
    const animations = ['fly1', 'fly2', 'fly3', 'fly4'];
    return animations[Math.floor(Math.random() * animations.length)];
}

// Mulai animasi terbang dan efek mengetik secara terpisah
setTimeout(function() {
    const animationClass = getRandomAnimation();
    $('.photo-wrapper').addClass(animationClass); // Tambahkan kelas untuk animasi foto
}, 500); // Mulai animasi terbang setelah 500 milidetik

setTimeout(function() {
    $('.rain.back-row').fadeIn(2000); // Animasi hujan mulai muncul setelah beberapa waktu
    typeWriter(); // Mulai efek mengetik
}, 2000); // Mulai efek mengetik setelah 2 detik
