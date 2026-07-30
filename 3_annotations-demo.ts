let courseName: string = "Full Stack Development";
let courseDuration: number = 6;
let isCertified: boolean = true;

function getCourseInfo(name: string, duration: number): string {
    return `${name} course lasts for ${duration} months.`;
}

let modules: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript"
];

const summary: string = getCourseInfo(courseName, courseDuration);

console.log(summary);
console.log(`Modules Covered: ${modules.join(", ")}`);
console.log(`Certification Available? ${isCertified ? "Yes" : "No"}`);