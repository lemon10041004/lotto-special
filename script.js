function generate() {
  const specialNumbers = [];
  while (specialNumbers.length < 24) {
    const num = Math.floor(Math.random() * 49) + 1;
    if (!specialNumbers.includes(num)) specialNumbers.push(num);
  }
  document.getElementById("result").innerHTML = 
    '<h2>預測結果</h2><p>' + specialNumbers.join(', ') + '</p>';
}
