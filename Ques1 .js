function getBankDetails(){
    let balance=0;
    let transaction=[];
    function bankAccount(){
        
        return  {
            deposit : function (amount){
                if(balance>=0){
                    balance+=amount;
                res = `Amount Deposited ${amount}`
                console.log(res)
                transaction.push(res)
                }
               
            },
            withdraw:function(amount){
                if(balance >= 0){
                     balance-=amount;
                      res = `Amount Withdrawn ${amount}`
                console.log(res)
                   transaction.push(res)
                }
               
            },
            getbalance:function(){
                      res = `Balance : ${balance}`
                console.log("Balance :",res);
                    transaction.push(res)
            },

            transactionHistory:function(){
                let length=transaction.length;
                for(let i=0; i<length; i++){
                    console.log(transaction[i]);
                }
            }
            


        }
    
   
}
 return bankAccount;
}


const result = getBankDetails()();
result.deposit(900);
result.transactionHistory();
