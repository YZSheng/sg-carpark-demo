import React from "react";
import axios from "axios";

class CarparkData extends React.Component {
  state = {
    data: null
  };
  onClick = () => {
    console.log("Loading...");
    axios
      .get("https://api.data.gov.sg/v1/transport/carpark-availability")
      .then(response => {
        console.log(response.data);
        this.setState({
          data: response.data
        });
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.onClick}>Load data</button>
        <table>
          <thead>
            <tr>
              <td>Carpark Number</td>
              <td>Lot Type</td>
              <td>Lots Available</td>
              <td>Total Lots</td>
            </tr>
          </thead>
          <tbody>
            {this.state.data && this.state.data.items[0].carpark_data.map(item => {
              return (
                <tr key={item.carpark_number + item.carpark_info[0].lot_type}>
                  <td>{item.carpark_number}</td>
                  <td>{item.carpark_info[0].lot_type}</td>
                  <td>{item.carpark_info[0].lots_available}</td>
                  <td>{item.carpark_info[0].total_lots}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CarparkData;
