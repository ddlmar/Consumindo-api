const tempo = (req, res) => {
  const dynamicData = newData();
  res.json({
    date: dynamicData.toGMTString()
  })
}

export default tempo;