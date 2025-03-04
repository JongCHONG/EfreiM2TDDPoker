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

function compareHands(hand1, hand2) {
  const handRanks = Object.keys(poker);
  
  const rankHand = (hand) => {
    for (let rank of handRanks) {
      if (hand.includes(rank)) {
        return poker[rank];
      }
    }
    return 0;
  };

  const hand1Rank = rankHand(hand1);
  const hand2Rank = rankHand(hand2);

  if (hand1Rank > hand2Rank) {
    return 1;
  } else if (hand1Rank < hand2Rank) {
    return -1;
  } else {
    return 0;
  }
}

const result = compareHands(['pair'], ['fullHouse']);

console.log(result);
