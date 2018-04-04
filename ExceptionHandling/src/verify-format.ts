export namespace VerifyFormat{
    export function verifyString(x: any){
        if(x == undefined){
             return "Error, it is undefined";
  
        }
        else if(typeof x == "number"){
             return "Error, it is a number";
           
        }
        else if(typeof x == "string"){
            return "Success";
        };
        
    }

    export function verifyNumber(x: any){
        if(x == undefined){
            return "Error, it is undefined";
           
        }
        else if(typeof x == "string"){
           return "Error, it is a string";
         
        }
        else if(typeof x == "number"){
            return "Success";
         
        };
      
    }
}
