class productControllers {
  getProduct = (req, res) => {
    const name = 'A';
    const token = `Get ${name}`;
    res.status(200).json({ message: 'product' });
  }
}
export default new productControllers();
