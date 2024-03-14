interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1: Student = {
    firstName: "Richard",
    lastName: "Miruka",
    age: 27,
    location: "Kenya"
}
  
  const student2: Student = {
    firstName: "Shadrack",
    lastName: "Miti",
    age: 26,
    location: "Kenya"
  }
  
  // An array containing the two students
  const studentsList: Array<Student> = [ student1, student2 ];
  
// Create a table and append it to the body of our document
// We render a table using Vanilla JavaScript because we are not using any frameworks/libraries
  const body: HTMLBodyElement = document.getElementsByTagName("body")[0];
  const table: HTMLTableElement = document.createElement("table");
  const thead: HTMLTableSectionElement = document.createElement("thead");
  const tbody: HTMLTableSectionElement = document.createElement("tbody");
  const rowHead: HTMLTableRowElement = thead.insertRow(0);
  const cell1Head: HTMLTableCellElement = rowHead.insertCell(0);
  const cell2Head: HTMLTableCellElement = rowHead.insertCell(1);
  
  cell1Head.innerHTML = "firstName";
  cell2Head.innerHTML = "location";
  table.append(thead);
  
  studentsList.forEach((student) => {
    const row: HTMLTableRowElement = tbody.insertRow(0);
    const cell1: HTMLTableCellElement = row.insertCell(0);
    const cell2: HTMLTableCellElement = row.insertCell(1);
  
    cell1.innerHTML = student.firstName;
    cell2.innerHTML = student.location;
  });
  
  table.append(tbody);
  body.append(table);