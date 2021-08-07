export default function Link({ href, text }) {
  return (
    <a
      className="underline"
      target="_blank"
      href={href}
      rel="noreferrer"
    >
      {text}
    </a>
  );
}
