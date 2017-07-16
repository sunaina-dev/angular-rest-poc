import { AngularRestPocPage } from './app.po';

describe('angular-rest-poc App', () => {
  let page: AngularRestPocPage;

  beforeEach(() => {
    page = new AngularRestPocPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
