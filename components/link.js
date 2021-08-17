const Link = ({ href, text }) => (
  <a
    className="underline"
    target="_blank"
    href={href}
    rel="noreferrer"
  >
    {text}
  </a>
);

export default Link;
