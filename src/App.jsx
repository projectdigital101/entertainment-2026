import React, { useState, useEffect, useRef } from 'react';

const entertainmentData = [
  // JANUARY
  { month: 'January', day: 8, title: 'The Pitt', type: 'TV', platform: 'HBO', season: 'Season 2', genre: 'Drama', description: 'Award-winning medical drama returns' },
  { month: 'January', day: 9, title: 'A Thousand Blows', type: 'TV', platform: 'Hulu', season: 'Season 1', genre: 'Drama', description: 'Period boxing drama set in Victorian London' },
  { month: 'January', day: 9, title: 'Tehran', type: 'TV', platform: 'Apple TV+', season: 'Season 3', genre: 'Thriller', description: 'Israeli spy thriller continues' },
  { month: 'January', day: 11, title: 'Industry', type: 'TV', platform: 'HBO', season: 'Season 4', genre: 'Drama', description: 'London finance drama returns' },
  { month: 'January', day: 13, title: 'Tell Me Lies', type: 'TV', platform: 'Hulu', season: 'Season 3', genre: 'Drama', description: 'Toxic romance drama returns' },
  { month: 'January', day: 14, title: 'Hijack', type: 'TV', platform: 'Apple TV+', season: 'Season 2', genre: 'Thriller', description: 'Idris Elba thriller returns' },
  { month: 'January', day: 15, title: 'Star Trek: Starfleet Academy', type: 'TV', platform: 'Paramount+', season: 'Season 1', genre: 'Sci-Fi', description: 'New Star Trek series with young cadets' },
  { month: 'January', day: 16, title: '28 Years Later: The Bone Temple', type: 'Movie', platform: 'Theaters', genre: 'Horror', description: 'Nia DaCosta directs sequel to 28 Years Later', cast: 'Ralph Fiennes, Jack O\'Connor' },
  { month: 'January', day: 16, title: 'The Rip', type: 'Movie', platform: 'Netflix', genre: 'Crime', description: 'Miami cops discover millions in cash', cast: 'Matt Damon, Ben Affleck' },
  { month: 'January', day: 18, title: 'A Knight of the Seven Kingdoms', type: 'TV', platform: 'HBO', season: 'Season 1', genre: 'Fantasy', description: 'Game of Thrones prequel - Dunk & Egg' },
  { month: 'January', day: 20, title: 'Star Search', type: 'TV', platform: 'Netflix', season: 'Season 1', genre: 'Reality', description: 'Live talent show revival with Anthony Anderson' },
  { month: 'January', day: 21, title: 'The Beauty', type: 'TV', platform: 'FX', season: 'Season 1', genre: 'Sci-Fi', description: 'Ryan Murphy sci-fi thriller about deadly STD', cast: 'Evan Peters, Ashton Kutcher' },
  { month: 'January', day: 28, title: 'Shrinking', type: 'TV', platform: 'Apple TV+', season: 'Season 3', genre: 'Comedy', description: 'Therapy comedy with Jason Segel returns' },
  { month: 'January', day: 29, title: 'Bridgerton', type: 'TV', platform: 'Netflix', season: 'Season 4 Part 1', genre: 'Romance', description: 'Benedict Bridgerton takes center stage' },
  { month: 'January', day: 31, title: 'Wonder Man', type: 'TV', platform: 'Disney+', season: 'Season 1', genre: 'Superhero', description: 'Marvel series debut' },
  
  // FEBRUARY
  { month: 'February', day: 5, title: 'The Lincoln Lawyer', type: 'TV', platform: 'Netflix', season: 'Season 4', genre: 'Legal', description: 'Legal thriller continues' },
  { month: 'February', day: 8, title: "The 'Burbs", type: 'TV', platform: 'Peacock', season: 'Season 1', genre: 'Comedy', description: 'Reboot starring Keke Palmer & Jack Whitehall' },
  { month: 'February', day: 13, title: 'Wuthering Heights', type: 'Movie', platform: 'Theaters', genre: 'Romance', description: 'Emerald Fennell directs Emily Brontë adaptation', cast: 'Margot Robbie, Jacob Elordi' },
  { month: 'February', day: 13, title: 'Crime 101', type: 'Movie', platform: 'Theaters', genre: 'Action', description: 'Presidents Day action thriller', cast: 'Chris Hemsworth, Halle Berry, Mark Ruffalo' },
  { month: 'February', day: 19, title: 'The Night Agent', type: 'TV', platform: 'Netflix', season: 'Season 3', genre: 'Thriller', description: 'Action thriller returns' },
  { month: 'February', day: 25, title: 'Scrubs', type: 'TV', platform: 'ABC', season: 'Revival', genre: 'Comedy', description: 'Medical comedy returns after 15 years' },
  { month: 'February', day: 25, title: 'Survivor', type: 'TV', platform: 'CBS', season: 'Season 50', genre: 'Reality', description: 'Milestone 50th anniversary season' },
  { month: 'February', day: 26, title: 'Bridgerton', type: 'TV', platform: 'Netflix', season: 'Season 4 Part 2', genre: 'Romance', description: 'Benedict\'s story concludes' },
  { month: 'February', day: 26, title: 'Sheep Detectives', type: 'Movie', platform: 'Theaters', genre: 'Animation', description: 'Hugh Jackman as shepherd reading mysteries to sheep', cast: 'Hugh Jackman, Emma Thompson' },
  { month: 'February', day: 27, title: 'Scream 7', type: 'Movie', platform: 'Theaters', genre: 'Horror', description: 'Neve Campbell returns as Sidney Prescott', cast: 'Neve Campbell' },
  { month: 'February', day: 27, title: 'Monarch: Legacy of Monsters', type: 'TV', platform: 'Apple TV+', season: 'Season 2', genre: 'Sci-Fi', description: 'Monsterverse series continues' },

  // MARCH
  { month: 'March', day: 1, title: 'Peaky Blinders: The Immortal Man', type: 'Movie', platform: 'Netflix', genre: 'Crime', description: 'Feature film continuation', cast: 'Cillian Murphy' },
  { month: 'March', day: 6, title: 'The Bride!', type: 'Movie', platform: 'Theaters', genre: 'Horror', description: 'Maggie Gyllenhaal\'s punk Bride of Frankenstein', cast: 'Jessie Buckley, Christian Bale, Penélope Cruz' },
  { month: 'March', day: 13, title: 'Reminders of Him', type: 'Movie', platform: 'Theaters', genre: 'Drama', description: 'Colleen Hoover adaptation', cast: 'Maika Monroe' },
  { month: 'March', day: 15, title: 'Beef', type: 'TV', platform: 'Netflix', season: 'Season 2', genre: 'Drama', description: 'New anthology cast at country club', cast: 'Oscar Isaac, Carey Mulligan, Charles Melton' },
  { month: 'March', day: 20, title: 'Project Hail Mary', type: 'Movie', platform: 'Theaters', genre: 'Sci-Fi', description: 'Astronaut must save Earth from extinction', cast: 'Ryan Gosling' },
  { month: 'March', day: 27, title: 'Hoppers', type: 'Movie', platform: 'Theaters', genre: 'Animation', description: 'Original Pixar film' },

  // APRIL
  { month: 'April', day: 3, title: 'Your Friends & Neighbors', type: 'TV', platform: 'Apple TV+', season: 'Season 2', genre: 'Drama', description: 'Jon Hamm thriller returns' },
  { month: 'April', day: 3, title: 'The Super Mario Galaxy Movie', type: 'Movie', platform: 'Theaters', genre: 'Animation', description: 'Mario heads to space', cast: 'Chris Pratt, Anya Taylor-Joy, Jack Black' },
  { month: 'April', day: 8, title: 'The Boys', type: 'TV', platform: 'Prime Video', season: 'Season 5 (Final)', genre: 'Superhero', description: 'Final battle against Homelander', cast: 'Karl Urban, Antony Starr' },
  { month: 'April', day: 10, title: "Malcolm in the Middle: Life's Still Unfair", type: 'TV', platform: 'Hulu', season: 'Revival', genre: 'Comedy', description: 'Cult classic returns', cast: 'Frankie Muniz, Bryan Cranston' },
  { month: 'April', day: 10, title: 'Ready or Not 2: Here I Come', type: 'Movie', platform: 'Theaters', genre: 'Horror', description: 'Samara Weaving returns for more chaos', cast: 'Samara Weaving, Kathryn Newton' },
  { month: 'April', day: 12, title: 'Euphoria', type: 'TV', platform: 'HBO', season: 'Season 3 (Final)', genre: 'Drama', description: 'Long-awaited final season after 4+ years', cast: 'Zendaya' },
  { month: 'April', day: 15, title: 'Margo\'s Got Money Troubles', type: 'TV', platform: 'Apple TV+', season: 'Season 1', genre: 'Drama', description: 'Based on Rufi Thorpe\'s novel', cast: 'Elle Fanning, Nicole Kidman' },
  { month: 'April', day: 17, title: 'The Drama', type: 'Movie', platform: 'Theaters', genre: 'Romance', description: 'A24 rom-com over Easter weekend', cast: 'Zendaya, Robert Pattinson' },
  { month: 'April', day: 24, title: 'Michael', type: 'Movie', platform: 'Theaters', genre: 'Biography', description: 'Michael Jackson biopic', cast: 'Jaafar Jackson' },

  // MAY
  { month: 'May', day: 9, title: 'Mortal Kombat II', type: 'Movie', platform: 'Theaters', genre: 'Action', description: 'Video game sequel' },
  { month: 'May', day: 9, title: 'The Devil Wears Prada 2', type: 'Movie', platform: 'Theaters', genre: 'Comedy', description: 'Fashion world reunion', cast: 'Anne Hathaway, Meryl Streep, Emily Blunt' },
  { month: 'May', day: 22, title: 'The Mandalorian & Grogu', type: 'Movie', platform: 'Theaters', genre: 'Sci-Fi', description: 'Star Wars theatrical debut', cast: 'Pedro Pascal' },

  // JUNE
  { month: 'June', day: 1, title: 'House of the Dragon', type: 'TV', platform: 'HBO', season: 'Season 3', genre: 'Fantasy', description: 'Targaryen civil war continues' },
  { month: 'June', day: 1, title: 'Hacks', type: 'TV', platform: 'HBO Max', season: 'Season 5', genre: 'Comedy', description: 'Emmy-winning comedy returns', cast: 'Jean Smart' },
  { month: 'June', day: 12, title: 'Scary Movie 6', type: 'Movie', platform: 'Theaters', genre: 'Comedy', description: 'Wayans brothers return', cast: 'Marlon Wayans, Shawn Wayans, Anna Faris' },
  { month: 'June', day: 19, title: 'Toy Story 5', type: 'Movie', platform: 'Theaters', genre: 'Animation', description: 'Woody & Buzz vs. tablets', cast: 'Tom Hanks, Tim Allen' },
  { month: 'June', day: 26, title: 'Supergirl', type: 'Movie', platform: 'Theaters', genre: 'Superhero', description: 'DCU film with Kara Zor-El', cast: 'Milly Alcock, Jason Momoa' },

  // JULY
  { month: 'July', day: 10, title: 'Moana (Live-Action)', type: 'Movie', platform: 'Theaters', genre: 'Musical', description: 'Disney live-action remake', cast: 'Catherine Laga\'aia, Dwayne Johnson' },
  { month: 'July', day: 17, title: 'The Odyssey', type: 'Movie', platform: 'Theaters', genre: 'Epic', description: 'Christopher Nolan adapts Homer in IMAX', cast: 'Matt Damon, Tom Holland, Anne Hathaway, Zendaya, Robert Pattinson' },
  { month: 'July', day: 17, title: 'Disclosure Day', type: 'Movie', platform: 'Theaters', genre: 'Sci-Fi', description: 'Spielberg UFO thriller', cast: 'Emily Blunt, Josh O\'Connor, Colin Firth' },
  { month: 'July', day: 31, title: 'Spider-Man: Brand New Day', type: 'Movie', platform: 'Theaters', genre: 'Superhero', description: 'Fourth solo Spider-Man film', cast: 'Tom Holland, Zendaya, Jon Bernthal' },

  // AUGUST
  { month: 'August', day: 14, title: 'The Dog Stars', type: 'Movie', platform: 'Theaters', genre: 'Sci-Fi', description: 'Ridley Scott post-apocalyptic film' },
  { month: 'August', day: 28, title: 'Coyote vs. Acme', type: 'Movie', platform: 'Theaters', genre: 'Animation', description: 'Looney Tunes courtroom comedy', cast: 'John Cena' },

  // SEPTEMBER
  { month: 'September', day: 1, title: 'Spider-Noir', type: 'TV', platform: 'Prime Video', season: 'Season 1', genre: 'Superhero', description: 'Nicolas Cage leads noir Spider-verse series', cast: 'Nicolas Cage' },
  { month: 'September', day: 15, title: 'Blade Runner 2099', type: 'TV', platform: 'Prime Video', season: 'Season 1', genre: 'Sci-Fi', description: 'Michelle Yeoh leads dystopian sequel series', cast: 'Michelle Yeoh' },
  { month: 'September', day: 18, title: 'Practical Magic 2', type: 'Movie', platform: 'Theaters', genre: 'Fantasy', description: 'Owens sisters return', cast: 'Nicole Kidman, Sandra Bullock' },

  // OCTOBER
  { month: 'October', day: 2, title: 'Digger', type: 'Movie', platform: 'Theaters', genre: 'Comedy', description: 'Alejandro G. Iñárritu comedy', cast: 'Tom Cruise' },

  // NOVEMBER
  { month: 'November', day: 6, title: 'The Cat in the Hat', type: 'Movie', platform: 'Theaters', genre: 'Animation', description: 'Animated Dr. Seuss adaptation', cast: 'Bill Hader' },
  { month: 'November', day: 20, title: 'The Hunger Games: Sunrise on the Reaping', type: 'Movie', platform: 'Theaters', genre: 'Sci-Fi', description: 'Haymitch\'s origin story', cast: 'Ralph Fiennes' },
  { month: 'November', day: 26, title: 'The Chronicles of Narnia: The Magician\'s Nephew', type: 'Movie', platform: 'Netflix/IMAX', genre: 'Fantasy', description: 'Greta Gerwig directs C.S. Lewis adaptation' },
  { month: 'November', day: 26, title: 'Madden', type: 'Movie', platform: 'Theaters', genre: 'Biography', description: 'John Madden biopic', cast: 'Nicolas Cage, Christian Bale' },

  // DECEMBER
  { month: 'December', day: 18, title: 'Dune: Part Three', type: 'Movie', platform: 'Theaters', genre: 'Sci-Fi', description: 'Denis Villeneuve adapts Dune Messiah', cast: 'Timothée Chalamet, Zendaya, Florence Pugh' },
  { month: 'December', day: 18, title: 'Avengers: Doomsday', type: 'Movie', platform: 'Theaters', genre: 'Superhero', description: 'MCU assembles against Doctor Doom', cast: 'Robert Downey Jr., Chris Evans' },
  { month: 'December', day: 19, title: 'Jumanji 4', type: 'Movie', platform: 'Theaters', genre: 'Adventure', description: 'Fourth Jumanji installment' },
  { month: 'December', day: 25, title: 'Werwulf', type: 'Movie', platform: 'Theaters', genre: 'Horror', description: 'Robert Eggers werewolf folk horror', cast: 'Aaron Taylor-Johnson, Willem Dafoe' },

  // TBD
  { month: 'TBD', day: 0, title: 'Ted Lasso', type: 'TV', platform: 'Apple TV+', season: 'Season 4', genre: 'Comedy', description: 'Feel-good comedy returns', cast: 'Jason Sudeikis' },
  { month: 'TBD', day: 0, title: 'Yellowjackets', type: 'TV', platform: 'Paramount+', season: 'Final Season', genre: 'Thriller', description: 'Survival mystery concludes' },
  { month: 'TBD', day: 0, title: 'Avatar: The Last Airbender', type: 'TV', platform: 'Netflix', season: 'Season 2', genre: 'Fantasy', description: 'Live-action adaptation continues' },
  { month: 'TBD', day: 0, title: 'Lanterns', type: 'TV', platform: 'HBO Max', season: 'Season 1', genre: 'Superhero', description: 'DC Green Lantern series' },
  { month: 'TBD', day: 0, title: 'The Bear', type: 'TV', platform: 'Hulu', season: 'Season 4', genre: 'Drama', description: 'Restaurant drama continues', cast: 'Jeremy Allen White' },
  { month: 'TBD', day: 0, title: 'Dune: Prophecy', type: 'TV', platform: 'HBO Max', season: 'Season 2', genre: 'Sci-Fi', description: 'Dune prequel series continues' },
];

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'TBD'];

