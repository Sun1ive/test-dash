const names = [
  'Quinn Decelles',
  'Faith Bodily',
  'Hoyt Gasca',
  'Drusilla Mellen',
  'Etta Royall',
  'Dia Seaberg',
  'Ruthann Radosevich',
  'Christeen Brymer',
  'Clorinda Almy',
  'Chrystal Tullos',
  'Terisa Calderon',
  'Miles Coriell',
  'Charlotte Dodge',
  'Kortney Mellon',
  'Sherill Tavernier',
  'Lucia Vazques',
  'Van Penfield',
  'Glennis Barb',
  'Leighann Toomer',
  'Cayla Tindell',
  'Hosea Coltharp',
  'Garnet Laman',
  'Brittanie Mattison',
  'Alejandra Coolbaugh',
  'Devora Blackerby',
  'Margie Cowgill',
  'Myriam Leitzel',
  'Ricarda Wieder',
  'Candida Brasch',
  'Vincent Langlais',
  'Tyra Fawley',
  'China Hosking',
  'Britany Espino',
  'Sherlene Shedrick',
  'Twila Petit',
  'Kit Fiorillo',
  'Cherry Curl',
  'Myron Gutierez',
  'Wilson Maloy',
  'Joetta Rexroat',
  'Marcelina Knoles',
  'Karrie Boland',
  'Lesli Bulkley',
  'Tamiko Cairns',
  'Brenda Raasch',
  'Manuel Knouse',
  'Mara Polin',
  'Lowell Brough',
  'Jake Roe',
  'Dee Mcavoy',
];

const managers = ['Alexandr Myzuka', 'Andrei Chiboanu', 'Denis Kulkov'];
const photos = [
  'https://randomuser.me/api/portraits/women/75.jpg',
  'https://randomuser.me/api/portraits/women/72.jpg',
  'https://randomuser.me/api/portraits/men/15.jpg',
  'https://randomuser.me/api/portraits/women/65.jpg',
  'https://randomuser.me/api/portraits/women/25.jpg',
  'https://randomuser.me/api/portraits/men/35.jpg',
  'https://randomuser.me/api/portraits/women/45.jpg',
  'https://randomuser.me/api/portraits/women/70.jpg',
  'https://randomuser.me/api/portraits/men/66.jpg',
  'https://randomuser.me/api/portraits/men/22.jpg',
  'https://randomuser.me/api/portraits/women/5.jpg',
  'https://randomuser.me/api/portraits/women/2.jpg',
  'https://randomuser.me/api/portraits/men/6.jpg',
  'https://randomuser.me/api/portraits/women/8.jpg',
  'https://randomuser.me/api/portraits/women/95.jpg',
  'https://randomuser.me/api/portraits/men/33.jpg',
  'https://randomuser.me/api/portraits/women/13.jpg',
  'https://randomuser.me/api/portraits/women/31.jpg',
  'https://randomuser.me/api/portraits/men/79.jpg',
  'https://randomuser.me/api/portraits/men/9.jpg',
];

export default class Generator {
  public fullName: string;
  public photo: string;
  public perne: number;
  public lenjerie: number;
  public fete: number;

  constructor() {
    this.fullName = this.randomName();
    this.photo = this.randomPhoto();
    this.perne = this.randomizer(0, 122);
    this.lenjerie = this.randomizer(0, 122);
    this.fete = this.randomizer(0, 122);
  }
  private randomizer(min: number, max: number): number {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  }
  private randomName(): string {
    return names[this.randomizer(0, 20)];
  }
  private randomPhoto(): string {
    return photos[this.randomizer(0, 20)];
  }
}
