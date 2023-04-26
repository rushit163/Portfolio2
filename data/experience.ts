export interface experienceType{
    id : String,
    title : String,
    job : String,
    timeline : String,
    img : String,
    decriptio : Array<string>,
}

export type experinceSet = experienceType[];
const experience : experinceSet = [
    {
        id : '1',
        title : 'IEEE SRMIST',
        timeline : 'Mar 2022 - Present Day',
        job : 'Technical Lead',
        img : "https://res.cloudinary.com/dtaablkf5/image/upload/w_200,h_200,c_fill,q_50/f3iae4qf8eqbbdhbmjzy.jpg",
        decriptio : [
            'Member at web and app development domain',
            'Technical Lead at COMSOC domain at IEEE Technical domain'
        ]
    },
    {
        id : '2',
        title : 'Origin Tech',
        timeline : 'Mar 2023 - Apr 2023',
        job : 'Internship',
        img : 'https://res.cloudinary.com/dtaablkf5/image/upload/q_50/gbmugfku5irx95ahwzlk.jpg',
        decriptio : [
            'Internship Program attended as a IOT developer'
        ]
    },

]

export default experience