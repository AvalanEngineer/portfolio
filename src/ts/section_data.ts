import { ProjectItem } from "./items/ItemClasses";
import pic from '../images/pic.jpg';
import spark_pulse from '../images/spark_pulse.jpg';
import ecormmerce from '../images/ecommerce.jpg';
import pos_web from '../images/pos_web.png'

export const data: {
    email:{
        address:string;
    };
    navbar:{
        about:string;
        experience: string;
        projects:string;
        contact:string;
        resume:{
            name:string;
            link:string;
        }
    };
    introduction:{
        title: string;
        subTitle:string;
        content:string;
        button:string;
        button_link:string;
    };
    about:{
        title:string;
        content:string[];
        activities:string[];
        image:string;
    };
    experience:{
        title:string;
        experience_list:{
            tab:string;
            content:{
                title:string;
                subTitle:string;
                paragraphs:string[];
            };
        }[];
        content:string;
    };
    projects:{
        title:string;
        list:ProjectItem[];
        priority:number;
        showButton:string;
    };
    contact:{
        title:string;
        subTitle:string;
        content:string;
        button:{
            name:string;
            link:string;
        };
        socials:{
            linkedIn:string;
            instagram:string;
            twiter:string;
            github:string;
        }
    };
    footer:{
        content:string;
    }
} = {
    email:{
        address:'isaacrichu399@gmail.com'
    },
    navbar:{
        about:'About',
        experience: 'Experiences',
        projects:'Projects',
        contact:'Contact',
        resume:{
            name:'Resume',
            link:'../../static/resume.pdf'
        }
    },
    introduction:{
        title: 'Isaac Richu Karanja',
        subTitle:'I Love Exploring New Things',
        content:"I'm a Third Year Software Engineering Student at Kirinyaga University, Kirinyaga Kenya. Primarily interested in Web Development, Mobile Development and Cyber Security.  I enjoy learning new skills and implementing them in real life!",
        button:'Get In Touch',
        button_link:'mailto:isaacrichu399@gmail.com'

    },
    about:{
        title:'About Me',
        content:getAboutContent(),
        activities:['Coding','Problem Solving', 'Mentoring','Crafting','Team Management','Reading'],
        image:pic
    },
    experience:{
        title:"Where've Worked",
        experience_list:getExperiences(),
        content:"<h1>Home</h1>",
    },
    projects:{
        title:"Some Things I've Built",
        list:getProjects(),
        priority:3,
        showButton:'Show More',
    },
    contact:{
        title:"What's next?",
        subTitle:'Get In Touch',
        content:"My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.",
        button:{
            name:'Mail Me',
            link:'mailto:isaacrichu399@gmail.com'
        },
        socials:{
            linkedIn:'https://www.linkedin.com/in/isaac-richu-ba07a42b5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            twiter:'https://twiter.com',
            instagram:'https://instagram.com/isaaczack8/',
            github:'https://github.com/AvalanEngineer',
        }
    },
    footer:{
        content:'Designed & Built by  Isaac Richu Karanja +254793540705'
    }
};


function getProjects(): ProjectItem[]{
    let projects:ProjectItem[] = [];
     projects.push(new ProjectItem(
        'Music Player and Downloader Mobile Application',
        'Featured Project',
        "Leveraged multithreading in Flutter to enhance user experience without blocking the main thread.Implemented AI-based search to improve search efficiency and productivity.Designed an intuitive, user-friendly interface.Applied Component-Based Software Engineering principles for reusable and maintainable code.",
        ['Kortlin','flutter','java'],
        'https://github.com',
        'https://google.drive.com',
        spark_pulse,
        'app'

     ));
     projects.push(new ProjectItem(
        'E-commerce Mobile Application',
        'Featured Project',
        "Built using Flutter (Dart) for the frontend and Spring Boot (Java) for the backend.Integrated user authentication, CORS configuration, and geolocation-based delivery cost estimation.Enhanced efficiency with optimized search, pagination, and AI-driven user queries.Ensured data security through encryption and customized an M-Pesa payment gateway.Applied data analysis for personalized user experiences.",
        ['futter(dart) -frontend','Java SpringBoot -backend','PostgressSQL'],
        'https://github.com',
        'https://google.drive.com',
        ecormmerce,
        'app'

     ));
     projects.push(new ProjectItem(
        'Point Of Sale Web Application',
        'Featured Project',
        "Developed using React.js with Material UI and Spring Boot (Java) backend.Designed a user-friendly interface with barcode scanning capabilities.Integrated data analysis features for business insights.The app also allows you to make payment through M-pesa which is a payment method reducing manual way of sending individualy employee/supplier payments",
        ['React.js -frontend','java SpringBoot MVC -backend'],
        'https://github.com',
        'https://google.drive.com',
        pos_web,
        'web'

     ));
     
     
    return projects;
}


function getAboutContent(): string[]{
    let content: string[] = [
        "Hello! I'm Isaac Richu Karanja, from Nakuru, also renowned for its vibrant culture, diverse economy, and beautiful landscapes.",
        "I am a creative, time punctual, dedicated, goal-oriented individual with decent moral Values and Ethicates along with a high-energy level, honed communication skills, strong organizational skills, and meticulous attention to detail.",
        "I am pursuing my Bachelors from Kirinyaga University, Kirinyaga  in Software Engineering (2021-2026)",
        "I am a member of Mobile Development Student Club - Kirinyaga University.",
        "Here are a few of the other activities that I love to do! "
    ];
  return content;
}




function getExperiences():{
    tab:string;
    content:{
        title:string;
        subTitle:string;
        paragraphs:string[];
    };
}[]{
    let experiences:{
        tab:string;
        content:{
            title:string;
            subTitle:string;
            paragraphs:string[];
        };
    }[] = [
        {
            tab:'Thales Software LTD',
            content:{
                title:'Thales Software LTD',
                subTitle:'Attache, Mobile Development (flutter)',
                paragraphs:[
                    'June 2024 - August 2024',
                    "Directed and shaped a backend structure of an employee management system",
                    "Developed UI design using plain XML code applying interactive designs.",
                    "Designed and deployed 2 e-learning portals, and 2 e-commerce platforms using Bootstrap.",
                    "Modeled a Learning Management System during a 2-month coding attachment"
                ],
            },
        },
        {
            tab:'Kirinyaga University',
            content:{
                title:'Kirinyaga University',
                subTitle:'Mobile Development Club member',
                paragraphs:[
                    'June 2024 - Present',
                    "Promoted Team Unity",
                    "Create presentations on hot topics like AI in mobile apps, augmented reality, or responsive design, which could spark discussions and inspire new ideas.",
                    "Mentor and Support New Members",
                    "Organize members into small teams to tackle different aspects of a project, such as front-end development, backend integration, and testing.",
                    "Building an online presence can attract new members and create a lasting digital portfolio for the club.",

                ],
            },
        },

    ];
       
    return experiences;
}