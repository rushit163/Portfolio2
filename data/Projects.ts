
export interface projectType {
    id : string,
    image : string,
    shortdesc:string,
    desc : string,
    Title : string,
    github : string,
    Link : string,
}

export type projectSet = projectType[];
const myProjects : projectSet = [
    {
        id : '1',
        desc : "It's a Fullstack Application which will allow user to interact with the application and user will be able to shrea their preceiouse memory to the world. So, basically it's a Social Media Apllication build with React, Redux, ManogoDB, Mongoose, Express, MaterialUI and many other JS library",
        image : "Memories",
        shortdesc : "It's a Fullstack Application which will allow user to interact with the application and user will be able to shrea......",
        Title : 'Memories',
        github : 'https://github.com/rushit163/memory',
        Link :''
    },
    {
        id : '2',
        desc : "I've been building this portfolio from past two months and this will be my final portfolio. I've connected it with the backend using Sanity.io and I've also used animation tools like Framer Motion and styled it with the help of Tailwind CSS so basically it's my second full stack project.",
        shortdesc : "I've been building this portfolio from past two months and this will be my final portfolio. I've connected it with......",
        image : "Portfolio2",
        Title : 'Portfolio V2',
        github : 'https://github.com/rushit163/Portfolio2',
        Link : ''
    },
    {
        id : '3',
        desc : "This was the basic project which I picked up when I was learning about React and for the basics of the JS this was the great project to work upon. I've learned vairous React Function making this project Such as UseState and Props for the React Components. I've used Tailwind CSS for styling it",
        shortdesc : "This was the basic project which I picked up when I was learning about React and for the basics of the JS this was.....",
        image : "Todo",
        Title : 'To-Do-List',
        github : 'https://github.com/rushit163/To-Do-List',
        Link : 'rushit163.github.io/To-Do-List/'
    },
    {
        id : '4',
        desc : "This is also a basic React Project where I've used React and learned various funcionality It's somekind of same like Todo project of mine but I wanted to try this out.",
        shortdesc : "This is also a basic React Project where I've used React and learned various funcionality It's somekind of same.......",
        image : "Password",
        Title : 'Password Generator',
        github : 'https://github.com/rushit163/Password-Generator',
        Link : 'https://rushit163.github.io/Password-Generator/'
    },
    {
        id : '5',
        desc : "It's my first Portfolio website in which I triend to implement my learning reagarding the SCSS which I learned online and my basic JS functionalities of DOM it's not the great project but since It's my first Project I like to put that in showcase.",
        shortdesc : "It's my first Portfolio website in which I triend to implement my learning reagarding the SCSS which I learned........",
        image : "Portfolio1",
        Title : 'Portfolio V1',
        github : 'https://github.com/rushit163/Portfolio',
        Link : 'https://rushit163.github.io/Portfolio/'
    }
    
]

export default myProjects;