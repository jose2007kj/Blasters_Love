import {
    NEWS_FETCHED,
    NEWS_FETCH_ERROR,
    NEWS_FETCH_INIT,
    NEWS_SAVED,
    NEWS_NOT_SAVED,
    SAVED_STATUS_FETCHED_FROM_STORAGE,
    SAVED_STATUS_NOT_FETCHED_FROM_STORAGE,
    SAVED_STATUS_SAVED_TO_STORAGE,
    SAVED_STATUS_NOT_SAVED_TO_STORAGE,
    NEWS_FETCHED_FROM_STORAGE,
    NEWS_NOT_FETCHED_FROM_STORAGE
} from './types';
import { AsyncStorage } from "react-native";
import { NEWS,PLAYERS} from './api';
var axios = require('axios');
import cheerio from 'cheerio-without-node-native';
export const fetchStart = () => {
    return {
        type: NEWS_FETCH_INIT
    };
};

export const saveNews = (news)=>{
    console.log("inside news save");
    return async dispatch => {
        try {
            await AsyncStorage.setItem('news_cache', JSON.stringify(news));
            dispatch({ type: NEWS_SAVED,payload:true});
          } catch (error) {
            dispatch({ type: NEWS_NOT_SAVED,payload:false}); 
            // Error saving data
          }
      };
    };
    
export const getSavedNews=()=>{
    return async dispatch=>{
        await AsyncStorage.getItem('news_cache').then((stored_news) => {
             dispatch({type:NEWS_FETCHED_FROM_STORAGE,payload:JSON.parse(stored_news)});     
         })
         

    }
}
export const fetchNews = () => {
    return (dispatch) => {
        axios.get(NEWS)
  .then(function (response) {
    const $ = cheerio.load(response.data);
    var updates = {};
    $(".article-wrap").each(function (i, element) {
              updates[i] = { id: i,
                imgSrc: $(this).find('img').attr('src'),
                title: $(this).find(".article-content").text().trim(),
                url: $(this).find("a").attr('href')
        } 
        });
                
                const newArr=[]
                Object.keys(updates).map( (key,index)=>{
                    updates[key].title=updates[key].title.substr(0,updates[key].title.indexOf('\r'));
                    newArr.push(updates[key]);});
    dispatch({ type: NEWS_FETCHED, payload: newArr });
                  
  })
  .catch(function (error) {
    dispatch({ type: NEWS_FETCH_ERROR, payload: error });
  })
  .then(function () {
    // always executed
  });
        
            };

        };
        
        
        
