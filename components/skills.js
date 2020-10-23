import List from "../components/list";

const hardskills = ["HTML, CSS", "JavaScript", "React, Redux", "Jest", "Декларативный код", "Linux power user", ];
const softskills = ["Critical thinking", "Lifelong learner", "Self-Reflection", "Nonviolent Communication", "Emotional intelligence"];

export default function Skills() {
  return (
    <div className="flex flex-wrap md:flex-no-wrap justify-between">
      <div className="mx-1 p-2 w-full md:w-10/12 border rounded shadow-sm">
        <span>Hardskills:</span>
        <List points={hardskills} />
      </div>
      <div className="mt-5 md:mt-0 mx-1 p-2 w-full md:w-10/12 border rounded shadow-sm">
        <span>Softskills:</span>
        <List points={softskills} />
      </div>
    </div>
  )
}
