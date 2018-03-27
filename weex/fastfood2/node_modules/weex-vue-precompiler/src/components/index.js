module.exports = {
  div: require('./div').processDiv,
  figure: require('./image').processImage,
  p: require('./text').processText,
  a: require('./a').processA,
  section: require('./cell').processCell
}
