import Stylesheet from "reactjs-stylesheet";
const styles = Stylesheet.create({
	newContainer: {
		padding:5,
        

    },
	TitreContainer:{
		fontFamily:"Montserrat,sans-serif",
		textAlign:"center",
		paddingTop:"40px",
		paddingBottom:"40px",
		transition:"color .2s ease-in-out",
		letterSpacing:".1em",
		textTransform:"uppercase",
		fontSize:"25px"
	},
	btnDecouvrir:{
		width:"100%",
		margin:"5px"
	},
	gridContainer:{
		display:"flex",
	
		alignItems:"center",
		justifyContent:"center"
	},
	buttonContainer:{
		display:"flex",
		paddingTop:"25px",
		paddingBottom:"30px",
		alignItems:"center",
		justifyContent:"center"

	}
});
export default styles;