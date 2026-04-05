const galleryItems = [
    { title: 'Lion', category: 'Mammals', imagePath: 'assets/images/lion.jpg', description: 'The king of the jungle.' },
    { title: 'Eagle', category: 'Birds', imagePath: 'assets/images/eagle.jpg', description: 'A majestic bird of prey.' },
    { title: 'Iguana', category: 'Reptiles', imagePath: 'assets/images/iguana.jpg', description: 'A slow-moving reptile.' },
    { title: 'Mountain Landscape', category: 'Landscapes', imagePath: 'assets/images/mountain.jpg', description: 'Majestic mountain scenery.' },
];

function renderGallery(items) {
    const gallery = document.querySelector('.gallery');
    gallery.innerHTML = '';
    items.forEach(item => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `<img src='${item.imagePath}' alt='${item.title}' /><h3>${item.title}</h3><p>${item.description}</p>`;
        gallery.appendChild(galleryItem);
    });
}

function filterGallery(category) {
    const filteredItems = category === 'All' ? galleryItems : galleryItems.filter(item => item.category === category);
    renderGallery(filteredItems);
}

document.querySelector('.filter-buttons').addEventListener('click', (event) => {
    const category = event.target.dataset.category;
    if (category) {
        filterGallery(category);
    }
});

// Initial render
renderGallery(galleryItems);

// Smooth scrolling
const scrollLinks = document.querySelectorAll('.smooth-scroll');
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});