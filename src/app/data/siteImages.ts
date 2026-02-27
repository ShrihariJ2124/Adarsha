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
    smartClassroom: imagePath('hero-02-smart-classroom.jpg.jpeg'),
    playground: imagePath('hero-03-playground.jpg'),
    janmashtami: imagePath('hero-04-janmashtami.png'),
    republicDay: imagePath('hero-05-republic-day.png'),
    parentPartnership: imagePath('hero-06-parent-partnership.png'),
  },
  facilities: {
    classrooms: imagePath('hero-01-school-building.jpg'),
    headmasterRoom: imagePath('about-school-building.jpg'),
    library: imagePath('gallery-01-school-building.jpg'),
    smartClass: imagePath('hero-02-smart-classroom.jpg.jpeg'),
    computers: imagePath('hero-06-parent-partnership.png'),
    playground: imagePath('hero-03-playground.jpg'),
    drinkingWater: imagePath('hero-04-janmashtami.png'),
    electricity: imagePath('hero-05-republic-day.png'),
    toilets: imagePath('gallery-06-kannada-rajyotsava.png'),
    fencing: imagePath('gallery-07-parent-teacher-meeting.png'),
    middayMeal: imagePath('facility-11-midday-meal.jpg'),
    privateBuilding: imagePath('facility-12-private-building.jpg'),
  },
  gallery: {
    schoolBuilding: imagePath('gallery-01-school-building.jpg'),
    smartClassroom: imagePath('hero-02-smart-classroom.jpg.jpeg'),
    playgroundArea: imagePath('hero-03-playground.jpg'),
    janmashtamiCelebration: imagePath('gallery-04-janmashtami-celebration.png'),
    republicDay: imagePath('hero-05-republic-day.png'),
    kannadaRajyotsava: imagePath('gallery-06-kannada-rajyotsava.png'),
    parentTeacherMeeting: imagePath('gallery-07-parent-teacher-meeting.png'),
    sportsDay: imagePath('gallery-08-sports-day.jpg'),
    annualFunction: imagePath('hero-06-parent-partnership.png'),
    library: imagePath('about-school-building.jpg'),
    studentsLearning: imagePath('hero-01-school-building.jpg'),
    studentPerformance: imagePath('hero-04-janmashtami.png'),
  },
  community: {
    parents: imagePath('gallery-07-parent-teacher-meeting.png'), // placeholder
    alumni: imagePath('hero-05-republic-day.png'), // placeholder
    faculty: imagePath('about-school-building.jpg'), // placeholder
  },
} as const;
