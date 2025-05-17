<!DOCTYPE html><html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dynamic Menu Popup</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Arial', sans-serif;
        }
        body {
            background-color: #808080;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        #menuBtn {
            padding: 15px 30px;
            font-size: 18px;
            background-color: #005b5b;
            color: #fff;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        .menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            display: none;
            z-index: 1000;
        }
        .menu-popup {
            background: #fff;
            border-radius: 20px;
            width: 90%;
            max-width: 400px;
            margin: 80px auto;
            overflow: hidden;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }
        .menu-popup .menu-item {
            display: block;
            padding: 25px 20px;
            font-size: 28px;
            color: #005b5b;
            background-color: #e0f7f4;
            border-bottom: 1px solid #b3e0e0;
            text-decoration: none;
        }
        .menu-popup .menu-item:last-child {
            border-bottom: none;
        }
    </style>
</head>
<body>
    <button id="menuBtn">Open Menu</button><script>
document.addEventListener('DOMContentLoaded', function() {
    // Create overlay and popup structure
    const overlay = document.createElement('div');
    overlay.className = 'menu-overlay';
    overlay.id = 'menuOverlay';

    const popup = document.createElement('div');
    popup.className = 'menu-popup';

    // Add menu items
    const items = ['Home', 'Posts', 'Pinterest', 'YouTube'];
    items.forEach(text => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'menu-item';
        link.textContent = text;
        popup.appendChild(link);
    });

    overlay.appendChild(popup);
    document.body.appendChild(overlay);

    // Show popup on button click
    document.getElementById('menuBtn').addEventListener('click', () => {
        overlay.style.display = 'block';
    });

    // Hide when clicking outside popup
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            overlay.style.display = 'none';
        }
    });

    // Hide when clicking any menu item
    popup.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    });
});
</script>

</body>
</html>
