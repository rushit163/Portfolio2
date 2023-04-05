

export interface Skillsettype {
    image : string,
    desc : string,
    Title : string,
}

export type Skillsets = Skillsettype[];
const SETS : Skillsets = [
    {
        desc : "I've been working on frontend development from quite a few time and I prefer working on the frontend more than backend I know frameworks like React and Next also libraries like Bootstrap, Tailwind, MaterialUI, Three.js motion, anime.js ect....",
         image : "front",
        Title : 'Frontend Development'
    },
    {
        desc : "I've worked with the Backend development Enough, and I know techs like Mongodb, Mongoose, mySQL, Express.js, Redux Tollkits and more. I'm currently exploring backend more and will get better with time.",
         image : "back",
        Title : 'Backend Development'
    },
    {
        desc : "I'm little new to this tech I know python and libraries such as Numpy and started working with Pands and Mathplotlib. I'm really interested in this field and will make a good progress with time.",
        image : "AI",
        Title : 'AI/ML'
    }
    
]

export default SETS;