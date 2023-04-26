

export interface Skillsettype {
    id : string,
    image : string,
    desc : string,
    Title : string,
}

export type Skillsets = Skillsettype[];
const SETS : Skillsets = [
    {
        id : '1',
        desc : "I'm good in making website user friendly design which are nicely interactive and can inhance user experience. Also I've experice for content writing for the website.",
        image : "https://res.cloudinary.com/dtaablkf5/image/upload/w_200,h_200,c_fill,q_100/zx1y21zyxxuzgmezoexg.jpg",
        Title : 'UI/UX and Content Writing'
    },
    {
        id : '2',
        desc : "I've been working on frontend development from quite a few time and I prefer working on the frontend more than backend I know frameworks like React and Next also libraries like Bootstrap, Tailwind, MaterialUI, Three.js motion, anime.js ect....",
        image : "https://res.cloudinary.com/dtaablkf5/image/upload/w_200,h_200,c_fill,q_100/gzzdsvaltukzyhsywlv5.jpg",
        Title : 'Frontend Development'
    },
    {
        id : '3',
        desc : "I've worked with the Backend development Enough, and I know techs like Mongodb, Mongoose, mySQL, Express.js, Redux Tollkits and more. I'm currently exploring backend more and will get better with time.",
        image : "https://res.cloudinary.com/dtaablkf5/image/upload/w_200,h_200,c_fill,q_100/zzvowcektdii3oox1klm.jpg"        ,
        Title : 'Backend Development'
    },
    {
        id : '4',
        desc : "I'm little new to this tech I know python and libraries such as Numpy and started working with Pands and Mathplotlib. I'm really interested in this field and will make a good progress with time.",
        image : "https://res.cloudinary.com/dtaablkf5/image/upload/w_200,h_200,c_fill,q_100/cqhyfu2coyigwhhsuqi0.jpg",
        Title : 'AI/ML'
    },
    
    
]

export default SETS;