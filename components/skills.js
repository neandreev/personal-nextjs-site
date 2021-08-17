import List from './list';

const presenthardskills = ['HTML, CSS', 'JavaScript', 'React, Redux', 'Jest', 'Декларативный код', 'Linux power user'];
const futurehardskills = ['SASS', 'TypeScript'];
const softskills = ['Critical thinking', 'Lifelong learner', 'Self-Reflection', 'Nonviolent Communication', 'Emotional intelligence'];

const renderList = (points, text) => (
  <div className="w-10/12">
    <span className="pl-5">{text}</span>
    <List points={points} />
  </div>
);

const Skills = () => (
  <div>
    <span>Скиллы:</span>
    <div className="flex mt-3 space-y-2 md:space-y-0 flex-col md:flex-row justify-between">
      <div className="bg-gray-100 mx-1 p-2 md:w-10/12 border rounded shadow-sm">
        <span className="pl-5">Hardskills:</span>
        <div className="flex justify-between h-full">
          {renderList(presenthardskills, 'In use:')}
          {renderList(futurehardskills, 'In progress:')}
        </div>
      </div>
      <div className="bg-gray-100 md:mt-0 mx-1 p-2 md:w-10/12 border rounded shadow-sm">
        {renderList(softskills, 'Softskills:')}
      </div>
    </div>
  </div>
);

export default Skills;
