import axios from 'axios';

const URL = "https://bigbusinessapp-invoice.herokuapp.com/";
export default class ApiCalls {

    constructor(){
        let mobileNumber = "9063482433";
    }
    
    apiCall(serviceName,methordName){
        //axios.defaults.headers.push("Access-Control-Allow-Origin", "http://localhost:3000") ;

        return axios({
            method:methordName,
            url:URL+serviceName+"/9999999999"
        });

   }


}