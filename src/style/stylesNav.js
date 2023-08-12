import Stylesheet from "reactjs-stylesheet";
const styles = Stylesheet.create({
	navbarContainer: {
		borderColor:"black",
		backgroundColor:"",
        boxShadow:"0 2px 4px 0 rgba(0,0,0,.2)",
       width:"100%"
    },
    navbarPromo:{
        textAlign:'center',
        height:"40px",
        display:"flex",
        alignContent:"center",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        fontFamily:"'Montserrat', sans-serif",
        boxShadow:"0 2px 4px 0 rgba(0,0,0,.2)",
        marginBottom:"5px",
        backgroundColor:'black',
        color:"white"

    },
    navbarHeader:{
       
        height:"110px",
        display:"flex",
        justifyContent:" space-between",
        alignItems: "center",
    },
	navbarLogo:{
        width:"30px",
        flex:"1",
        textAlign:"center",
        display:"flex",
        flexDirection:"column",
        alignItems:"center"

    },
    ImageLogo:{
        width:"85px",
        flex:"1",
        textAlign:"center",
        padding:"0",
        marginLeft:"100px",
    },
    navbarHeaderProfile:{
        display:"flex",
        marginLeft:"auto",
       
    },
    iconNav:{
        display:"flex",
        margin:"10px",

       
    },
    navbarText:{
        height:"50px",
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center",
        padding:"0",
        listStyle:"none"
    },
    navbarTitle:{
       textAlign:"center",
       fontFamily:"'Quicksand', sans-serif",
       cursor:"pointer"
    },
    navLi:{
        textDecoration:"none",
        color:"black",
        listStyle:"none",
        margin: "0 15px"
    },
    navUl:{
        display:"flex",
        justifyContent:"center",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-around",
        width:"100%"
    }
});
export default styles;