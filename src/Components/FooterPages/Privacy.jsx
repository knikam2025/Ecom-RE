import React from 'react'
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function Privacy() {
  return (
    <Container className="mt-5">
      <h1>Privacy Policy</h1>
      <p>Your privacy is important to us. It is our policy to respect your privacy regarding any information we may collect from you across our website, <Link to="/http://www.FelixIt.com">http://www.FelixIt.com</Link>, and other sites we own and operate.</p>
      
      <h2>Information we collect</h2>
      <p>We only collect information about you if we have a reason to do so—for example, to provide our services, to communicate with you, or to make our services better.</p>
      
      <h2>Security</h2>
      <p>We value your trust in providing us your Personal Information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security.</p>
      
      <h2>Changes to This Privacy Policy</h2>
      <p>We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page.</p>
      
      <h2>Contact Us</h2>
      <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us.</p>
    </Container>
  );
}

export default Privacy;
