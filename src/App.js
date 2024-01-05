//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'bootstrap';



// export default StaticExample;

function App() {
  
  
  return (
    
    <div className="App">
    
    <div className="main-class">
      <div className="main-header">
        <h4>CHEQUE BOOK REQUESITION</h4>
      </div>
      <div className="main-contianer">
        <div className="main">
        <div className="sub-contianer">
        <div className="form-1">
          <form className="top-request">
            <div id="request-div">
            <label  id="request-text" >Request ID</label>
            <input type="text" id="request-id"></input>
            </div>
          </form><br></br>
        </div>
        <div className="container-1">
          <form>
            <div className="first-input">
            <label > Account No</label>
            <input type="text"></input>
            <input type="text" className="longdiv"></input>
            </div>

            <div >
            <label>Channel ID</label>
            <input type="text" id="first-input-div"></input>
            <label> Currency</label>
            <input type="text" id="first-input-div"></input>
            </div>
          </form>
        </div>
        <div className="Container-2">
        <form>
            <label> Account No</label>
            <input type="text"></input>
            <button> View Document</button>

            <label>No of Leaves</label>
            <input type="text"></input>
            <input type="text"></input>

            <label>Number of Book</label>
            <input type="number"></input>
            <label> </label>
            <label>Delivery Channel</label>
            <input type="text"></input>
            <select>
              <option></option>
              <option></option>
            </select>
          </form>
        </div>
      </div>
      </div>
      <div className="side-contianer"> 
      <form>
            <label> Source Branch</label>
            <input type="text" id="side-input"></input><br></br><br></br>
            

            <label>Avaliable Balance</label>
            <input type="text" id="side-input"></input><br></br><br></br>

            <label>Ledger Balance</label>
            <input type="text" id="side-input"></input><br></br><br></br>

            <label>Avaliable Limit</label>
            <input type="text" id="side-input"></input><br></br><br></br>

            <label>Account Status</label>
            <input type="text" id="side-input"></input>
          

           
             
          </form>

      </div>
      </div>

      <div className="table">
        <table>
          <thead>
            <th>Chg. Code</th>
            <th> Fee Account</th>
            <th>Fee Account Discription</th>
            <th>Fee Description</th>
            <th>Fee Amount Per Book</th>
            <th>Currency</th>
            <th></th>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              {/* <td>
              <form>
                <label>Fee Amount Per Book</label>
                <input type="text" disabled></input>
                <label> Total fee Amount</label>
                <input type="text" disabled ></input>
                </form>
                </td> */}
            </tr>
             
          </tbody>
        </table>
      </div>

      <div className="main-header">
        <h4><input></input></h4>
      </div>

      <div className="main-header">
        <h5>All Mandatory Fielsd Labels are display in blue</h5>
      </div>
     
    </div>
   
      
      

      </div>
     
    
      
    


    

   
    
  );
}
export default App;