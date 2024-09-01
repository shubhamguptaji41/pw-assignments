const name = document.getElementById('name');
const mode = document.getElementById('mode');
const amount = document.getElementById('amount');
const accNum = document.getElementById('accNum')

const customerDetails = document.getElementById('customerDetails');
const updatedDetails = document.getElementById('updatedDetails');
const find = document.getElementById('findBtn');
const update = document.getElementById('updateBtn');

let customers = [
    {
        name: 'Hitesh Choudhary',
        accNum: 1,
        currBal: 3000000,
    },
    {
        name: 'Anurag Tiwari',
        accNum: 2,
        currBal: 150000,
    },
    {
        name: 'Sanket Singh',
        accNum: 3,
        currBal: 100000,
    },
];

const customerFinder = (name, accNum, mode, amount) => {
    const customer = customers.find((customer) =>
        customer.accNum === accNum
    );
    if (!customer) {
        customerDetails.innerHTML = "You don't have account";
    } else {

        console.log(customer);
        customerDetails.innerHTML = JSON.stringify(customer);
    }

};

const amountUpdater = (name, accNum, mode, amount) => {
    customers = customers.map((customer) => {
        if (customer.accNum === accNum) {
            return {
                ...customer,
                currBal:
                    mode == 'deposite'
                        ? customer.currBal + amount
                        : customer.currBal - amount,
            };
        }
        return customer;
    });

    const updatedCustomerDetails = customers.find(
        (customer) => customer.accNum === accNum
    );
    if (!updatedCustomerDetails) {
        customerDetails.innerHTML = "You don't have account";
        updatedDetails.innerHTML = "You don't have account";

    }
    else {
        updatedDetails.innerHTML = JSON.stringify(updatedCustomerDetails);
        customerDetails.innerHTML = JSON.stringify(updatedCustomerDetails);

    }
};

find.addEventListener('click', (e) => {
    e.preventDefault();

    customerFinder(
        name.value,
        Number(accNum.value),
        mode.value,
        Number(amount.value)
    );


});

update.addEventListener('click', (e) => {
    e.preventDefault();

    if (name.value && accNum.value && mode.value && amount.value) {
        amountUpdater(
            name.value,
            Number(accNum.value),
            mode.value,
            Number(amount.value)
        );
    }
});