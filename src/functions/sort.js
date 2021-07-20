const sort = (arrayToSort) => {
    return arrayToSort.sort(
        (a, b) => a.suitOrder - b.suitOrder || a.cardOrder - b.cardOrder
      );
  };

  export default sort;
