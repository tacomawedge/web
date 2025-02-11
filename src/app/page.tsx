import { Metadata } from 'next';

import ExternalLink from '@/components/ExternalLink';
import { facebook, instagram, twitter } from '@/components/icons';

const socialStyle = {
  marginRight: '.75em',
};

const DETAILS = {
  title: 'Tacoma Wedge Historic District',
  description: 'Information About Tacoma’s Wedge Historic District',
};

export const metadata: Metadata = {
  ...DETAILS,
  openGraph: {
    ...DETAILS,
    images: '/wedgehistmap.jpg',
  },
};

export default function Home() {
  return (
    <>
      {/* <section>
        <h2>Upcoming Events</h2>

        <figure>
          <Image
            src={blockParty}
            alt='2024 Tacoma Wedge Block Party'
            placeholder='blur'
          />
          <figcaption>August 24, 2024 - Tacoma Wedge Block Party</figcaption>
        </figure>
      </section> */}

      <section>
        <h2>Related Links</h2>
        <ul>
          <li>
            <ExternalLink href='https://www.nps.gov/nr/feature/places/16000856.htm'>
              National Register of Historic Places Program - NPS
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href='https://www.cityoftacoma.org/government/city_departments/planning_and_development_services/historic_preservation/tacomas_historic_districts'>
              Tacoma&apos;s Historic Districts - City of Tacoma
            </ExternalLink>
          </li>
        </ul>
      </section>

      <section>
        <h2>Social</h2>

        <ExternalLink
          style={socialStyle}
          href='https://twitter.com/tacomawedge'
        >
          {twitter}
        </ExternalLink>

        <ExternalLink
          style={socialStyle}
          href='https://www.instagram.com/tacomawedge/'
        >
          {instagram}
        </ExternalLink>

        <ExternalLink
          style={socialStyle}
          href='https://www.facebook.com/tacomawedge/'
        >
          {facebook}
        </ExternalLink>
      </section>

      {/* <section>
          <h2>Documents</h2>
          <ul>
            // Looks like this link is dead on the NPS web site. Will have to contact them to get it restored.
            <ExternalLink href='http://www.nps.gov/nr/feature/places/pdfs/16000856>
              Historic District Register Inventory - NPS
            </ExternalLink>
          </ul>
        </section> */}
    </>
  );
}
