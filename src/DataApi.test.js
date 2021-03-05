import DataApi from './DataApi';
import {data} from '../backend/testData.json'

const api = new DataApi(data)
console.log(api)

describe('DataApi', ()=>{

    it('exposes articles as an object', ()=>{


    });

    it('exposes authors as an object', ()=>{

    });
})