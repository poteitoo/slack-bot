// Description: "ソート＞　"の次に入力された文字列をシャッフルする
module.exports = (robot) => {
  robot.hear(/シャッフル＞　/i, (res) => {
    const text = res.message.text;
    const names = text.split("　").slice(1);
    // const shuffled = fisherShuffle(shuffled);
    // Shuffle with Schwartz Transformation
    const shuffled = names
      .map(function (a) {
        return { weight: Math.random(), value: a };
      })
      .sort(function (a, b) {
        return a.weight - b.weight;
      })
      .map(function (a) {
        return a.value;
      });
    // integration
    const result = shuffled.map((name, index = 0) => {
      index += 1;
      return String(index) + "番目：" + name;
    });
    res.send(result.join("\n"));
  });
};

// あまりシャッフルされなかった
// const fisherShuffle = ([...arr]) => {
//   let rem = arr.length;
//   while (rem) {
//     const i = Math.floor(Math.random() * rem--);
//     [arr[rem], arr[i]] = [arr[i], arr[rem]];
//   }
//   return arr;
// };
