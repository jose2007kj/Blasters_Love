import {
    NEWS_DETAILS_FETCHED,
    NEWS_DETAILS_FETCH_ERROR,
    NEWS_DETAILS_FETCH_INIT

} from './types';
import { BASE_URL} from './api';
var axios = require('axios');
import cheerio from 'cheerio-without-node-native';

export const fetchStartDetails = () => {
    return {
        type: NEWS_DETAILS_FETCH_INIT
    };
};
export const fetchNewsDetails = (news) => {
    return (dispatch) => {
        axios.get(BASE_URL+news.url)
  .then(function (response) {
    const $ = cheerio.load(response.data);
    var updates = '';
    $(".article-detail-content  p").each(function (i, element) {
        var str=$(element).text().trim(); 
        if(str.split('#').length-1==0){
        updates=updates+'\n'+$(element).text().trim();   }
        });
        dispatch({ type: NEWS_DETAILS_FETCHED, payload: updates });
                  
  })
  .catch(function (error) {
    // handle error
    dispatch({ type: NEWS_DETAILS_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
            
