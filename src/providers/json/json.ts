import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
/*
  Generated class for the JsonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JsonProvider {
  info;
  constructor(public http: HttpClientModule) {
    console.log('Hello JsonProvider Provider');
  }
  getJsonData() {
    // return this.http.get('assets/json/info').map(res => res.json());
    return this.info =
      { "response": [{ "p_invo_id": "19754", "date": "23/07/2018", "p_margin": "1", "supplier_name": "SHREE PHARMA SALES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19753", "date": "23/07/2018", "p_margin": "0", "supplier_name": "AAKARTI PHARMA ", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19752", "date": "23/07/2018", "p_margin": "1", "supplier_name": "VARSHA   SURGICAL&MEDICAL", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19751", "date": "23/07/2018", "p_margin": "1", "supplier_name": "VARSHA   SURGICAL&MEDICAL", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19750", "date": "23/07/2018", "p_margin": "0", "supplier_name": "VIJAY MEDICAL STORE", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19749", "date": "23/07/2018", "p_margin": "0", "supplier_name": "MEDICAL & GENERAL TRADERS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19748", "date": "23/07/2018", "p_margin": "0", "supplier_name": "ANMOL PHARMA ", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19747", "date": "23/07/2018", "p_margin": "0", "supplier_name": "LIFE SUPPORT MEDICARE", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19746", "date": "23/07/2018", "p_margin": "0", "supplier_name": "DRUG HOUSE", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19745", "date": "23/07/2018", "p_margin": "1", "supplier_name": "DRUG HOUSE", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19744", "date": "23/07/2018", "p_margin": "0", "supplier_name": "SHEELA MEDICAL STORES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19743", "date": "23/07/2018", "p_margin": "0", "supplier_name": "SHEELA MEDICAL STORES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19742", "date": "23/07/2018", "p_margin": "0", "supplier_name": "VIRAJ PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19741", "date": "23/07/2018", "p_margin": "0", "supplier_name": "MANAV AGENCIES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19740", "date": "23/07/2018", "p_margin": "0", "supplier_name": "FRONTIER STORE", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19739", "date": "23/07/2018", "p_margin": "0", "supplier_name": "VISHAL PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19738", "date": "23/07/2018", "p_margin": "0", "supplier_name": "APNA MEDICAL", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19737", "date": "23/07/2018", "p_margin": "0", "supplier_name": "VIKRANT ENTERPRICES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19736", "date": "23/07/2018", "p_margin": "0", "supplier_name": "JAISWAL PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19735", "date": "23/07/2018", "p_margin": "0", "supplier_name": "FAIR PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19734", "date": "23/07/2018", "p_margin": "0", "supplier_name": "SHREE MAHALAXMI ENTERPRISES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19733", "date": "23/07/2018", "p_margin": "0", "supplier_name": "RAVI SURGICAL", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19732", "date": "23/07/2018", "p_margin": "1", "supplier_name": "NST BIOLOGICAL LABS", "p_invo_type": "credit", "user_name": "sachin rusiya" }, { "p_invo_id": "19731", "date": "23/07/2018", "p_margin": "0", "supplier_name": "MEDISURGE JBP", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19730", "date": "23/07/2018", "p_margin": "1", "supplier_name": "BHAGWATI PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19729", "date": "23/07/2018", "p_margin": "1", "supplier_name": "VINAYAK PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19728", "date": "23/07/2018", "p_margin": "0", "supplier_name": "NARESH TRADERS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19727", "date": "23/07/2018", "p_margin": "1", "supplier_name": "NARESH TRADERS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19726", "date": "23/07/2018", "p_margin": "0", "supplier_name": "NARESH TRADERS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19725", "date": "23/07/2018", "p_margin": "1", "supplier_name": "MANAV AGENCIES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19724", "date": "23/07/2018", "p_margin": "0", "supplier_name": "R.P.ASSOCIATES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19723", "date": "23/07/2018", "p_margin": "0", "supplier_name": "K.MEDICO DISTRIBUTOR", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19722", "date": "23/07/2018", "p_margin": "0", "supplier_name": "RAJESH PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19721", "date": "23/07/2018", "p_margin": "0", "supplier_name": "BHARAT DISTRIBUTORS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19720", "date": "23/07/2018", "p_margin": "1", "supplier_name": "BHARAT DISTRIBUTORS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19719", "date": "23/07/2018", "p_margin": "0", "supplier_name": "VIDHYA SHREE PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19718", "date": "23/07/2018", "p_margin": "0", "supplier_name": "RAJVEER PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19717", "date": "23/07/2018", "p_margin": "0", "supplier_name": "GEETA MEDICOS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19716", "date": "21/07/2018", "p_margin": "1", "supplier_name": "BADERIYA PHARMA SALES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19715", "date": "21/07/2018", "p_margin": "0", "supplier_name": "SHREE SHUBH PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19714", "date": "21/07/2018", "p_margin": "1", "supplier_name": "VIRAJ PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19713", "date": "21/07/2018", "p_margin": "0", "supplier_name": "AAKARTI PHARMA ", "p_invo_type": "credit", "user_name": "Govind  Dubey" }, { "p_invo_id": "19712", "date": "21/07/2018", "p_margin": "1", "supplier_name": "SHREE PHARMA SALES", "p_invo_type": "credit", "user_name": "Govind  Dubey" }, { "p_invo_id": "19711", "date": "21/07/2018", "p_margin": "0", "supplier_name": "VANDANA MEDICAL AGENCIES ", "p_invo_type": "credit", "user_name": "Govind  Dubey" }, { "p_invo_id": "19710", "date": "21/07/2018", "p_margin": "0", "supplier_name": "BHAGWATI PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19709", "date": "21/07/2018", "p_margin": "0", "supplier_name": "FAIR PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19708", "date": "21/07/2018", "p_margin": "0", "supplier_name": "MANAV AGENCIES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19707", "date": "21/07/2018", "p_margin": "0", "supplier_name": "GASTRO CARE SYSTEM ", "p_invo_type": "credit", "user_name": "anubhi dubey" }, { "p_invo_id": "19706", "date": "21/07/2018", "p_margin": "0", "supplier_name": "SHEELA MEDICAL STORES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19705", "date": "21/07/2018", "p_margin": "1", "supplier_name": "SHEELA MEDICAL STORES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19704", "date": "21/07/2018", "p_margin": "0", "supplier_name": "SHREE MAHALAXMI ENTERPRISES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19703", "date": "21/07/2018", "p_margin": "0", "supplier_name": "SUN PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19702", "date": "21/07/2018", "p_margin": "0", "supplier_name": "P.P.ENTERPRISES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19701", "date": "21/07/2018", "p_margin": "0", "supplier_name": "VISHAL PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19700", "date": "21/07/2018", "p_margin": "0", "supplier_name": "MEDICAL & GENERAL TRADERS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19699", "date": "21/07/2018", "p_margin": "1", "supplier_name": "VARSHA   SURGICAL&MEDICAL", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19698", "date": "21/07/2018", "p_margin": "1", "supplier_name": "VARSHA   SURGICAL&MEDICAL", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19697", "date": "21/07/2018", "p_margin": "1", "supplier_name": "RAVI SURGICAL", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19696", "date": "21/07/2018", "p_margin": "0", "supplier_name": "MANAV AGENCIES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19695", "date": "21/07/2018", "p_margin": "0", "supplier_name": "VINAYAK PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19694", "date": "21/07/2018", "p_margin": "1", "supplier_name": "DRUG HOUSE", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19693", "date": "21/07/2018", "p_margin": "0", "supplier_name": "AHUJA WHOLESALE CHEMIST", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19692", "date": "21/07/2018", "p_margin": "1", "supplier_name": "AHUJA WHOLESALE CHEMIST", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19691", "date": "21/07/2018", "p_margin": "1", "supplier_name": "JAISWAL PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19690", "date": "21/07/2018", "p_margin": "1", "supplier_name": "NARESH TRADERS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19689", "date": "21/07/2018", "p_margin": "1", "supplier_name": "BHARAT DISTRIBUTORS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19688", "date": "21/07/2018", "p_margin": "0", "supplier_name": "RAJVEER PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19687", "date": "21/07/2018", "p_margin": "1", "supplier_name": "RAJESH PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19686", "date": "21/07/2018", "p_margin": "0", "supplier_name": "HIND MEDICAL AGENCIES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19685", "date": "21/07/2018", "p_margin": "0", "supplier_name": "VIRAJ PHARMA", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19684", "date": "21/07/2018", "p_margin": "0", "supplier_name": "SHEELA MEDICAL STORES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19683", "date": "21/07/2018", "p_margin": "0", "supplier_name": "MANAV AGENCIES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19682", "date": "21/07/2018", "p_margin": "0", "supplier_name": "MANAV AGENCIES", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19681", "date": "21/07/2018", "p_margin": "0", "supplier_name": "SHREE SIDDH PROVISION", "p_invo_type": "credit", "user_name": "anubhi dubey" }, { "p_invo_id": "19680", "date": "21/07/2018", "p_margin": "0", "supplier_name": "RAVI SURGICAL", "p_invo_type": "credit", "user_name": "anubhi dubey" }, { "p_invo_id": "19679", "date": "21/07/2018", "p_margin": "0", "supplier_name": "REVA ASSOCIATES", "p_invo_type": "credit", "user_name": "anubhi dubey" }, { "p_invo_id": "19678", "date": "21/07/2018", "p_margin": "1", "supplier_name": "NARESH TRADERS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19677", "date": "21/07/2018", "p_margin": "0", "supplier_name": "MOHAN MEDICAL", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19676", "date": "21/07/2018", "p_margin": "0", "supplier_name": "MEDICAL & GENERAL TRADERS", "p_invo_type": "credit", "user_name": "Shashi Bairagi" }, { "p_invo_id": "19675", "date": "20/07/2018", "p_margin": "0", "supplier_name": "MANAV AGENCIES", "p_invo_type": "credit", "user_name": "santosh kumar Vishnoi" }, { "p_invo_id": "19674", "date": "20/07/2018", "p_margin": "0", "supplier_name": "GEETA MEDICOS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19673", "date": "20/07/2018", "p_margin": "0", "supplier_name": "ANKIT BAGS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19672", "date": "20/07/2018", "p_margin": "1", "supplier_name": "VARSHA   SURGICAL&MEDICAL", "p_invo_type": "credit", "user_name": "sachin rusiya" }, { "p_invo_id": "19671", "date": "20/07/2018", "p_margin": "0", "supplier_name": "HIND MEDICAL AGENCIES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19670", "date": "20/07/2018", "p_margin": "0", "supplier_name": "VARSHA   SURGICAL&MEDICAL", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19669", "date": "20/07/2018", "p_margin": "0", "supplier_name": "MEDICAL & GENERAL TRADERS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19668", "date": "20/07/2018", "p_margin": "0", "supplier_name": "SHUBH PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19667", "date": "20/07/2018", "p_margin": "0", "supplier_name": "SHREE PHARMA SALES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19666", "date": "20/07/2018", "p_margin": "0", "supplier_name": "VANDANA MEDICAL AGENCIES ", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19665", "date": "20/07/2018", "p_margin": "0", "supplier_name": "SHEELA MEDICAL STORES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19664", "date": "20/07/2018", "p_margin": "1", "supplier_name": "DRUG HOUSE", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19663", "date": "20/07/2018", "p_margin": "0", "supplier_name": "APNA MEDICAL", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19662", "date": "20/07/2018", "p_margin": "1", "supplier_name": "RAVI SURGICAL", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19661", "date": "20/07/2018", "p_margin": "0", "supplier_name": "SHREE MAHALAXMI ENTERPRISES", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19660", "date": "20/07/2018", "p_margin": "0", "supplier_name": "NARESH TRADERS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19659", "date": "20/07/2018", "p_margin": "0", "supplier_name": "JAIN & COMPANY", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19658", "date": "20/07/2018", "p_margin": "0", "supplier_name": "K.MEDICO DISTRIBUTOR", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19657", "date": "20/07/2018", "p_margin": "0", "supplier_name": "YASH PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19656", "date": "20/07/2018", "p_margin": "1", "supplier_name": "NARESH TRADERS", "p_invo_type": "credit", "user_name": "Ayush Sahu" }, { "p_invo_id": "19655", "date": "20/07/2018", "p_margin": "0", "supplier_name": "JAISWAL PHARMA", "p_invo_type": "credit", "user_name": "Ayush Sahu" }], "message": "SUCCESS", "status": "1" }
  }
}