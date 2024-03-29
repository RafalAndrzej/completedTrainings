import icons from 'url:../../img/icons.svg'; // Parcel 2
import previevView from './previevView.js';
import View from './View.js';

class ResultsView extends View {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipes found for your query Please try again!';
  _message = '';

  _generateMarkup() {
    // console.log(this._data);
    return this._data.map(result => previevView.render(result, false)).join('');
  }
}

export default new ResultsView();
