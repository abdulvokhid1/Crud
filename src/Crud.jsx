import { render } from "@testing-library/react";
import react, {Component} from "react";
import { students } from "./mock";
class Crud extends Component{
    constructor(props){
        super (props);
        this.state = {
            data: students,

        };
    };
    render(){
        const onDelete = (id)=>{
            console.log(id);
            const res = this.state.data.filter((value)=>value.id !== id);
             this.setState({ data : res})
        }
        return(
            <div>
                <table border ={1}>
                    <thead>

                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map((value)=>{
                                return(
                                <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.status}</td>
                                <td>
                                    <button onClick={()=> onDelete (value.id)}>delete</button>
                                </td>
                             </tr>)
                            })
                        }
                    </tbody>
                </table>
            </div>
        );
    };
    
};
export default Crud