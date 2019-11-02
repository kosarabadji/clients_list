import { ClientsListPage } from './app.po';

describe('clients-list App', () => {
  let page: ClientsListPage;

  beforeEach(() => {
    page = new ClientsListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
