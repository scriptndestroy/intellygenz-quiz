// import { store } from '../store/store';
// import { UIActions } from '../store/ui/ui.action';
import axios from "axios";
import config from "../config";

export default class ApiServices<T> {
  URL: string;

  constructor() {
    this.URL = config.xataka_feed;
  }

  // setLoading(){
  //     store.dispatch(UIActions.loading());
  // }

  // clearLoading(){
  //     store.dispatch(UIActions.loadingClear());
  // }

  // onInit(){
  //     this.setLoading();
  // }

  onFinishArray(result: any) {
    if (!result.data) {
      result.data = [];
    }
    return this.onFinish(result);
  }

  onFinish(result: any, noLoading?: boolean) {
    if (!noLoading) {
      // this.clearLoading();
    }
    return result.data;
  }

  onFinishError(error: any, noLoading?: boolean) {
    if (!noLoading) {
      // this.clearLoading();
    }
    // store.dispatch(UIActions.alertError(error));
    throw error;
  }

  async getAll() {
    // this.onInit();
    return axios
      .get<T[]>(this.URL, {
        headers: {
                
          
          "Access-Control-Allow-Origin": "*",   
        },
      })
      .then((result) => {          
        return this.onFinish(result);
      })
      .catch((error) => {
        return this.onFinishError(error);
      });
  }

  // async getList() {
  //         this.onInit();
  //         return axios.get<T[]>(`${this.URL}/list`)
  //         .then(result => { return this.onFinish(result)})
  //         .catch(error => { return this.onFinishError(error)});
  // }

  // async getContains(filter:any) {
  //     this.onInit();
  //     let url = this.URL+this.getCriteria(filter);
  //     return axios.get<T[]>(url)
  //     .then(result => { return this.onFinish(result)})
  //     .catch(error => { return this.onFinishError(error)});
  // }

  // async searchContains(filter:any) {
  //     this.onInit();
  //     return axios.get<T[]>(`${this.URL}/search${this.getCriteria(filter)}`)
  //     .then(result => { return this.onFinish(result)})
  //     .catch(error => { return this.onFinishError(error)});
  // }

  async get(id: number | string) {
    //this.onInit();
    return axios
      .get<T>(`${this.URL}/${id}`)
      .then((result) => {
        return this.onFinish(result);
      })
      .catch((error) => {
        return this.onFinishError(error);
      });
  }

  // getQueryParams(filter: any) {
  //     var str = [];
  //     for (var p in filter) {
  //         if (filter.hasOwnProperty(p) && filter[p] != null && filter[p] !== undefined && filter[p] !== "") {
  //             str.push(encodeURIComponent(p) + "=" + encodeURIComponent(filter[p]));
  //         }
  //     }
  //     return "?" + str.join("&");
  // }

  // getCriteria(filter:any){
  //     let criterias = "?";
  //     for (var key in filter) {
  //         let value = filter[key];
  //         if (value!=null && value!==undefined && value!==""){
  //             let criteria = "contains";
  //             if (key.slice(-2).toLocaleLowerCase()==="id"){
  //                 criteria = "in";
  //             }
  //             if (Number.isInteger(value) || key.slice(-4)==="Code" || key==="status" || Date.parse(value)){
  //                 criteria = "equals";
  //             }
  //             if (Array.isArray(value)){
  //                 criteria = "in";
  //                 for (const item of value){
  //                     criterias+= `${key}.${criteria}=${encodeURIComponent(item)}&`;
  //                 }
  //             }else{
  //                 criterias+= `${key}.${criteria}=${encodeURIComponent(value)}&`;
  //             }

  //         }
  //     }
  //     return criterias.substring(0, criterias.length - 1);
  // }
}
