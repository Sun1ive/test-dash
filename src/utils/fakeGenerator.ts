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
  public fullname = this.fullName();
  public photo = this.getPhoto();
  public manager = this.getManager();
  public perne = this.getValue();
  public lenjerie = this.getValue();
  public fete = this.getValue();
  public id = this.getId();


  protected fullName() {
    return names[Math.floor(Math.random() * 50)];
  }
  protected getManager() {
    return managers[Math.floor(Math.random() * 3)];
  }
  protected getValue() {
    return Math.floor(Math.random() * 120) + 1;
  }
  protected getPhoto() {
    return photos[Math.floor(Math.random() * 20) + 1];
  }
  protected getId() {
    return Math.floor(Math.random() * 932578) + 1;
  }
}
