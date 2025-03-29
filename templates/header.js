fetch('templates/header.html')
    .then(response => response.text())
    .then(data => {
        // Inject the HTML into the container
        document.getElementById('header-container').innerHTML = data;

        // Dynamically load fonts and stylesheets
        const links = document.querySelectorAll('#header-container link[rel="stylesheet"]');
        links.forEach(link => {
            const newLink = document.createElement('link');
            newLink.rel = 'stylesheet';
            newLink.href = link.href;
            document.head.appendChild(newLink);
        });
    })
    .catch(error => console.error('Error loading header:', error));