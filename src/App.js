import Section from './components/Section/Section'

import Profile from './components/Profile/Profile'
import data from './components/Profile/Profile.json'

export default function App() {
    const { username, tag, location, avatar, stats } = data;
  return (
      <div>
          <Section title={'1 - Social Profile'}>
          <Profile
              username={username}
              tag={tag}
              location={location}
              avatar={avatar}
              stats={stats}
              />
          </Section>
          
          <Section title={'2 - Statistics section'}>

          </Section>
    </div>
  );
}
