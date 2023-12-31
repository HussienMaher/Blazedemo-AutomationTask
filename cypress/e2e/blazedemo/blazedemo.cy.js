/// <reference types="Cypress" />
import {faker} from "@faker-js/faker"
import Confirmation from "./Confirmationpage"
import Reservepage from "./Reservepage"
import Homepage from "./homepage"
import Purchasepage from "./purchase"
import table from "./table"

const num1 = faker.number.int({min:0,max:6})
const num2 = faker.number.int({min:0,max:6})
it('validate booking flight',()=>{
const homepage= new Homepage()
    homepage.visitwebsite()
    .departurecity(num1)
    .destinationcity(num2)
    .findflight()
   
})
it('choose flight',()=>{
    const reserve = new Reservepage
    reserve.choosethis()
})
it('purchase flight with valid data',()=>{
    const purchase =new Purchasepage
    purchase.typename('hussein')
    .typeaddress('elnemas')
    .typecity('assuit')
    .typestate('els3ed')
    .typezipcode('123456')
    .selectcardtype('American Express')
    .typecardnumber('54165312')
    .typemonth('5')
    .typeyear('2023')
    .typenameoncard('husseinmaher')
    .checkrememberme()
    .purhcase()
})
it('check flight data',()=>{
    const confirmation = new Confirmation
confirmation.assertconfirmation()
.assertstatus()
.assertcardnumber()
//.assertexpiration()
.assertdate()
})
