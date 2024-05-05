let employees = '{ "employees" : 
[ {"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":"40000", "raiseEligible":"true"} , 
  {"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":"18500", "raiseEligible":"true"},
  {"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":"25600", "raiseEligible":"false"}] }';
let employees0bj = JSON.parse(employees);
console.log(employees0bj.employees);


let company = '{"companyName":"Tech Stars", "website":"www.techstars.site","employees" : 
[ {"firstName":"Sam", , "department":"Tech", "designation":"Manager", "salary":"40000", "raiseEligible":"true"},
{"firstName":"Mary", "department":"Finance", "designation":"Trainee", "salary":"18500", "raiseEligible":"true"},
{"firstName":"Bill", "department":"HR", "designation":"Executive", "salary":"25600", "raiseEligible":"false"}
]}';
let company0bj = JSON.parse(company);
console.log(company0bj);

employees = '{"employees" : [ {"firstName":"Sam", "department":"Tech", "designation":"Manager", "salary":"40000", "raiseEligible":"true"} , ]}'
