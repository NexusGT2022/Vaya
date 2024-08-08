document.addEventListener("DOMContentLoaded", function() {
  const img = document.getElementById('huTaoSymbol');
  let x = 0, y = 0;
  let speedX = 5; // Velocidad horizontal
  let speedY = 5; // Velocidad vertical
  let row = 1; // Controla en qué "fila" está el emblema

  function moveDiagonal() {
    const maxX = window.innerWidth - img.width;
    const maxY = window.innerHeight - img.height;
    const rowHeight = maxY / 3; // Divide la altura de la ventana en tres filas

    // Cambiar dirección horizontal al llegar a los bordes de la ventana
    if (x < 0 || x > maxX) {
      speedX = -speedX;
      // Cambia la fila cada vez que llega a un borde
      row = row % 3 + 1;
      y = rowHeight * (row - 1);
    }

    x += speedX;
    y += (speedX / Math.abs(speedX)) * speedY; // Asegura la dirección vertical coincide con la horizontal

    // Limita Y a la fila actual para evitar que se mueva fuera de su fila
    y = Math.min(Math.max(y, rowHeight * (row - 1)), rowHeight * row - img.height);

    img.style.transform = `translate(${x}px, ${y}px)`;

    requestAnimationFrame(moveDiagonal);
  }

  moveDiagonal();
});

