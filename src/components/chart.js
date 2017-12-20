import _ from 'lodash';
import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

// const average = (data) => {
//   return _.round(_.sum(data)/data.length);
// };

// export default (props) => {
//   return(
//     <div>
//       <Sparklines height={80} width={140} data={props.data}>
//         <SparklinesLine color={props.color} />
//         <SparklinesReferenceLine type='avg' />
//       </Sparklines>
//       <div>{average(props.data)} {props.units}</div>
//     </div>
//   );
// }


class Chart extends React.Component {
  average(data){
    return _.round(_.sum(data)/data.length);
  }

  render(){
    return(
      <div>
        <Sparklines height={80} width={140} data={this.props.data}>
          <SparklinesLine color={this.props.color} />
          <SparklinesReferenceLine type='avg' />
        </Sparklines>
        <div>{this.average(this.props.data)} {this.props.units}</div>
      </div>
    );
  }
}

export default Chart;
