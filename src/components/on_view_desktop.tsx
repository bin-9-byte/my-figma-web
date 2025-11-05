import React from 'react';

const OnViewDesktop: React.FC = () => {
  return (
    <div className="w-[1440px] h-[2828px] bg-white inline-flex flex-col justify-start items-start">
      <div className="self-stretch h-20 px-14 flex justify-between items-center gap-2">
        <div className="w-20 h-6 bg-black" />
        <div className="flex justify-start items-center gap-8">
          <div className="justify-center text-blue-700 text-sm font-normal font-['Rethink_Sans'] leading-4">On View</div>
          <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">About</div>
          <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">Tickets</div>
        </div>
      </div>
      <div className="self-stretch px-14 pt-16 pb-20 flex flex-col justify-start items-center gap-10">
        <div className="self-stretch justify-center text-black text-4xl font-medium font-['Rethink_Sans'] leading-10">On View</div>
        <div className="self-stretch justify-center text-black text-xl font-normal font-['Spectral'] leading-7">Explore our current exhibitions showcasing innovative works from diverse artistic voices.</div>
      </div>
      <div className="self-stretch px-14 pb-20 flex flex-col justify-start items-start gap-14">
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-blue-700 text-sm font-normal font-['Rethink_Sans'] leading-4">CURRENT EXHIBITION</div>
            <div className="self-stretch justify-center text-black text-3xl font-medium font-['Rethink_Sans'] leading-8">Fractured Realities</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center gap-2">
            <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">April 15 – June 30, 2024</div>
            <div className="justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">ARTIST TALK: MAY 18, 2024 • 6:00 PM</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row justify-start items-start gap-6">
          <img className="w-[830px] h-[600px] relative rounded-sm" src="https://placehold.co/830x600" />
          <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">"Fractured Realities" is a compelling group exhibition that explores the multifaceted nature of perception and reality in our increasingly digital world. Curated by Juno Frost, this exhibition brings together fifteen international artists whose works challenge viewers to question their understanding of truth, identity, and existence through a variety of mediums including painting, sculpture, digital art, and mixed media installations.</div>
            <div className="self-stretch justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">The artists featured in "Fractured Realities" navigate the complexities of contemporary life, examining how technology, social media, and global connectivity have fragmented our collective experience. Their works serve as both mirrors and windows—reflecting the fractured state of modern consciousness while offering glimpses into alternative ways of seeing and being.</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="justify-center text-black text-base font-medium font-['Rethink_Sans'] leading-6">Featured Artists:</div>
              <div className="justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">Elena Rodriguez, Marcus Chen, Aisha Patel, Gabriel Okafor, Lila Kim, Takeshi Mori, Amara Diop, Nikhil Sharma, Sofia Almeida, Lucas Wei, Zara Hassan, Javi Cortez, Nadia Volkov, Leo Bennett, and Maja Kowalski</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-14 py-20 border-t border-neutral-200 flex flex-col justify-start items-start gap-14">
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-blue-700 text-sm font-normal font-['Rethink_Sans'] leading-4">CURRENT EXHIBITION</div>
            <div className="self-stretch justify-center text-black text-3xl font-medium font-['Rethink_Sans'] leading-8">Echoes of the Void</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center gap-2">
            <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">May 5 – July 15, 2024</div>
            <div className="justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">GALLERY TOUR: EVERY SATURDAY • 2:00 PM</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row justify-start items-start gap-6">
          <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">"Echoes of the Void" presents a mesmerizing solo exhibition by acclaimed sculptor Elias Moore, featuring twenty new large-scale installations that explore the concept of absence and presence in the digital age. Through his innovative use of sustainable materials and interactive elements, Moore creates immersive environments that challenge viewers to confront the quiet spaces between our hyper-connected lives.</div>
            <div className="self-stretch justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">Moore's work investigates how technology has transformed our relationship with silence, solitude, and nothingness. His sculptures, which combine traditional craftsmanship with cutting-edge technology, invite viewers to slow down, reflect, and engage with the subtle interplay between form and emptiness.</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="justify-center text-black text-base font-medium font-['Rethink_Sans'] leading-6">About the Artist:</div>
              <div className="justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">Elias Moore (b. 1978) is a Brooklyn-based sculptor whose work has been exhibited internationally. His groundbreaking approach to materials and space has earned him critical acclaim, including the prestigious National Sculpture Prize in 2020. Moore's installations often incorporate sound, light, and movement, creating multi-sensory experiences that blur the boundaries between art and viewer.</div>
            </div>
          </div>
          <img className="w-[830px] h-[600px] relative rounded-sm" src="https://placehold.co/830x600" />
        </div>
      </div>
      <div className="self-stretch px-14 py-20 border-t border-neutral-200 flex flex-col justify-start items-start gap-14">
        <div className="self-stretch flex flex-col justify-start items-start gap-8">
          <div className="self-stretch flex flex-col justify-start items-start gap-2">
            <div className="justify-center text-blue-700 text-sm font-normal font-['Rethink_Sans'] leading-4">UPCOMING EXHIBITION</div>
            <div className="self-stretch justify-center text-black text-3xl font-medium font-['Rethink_Sans'] leading-8">Rewired Perceptions</div>
          </div>
          <div className="self-stretch inline-flex justify-between items-center gap-2">
            <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">July 10 – September 22, 2024</div>
            <div className="justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">OPENING RECEPTION: JULY 10, 2024 • 6:00 – 9:00 PM</div>
          </div>
        </div>
        <div className="self-stretch flex flex-row justify-start items-start gap-6">
          <img className="w-[830px] h-[600px] relative rounded-sm" src="https://placehold.co/830x600" />
          <div className="flex-1 self-stretch flex flex-col justify-start items-start gap-8">
            <div className="self-stretch justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">"Rewired Perceptions" is an immersive multimedia exhibition that examines how digital technologies are reshaping our understanding of art, identity, and human connection. This forward-thinking showcase brings together emerging and established artists working at the intersection of art, technology, and human experience.</div>
            <div className="self-stretch justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">The exhibition features interactive installations, virtual reality experiences, AI-generated art, and digital performances that challenge traditional notions of authorship, creativity, and spectatorship. Curated by Dax Miller, "Rewired Perceptions" invites visitors to engage with artworks that respond to their presence, adapt to their behaviors, and evolve through their interactions.</div>
            <div className="self-stretch flex flex-col justify-start items-start gap-4">
              <div className="justify-center text-black text-base font-medium font-['Rethink_Sans'] leading-6">Special Programs:</div>
              <div className="justify-center text-black text-base font-normal font-['Rethink_Sans'] leading-6">• Digital Art Symposium: July 20, 2024<br/>• Artist Workshop Series: August 3 – August 24, 2024<br/>• Closing Night Performance: September 21, 2024</div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-14 py-20 border-t border-neutral-200 flex flex-col justify-start items-start gap-14">
        <div className="self-stretch flex flex-col justify-start items-center gap-6">
          <div className="self-stretch justify-center text-black text-3xl font-medium font-['Rethink_Sans'] leading-8">Plan Your Visit</div>
          <div className="self-stretch justify-center text-black text-lg font-normal font-['Spectral'] leading-6">Experience our exhibitions in person and join us for special events, talks, and tours.</div>
        </div>
        <div className="self-stretch inline-flex justify-between items-center gap-2">
          <div className="self-stretch justify-center text-blue-700 text-xl font-medium font-['Rethink_Sans'] leading-6">Get Tickets</div>
          <div className="h-8 w-8 rounded-full bg-blue-700 flex justify-center items-center gap-2">
            <div className="flex-1 self-stretch relative">
              <div className="w-4 h-0.5 left-[16px] top-[15.5px] absolute bg-white" />
              <div className="w-0.5 h-4 left-[15.5px] top-[16px] absolute bg-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch px-14 py-16 border-t border-neutral-200 flex flex-col justify-start items-start gap-10">
        <div className="self-stretch inline-flex justify-between items-start gap-2">
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-12">
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-center text-black text-lg font-medium font-['Rethink_Sans'] leading-6">Collectiv Gallery</div>
              <div className="self-stretch justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">147 Candyland Lane,<br/>Brooklyn, NY<br/>11211</div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">Hours:</div>
              <div className="self-stretch justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">Monday: Closed<br/>Tuesday – Friday: 11:00 AM – 7:00 PM<br/>Saturday – Sunday: 10:00 AM – 8:00 PM</div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">Admission:</div>
              <div className="self-stretch justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">General: $15<br/>Students & Seniors: $10<br/>Children under 12: Free</div>
            </div>
          </div>
          <div className="flex-1 inline-flex flex-col justify-start items-start gap-12">
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">Upcoming Events</div>
              <div className="self-stretch justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">Artist Talk: May 18, 2024<br/>Gallery Tour: Every Saturday<br/>Digital Art Symposium: July 20, 2024</div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">Membership</div>
              <div className="self-stretch justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">Saturday and Sunday mornings from 9:30 to 10:30 a.m., select galleries are open to members and their guests only.</div>
            </div>
            <div className="inline-flex flex-col justify-start items-start gap-6">
              <div className="self-stretch justify-center text-black text-sm font-medium font-['Rethink_Sans'] leading-4">Follow Us</div>
              <div className="flex justify-start items-start gap-6">
                <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">Twitter</div>
                <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">Instagram</div>
                <div className="justify-center text-black text-sm font-normal font-['Rethink_Sans'] leading-4">Facebook</div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch pt-10 border-t border-neutral-200 inline-flex justify-between items-center gap-2">
          <div className="justify-center text-stone-500 text-xs font-normal font-['Rethink_Sans'] leading-4">©All Rights Reserved</div>
          <div className="flex justify-start items-start gap-8">
            <div className="justify-center text-stone-500 text-xs font-normal font-['Rethink_Sans'] leading-4">Accessibility</div>
            <div className="justify-center text-stone-500 text-xs font-normal font-['Rethink_Sans'] leading-4">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnViewDesktop;