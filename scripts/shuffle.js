// Description: "ソート＞　"の次に入力された文字列をシャッフルする
module.exports = (robot) => {
  robot.hear(/シャッフル＞　/i, (res) => {
    const text = res.message.text;
    const names = text.split("　").slice(1);
    const shuffled_1 = fisherShuffle(names);
    const shuffled_2 = fisherShuffle(shuffled_1);
    const shuffled_3 = fisherShuffle(shuffled_2);
    const result = shuffled_3.map((name, index = 0) => {
      index += 1;
      return String(index) + "番目：" + name;
    });
    res.send(result.join("\n"));
  });
  robot.hear(/shuffle> /i, (res) => {
    const text = res.message.text;
    const names = text.split(" ").slice(1);
    const shuffled_1 = fisherShuffle(names);
    const shuffled_2 = fisherShuffle(shuffled_1);
    const shuffled_3 = fisherShuffle(shuffled_2);
    const result = shuffled_3.map((name, index = 0) => {
      index += 1;
      return String(index) + "番目：" + name;
    });
    res.send(result.join("\n"));
  });
};

const fisherShuffle = ([...arr]) => {
  let rem = arr.length;
  while (rem) {
    const i = Math.floor(Math.random() * rem--);
    [arr[rem], arr[i]] = [arr[i], arr[rem]];
  }
  return arr;
};
