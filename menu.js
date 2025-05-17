// menu.js - Separate menu functionality file

document.addEventListener('DOMContentLoaded', function() {
    // First, create and append the menu HTML structure to the body
    const menuHTML = document.createElement('div');
    menuHTML.innerHTML = `
        <div class="menu-overlay" id="menuOverlay">
            <div class="menu-popup">
                <a href="#" class="menu-item">Home</a>
                <a href="#" class="menu-item">Posts</a>
                <a href="#" class="menu-item">Pinterest</a>
                <a href="#" class="menu-item">YouTube</a>
            </div>
        </div>
    `;
    document.body.appendChild(menuHTML);
    
    // Add the menu styles to the head
    const menuStyles = document.createElement('style');
    menuStyles.textContent = `
        .menu-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 100;
        }

        .menu-popup {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            background-color: #e0f7f4;
            border-radius: 0 0 20px 20px;
            overflow: hidden;
            z-index: 101;
        }

        .menu-item {
            padding: 25px 20px;
            font-size: 28px;
            color: #005b5b;
            border-bottom: 1px solid #b3e0e0;
            display: block;
            text-decoration: none; 
            font-family: 'Arial', sans-serif;
        }
        
        .menu-item:last-child {
            border-bottom: none;
        }
    `;
    document.head.appendChild(menuStyles);

    // Set up the menu button click event
    const menuBtn = document.getElementById('menuBtn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const menuOverlay = document.getElementById('menuOverlay');
            menuOverlay.style.display = 'block';
        });
    }
    
    // Set up the overlay click event to close the menu
    const menuOverlay = document.getElementById('menuOverlay');
    menuOverlay.addEventListener('click', function(e) {
        if (e.target === menuOverlay) {
            menuOverlay.style.display = 'none';
        }
    });
    
    // Add click events for the menu items
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            menuOverlay.style.display = 'none';
        });
    });
});
