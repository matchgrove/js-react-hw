import React from 'react';


class OneComment extends React.Component{
  render(){
  	if(this.props.newcomment){
  		var newcomments=
  		<div className="box box2 shawdow1">
  		<h3>{this.props.newcomment}</h3>
  	</div>;
  } else {
  	var comments=
  	<div className="box box1 shawdow1">
  		<h3>{this.props.comment}</h3>
  	</div>


  }


  	
    return (
      <div className="wrap"> 
      {newcomments}
      {comments}
      </div>

      
    )
  }
}

export default OneComment;
