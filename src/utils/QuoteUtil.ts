import { ajax } from 'rxjs/observable/dom/ajax'
const QUOTE_URL = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=30&callback='

export class QuoteUtil {
  static getRandomQuote$ = () => {
    return ajax({
      url: QUOTE_URL,
      crossDomain: true
    })
  }
}