import PROJECT1_1 from '../styles/projects/Project1_1.png';
import PROJECT1_2 from '../styles/projects/Project1_2.jpg';
import PROJECT1_3 from '../styles/projects/Project1_3.jpg';
import PROJECT2_1 from '../styles/projects/Project2_1.jpg';
import PROJECT2_2 from '../styles/projects/Project2_2.jpg';
import PROJECT2_3 from '../styles/projects/Project2_3.jpg';
import PROJECT3_1 from '../styles/projects/Project3_1.jpg';
import PROJECT3_2 from '../styles/projects/Project3_2.jpg';
import PROJECT3_3 from '../styles/projects/Project3_3.jpg';


export const projects = [
    {
        name: 'Fridge Foodie', 
        description: 'Front-end application to minimize food waste while discovering new recipes-- and with a wine pairing!', 
        githubLink: 'https://github.com/AGRASSL/FridgeFoodieRecipes',
        projectLink: 'https://agrassl.github.io/FridgeFoodieRecipes/index.html',
        tech: ['Javascript', 'HTML', 'CSS'], 
        photo: [PROJECT1_1, PROJECT1_2, PROJECT1_3], 
    },
    {
        name: 'Zanes Magical Gathering',
        description: 'A game aid for the one and only, Magic: The Gathering. Being able to search and save legal cards, keep track of lives, 1+1s, tokens, and record you game statistics to your personal profile.',
        githubLink: 'https://github.com/AGRASSL/zanes-magical-gathering',
        projectLink: 'http://zanelandia.herokuapp.com/',
        tech: ['Next,js', 'SASS', 'MongoDB'],
        photo: [PROJECT2_1, PROJECT2_2, PROJECT2_3],
    },
    {
        name: 'Note Taker',
        description: 'Online application to have the ability to take notes, save notes, and remove them once completed or when desired.',
        githubLink: 'https://github.com/AGRASSL/NoteTaker',
        projectLink: 'https://notetakeralex.herokuapp.com/',
        tech: ['Tech1', 'Tech2', 'Tech3'],
        photo: [PROJECT3_1, PROJECT3_2, PROJECT3_3],
    },
]
