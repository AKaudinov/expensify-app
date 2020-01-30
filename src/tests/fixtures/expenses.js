import moment from "moment";

export default [ //export the array by default
    {
        id:'1',
        description: 'test1',
        note: '',
        amount: 195,
        createdAt: 0
    },
    {
        id:'2',
        description: 'test2',
        note: '',
        amount: 234,
        createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
        id:'2',
        description: 'Rent',
        note: '',
        amount: 193500,
        createdAt: moment(0).add(4, 'days').valueOf() //valueOf gives regular timestamp back
    },
];
