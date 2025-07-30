// User data
const users = [
    { id: 1, name: "User 123", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, quis.", image: "https://images.unsplash.com/photo-1743746185929-b4d8937ed816?w=500&auto=format&fit=crop&q=60" },
    { id: 2, name: "Alice Johnson", description: "Creative designer who loves minimalism and simplicity.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60" },
    { id: 3, name: "Michael Smith", description: "Full-stack developer with a passion for building web applications.", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&auto=format&fit=crop&q=60" },
    { id: 4, name: "Sophia Lee", description: "Nature lover and travel enthusiast who enjoys photography.", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60" },
    { id: 5, name: "David Kim", description: "Tech enthusiast and AI engineer who loves solving complex problems.", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60" },
    { id: 6, name: "Emma Watson", description: "Book lover and coffee enthusiast, always exploring new libraries and cafés.", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=60" },
    { id: 7, name: "Liam Brown", description: "Fitness trainer who inspires people to lead a healthy lifestyle.", image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=500&auto=format&fit=crop&q=60" },
    { id: 8, name: "Olivia Harris", description: "Food blogger with a passion for trying unique cuisines around the world.", image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&auto=format&fit=crop&q=60" }
];


function showUser(arr) {
    const container = document.querySelector('.card-container');
    container.innerHTML = ""; 

    arr.forEach(user => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.style.position = "relative";
        card.style.width = "200px";
        card.style.height = "300px";
        card.style.overflow = "hidden";
        card.style.borderRadius = "20px";
        card.style.boxShadow = "0 20px 60px rgba(0,0,0,0.4)";

        const img = document.createElement('img');
        img.src = user.image;
        img.classList.add('bg-img');
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "cover";

        const blurredLayer = document.createElement('div');
        blurredLayer.classList.add('blurred-layer');
        blurredLayer.style.position = "absolute";
        blurredLayer.style.bottom = "0";
        blurredLayer.style.width = "100%";
        blurredLayer.style.height = "100%";
        blurredLayer.style.backgroundImage = `url(${user.image})`;
        blurredLayer.style.backgroundSize = "cover";
        blurredLayer.style.backgroundPosition = "bottom";
        blurredLayer.style.filter = "blur(10px)";
        blurredLayer.style.zIndex = "1";
        blurredLayer.style.webkitMaskImage = "linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))";
        blurredLayer.style.webkitMaskSize = "100% 100%";
        blurredLayer.style.webkitMaskRepeat = "no-repeat";

        const content = document.createElement('div');
        content.classList.add('content');
        content.style.position = "absolute";
        content.style.bottom = "20px";
        content.style.left = "20px";
        content.style.color = "white";
        content.style.zIndex = "2";

        const title = document.createElement('h3');
        title.textContent = user.name;
        title.style.fontSize = "18px";
        title.style.fontWeight = "bold";
        title.style.marginBottom = "6px";

        const paragraph = document.createElement('p');
        paragraph.textContent = user.description;
        paragraph.style.fontSize = "14px";
        paragraph.style.color = "#ddd";
        paragraph.style.lineHeight = "1.4";

        content.appendChild(title);
        content.appendChild(paragraph);

        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        container.appendChild(card);
    });
}

// Initial render
showUser(users);

// Search functionality
const searchInput = document.querySelector('#search');
searchInput.addEventListener('input', function () {
    const query = searchInput.value.toLowerCase();
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.description.toLowerCase().includes(query)
    );
    showUser(filteredUsers);
});
