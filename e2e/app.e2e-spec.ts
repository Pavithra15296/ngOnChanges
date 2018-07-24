import { OnchangesPage } from './app.po';

describe('onchanges App', () => {
  let page: OnchangesPage;

  beforeEach(() => {
    page = new OnchangesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
