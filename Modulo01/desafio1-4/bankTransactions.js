const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };

const createTransaction = (transaction) => {
    user.transactions.push(transaction)
    if (transaction.type == 'credit'){
        user.balance += transaction.value
    }
    else if (transaction.type == 'debit'){
        user.balance -= transaction.value
    }
    else{
        throw ('Error: Invalid transaction type!')
    }
}

const getHigherTransactionByType = (transactionType) => {
    let higherTransaction = 0
    for (let transaction of user.transactions){
        if (transaction.value > higherTransaction && transaction.type == transactionType){
            higherTransaction = transaction.value
        }
    }
    return higherTransaction
}

const getAverageTransactionValue = () => {
    let sumTransactionsValues = 0
    for(let transaction of user.transactions){
        sumTransactionsValues += transaction.value
    }
    return sumTransactionsValues / user.transactions.length
}

const getTransactionsCount = () => {
    let creditCount = 0, debitCount = 0
    for (let transaction of user.transactions){
        if(transaction.type == 'credit'){
            creditCount++
        }
        else {
            debitCount++
        }
    }
    return {credit: creditCount, debit: debitCount}
}

createTransaction({ type: "credit", value: 50 })
createTransaction({ type: "credit", value: 120 })
createTransaction({ type: "debit", value: 80 })
createTransaction({ type: "debit", value: 30 })

console.log(user.balance) // 60

getHigherTransactionByType("credit") // { type: 'credit', value: 120 }
getHigherTransactionByType("debit") // { type: 'debit', value: 80 }

getAverageTransactionValue() // 70

console.log(getTransactionsCount()) // { credit: 2, debit: 2 }