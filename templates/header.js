document.addEventListener('DOMContentLoaded', function() {
    fetch('templates/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-container').innerHTML = data;

            // Mobile menu functionality
            const hamburgerBtn = document.querySelector('.hamburger-btn');
            const navbarContainer = document.querySelector('.navbar-container');
            
            hamburgerBtn.addEventListener('click', function() {
                // Toggle the active class
                navbarContainer.classList.toggle('active');
                this.classList.toggle('active');
                
                // Add smooth height transition
                if (navbarContainer.classList.contains('active')) {
                    navbarContainer.style.maxHeight = navbarContainer.scrollHeight + 'px';
                } else {
                    navbarContainer.style.maxHeight = '0';
                }
            });

            // Close menu when clicking on nav items
            document.querySelectorAll('.nav-list a').forEach(item => {
                item.addEventListener('click', () => {
                    navbarContainer.classList.remove('active');
                    hamburgerBtn.classList.remove('active');
                    navbarContainer.style.maxHeight = '0';
                });
            });
            
            // Load external resources
            const links = document.querySelectorAll('#header-container link[rel="stylesheet"]');
            links.forEach(link => {
                const newLink = document.createElement('link');
                newLink.rel = 'stylesheet';
                newLink.href = link.href;
                document.head.appendChild(newLink);
            });
        })
        .catch(error => console.error('Error loading header:', error));
});