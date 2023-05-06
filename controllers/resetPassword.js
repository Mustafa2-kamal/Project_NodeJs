

const handleResetPassword = async (req, res) => {

    const email = req.params.userId;

    res.status(200).send(`
    <form method="post" action='/resetPassword/${email}'>
      <input type="hidden"  >
      <label>
        New password:
        <input type="password" name="password" required>
      </label>
      <label>
      Confirm password:
      <input type="password" name="password" required>
    </label>
      <button type="submit">Reset password</button>
    </form>
  `);

}

module.exports = { handleResetPassword  };