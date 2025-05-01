
function predict() {
  let results = [];
  while (results.length < 24) {
    let num = Math.floor(Math.random() * 49) + 1;
    results.push(num);
  }
  document.getElementById("result").innerText = "預測號碼（24組）：" + results.join(", ");
}
