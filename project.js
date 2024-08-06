function changeBackgroundColor() {
    const colors = ['#f1c40f', '#e74c3c', '#9b59b6', '#3498db', '#2ecc71'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.querySelector('main').style.backgroundColor = randomColor;
}
