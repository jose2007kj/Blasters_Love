import {
    NEWS_DETAILS_FETCHED,
    NEWS_DETAILS_FETCH_ERROR,
    NEWS_DETAILS_FETCH_INIT

} from './types';
import { BASE_URL} from './api';
var axios = require('axios');
import cheerio from 'cheerio-without-node-native';

// const cheerio = require('react-native-cheerio');
export const fetchStartDetails = () => {
    console.log("inside news details fetch start action....... ");
    return {
        type: NEWS_DETAILS_FETCH_INIT
    };
};
export const fetchNewsDetails = (news) => {
    console.log("inside news details fetch "+JSON.stringify(news))
    return (dispatch) => {
        axios.get(BASE_URL+news.url)
  .then(function (response) {
    // handle success
    // console.log('response fetching news'+response.data);
    const $ = cheerio.load(response.data);
    var updates = '';
    $(".article-detail-content  p").each(function (i, element) {
        // $(element).remove('iframe');
        console.log("eecuting inside for loop iterationtititi :"+i+" "+$(element).text().trim()); 
        var str=$(element).text().trim(); 
        console.log(str.split('#').length-1);   
        if(str.split('#').length-1==0){
        updates=updates+'\n'+$(element).text().trim();   }
         
            //   console.log("eecuting inside for loop"+ JSON.stringify(updates[i]));
                      
          
        });
                //   console.log("fetched_news:"+JSON.stringify(updates));
                // const newArr=[]
                // Object.keys(updates).map( (key,index)=>{
                //     updates[key].title=updates[key].title.substr(0,updates[key].title.indexOf('\r'));
                //     newArr.push(updates[key]);});
    dispatch({ type: NEWS_DETAILS_FETCHED, payload: updates });
                  
  })
  .catch(function (error) {
    // handle error
    console.log('error fetching news',JSON.stringify(error));
    dispatch({ type: NEWS_DETAILS_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
            
