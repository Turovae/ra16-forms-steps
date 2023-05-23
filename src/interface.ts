interface Step {
  id: string,
  date: string,
  distance: string,
}

interface Row extends Step {
  editRow: Function,
  deleteRow: Function, 
}

export type { Step, Row };
