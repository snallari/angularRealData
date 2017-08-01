import { AngularSaiPage } from './app.po';

describe('angular-sai App', () => {
  let page: AngularSaiPage;

  beforeEach(() => {
    page = new AngularSaiPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
