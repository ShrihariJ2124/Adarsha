const imagePath = (name: string) => `${import.meta.env.BASE_URL}images/${name}`;

export const siteImages = {
  logo: imagePath('logo.jpeg'),
  swamiji: {
    one: imagePath('swamiji1.png'),
    two: imagePath('swamiji2.png'),
  },
  about: imagePath('about-school-building.jpg'),
  hero: {
    schoolBuilding: imagePath('hero-01-school-building.jpg'),
    smartClassroom: imagePath('hero-03-playground.jpg'), // placeholder
    playground: imagePath('hero-03-playground.jpg'),
    janmashtami: imagePath('hero-04-janmashtami.png'),
    republicDay: imagePath('hero-05-republic-day.png'),
    parentPartnership: imagePath('hero-06-parent-partnership.png'),
  },
  facilities: {
    classrooms: imagePath('hero-01-school-building.jpg'), // placeholder
    headmasterRoom: imagePath('about-school-building.jpg'), // placeholder
    library: imagePath('gallery-01-school-building.jpg'), // placeholder
    smartClass: imagePath('hero-03-playground.jpg'), // placeholder
    computers: imagePath('hero-03-playground.jpg'), // placeholder
    playground: imagePath('hero-03-playground.jpg'), // placeholder
    drinkingWater: imagePath('about-school-building.jpg'), // placeholder
    electricity: imagePath('about-school-building.jpg'), // placeholder
    toilets: imagePath('about-school-building.jpg'), // placeholder
    fencing: imagePath('about-school-building.jpg'), // placeholder
    middayMeal: imagePath('facility-11-midday-meal.jpg'),
    privateBuilding: imagePath('facility-12-private-building.jpg'),
  },
  gallery: {
    schoolBuilding: imagePath('gallery-01-school-building.jpg'),
    smartClassroom: imagePath('hero-03-playground.jpg'), // placeholder
    playgroundArea: imagePath('hero-03-playground.jpg'), // placeholder
    janmashtamiCelebration: imagePath('gallery-04-janmashtami-celebration.png'),
    republicDay: imagePath('hero-05-republic-day.png'), // placeholder
    kannadaRajyotsava: imagePath('gallery-06-kannada-rajyotsava.png'),
    parentTeacherMeeting: imagePath('gallery-07-parent-teacher-meeting.png'),
    sportsDay: imagePath('gallery-08-sports-day.jpg'),
    annualFunction: imagePath('hero-05-republic-day.png'), // placeholder
    library: imagePath('gallery-01-school-building.jpg'), // placeholder
    studentsLearning: imagePath('hero-03-playground.jpg'), // placeholder
    studentPerformance: imagePath('gallery-08-sports-day.jpg'), // placeholder
  },
  community: {
    parents: imagePath('gallery-07-parent-teacher-meeting.png'), // placeholder
    alumni: imagePath('hero-05-republic-day.png'), // placeholder
    faculty: imagePath('about-school-building.jpg'), // placeholder
  },
} as const;
