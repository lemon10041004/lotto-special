function generate() {
  const result = [];
  while (result.length < 1) {
    const num = Math.floor(Math.random() * 49) + 1;
    if (!result.includes(num)) result.push(num);
  }
  const now = new Date().toLocaleString('zh-TW');
  document.getElementById('result').innerHTML =
    '預測號碼：' + result.join(', ') + '<br>預測時間：' + now;
}
