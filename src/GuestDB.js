const guestDB = {
   user: {
        name: 'Rashid',
        job: 'Web Developer',
        email: 'rashid@gmail.com',
    },  
    contents: [
        {
            type: 'income',
            amount: 2000,
            deal: 'cash',
            group: 'over job',
            report: 'this amount will increase in the next month',
            date: '2023/1/30'
        },
        {
            type: 'expens',
            amount: 211,
            deal: 'cash',
            group: 'rent',
            report: 'amount was for mortgage',
            date: '2023/1/30'
        },
    ],
    assets: () => {
        // this.contents.amount
        console.log('dddd'); 
    }

}
export default guestDB;