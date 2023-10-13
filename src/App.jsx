import React, { useState, useEffect } from 'react';
import './App.css'; // Importējiet CSS failu ar stilu


function App() {
  const [groupText, setGroupText] = useState("Grupas: ...");
  const [groupData, setGroupData] = useState(null);
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    fetch('http://skrazzo.sites.hex.lv/projects/class-list/api.php')
      .then(response => response.json())
      .then(data => {
        setGroupData(data);
      })
      .catch(error => {
        console.error('Kļūda pieprasot datus:', error);
      });
  }, []);

  const showDetails = (groupName) => {
    setSelectedGroup(groupName);
  };
  const dayNames = {
    1: 'pirmdiena',
    2: 'otrdiena',
   3: 'trešdiena',
   4: 'ceturdiena',
   5: 'piektdiena',
  };
  return (
    <div>
      <h3>Stundu saraksts</h3>
      <div id="group" dangerouslySetInnerHTML={{ __html: groupText }}></div>
      {groupData &&
        Object.keys(groupData)
          .filter(key => key !== "last-updated")
          .map(groupName => (
            <button
              key={groupName}
              onClick={() => showDetails(groupName)}
              className={selectedGroup === groupName ? "selected" : ""}
            >
              {groupName}
            </button>
          ))}
      {selectedGroup && groupData[selectedGroup] && (
        <div>
            {/* <h4>
    <span className="selectedGroup">
      {selectedGroup}
    </span>
  </h4> */}
          {groupData[selectedGroup].map((dayData, index) => (
            <div key={index}>
              <table className="group-table">
                <thead>
                  <tr>
                    <th>Nr.</th>
                    <th>Nodarbība</th>
                    <th>Skolotāji</th>
                  </tr>
                </thead>
                <tbody>
                  {dayData.classes.map((lesson, lessonIndex) => (
                    <tr key={lessonIndex}>
                      <td>{lessonIndex + 1}</td>
                      <td>{lesson}</td>
                      <td>{dayData.teachers.join(", ")}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
