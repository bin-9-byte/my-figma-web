import React from 'react';
import styles from './FooterSet.module.css';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <div className={`${styles.footer} ${className}`}>
      <div className={styles.property1desktop}>
        <div className={styles.content}>
          <div className={styles.contact}>
            <div className={styles.address}>
              <div className={styles.collectivGallery}>Collectiv Gallery</div>
              <div className={styles.candylandLane}>147 Candyland Lane,</div>
              <div className={styles.candylandLane}>{`Brooklyn, NY `}</div>
              <div className={styles.candylandLane}>11211</div>
            </div>
            <div className={styles.address}>
              <div className={styles.candylandLane}>{`(646) 555-4567 `}</div>
              <div className={styles.candylandLane}>hello@figma.com</div>
            </div>
          </div>
          <div className={styles.hours}>
            <div className={styles.collectivGallery}>Hours:</div>
            <div className={styles.candylandLane}>Monday: Closed</div>
            <div className={styles.candylandLane}>
              <p className={styles.tuesdayFriday}>Tuesday – Friday:</p>
              <p className={styles.tuesdayFriday}>11:00 AM – 7:00 PM</p>
            </div>
            <div className={styles.candylandLane}>
              <p className={styles.tuesdayFriday}>{`Saturday – Sunday: `}</p>
              <p className={styles.tuesdayFriday}>10:00 AM – 8:00 PM</p>
            </div>
          </div>
          <div className={styles.hours}>
            <div className={styles.collectivGallery}>Admission:</div>
            <div className={styles.candylandLane}>General: $15</div>
            <div className={styles.candylandLane}>{`Students & Seniors: $10`}</div>
            <div className={styles.candylandLane}>Children under 12: Free</div>
          </div>
          <div className={styles.hours}>
            <div className={styles.collectivGallery}>Membership</div>
            <div className={styles.candylandLane}>Saturday and Sunday mornings from 9:30 to 10:30 a.m., select galleries are open to members and their guests only.</div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.social}>
            <a className={styles.twitter} href="https://x.com/figma" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className={styles.twitter} href="https://www.instagram.com/figma/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className={styles.twitter} href="https://www.facebook.com/figmadesign/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className={styles.legal}>
            <div className={styles.allRightsReserved}>©All Rights Reserved</div>
            <div className={styles.allRightsReserved}>Accessibility</div>
            <div className={styles.allRightsReserved}>Privacy Policy</div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <img className={styles.arrowIcon} alt="Back to top" src="/vite.svg" />
          <img className={styles.logoIcon} alt="Logo" src="/vite.svg" />
        </div>
      </div>
      <div className={styles.property1tablet}>
        <div className={styles.content}>
          <div className={styles.contact}>
            <div className={styles.address}>
              <div className={styles.collectivGallery}>Collectiv Gallery</div>
              <div className={styles.candylandLane}>147 Candyland Lane,</div>
              <div className={styles.candylandLane}>{`Brooklyn, NY `}</div>
              <div className={styles.candylandLane}>11211</div>
            </div>
            <div className={styles.address}>
              <div className={styles.candylandLane}>{`(646) 555-4567 `}</div>
              <div className={styles.candylandLane}>hello@figma.com</div>
            </div>
          </div>
          <div className={styles.hours}>
            <div className={styles.collectivGallery}>Hours:</div>
            <div className={styles.candylandLane}>Monday: Closed</div>
            <div className={styles.candylandLane}>
              <p className={styles.tuesdayFriday}>Tuesday – Friday:</p>
              <p className={styles.tuesdayFriday}>11:00 AM – 7:00 PM</p>
            </div>
            <div className={styles.candylandLane}>
              <p className={styles.tuesdayFriday}>{`Saturday – Sunday: `}</p>
              <p className={styles.tuesdayFriday}>10:00 AM – 8:00 PM</p>
            </div>
          </div>
          <div className={styles.hours}>
            <div className={styles.collectivGallery}>Admission:</div>
            <div className={styles.candylandLane}>General: $15</div>
            <div className={styles.candylandLane}>{`Students & Seniors: $10`}</div>
            <div className={styles.candylandLane}>Children under 12: Free</div>
          </div>
          <div className={styles.hours}>
            <div className={styles.collectivGallery}>Membership</div>
            <div className={styles.candylandLane}>Saturday and Sunday mornings from 9:30 to 10:30 a.m., select galleries are open to members and their guests only.</div>
          </div>
        </div>
        <div className={styles.links}>
          <div className={styles.social}>
            <a className={styles.twitter} href="https://x.com/figma" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className={styles.twitter} href="https://www.instagram.com/figma/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className={styles.twitter} href="https://www.facebook.com/figmadesign/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className={styles.legal}>
            <div className={styles.allRightsReserved}>©All Rights Reserved</div>
            <div className={styles.allRightsReserved}>Accessibility</div>
            <div className={styles.allRightsReserved}>Privacy Policy</div>
          </div>
        </div>
        <div className={styles.footerBottomSection}>
          <img className={styles.footerArrowIcon} alt="Back to top" src="/vite.svg" />
          <img className={styles.footerLogoIcon} alt="Logo" src="/vite.svg" />
        </div>
      </div>
      <div className={styles.property1mobile}>
        <div className={styles.content2}>
          <div className={styles.text}>
            <div className={styles.hours}>
              <div className={styles.collectivGallery}>Collectiv Gallery</div>
              <div className={styles.candylandLane}>147 Candyland Lane,</div>
              <div className={styles.candylandLane}>{`Brooklyn, NY `}</div>
              <div className={styles.candylandLane}>11211</div>
            </div>
            <div className={styles.hours}>
              <div className={styles.collectivGallery}>Hours:</div>
              <div className={styles.candylandLane}>Monday: Closed</div>
              <div className={styles.candylandLane}>
                <p className={styles.tuesdayFriday}>Tuesday – Friday:</p>
                <p className={styles.tuesdayFriday}>11:00 AM – 7:00 PM</p>
              </div>
              <div className={styles.candylandLane}>
                <p className={styles.tuesdayFriday}>{`Saturday – Sunday: `}</p>
                <p className={styles.tuesdayFriday}>10:00 AM – 8:00 PM</p>
              </div>
            </div>
          </div>
          <div className={styles.text}>
            <div className={styles.hours}>
              <div className={styles.collectivGallery}>Admission:</div>
              <div className={styles.candylandLane}>General: $15</div>
              <div className={styles.candylandLane}>{`Students & Seniors: $10`}</div>
              <div className={styles.candylandLane}>Children under 12: Free</div>
            </div>
            <div className={styles.hours}>
              <div className={styles.collectivGallery}>Membership</div>
              <div className={styles.candylandLane}>Saturday and Sunday mornings from 9:30 to 10:30 a.m., select galleries are open to members and their guests only.</div>
            </div>
          </div>
          <div className={styles.address}>
            <div className={styles.candylandLane}>{`(646) 555-4567 `}</div>
            <div className={styles.candylandLane}>hello@figma.com</div>
          </div>
        </div>
        <div className={styles.links2}>
          <div className={styles.social}>
            <a className={styles.twitter} href="https://x.com/figma" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a className={styles.twitter} href="https://www.instagram.com/figma/" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className={styles.twitter} href="https://www.facebook.com/figmadesign/" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className={styles.legal}>
            <div className={styles.allRightsReserved}>©All Rights Reserved</div>
            <div className={styles.allRightsReserved}>Accessibility</div>
            <div className={styles.allRightsReserved}>Privacy Policy</div>
          </div>
        </div>
        <div className={styles.bottomSection2}>
          <img className={styles.arrowIcon2} alt="Back to top" src="/vite.svg" />
          <img className={styles.logoIcon2} alt="Logo" src="/vite.svg" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
