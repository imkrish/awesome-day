import { ajax } from 'rxjs/observable/dom/ajax'
const QUOTE_URL = 'https://talaikis.com/api/quotes/random/'

export class QuoteUtil {
  static getRandomQuote$ = () => {
    return ajax({
      url: QUOTE_URL,
      crossDomain: true
    })
  }
}