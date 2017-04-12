import { MappePage } from './app.po';

describe('mappe App', () => {
  let page: MappePage;

  beforeEach(() => {
    page = new MappePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
