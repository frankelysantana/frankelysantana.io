document.getElementById('changeColorBtn').addEventListener('click', function() {
    const colors = ['#e0f7fa', '#ffeb3b', '#ff9800', '#f44336', '#8bc34a'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});
