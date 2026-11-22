
const pages = [
    {
        title: "Many many happy returns!",
        subtitle: "Happiest 26th Birthday, Shubh Ji! 🤩",
        message: `May God bless you with health, wealth, success, happiness and peace. 😌✌🏻`,
        footer: "OG Vaishno Devi ma ki wishes mili hai aapko 😌",
        button: "Bas itna hi? 👀"
    },

    {
        title: "A little wish from the wolf 🐺",
        subtitle: "Something more important...",
        message: `Jo jo cheezein life mein chahoge, I hope they come true, and if they don't, may you always have the Shakti to go out there and make them happen. 💪🏻`,
        footer: "All the lucky stars of Andromeda Galaxy bless you 🌌",
        button: "Aage toh padho yaar →"
    },

    {
        title: "Inspector Sahab! 😎",
        subtitle: "A little appreciation is due...",
        message: `You have my bestest wishes for the year ahead, Inspector Sahab! 😎`,
        footer: "Iss Dadima ki prayers se kidnapper inspector banna, hehehe 👮",
        button: "Aur kuch? Haan ji! →"
    },

    {
        title: "Something I genuinely admire 🤍",
        subtitle: "This one is from the heart.",
        message: `I genuinely admire your ability to sustain a positive outlook on life, even through its darkest and saddest moments. It's one of your biggest strengths, along with your consistency and discipline, jo aapne apni mehnat se build ki hai.`,
        footer: "Your discipline is a motivation for Vaishu ✨",
        button: "Awww. Aage? 🥹"
    },

    {
        title: "Never lose your sunshine 🌻",
        subtitle: "A wish for the year ahead...",
        message: `Your sunshine-like, energetic and vibrant personality is a blessing, both for you and for the people around you. I pray that you never lose that spark. Hamesha aise hi apni bubbly, youthful and fun, slightly childish energy ke saath bloom karte raho. 🌻`,
        footer: "Sunny Ji toh sach mein sunshine nikle 🌞",
        button: "One last thing... 👀"
    },

    {
        title: "Six years. Still going. 🤍",
        subtitle: "Happy Birthday, Shubh!",
        message: `Cheers to your 26th birthday and to our 6 years of friendship! 😌🥂<br><br><strong>IAS banke apun ko bhulneka nhi! 🫡</strong>`,
        footer: "Shubh Ji ko Vaishu ki taraf se janmadin ki hardik shubhkamnayein, aur Shri Krishna ki kripa aap par hamesha bani rahe. 🤍",
        button: "Ek baar phir se dekho ↺"
    }
];

let currentPage = -1;

function nextPage() {

    if (currentPage >= pages.length - 1) {
        currentPage = -1;
        location.reload();
        return;
    }

    currentPage++;

    const page = pages[currentPage];

    const container = document.querySelector(".container");

    container.innerHTML = `
        <div class="forest">🌲 🌳 🌲 🌳 🌲</div>

        <div class="animals">
            <div class="animal">🐆</div>
            <div class="animal">🐺</div>
        </div>

        <p class="small-heading">THE CHEETAH & THE WOLF</p>

        <h1 class="story-title">${page.title}</h1>

        <h2>${page.subtitle}</h2>

        <div class="message">${page.message}</div>

        <p class="progress">CHAPTER ${currentPage + 1} OF ${pages.length}</p>

        <button onclick="nextPage()">
            ${page.button}
        </button>

        <p class="footer">${page.footer}</p>
    `;

    container.classList.remove("page-enter");

    void container.offsetWidth;

    container.classList.add("page-enter");
}


// Make the button accessible from the HTML
window.nextPage = nextPage;


// Mobile swipe navigation
let touchStartX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    const difference = touchStartX - e.changedTouches[0].screenX;

    if (difference > 70) {
        nextPage();
    }
});

