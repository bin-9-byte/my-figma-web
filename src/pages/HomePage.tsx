import type { FunctionComponent } from 'react';
import styles from '../components/Desktop.module.css';


const Desktop = () => {
	return (
		<div className={styles.desktop}>
			<div className={styles.component1}>
				<div className={styles.logo}>
					<img className={styles.vectorIcon} src="/src/assets/icons/Vector1.svg" alt="Logo" />
				</div>
				<div className={styles.links}>
					<div className={styles.content}>
						<div className={styles.navLink}>
							<div className={styles.onView}>On View</div>
						</div>
						<div className={styles.navLink}>
							<div className={styles.onView}>About</div>
						</div>
					</div>
					<div className={styles.pageLink}>
						<a className={styles.seeMore} href="https://www.figma.com/sites" target="_blank">Tickets</a>
					</div>
				</div>
			</div>
			<div className={styles.main}>
				<div className={styles.events}>
					<div className={styles.events2}>Events</div>
					<div className={styles.eventParent}>
						<div className={styles.event}>
							<div className={styles.description}>
								<div className={styles.fracturedRealities}>Fractured Realities</div>
								<i className={styles.mar27th7pm}>Mar 27th, 7pm</i>
							</div>
							<a className={styles.workshop} href="https://figma.com/sites" target="_blank">Workshop</a>
						</div>
						<div className={styles.event}>
							<div className={styles.description}>
								<div className={styles.fracturedRealities}>Echoes of the Void</div>
								<i className={styles.mar27th7pm}>Apr 11th, 11am</i>
							</div>
							<div className={styles.workshop2}>Artist Talk</div>
						</div>
						<div className={styles.event}>
							<div className={styles.description}>
								<div className={styles.fracturedRealities}>Rewired Perceptions</div>
								<i className={styles.mar27th7pm}>May 2nd, 6pm</i>
							</div>
							<div className={styles.workshop2}>Lecture</div>
						</div>
					</div>
					<div className={styles.event4}>
						<div className={styles.description}>
							<div className={styles.fracturedRealities}>Fractured Realities</div>
							<i className={styles.mar27th7pm}>Mar 27th, 7pm</i>
						</div>
						<div className={styles.workshop2}>Workshop</div>
					</div>
					<div className={styles.event4}>
						<div className={styles.description}>
							<div className={styles.fracturedRealities}>Echoes of the Void</div>
							<i className={styles.mar27th7pm}>Apr 11th, 11am</i>
						</div>
						<div className={styles.workshop2}>Artist Talk</div>
					</div>
					<div className={styles.event4}>
						<div className={styles.description}>
							<div className={styles.fracturedRealities}>Rewired Perceptions</div>
							<i className={styles.mar27th7pm}>May 2nd, 6pm</i>
						</div>
						<div className={styles.workshop2}>Lecture</div>
					</div>
				</div>
				<div className={styles.intro}>
					<div className={styles.copy}>
						<div className={styles.collectivGallery}>Collectiv Gallery</div>
						<div className={styles.aCenterFor}>A center for innovative art, offering a dynamic space for both emerging and established artists.</div>
					</div>
					<img className={styles.imageIcon} alt="" />
				</div>
				<div className={styles.calendar}>
					<div className={styles.title}>
						<div className={styles.photography}>Photography</div>
						<div className={styles.pageLink2}>
							<div className={styles.seeMore2}>See more</div>
						</div>
					</div>
					<div className={styles.imageBlock}>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Eclipsed Horizons</i>
								<div className={styles.lenaKoval}>Lena Koval</div>
							</div>
						</div>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Nighttime Reverie</i>
								<div className={styles.lenaKoval}>Miles Grant</div>
							</div>
						</div>
					</div>
					<div className={styles.title}>
						<div className={styles.photography}>{`Painting & Drawing`}</div>
						<div className={styles.pageLink2}>
							<div className={styles.seeMore2}>See more</div>
						</div>
					</div>
					<div className={styles.imageBlock}>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Tidal Memory</i>
								<div className={styles.lenaKoval}>Sienna Mori</div>
							</div>
						</div>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Digital Afterglow</i>
								<div className={styles.lenaKoval}>Harper Quinn</div>
							</div>
						</div>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Urban Disruption</i>
								<div className={styles.lenaKoval}>Dominic Ward</div>
							</div>
						</div>
					</div>
					<div className={styles.title}>
						<div className={styles.photography}>Sculpture</div>
						<div className={styles.pageLink2}>
							<div className={styles.seeMore2}>See more</div>
						</div>
					</div>
					<div className={styles.imageBlock}>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Absence, Presence</i>
								<div className={styles.lenaKoval}>Simone Lee</div>
							</div>
						</div>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Turbulent Flow</i>
								<div className={styles.lenaKoval}>Kellen Vargas</div>
							</div>
						</div>
						<div className={styles.onViewModule}>
							<img className={styles.imageIcon} alt="" />
							<div className={styles.descriptionHover}>
								<i className={styles.eclipsedHorizons}>Electric Bloom</i>
								<div className={styles.lenaKoval}>Zane Wilder</div>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.calendar}>
					<div className={styles.thisMonth}>This Month</div>
					<div className={styles.thisMonthEvents}>
						<div className={styles.row1}>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Rhythms in Red</div>
									<i className={styles.mar27th7pm}>Mar 8th, 7pm</i>
								</div>
								<div className={styles.workshop7}>Lecture</div>
							</div>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Chasing Infinity</div>
									<i className={styles.mar27th7pm}>Mar 12th, 6pm</i>
								</div>
								<div className={styles.workshop7}>Artist Talk</div>
							</div>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Veins of the City</div>
									<i className={styles.mar27th7pm}>Mar 15th, 4pm</i>
								</div>
								<div className={styles.workshop7}>Workshop</div>
							</div>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Polarity Shift</div>
									<i className={styles.mar27th7pm}>Mar 16th, 5pm</i>
								</div>
								<div className={styles.workshop7}>Artist Talk</div>
							</div>
						</div>
						<div className={styles.row2}>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Invisible Threads</div>
									<i className={styles.mar27th7pm}>Mar 19th, 7pm</i>
								</div>
								<div className={styles.workshop7}>Workshop</div>
							</div>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Rebel Forms</div>
									<i className={styles.mar27th7pm}>Mar 22nd, 6pm</i>
								</div>
								<div className={styles.workshop7}>Workshop</div>
							</div>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Whispers in the Dark</div>
									<i className={styles.mar27th7pm}>Mar 24th, 7pm</i>
								</div>
								<div className={styles.workshop7}>Lecture</div>
							</div>
							<div className={styles.event7}>
								<div className={styles.description}>
									<div className={styles.fracturedRealities}>Abstract Geometry</div>
									<i className={styles.mar27th7pm}>Mar 27th, 5pm</i>
								</div>
								<div className={styles.workshop7}>Workshop</div>
							</div>
						</div>
					</div>
					<div className={styles.thisMonth}>Next Month</div>
					<div className={styles.row12}>
						<div className={styles.event15}>
							<div className={styles.description}>
								<div className={styles.fracturedRealities}>Fractured Realities</div>
								<i className={styles.mar27th7pm}>Mar 27th, 7pm</i>
							</div>
							<div className={styles.workshop7}>Workshop</div>
						</div>
						<div className={styles.event15}>
							<div className={styles.description}>
								<div className={styles.fracturedRealities}>Fractured Realities</div>
								<i className={styles.mar27th7pm}>Apr 11th, 4pm</i>
							</div>
							<div className={styles.workshop7}>Workshop</div>
						</div>
						<div className={styles.event15}>
							<div className={styles.description}>
								<div className={styles.fracturedRealities}>Fractured Realities</div>
								<i className={styles.mar27th7pm}>Apr 15th, 6pm</i>
							</div>
							<div className={styles.workshop7}>Lecture</div>
						</div>
						<div className={styles.event15}>
							<div className={styles.description}>
								<div className={styles.fracturedRealities}>Fractured Realities</div>
								<i className={styles.mar27th7pm}>Apr 22nd, 2pm</i>
							</div>
							<div className={styles.workshop7}>Workshop</div>
						</div>
					</div>
				</div>
				<div className={styles.about}>
					<img className={styles.imageIcon10} alt="" />
					<div className={styles.copy2}>
						<div className={styles.thisMonth}>About the Gallery</div>
						<div className={styles.collectivIsA}>Collectiv is a dynamic Brooklyn-based contemporary art gallery that fosters collaboration, experimentation, and dialogue through a diverse range of innovative exhibitions and programs.</div>
						<div className={styles.pageLink5}>
							<div className={styles.onView}>Learn more</div>
						</div>
					</div>
				</div>
				<div className={styles.footer}>
					<div className={styles.content2}>
						<div className={styles.contact}>
							<div className={styles.copy}>
								<div className={styles.collectivGallery2}>Collectiv Gallery</div>
								<div className={styles.candylandLane}>147 Candyland Lane,</div>
								<div className={styles.candylandLane}>{`Brooklyn, NY `}</div>
								<div className={styles.candylandLane}>11211</div>
							</div>
							<div className={styles.copy}>
								<div className={styles.candylandLane}>{`(646) 555-4567 `}</div>
								<div className={styles.candylandLane}>hello@figma.com</div>
							</div>
						</div>
						<div className={styles.hours}>
							<div className={styles.collectivGallery2}>Hours:</div>
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
							<div className={styles.collectivGallery2}>Admission:</div>
							<div className={styles.candylandLane}>General: $15</div>
							<div className={styles.candylandLane}>{`Students & Seniors: $10`}</div>
							<div className={styles.candylandLane}>Children under 12: Free</div>
						</div>
						<div className={styles.hours}>
							<div className={styles.collectivGallery2}>Membership</div>
							<div className={styles.candylandLane}>Saturday and Sunday mornings from 9:30 to 10:30 a.m., select galleries are open to members and their guests only.</div>
						</div>
					</div>
					<div className={styles.links2}>
						<div className={styles.social}>
							<a className={styles.twitter} href="https://x.com/figma" target="_blank">Twitter</a>
							<a className={styles.twitter} href="https://www.instagram.com/figma/" target="_blank">Instagram</a>
							<a className={styles.twitter} href="https://www.facebook.com/figmadesign/" target="_blank">Facebook</a>
						</div>
						<div className={styles.legal}>
							<div className={styles.allRightsReserved}>©All Rights Reserved</div>
							<div className={styles.allRightsReserved}>Accessibility</div>
							<div className={styles.allRightsReserved}>Privacy Policy</div>
						</div>
					</div>
					<div className={styles.bottomSection}>
						<img className={styles.arrowIcon} alt="" />
						<img className={styles.logoIcon} alt="" />
					</div>
				</div>
			</div>
		</div>);
};

export default Desktop as FunctionComponent;
