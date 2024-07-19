import { Validator, EmailValidator, ZipCodeValidator } from "./validators/index";

let email = 'hilariogrossi@yahoo.com.br';
let validator = new EmailValidator();
let result_1 = validator.isValid(email);

if (result_1 === true) {
    console.log(`O email ${email} é válido!`);

} else {
    console.log(`O email ${email} NÃO é válido!`);

}

console.log();

let cep = '36830-000'
let validatorZipCode = new ZipCodeValidator();
let result_2 = validatorZipCode.isValid(cep);

if (result_2 === true) {
    console.log(`O CEP ${cep} é válido!`);
    
} else {
    console.log(`O CEP ${cep} NÃO é válido!`);
    
}
