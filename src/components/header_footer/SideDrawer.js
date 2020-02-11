import React from 'react';
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'


const SideDrawer = (props) => {
	return (
		<Drawer
			anchor="right"
			open={props.open}
			onClose={() => props.onClose(false)}
		>
			<List component="nav">
				<ListItem button onClick={()=> console.log('11')}>
					Event starts in
				</ListItem>
				<ListItem button onClick={()=> console.log('12')}>
					Venue NFO
				</ListItem>
				<ListItem button onClick={()=> console.log('13')}>
					Highlights
				</ListItem>
				<ListItem button onClick={()=> console.log('14')}>
					Pricing
				</ListItem>
				<ListItem button onClick={()=> console.log('14')}>
					Location
				</ListItem>
			</List>
		</Drawer>
	);
};

export default SideDrawer;