import React from 'react';

// 领导团队数据
const leadershipData = [
  { name: 'Emmett King', position: 'Executive Director' },
  { name: 'Juno Frost', position: 'Senior Curator' },
  { name: 'Elias Moore', position: 'Archive Director' },
  { name: 'Dax Miller', position: 'Communications Director' },
  { name: 'Quinn Beck', position: 'Events Director' },
  { name: 'Gia Stone', position: 'Chief Investment Officer' }
];

// 领导团队成员组件
const TeamMember: React.FC<{ name: string; position: string }> = ({ name, position }) => (
  <div className="flex-1 inline-flex flex-col justify-start items-start gap-5">
    <img 
      className="self-stretch h-80 relative rounded-sm object-cover" 
      src="https://placehold.co/308x315" 
      alt={name} 
    />
    <div className="self-stretch flex flex-col justify-start items-start gap-2">
      <div className="justify-center text-black text-base font-medium font-['Rethink_Sans'] leading-5">{name}</div>
      <div className="justify-center text-black text-base font-normal font-['Spectral'] leading-4">{position}</div>
    </div>
  </div>
);

// 导航链接组件
const NavLink: React.FC<{ title: string; isActive?: boolean }> = ({ title, isActive = false }) => (
  <div className={`w-14 h-4 relative cursor-pointer ${isActive ? 'text-blue-700' : 'text-black'}`}>
    <div className="left-0 top-0 absolute justify-center text-base font-normal font-['Rethink_Sans'] leading-4">
      {title}
    </div>
  </div>
);

// 信息卡片组件
const InfoCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="w-48 inline-flex flex-col justify-start items-start gap-4">
    <div className="self-stretch justify-center text-black text-xs font-medium font-['Rethink_Sans'] leading-4">{title}</div>
    {children}
  </div>
);

