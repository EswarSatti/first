//  import logo from './logo.svg';
import './App.css';

function App() {
  return (
     <div className="App">
     
        <form  id="container">
            <h2>SSC MARK LIST</h2> 
            
            <div >
                <label  for="engMarks">English</label>
                <input type="number" name=""  placeholder="Marks"></input>
                
            </div> 

            <div >
                <label for="">Telugu</label>
                <input type="number" name="" placeholder="Marks"></input>
                
            </div>

            <div >
                <label  for="">Hindi</label>
                <input type="numder" placeholder="Marks"></input>
               
            </div>

            <div >
                <label  for="">Maths</label>
                <input type="number" name=""  placeholder="Marks"></input>
                
            </div>

            <div >
                <label  for="">Science</label>
                <input type="number" name=""  placeholder="Marks"></input>
                
            </div>

            <div >
                <label  for="">Social</label>
                <input type="number" name=""placeholder="Marks"></input>
              
            </div>

            <div >
                <label  for="">Total</label>
                <input type="number" name=""  placeholder="Total"></input>
               
            </div>

            <div >
               

            <button type="button" >Result</button> 
            <button type="reset" id="SSCResult1">Reset</button>
           
            </div>
        </form>
      {/* </header> */}
      
    </div>
  );
}

export default App;
