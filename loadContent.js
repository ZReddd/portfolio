// 加載片段函數
function loadHTML(id, url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            document.getElementById(id).innerHTML = data;
            // 加載完menu之後執行script.js功能
            if (id === 'menu-placeholder') {
                const script = document.createElement('script');
                script.src = 'script.js';
                document.body.appendChild(script);
            }
        })
        .catch(error => console.log('Error loading HTML:', error));
}

// 加載 menu 和 link section
document.addEventListener("DOMContentLoaded", function() {
    loadHTML("menu-placeholder", "menu.html");
    loadHTML("links-section-placeholder", "links-section.html");
});
