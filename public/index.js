document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar");
    const btnTutup = document.getElementById("btnTutup");
    const navTutup = document.getElementById("navTutup");
    const navOpen = document.getElementById("navOpen");

    btnTutup.addEventListener("click", (e) => {
        e.preventDefault();
        sidebar.classList.toggle("show");
        navTutup.classList.toggle("hidden");
        navOpen.classList.toggle("hidden");
    });

    sidebar.style.top = parseInt(navbar.clientHeight) - 1 + "px";
});


document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.getElementById("navbar");
    const sidebar = document.getElementById("sidebar");
    const btnSidebarToggler = document.getElementById("btnSidebarToggler");
    const navClosed = document.getElementById("navClosed");
    const navOpen = document.getElementById("navOpen");

    btnSidebarToggler.addEventListener("click", (e) => {
        e.preventDefault();
        sidebar.classList.toggle("show");
        navClosed.classList.toggle("hidden");
        navOpen.classList.toggle("hidden");
    });

    sidebar.style.top = parseInt(navbar.clientHeight) - 1 + "px";
});


    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorOutline = document.querySelector("[data-cursor-outline]");

    window.addEventListener("mousemove", function(ja) {
        const posX = ja.clientX;
        const posY = ja.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

         cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
         }, {duration: 500, fill: "forwards"})
    })



    const navItems = document.querySelector('.slide');
    const button = document.querySelector('[onclick="onToggle(this)"]');
    const balik = document.getElementById('etc1')

    function onToggle(e) {
        navItems.classList.toggle('top-[0]'); 

        
        const isOpen = navItems.classList.contains('top-[0]');

        
        if (isOpen) {
            button.innerText = 'Tutup';
        } else {
            button.innerText = 'Menu';
        }
    }



    
    const profile = document.getElementById('profile');

   
    function handleScroll() {
        
        const scrollPosition = window.scrollY;

        
        const rotationDegree = scrollPosition * 0.5; 

        profile.style.transform = `rotate(${rotationDegree}deg)`;
    }
    window.addEventListener('scroll', handleScroll);

