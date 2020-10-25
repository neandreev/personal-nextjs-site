import List from "../components/list";

const presenthardskills = ["HTML, CSS", "JavaScript", "React, Redux", "Jest", "Декларативный код", "Linux power user", ];
const futurehardskills = ["SASS", "TypeScript"]
const softskills = ["Critical thinking", "Lifelong learner", "Self-Reflection", "Nonviolent Communication", "Emotional intelligence"];

export default function Skills() {
  return (
    <div className="flex flex-wrap md:flex-no-wrap justify-between">
      <div className="mx-1 p-2 w-full md:w-10/12 border rounded shadow-sm">
        <span className="pl-5">Hardskills:</span>
        <div className="flex justify-between">
          <div className="w-10/12">
            <span className="pl-5">In use:</span>
            <List points={presenthardskills} />
          </div>
          <div className="w-10/12">
            <span className="pl-5">In progress:</span>
            <List points={futurehardskills} />
          </div>
        </div>
      </div>
      <div className="mt-5 md:mt-0 mx-1 p-2 w-full md:w-10/12 border rounded shadow-sm">
        <span className="pl-5">Softskills:</span>
        <List points={softskills} />
      </div>
    </div>
  )
}