const platforms = ['All', 'Theaters', 'Netflix', 'HBO', 'HBO Max', 'Disney+', 'Apple TV+', 'Prime Video', 'Hulu', 'Paramount+', 'Peacock', 'FX', 'ABC', 'CBS', 'Netflix/IMAX'];
const genres = ['All', 'Drama', 'Comedy', 'Superhero', 'Sci-Fi', 'Fantasy', 'Horror', 'Action', 'Romance', 'Thriller', 'Animation', 'Reality', 'Epic', 'Musical', 'Crime', 'Biography', 'Legal', 'Adventure'];

// Yellow/Black color palette
const colors = {
  gold: '#FFD700',
  amber: '#FFBF00',
  honey: '#EB9605',
  mustard: '#E1AD01',
  lemon: '#FFF44F',
  cream: '#FFFDD0',
  black: '#000000',
  charcoal: '#1a1a1a',
  darkGray: '#2d2d2d',
  mediumGray: '#404040',
};

export default function App() {
  const [selectedType, setSelectedType] = useState('All');
  const [selectedPlatform, setSelectedPlatform] = useState('All');
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [expandedMonth, setExpandedMonth] = useState(null);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredData = entertainmentData.filter(item => {
    const matchesType = selectedType === 'All' || item.type === selectedType;
    const matchesPlatform = selectedPlatform === 'All' || item.platform === selectedPlatform;
    const matchesGenre = selectedGenre === 'All' || item.genre === selectedGenre;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.cast && item.cast.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesType && matchesPlatform && matchesGenre && matchesSearch;
  });

  const groupedByMonth = months.reduce((acc, month) => {
    const items = filteredData.filter(item => item.month === month);
    if (items.length > 0) {
      acc[month] = items.sort((a, b) => a.day - b.day);
    }
    return acc;
  }, {});

  const scrollToMonth = (month) => {
    const element = document.getElementById(`month-${month}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const totalMovies = entertainmentData.filter(i => i.type === 'Movie').length;
  const totalTV = entertainmentData.filter(i => i.type === 'TV').length;

  return (
    <div style={{
      minHeight: '100vh',
      background: colors.black,
      color: '#ffffff',
      fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Geometric background pattern */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 40px,
            rgba(255, 215, 0, 0.02) 40px,
            rgba(255, 215, 0, 0.02) 80px
          )
        `,
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      
      {/* Spotlight effect */}
      <div style={{
        position: 'fixed',
        top: '-50%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '150vw',
        height: '100vh',
        background: `radial-gradient(ellipse at center, rgba(255, 215, 0, 0.08) 0%, transparent 60%)`,
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      {/* Header */}
      <header style={{
        position: 'relative',
        zIndex: 10,
        padding: '60px 40px 40px',
        textAlign: 'center',
        borderBottom: `3px solid ${colors.gold}`,
      }}>
        <div style={{
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(-30px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)',
        }}>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            background: colors.gold,
            color: colors.black,
            fontFamily: "'Inter', sans-serif",
            fontSize: '11px',
            letterSpacing: '4px',
            textTransform: 'uppercase',
            fontWeight: 700,
            marginBottom: '20px',
          }}>★ THE ULTIMATE GUIDE ★</div>
          
          <h1 style={{
            fontSize: 'clamp(72px, 15vw, 180px)',
            fontWeight: 400,
            letterSpacing: '8px',
            margin: 0,
            color: colors.gold,
            textShadow: `0 0 60px rgba(255, 215, 0, 0.3)`,
            lineHeight: 0.9,
          }}>2026</h1>
          
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '14px',
            fontWeight: 400,
            letterSpacing: '12px',
            textTransform: 'uppercase',
            color: 'rgba(255, 215, 0, 0.7)',
            marginTop: '12px',
          }}>Entertainment Timeline</p>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '80px',
          marginTop: '50px',
          opacity: isLoaded ? 1 : 0,
          transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
        }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '64px', 
              fontWeight: 400, 
              color: colors.gold,
              margin: 0,
              lineHeight: 1,
              textShadow: `0 0 30px rgba(255, 215, 0, 0.4)`,
            }}>{totalMovies}</p>
            <p style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '10px', 
              letterSpacing: '4px', 
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              marginTop: '8px',
              fontWeight: 600,
            }}>🎬 Films</p>
          </div>
          <div style={{ 
            width: '2px', 
            background: `linear-gradient(to bottom, transparent, ${colors.gold}, transparent)`,
          }} />
          <div style={{ textAlign: 'center' }}>
            <p style={{ 
              fontSize: '64px', 
              fontWeight: 400, 
              color: colors.amber,
              margin: 0,
              lineHeight: 1,
              textShadow: `0 0 30px rgba(255, 191, 0, 0.4)`,
            }}>{totalTV}</p>
            <p style={{ 
              fontFamily: "'Inter', sans-serif",
              fontSize: '10px', 
              letterSpacing: '4px', 
              textTransform: 'uppercase',
              color: 'rgba(255, 255, 255, 0.5)',
              marginTop: '8px',
              fontWeight: 600,
            }}>📺 Series</p>
          </div>
        </div>
      </header>

      {/* Quick Month Navigation */}
      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: `1px solid ${colors.gold}`,
        padding: '12px 20px',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '6px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {months.slice(0, -1).map((month) => (
            <button
              key={month}
              onClick={() => scrollToMonth(month)}
              style={{
                background: groupedByMonth[month] ? colors.gold : 'transparent',
                border: `2px solid ${groupedByMonth[month] ? colors.gold : colors.mediumGray}`,
                color: groupedByMonth[month] ? colors.black : colors.mediumGray,
                padding: '8px 14px',
                cursor: groupedByMonth[month] ? 'pointer' : 'default',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '14px',
                letterSpacing: '2px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                fontWeight: 600,
              }}
              onMouseEnter={(e) => {
                if (groupedByMonth[month]) {
                  e.target.style.background = colors.lemon;
                  e.target.style.transform = 'scale(1.05)';
                }
              }}
              onMouseLeave={(e) => {
                if (groupedByMonth[month]) {
                  e.target.style.background = colors.gold;
                  e.target.style.transform = 'scale(1)';
                }
              }}
            >
              {month.slice(0, 3)}
            </button>
          ))}
        </div>
      </nav>

      {/* Filters */}
      <section style={{
        position: 'relative',
        zIndex: 10,
        padding: '40px 20px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {/* Search */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          marginBottom: '30px',
        }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '500px' }}>
            <input
              type="text"
              placeholder="Search titles, actors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '16px 24px 16px 50px',
                background: colors.charcoal,
                border: `2px solid ${colors.gold}`,
                color: '#ffffff',
                fontSize: '16px',
                fontFamily: "'Inter', sans-serif",
                outline: 'none',
                transition: 'all 0.3s ease',
              }}
              onFocus={(e) => {
                e.target.style.borderColor = colors.lemon;
                e.target.style.boxShadow = `0 0 20px rgba(255, 215, 0, 0.3)`;
              }}
              onBlur={(e) => {
                e.target.style.borderColor = colors.gold;
                e.target.style.boxShadow = 'none';
              }}
            />
            <span style={{
              position: 'absolute',
              left: '18px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '18px',
              color: colors.gold,
            }}>🔍</span>
          </div>
        </div>

        {/* Filter buttons */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '16px',
        }}>
          {/* Type Filter */}
          <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
            {['All', 'Movie', 'TV'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                style={{
                  background: selectedType === type ? colors.gold : 'transparent',
                  border: `2px solid ${colors.gold}`,
                  color: selectedType === type ? colors.black : colors.gold,
                  padding: '10px 20px',
                  cursor: 'pointer',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '2px',
                  transition: 'all 0.3s ease',
                }}
              >
                {type === 'All' ? '★ ALL' : type === 'Movie' ? '🎬 FILMS' : '📺 SERIES'}
              </button>
            ))}
          </div>

          {/* Platform Filter */}
          <select
            value={selectedPlatform}
            onChange={(e) => setSelectedPlatform(e.target.value)}
            style={{
              background: colors.charcoal,
              border: `2px solid ${colors.gold}`,
              color: colors.gold,
              padding: '10px 20px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              outline: 'none',
            }}
          >
            {platforms.map((platform) => (
              <option key={platform} value={platform} style={{ background: colors.charcoal }}>
                {platform === 'All' ? '📡 All Platforms' : platform}
              </option>
            ))}
          </select>

          {/* Genre Filter */}
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            style={{
              background: colors.charcoal,
              border: `2px solid ${colors.gold}`,
              color: colors.gold,
              padding: '10px 20px',
              cursor: 'pointer',
              fontFamily: "'Inter', sans-serif",
              fontSize: '12px',
              fontWeight: 600,
              outline: 'none',
            }}
          >
            {genres.map((genre) => (
              <option key={genre} value={genre} style={{ background: colors.charcoal }}>
                {genre === 'All' ? '🎭 All Genres' : genre}
              </option>
            ))}
          </select>
        </div>

        {/* Results count */}
        <p style={{
          textAlign: 'center',
          marginTop: '24px',
          fontFamily: "'Inter', sans-serif",
          fontSize: '13px',
          color: 'rgba(255,255,255,0.4)',
        }}>
          Showing <span style={{ color: colors.gold, fontWeight: 700 }}>{filteredData.length}</span> releases
        </p>
      </section>

      {/* Timeline */}
      <main style={{
        position: 'relative',
        zIndex: 10,
        padding: '0 20px 80px',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        {Object.entries(groupedByMonth).map(([month, items], monthIndex) => (
          <section 
            key={month} 
            id={`month-${month}`}
            style={{
              marginBottom: '60px',
              scrollMarginTop: '80px',
            }}
          >
            {/* Month Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              marginBottom: '30px',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateX(0)' : 'translateX(-30px)',
              transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${monthIndex * 0.1}s`,
            }}>
              <h2 style={{
                fontSize: 'clamp(40px, 8vw, 72px)',
                fontWeight: 400,
                letterSpacing: '4px',
                color: colors.gold,
                margin: 0,
                textShadow: `0 0 40px rgba(255, 215, 0, 0.3)`,
              }}>{month.toUpperCase()}</h2>
              <div style={{
                flex: 1,
                height: '3px',
                background: `linear-gradient(to right, ${colors.gold}, transparent)`,
              }} />
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '12px',
                color: colors.gold,
                letterSpacing: '2px',
                fontWeight: 700,
                padding: '6px 12px',
                border: `2px solid ${colors.gold}`,
              }}>{items.length}</span>
            </div>

            {/* Items Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '16px',
            }}>
              {items.map((item, itemIndex) => (
                <article
                  key={`${item.title}-${itemIndex}`}
                  onMouseEnter={() => setHoveredItem(`${month}-${itemIndex}`)}
                  onMouseLeave={() => setHoveredItem(null)}
                  style={{
                    background: hoveredItem === `${month}-${itemIndex}` 
                      ? colors.charcoal
                      : colors.darkGray,
                    border: `2px solid`,
                    borderColor: hoveredItem === `${month}-${itemIndex}`
                      ? colors.gold
                      : 'transparent',
                    padding: '24px',
                    cursor: 'pointer',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                    transform: hoveredItem === `${month}-${itemIndex}` ? 'translateY(-4px)' : 'translateY(0)',
                    boxShadow: hoveredItem === `${month}-${itemIndex}` 
                      ? `0 10px 40px rgba(0,0,0,0.5), 0 0 30px rgba(255, 215, 0, 0.1)`
                      : 'none',
                    opacity: isLoaded ? 1 : 0,
                    animation: isLoaded ? `fadeInUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${monthIndex * 0.1 + itemIndex * 0.05}s both` : 'none',
                  }}
                >
                  {/* Top row: Type badge + Date */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '16px',
                  }}>
                    <span style={{
                      background: item.type === 'Movie' ? colors.gold : colors.amber,
                      color: colors.black,
                      padding: '4px 12px',
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '12px',
                      fontWeight: 600,
                      letterSpacing: '2px',
                      textTransform: 'uppercase',
                    }}>
                      {item.type === 'Movie' ? '🎬 FILM' : '📺 SERIES'}
                    </span>
                    {item.day > 0 && (
                      <span style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: '14px',
                        color: colors.gold,
                        letterSpacing: '1px',
                      }}>
                        {month.slice(0, 3).toUpperCase()} {item.day}
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '26px',
                    fontWeight: 400,
                    margin: '0 0 8px 0',
                    lineHeight: 1.1,
                    letterSpacing: '1px',
                    color: hoveredItem === `${month}-${itemIndex}` ? colors.gold : '#ffffff',
                    transition: 'color 0.3s ease',
                  }}>{item.title.toUpperCase()}</h3>

                  {/* Season badge for TV */}
                  {item.season && (
                    <span style={{
                      display: 'inline-block',
                      background: 'rgba(255, 215, 0, 0.15)',
                      color: colors.gold,
                      padding: '4px 10px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '10px',
                      fontWeight: 600,
                      letterSpacing: '1px',
                      marginBottom: '12px',
                      border: `1px solid rgba(255, 215, 0, 0.3)`,
                    }}>{item.season.toUpperCase()}</span>
                  )}

                  {/* Description */}
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '13px',
                    color: 'rgba(255,255,255,0.6)',
                    margin: '0 0 12px 0',
                    lineHeight: 1.5,
                  }}>{item.description}</p>

                  {/* Cast */}
                  {item.cast && (
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '11px',
                      color: 'rgba(255,255,255,0.4)',
                      margin: '0 0 16px 0',
                    }}>
                      <span style={{ color: colors.gold }}>★</span> {item.cast}
                    </p>
                  )}

                  {/* Bottom: Platform + Genre */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '16px',
                    borderTop: `1px solid rgba(255, 215, 0, 0.2)`,
                  }}>
                    <span style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: '13px',
                      fontWeight: 400,
                      color: colors.gold,
                      letterSpacing: '2px',
                    }}>{item.platform.toUpperCase()}</span>
                    <span style={{
                      background: 'rgba(255, 215, 0, 0.1)',
                      padding: '4px 10px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '10px',
                      color: 'rgba(255, 215, 0, 0.8)',
                      letterSpacing: '1px',
                      fontWeight: 600,
                      border: `1px solid rgba(255, 215, 0, 0.2)`,
                    }}>{item.genre.toUpperCase()}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}

        {filteredData.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            color: 'rgba(255,255,255,0.4)',
          }}>
            <p style={{ fontSize: '48px', marginBottom: '16px' }}>🎬</p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px' }}>
              No releases found matching your filters
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '40px 20px',
        borderTop: `3px solid ${colors.gold}`,
        background: colors.charcoal,
      }}>
        <p style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '18px',
          color: colors.gold,
          letterSpacing: '6px',
        }}>
          ★ 2026 ENTERTAINMENT CALENDAR ★
        </p>
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '11px',
          color: 'rgba(255,255,255,0.3)',
          marginTop: '12px',
        }}>
          Release dates verified as of January 2026 • Subject to change
        </p>
      </footer>

      {/* Global styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap');
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        * {
          box-sizing: border-box;
        }

        ::selection {
          background: rgba(255, 215, 0, 0.4);
          color: #000000;
        }

        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #000000;
        }

        ::-webkit-scrollbar-thumb {
          background: #FFD700;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: #FFBF00;
        }
      `}</style>
    </div>
  );
}
