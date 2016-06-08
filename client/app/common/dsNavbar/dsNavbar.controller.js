class DsNavbarController {
  constructor() {
    this.name = 'Home';
    this.dsNavbarItems = [
      {text: 'Page 1', href: 'page1'},
      {text: 'Page 2', href: 'page2'},
      {text: 'Page 3', href: 'page3', dsMenuItems: [
        {text: 'Hello', url: 'Yall'},
        {text: 'World', url: 'yall'}
      ]}
    ];
  }
}

export default DsNavbarController;
