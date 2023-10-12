const resume = {
    personalInformation: {
        name : 'Marcus Mathuram',
        email: 'marcus.mathuram7@gmail.com',
        phone: 9688597790,
        dateOfBirth: '4 june 2000',
        language:'English and Tamil',
        interest:'Programming, Travelling, Photography, Editing and Sports',
        city:'Madurai',
        state:'TamilNadu',
        country:'India'
    },
    education: {
        degree:'BE-Electronics and Instrumentation Engineering',
        college:'Jeppiaar Engineering College',
        batch:'2018-2022',
        percentage:'81%',
        school:'Mahatma Matriculation Higher Secondary School',
        class12Percentage:'70%',
        class10Percentage:'89%'
    },
    skills: ['Python','Java','Html','CSS','Javascript','Ms office suite'],
    project: '3d Portfolio using Javascript',
    internship:'Python Full Stack Developer Internship',
    certificates:'Java and Python in Coursera.com'

}

console.log(JSON.stringify(resume));