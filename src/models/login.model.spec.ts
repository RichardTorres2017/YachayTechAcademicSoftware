import {Login} from './login.model';

describe("Test for login",()=>{

    describe("Test for username and password correct",()=>{
        it("should return the username and password correct",()=>{
            let login = new Login("richard.torres","richard123");
        expect(login.getLogin()).toEqual("richard.torres richard123");
        });
        

    });
    describe("Test for username and password incorrect",()=>{
        it("should return the username and password incorrect",()=>{
        let login = new Login("richard.torres","richard123");
        expect(login.getLogin()).not.toContain("richard.torres rihard123");
        });
    });
    describe("Test for username incorrect and password correct",()=>{
        it("should return the  username incorrect and password correct",()=>{
        let login = new Login("richard.torres","richard123");
        expect(login.getLogin()).not.toContain("richard.torr richard123");
    });
    });
    describe("Test for username incorrect and password incorrect",()=>{
        it("should return the  username incorrect and password incorrect",()=>{
        let login = new Login("richard.torres","richard123");
        expect(login.getLogin()).not.toContain("richard.tores ricard123");
    });
    });


});