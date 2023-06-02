export default function LoginPage(params) {
  return (
    <form>
      <label>
        Email
        <input type="text" />
      </label>

      <label>
        Password
        <input type="password" />
      </label>

      <button type="submit">Send</button>
    </form>
  );
}
