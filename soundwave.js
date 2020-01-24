function bassfilter(soundwave, upperLimit, lowerLimit) {
  let filterSoundwave;
  soundwave.forEach(function(i) {
    if (i > upperLimit) {
      filterSoundwave = [...soundwave];

      i = upperLimit;
      //   filterSoundwave.push(i);
      console.log(filterSoundwave, "----");
    }
  });
  return filterSoundwave;
}

module.exports = bassfilter;
