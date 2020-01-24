function bassfilter(soundwave, upperLimit, lowerLimit) {
  let filterSoundwave = [...soundwave];

  filterSoundwave.map(function(i) {
    let index = filterSoundwave.indexOf(i);
    if (i > upperLimit) {
      filterSoundwave[index] = upperLimit;
    }
    if (i < lowerLimit) {
      filterSoundwave[index] = lowerLimit;
    }
  });
  return filterSoundwave;
}

module.exports = bassfilter;
