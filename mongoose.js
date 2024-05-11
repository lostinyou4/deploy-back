import connect from "./connect/connect.js";
import User from "./schema/user.js";

connect()

const user_inserted = await User.create(
    {
        email: 'ksh1234@gmail.com',
        name:'김세환'

    },
    {
        email: 'hgd1234@gmail.com',
        name:'홍길동'

    },
    {
        email: 'jbg1234@gmail.com',
        name:'장보고'

    },
)
