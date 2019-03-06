import React, { Component } from 'react';
import './App.css';
import Remarkable from 'remarkable';

class App extends Component {
      
    constructor(){
        super();
        
        this.state={
            name:"",
            number:"",
            phoneBook:[
              ],
            showForm:false
           }
        
        this.handleInputChange1=(event)=>{
            this.setState({
                name:event.target.value
            })
        }
        this.getRawMarkup=()=> {
    const md = new Remarkable();
    return { __html: md.render(this.state.name) };
        }
         this.getRawMarkup2=()=> {
    const md = new Remarkable();
    return { __html: md.render(this.state.number) };
        }
        this.handleInputChange2=(event)=>{
            this.setState({
                number:event.target.value
            })
        }
        this.addContact=()=>{
            
            const newContact={
                name:this.state.name,
                number:this.state.number         
            }
            
            if(this.state.name==="" || this.state.number==="")
            {
                alert('Both fields are required.');
                return;
            }
                 
            this.setState( (prevState)=>({
                phoneBook:prevState.phoneBook.concat(newContact),
                 name:"",
                number:""
            })) 
                       
        }
        
        this.toggleShowForm=()=>{ 
            this.setState(
                { showForm: !this.state.showForm}
            )
        }
                               
        this.handleDelete=(value)=>{
          var newbook= this.state.phoneBook.filter((vphoneBook)=>{
            return vphoneBook.name!=value
          })
         console.log(newbook);
          this.setState({phoneBook:newbook})
        }
    }


        

 

  render() {
      
      let form=null;
      if(this.state.showForm)
      {
          form=
             (  
              <div className="container">
              <form className="form">
              <div class="form-group">
                <input type="text" id="markdown-content" className="form-control" onChange={this.handleInputChange1} value={this.state.name} placeHolder="Name" />
              </div>
              <div class="form-group">
                <input type="text" className="form-control" onChange={this.handleInputChange2} value={this.state.number} placeHolder="Number"/>
              </div>
              <button type="button" className="btn btn-primary margin" onClick={this.addContact}>Save</button>
            </form>
            <div className="content" dangerouslySetInnerHTML={this.getRawMarkup()} />
            <div className="content" dangerouslySetInnerHTML={this.getRawMarkup2()} />
              </div>
          )
      }
           
    return (
      <div className="container-fluid">
      <div className="row">
      <div className="col-md-4"></div>
        
        
        <div className="col-md-4 App1">
        <div className="text-center">
        <h1 >Phone Book</h1>
        <button class="btn btn-primary a" onClick={this.toggleShowForm}>Add Contact</button>
         <br/>   
        {form}
                {this.state.phoneBook.map(contact =>
           <div className="contacts ">
           <span className="sp">{contact.name}</span>
           <span className="sp1">{contact.number}</span>
           <button className="btn btn-primary k" onClick={this.handleDelete.bind(null,contact.name)}>X</button>
           <br/>
           
          </div>
        )}
        </div>
        </div>
        
        
     <div className="col-md-4"></div>
     </div>
     </div>
    );
  }
}

export default App;