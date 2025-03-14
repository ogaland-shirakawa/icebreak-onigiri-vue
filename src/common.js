// 乱数を生成し、配列のインデックスを返す関数
export function returnLotteryResult(lotteryList) {
  let randomIndex = Math.floor(Math.random() * lotteryList.length);
  return lotteryList[randomIndex];
}
