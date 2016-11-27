import { YodabookPage } from './app.po';

describe('yodabook App', function() {
  let page: YodabookPage;

  beforeEach(() => {
    page = new YodabookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
