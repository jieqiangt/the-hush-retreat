export default function Footer(props) {
  
    const curYear = new Date().getFullYear();

  return (
    <footer className={`footer ${props.className}`}>
      Footer Logo <br />
      &copy;{curYear} by The Hust Retreats
    </footer>
  );
}
