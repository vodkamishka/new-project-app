import React from "react";
import DatePicker from "react-datepicker";
import './input-date.css';
import "react-datepicker/dist/react-datepicker.css";


 
export default class Picker extends React.Component {
  /*constructor(props) {
    super(props);
    this.state = {
      startDate: new Date()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }*/
 
  render() {
      const {startDate, handleStartDateChange} = this.props;
      
    return (
      <DatePicker
      selected={startDate}
      onChange={handleStartDateChange}
     
      dateFormat="d MMM yyyy"
      
      />
    );
  }
}
