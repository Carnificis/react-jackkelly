import React, { useState } from 'react';
import projectsList from "./projectsList.json";
import Project from "./Project"

function Portfolio() {
    const [work] = useState(projectsList);
    return (<>
    {work.map((project,key) => <Project key={key} projectdetails={project}/>)}
    </>)
}


export default Portfolio