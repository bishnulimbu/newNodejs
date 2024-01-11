exports.evenFn = async (req, res) => {
  let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let evenNumbers = a.filter(num => num % 2 === 0);
  res.json({
    evenNumbers
  });
};
