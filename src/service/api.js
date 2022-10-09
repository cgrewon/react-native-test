
import data from './leaderboard.json'

const Api = {

    searchUser:(key)=>{

        const users = Object.values(data).sort((a,b)=>a.bananas > b.bananas ? -1 : 1).map((user, index)=> ({...user, rank: index + 1, isFound: false }))

        let top10 = users.slice(0, 10);
        const foundUsers = key ? users.filter(a=>a.name.toLowerCase() == key.toLowerCase()) : undefined;
        

        if (foundUsers && foundUsers.length > 0) {
            let foundUsersUIDs  = foundUsers.map(u=>u.uid);
            top10 = top10.map(user=> ({...user, isFound: foundUsersUIDs.includes(user.uid)}))

            if(top10.filter(one=>one.isFound === true).length === 0) {
                top10.pop()
                top10.push({...foundUsers[0], isFound: true})
            }
        }   

        return {users: top10, isFound: foundUsers && foundUsers.length > 0};
    }
};

export default Api;