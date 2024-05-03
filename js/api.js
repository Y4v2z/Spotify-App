const url="https://shazam.p.rapidapi.com/charts/track?locale=tr-TR&listId=ip-country-chart-TR"
const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "17bfa31bbbmsh1355592a7405f9bp1dd229jsnd7e87c1e1260",
      "X-RapidAPI-Host": "shazam.p.rapidapi.com",
    },
  };
  //* API isteklerini yönettiğimiz class yapısı
  export class API{
    constructor(){
        this.songs=[]
    }
    async getPopular(){
        const res=await fetch(url,options);
        const data=await res.json()
        console.log(data)
    }
  }