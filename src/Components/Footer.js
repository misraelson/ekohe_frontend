import React from 'react';
import '../sass/_footer.scss';
import { ReactComponent as Facebook } from '../icons/facebook.svg';
import { ReactComponent as Instagram } from '../icons/instagram.svg';
import { ReactComponent as Soundcloud } from '../icons/soundcloud.svg';
import { ReactComponent as Spotify } from '../icons/spotify.svg';
import { ReactComponent as Twitter } from '../icons/twitter.svg';

function Footer() {
  return (
    <div className="footer">
      <div className="terms">
        <span>Terms of Services</span>
        <span>Contact Us</span>
      </div>
      <div className="logos">
        <Facebook />
        <Twitter />
        <Instagram />
        <Soundcloud />
        <Spotify />
      </div>
    </div>
  );
}
export default Footer