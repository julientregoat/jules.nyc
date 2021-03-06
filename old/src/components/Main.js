import React from 'react'
import MediumPosts from './MediumPosts'
import Resume from './Resume'
import { Grid } from 'semantic-ui-react'

export default class Main extends React.Component {


  render(){
    return (
      <Grid className="pages" columns={16} stackable>
        <Grid.Row>
        	<Grid.Column width={6}>
        		<MediumPosts/>
        	</Grid.Column>
        	<Grid.Column width={10}>
	        	<Resume/>
        	</Grid.Column>
      	</Grid.Row>
      </Grid>
    )
  }
}
