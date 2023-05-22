import './App.css'

function App() {

  return (
    <>
      <form className='steps-form'>
        <div className="form-col">
          <label className='form-group'>
            <span className='form-hint'>Дата (ДД.ММ.ГГГГ)</span>
            <input type="date" className='form-control' name='date'/>
          </label>
        </div>
        <div className="form-col">
          <label className='form-group'>
            <span className='form-hint'>Пройдено км</span>
            <input type="text" className='form-control' name='distance'/>
          </label>
        </div>
        <div className="form-col">
          <button type="submit" className='form-control'>OK</button>
        </div>
      </form>
    </>
  )
}

export default App
