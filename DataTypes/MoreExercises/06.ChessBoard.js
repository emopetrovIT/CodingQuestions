function chessBoard(n) {
  let chessBoardHtml = '';

  let currentColour = 'black';
  let lastUsedColour = '';

  chessBoardHtml = '<div class="chessboard">\n';
  for (let row = 1; row <= n; row++) {
    chessBoardHtml += '  <div>\n';

    for (let col = 1; col <= n; col++) {
      chessBoardHtml += `    <span class="${currentColour}"></span>\n`;

      lastUsedColour = currentColour;
      currentColour = lastUsedColour === 'black' ? 'white' : 'black';
    }
    if (n % 2 === 0) {
      currentColour = lastUsedColour;
    }

    chessBoardHtml += '  </div>\n';
  }
  chessBoardHtml += '</div>';

  console.log(chessBoardHtml);
}

chessBoard(3);
chessBoard(4);