const AboutDesktop: React.FC = () => {
  return (
    <div className="w-full max-w-[1280px] bg-white inline-flex justify-between items-start overflow-hidden mx-auto">
      {/* 侧边导航 */}
      <div className="w-72 p-4 bg-white inline-flex flex-col justify-start items-start gap-28">
        <div className="self-stretch h-14 inline-flex justify-start items-start gap-2.5">
          <div className="w-16 h-4 bg-black" aria-label="Collectiv Gallery Logo" />
        </div>
        <div className="self-stretch flex flex-col justify-start items-start gap-14">
          <div className="self-stretch flex flex-col justify-start items-start gap-5">
            <NavLink title="On View" />
            <NavLink title="About" isActive />
          </div>
          <NavLink title="Tickets" isActive />
        
        </div>
      </div>
      <div className="flex-1 bg-white inline-flex flex-col justify-start items-start gap-14 overflow-hidden">
        {/* 头部介绍 */}
        <section className="self-stretch pr-5 pb-10 flex flex-col justify-start items-start gap-14">
          <div className="self-stretch pt-14 border-t border-neutral-200 flex flex-col justify-start items-start gap-10">
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <h1 className="self-stretch justify-center text-black text-4xl font-normal font-['Rethink_Sans'] leading-10">About Collectiv</h1>
              <p className="self-stretch justify-center text-black text-4xl font-normal font-['Spectral'] leading-[48px]">
                Nestled in the heart of Brooklyn, our contemporary art gallery is a vibrant space dedicated to showcasing innovative and thought-provoking works by emerging and established artists.
              </p>
            </div>
          </div>
          <img 
            className="self-stretch h-[697.87px] relative rounded-sm object-cover" 
            src="https://placehold.co/965x698" 
            alt="Collectiv Gallery interior" 
          />
        </section>
        
        {/* 使命部分 */}
        <section className="self-stretch pr-5 pt-14 pb-6 border-t border-neutral-200 flex flex-col justify-start items-start gap-14">
          <h2 className="self-stretch justify-center text-black text-3xl font-medium font-['Rethink_Sans'] leading-8">Our Mission</h2>
          <div className="self-stretch justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-5">
            <p className="mb-4">
              At Collectiv, our mission is to create a space where innovation and creativity are pushed to the forefront of contemporary art. We aim to support emerging and established artists whose works challenge norms, spark dialogue, and explore the complexities of modern life. By curating thought-provoking exhibitions that span a wide range of mediums and perspectives, we encourage visitors to question, reflect, and engage with the art in a way that is both intellectually stimulating and emotionally resonant.
            </p>
            <p>
              We believe that art has the power to inspire change and foster meaningful connections, not only within the art world but across diverse communities. Collectiv is committed to nurturing an environment that is inclusive, experimental, and forward-thinking—one that welcomes both new ideas and established voices. Through our exhibitions, artist talks, workshops, and other dynamic programs, we strive to foster a creative ecosystem that amplifies underrepresented voices and champions the future of contemporary art.
            </p>
          </div>
        </section>
        
        {/* 访问信息 */}
        <section className="self-stretch pr-5 py-14 border-t border-neutral-200 flex flex-col justify-start items-start gap-14">
          <h2 className="self-stretch justify-center text-black text-3xl font-medium font-['Rethink_Sans'] leading-8">Visit</h2>
          <div className="self-stretch inline-flex justify-start items-start gap-5 flex-wrap">
            <div className="w-96 inline-flex flex-col justify-start items-start gap-14">
              <div className="w-96 inline-flex justify-between items-start flex-wrap">
                <InfoCard title="Collectiv Gallery">
                  <div className="w-48 justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">
                    147 Candyland Lane<br/>
                    Brooklyn, NY<br/>
                    11211 
                  </div>
                </InfoCard>
                
                <InfoCard title="Hours">
                  <div className="flex flex-col justify-start items-start gap-2">
                    <div className="w-48 justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">Monday: Closed</div>
                    <div className="w-48 justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">Tuesday – Friday: 11:00 AM – 7:00 PM</div>
                    <div className="w-48 justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">Saturday – Sunday: 10:00 AM – 8:00 PM</div>
                  </div>
                </InfoCard>
              </div>
              
              <div className="w-96 inline-flex justify-between items-start flex-wrap">
                <InfoCard title="Admission:">
                  <div className="self-stretch flex flex-col justify-start items-start gap-2">
                    <div className="self-stretch justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">General: $15</div>
                    <div className="self-stretch justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">Students & Seniors: $10</div>
                    <div className="self-stretch justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">Children under 12: Free</div>
                  </div>
                </InfoCard>
                
                <InfoCard title="Parking">
                  <div className="self-stretch flex flex-col justify-start items-start gap-4">
                    <div className="self-stretch justify-center text-stone-500 text-base font-normal font-['Rethink_Sans'] leading-5">
                      21st St. Garage<br/>
                      Romain St. Parking<br/>
                      Street parking
                    </div>
                  </div>
                </InfoCard>
              </div>
            </div>
            <img 
              className="flex-1 h-[567.47px] relative rounded-sm object-cover" 
              src="https://placehold.co/545x567" 
              alt="Gallery entrance" 
            />
          </div>
        </section>
        
        {/* 领导团队 */}
        <section className="self-stretch pr-5 pt-14 pb-10 border-t border-neutral-200 flex flex-col justify-start items-start gap-14">
          <h2 className="self-stretch justify-center text-black text-3xl font-medium font-['Rethink_Sans'] leading-8">Leadership</h2>
          
          {/* 第一行团队成员 */}
          <div className="self-stretch inline-flex justify-start items-start gap-5 flex-wrap">
            {leadershipData.slice(0, 3).map((member, index) => (
              <TeamMember key={`${member.name}-${index}`} name={member.name} position={member.position} />
            ))}
          </div>
          
          {/* 第二行团队成员 */}
          <div className="self-stretch inline-flex justify-start items-start gap-5 flex-wrap">
            {leadershipData.slice(3).map((member, index) => (
              <TeamMember key={`${member.name}-${index}`} name={member.name} position={member.position} />
            ))}
          </div>
        </section>
        
        {/* 页脚 */}
        <footer data-property-1="Desktop" className="self-stretch pr-5 pt-14 border-t border-neutral-200 flex flex-col justify-center items-start gap-36">
          <div className="self-stretch inline-flex justify-start items-start gap-10 flex-wrap">
            <div className="flex-1 self-stretch inline-flex flex-col justify-start items-start gap-24">
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <div className="self-stretch justify-center text-black text-xs font-medium font-['Rethink_Sans'] leading-4">Collectiv Gallery</div>
                <address className="not-italic">
                  <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">147 Candyland Lane,</div>
                  <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">Brooklyn, NY </div>
                  <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">11211</div>
                </address>
              </div>
              <div className="self-stretch flex flex-col justify-start items-start gap-4">
                <a href="tel:+16465554567" className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4 hover:underline">(646) 555-4567 </a>
                <a href="mailto:hello@figma.com" className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4 hover:underline">hello@figma.com</a>
              </div>
            </div>
            
            <InfoCard title="Hours:">
              <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">Monday: Closed</div>
              <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">Tuesday – Friday: 11:00 AM – 7:00 PM</div>
              <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">Saturday – Sunday: 10:00 AM – 8:00 PM</div>
            </InfoCard>
            
            <InfoCard title="Admission:">
              <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">General: $15</div>
              <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">Students & Seniors: $10</div>
              <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">Children under 12: Free</div>
            </InfoCard>
            
            <InfoCard title="Membership">
              <div className="self-stretch justify-center text-black text-xs font-normal font-['Rethink_Sans'] leading-4">
                Saturday and Sunday mornings from 9:30 to 10:30 a.m., select galleries are open to members and their guests only.
              </div>
            </InfoCard>
          </div>
          
          <div className="self-stretch inline-flex justify-between items-start flex-wrap">
            <div className="flex justify-start items-start gap-2.5">
              <a href="#" className="justify-center text-black text-xs font-medium font-['Rethink_Sans'] leading-4 hover:underline">Twitter</a>
              <a href="#" className="justify-center text-black text-xs font-medium font-['Rethink_Sans'] leading-4 hover:underline">Instagram</a>
              <a href="#" className="justify-center text-black text-xs font-medium font-['Rethink_Sans'] leading-4 hover:underline">Facebook</a>
            </div>
            <div className="flex justify-start items-start gap-2.5">
              <div className="justify-center text-stone-500 text-xs font-medium font-['Rethink_Sans'] leading-4">©All Rights Reserved</div>
              <a href="#" className="justify-center text-stone-500 text-xs font-medium font-['Rethink_Sans'] leading-4 hover:underline">Accessibility</a>
              <a href="#" className="justify-center text-stone-500 text-xs font-medium font-['Rethink_Sans'] leading-4 hover:underline">Privacy Policy</a>
            </div>
          </div>
          
          <div className="self-stretch px-2.5 py-20 border-t border-neutral-200 inline-flex justify-between items-center">
            <div className="w-96 h-96 rounded-full flex justify-center items-center gap-2.5">
              <div className="flex-1 self-stretch bg-blue-700 rounded-full flex justify-center items-center gap-2">
                <div className="flex-1 self-stretch relative">
                  <div className="w-56 h-14 left-[108px] top-[192px] absolute bg-white" aria-hidden="true" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="self-stretch px-2.5 py-20 border-t border-neutral-200 inline-flex justify-between items-center">
            <div className="w-96 h-96 outline outline-1 outline-offset-[-1px] outline-neutral-200 flex justify-center items-center gap-2.5">
              <div className="w-9 h-6 bg-black" />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AboutDesktop;