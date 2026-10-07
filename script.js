const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.header__link');
const faqQuestions = document.querySelectorAll('.faq__question');
const faqBtnToggle = document.getElementById('faq-btn-toggle');
const faqMoreContainer = document.getElementById('faq-more-container');

menuToggle.addEventListener('click', () => {
    const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', !isExpanded);
    navLinks.classList.toggle('header__nav-links--active');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            navLinks.classList.remove('header__nav-links--active');
            menuToggle.setAttribute('aria-expanded', 'false');
        }
    });
});

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const currentContent = question.parentElement;
        const isActive = currentContent.classList.contains('active');

        document.querySelectorAll('.faq__question-content').forEach(content => {
            content.classList.remove('active');
        });

        if (!isActive) {
            currentContent.classList.add('active');
        }
    });
});

faqBtnToggle.addEventListener('click', () => {
    const isShowingMore = faqMoreContainer.classList.toggle('show');
    faqBtnToggle.textContent = isShowingMore ? 'mostrar menos' : 'mostrar más';
});