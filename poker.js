const poker = {
  royalFlush: 100,
  straightFlush: 75,
  fourOfAKind: 50,
  fullHouse: 25,
  flush: 20,
  straight: 15,
  threeOfAKind: 10,
  twoPair: 5,
  pair: 2,
  highCard: 1
}

function compareHands(right, left) {
  const handRanks = Object.keys(poker);
  
  const rankHand = (hand) => {
    for (let rank of handRanks) {
      if (hand.includes(rank)) {
        return poker[rank];
      }
    }
    return 0;
  };

  const rightHand = rankHand(right);
  const leftHand = rankHand(left);

  if (rightHand > leftHand) {
    console.log(`Right: ${rightHand} > Left: ${leftHand}`);
    console.log('Right wins!');
    return 1;
  } else if (rightHand < leftHand) {
    console.log(`Left: ${leftHand} > Right: ${rightHand}`);
    console.log('Left wins!');
    return -1;
  } else {
    console.log(`It's a tie with ${rightHand} points each!`);
    return 0;
  }
}

compareHands(['pair'], ['fullHouse']);

module.exports = {
  compareHands
};