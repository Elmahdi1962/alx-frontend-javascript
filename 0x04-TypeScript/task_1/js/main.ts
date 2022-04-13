interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    location: string;
    yearsOfExperience?: number;
    [key: string]: any
}

const teacher: Teacher = {
    firstName: 'Ben',
    lastName: 'Bond',
    fullTimeEmployee: true,
    location: 'New York',
    contract: false,
}

console.log(teacher);
