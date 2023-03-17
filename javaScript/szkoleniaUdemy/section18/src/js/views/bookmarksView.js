import icons from 'url:../../img/icons.svg'; // Parcel 2
import previevView from './previevView.js';
import View from './View.js';

class BookmarksViev extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)!';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    // console.log(this._data);
    return this._data
      .map(bookmark => previevView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksViev();
