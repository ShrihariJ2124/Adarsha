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
    smartClassroom: imagePath('hero-02-smart-classroom.jpg'),
    playground: imagePath('hero-03-playground.jpg'),
    janmashtami: imagePath('hero-04-janmashtami.png'),
    republicDay: imagePath('hero-05-republic-day.png'),
    parentPartnership: imagePath('hero-06-parent-partnership.png'),
  },
  facilities: {
    classrooms: imagePath('facility-01-classrooms.jpg'),
    headmasterRoom: imagePath('facility-02-headmaster-room.jpg'),
    library: imagePath('facility-03-library.jpg'),
    smartClass: imagePath('facility-04-smart-class.jpg'),
    computers: imagePath('facility-05-computers.jpg'),
    playground: imagePath('facility-06-playground.jpg'),
    drinkingWater: imagePath('facility-07-drinking-water.jpg'),
    electricity: imagePath('facility-08-electricity.jpg'),
    toilets: imagePath('facility-09-toilets.png'),
    fencing: imagePath('facility-10-fencing.png'),
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
