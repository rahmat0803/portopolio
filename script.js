//toggle icon navbar//
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

}

//scroll section 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 100; // Offset untuk memperhitungkan margin
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // Hapus kelas 'active' dari semua tautan
            navLinks.forEach(link => link.classList.remove('active'));

            // Tambahkan kelas 'active' ke tautan yang sesuai
            document.querySelector(`header nav a[href="#${id}"]`).classList.add('active');
        
       // actve section for animation on scroll //
       sec.classList.add('show-animate')
        }
        //if want to use animate that repeatts on scroll use this

        else {
                sec.classList.remove('show-animate')
        }
    });

    // Sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon
       menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animatiom footer on scroll 
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHight + this.scrollY >= document.scrollingElement.scrollHeight);
    
};
