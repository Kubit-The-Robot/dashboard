import OverReact from 'overreact';

import './footer.scss';

function Footer(props) {
  return (
    <section {...props} className="footer">
      <p>© 2020 | Kubit, The Robot. Todos os direitos reservados.</p>
    </section>
  );
}

export default Footer;
