import { BeTourOfHeroesPage } from './app.po';

describe('be-tour-of-heroes App', function() {
  let page: BeTourOfHeroesPage;

  beforeEach(() => {
    page = new BeTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
