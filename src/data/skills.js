import { works } from './works';
import { proyects } from './proyects';

function getAllSkills(arrays) {
    const allSkills = arrays.reduce((acc, currentValue) => {
        currentValue.stack.forEach(skill => {
            acc.add(skill);
        });
        return acc;
    }, new Set());

    return allSkills;
}

const allSkills = getAllSkills(works).add(...getAllSkills(proyects));

export const skills = Array.from(allSkills).sort();