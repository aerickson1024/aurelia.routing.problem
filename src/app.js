import { PLATFORM } from 'aurelia-pal';

export class App {
  configureRouter(config, router) {
    config.map([{
      route: ['', 'home'],
      moduleId: PLATFORM.moduleName('./home'),
      name: 'home',
      title: 'Home Route',
      nav: true
    }]);

    this.router = router;
  }
}
