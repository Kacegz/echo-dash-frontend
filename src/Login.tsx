export default function Login() {
  return (
    <>
      <form action="/" method="post">
        <div className="mb-2">
          <label htmlFor="username">Username</label>
          <br />
          <input
            type="text"
            name="username"
            id="username"
            className="form-input"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <br />
          <input type="password" name="password" id="password" />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
